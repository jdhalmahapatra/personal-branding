
import React, { useEffect } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import type { Post } from '../../data/useCasesData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostDetailProps {
  post: Post;
  onClose: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-slate-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <h1 className="text-4xl font-bold text-white mb-4 font-display">{post.title}</h1>

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
          
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
