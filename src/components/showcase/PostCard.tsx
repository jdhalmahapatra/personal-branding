
import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../../data/useCasesData';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 block cursor-pointer"
      role="article"
    >
      <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-primary-400 transition-colors">
        {post.title}
      </h3>
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>{post.date}</span>
        </div>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <div key={tag} className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
            <Tag size={12} />
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <div className="font-semibold text-primary-400 group-hover:text-white flex items-center gap-2 transition-colors">
        Read More
        <ArrowRight
          size={16}
          className="transform transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};

export default PostCard;
