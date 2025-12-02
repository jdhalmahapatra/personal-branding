
import React, { useEffect, useState } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import type { Post } from '../../data/useCasesData';

interface PostDetailProps {
  post: Post;
  onClose: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onClose }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(post.contentPath);
        const html = await response.text();
        setContent(html);
      } catch (error) {
        console.error('Error loading blog content:', error);
        setContent('<p>Error loading content</p>');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [post.contentPath]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-slate-950 z-50 flex flex-col overflow-hidden animate-fade-in"
      aria-modal="true"
      role="dialog"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors z-50 p-2"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 pt-16 pb-12">
          <h1 className="text-4xl font-bold text-white mb-2 font-display">{post.title}</h1>

          <p className="text-sm text-slate-400 mb-6">Published by: {post.author}</p>

          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-1 text-xs font-mono text-primary-400 bg-primary-900/50 px-3 py-1 rounded-full border border-primary-500/20">
                <Tag size={12} />
                <span>{tag}</span>
              </div>
            ))}
          </div>
          
          {loading ? (
            <div className="py-8 text-center text-slate-400">
              <p>Loading content...</p>
            </div>
          ) : (
            <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
