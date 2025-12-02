
import React, { useState, useEffect, useMemo } from 'react';
import { useCasesData } from '../../data/useCasesData';
import type { Post } from '../../data/useCasesData';
import PostCard from '../../components/showcase/PostCard';
import PostDetail from '../../components/showcase/PostDetail';
import UseCasesSkeleton from '../../components/showcase/skeletons/UseCasesSkeleton';
import { Search, Tag } from 'lucide-react';

const UseCases: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const postsPerPage = 6;

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    useCasesData.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    return useCasesData
      .filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(post => !selectedTag || post.tags.includes(selectedTag));
  }, [searchTerm, selectedTag]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const newPosts = filteredPosts.slice(0, postsPerPage);
      setPosts(newPosts);
      setHasMore(filteredPosts.length > postsPerPage);
      setPage(1);
      setLoading(false);
    }, 500);
  }, [filteredPosts]);

  const loadMorePosts = () => {
    const nextPage = page + 1;
    const startIndex = posts.length;
    const endIndex = nextPage * postsPerPage;
    const newPosts = filteredPosts.slice(startIndex, endIndex);

    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    setPage(nextPage);
    setHasMore(filteredPosts.length > endIndex);
  };

  const openPost = (post: Post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full border transition-colors ${
              !selectedTag
                ? 'bg-primary-500 text-white border-primary-500'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full border transition-colors ${
                selectedTag === tag
                  ? 'bg-primary-500 text-white border-primary-500'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Tag size={12} />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <UseCasesSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} onClick={() => openPost(post)} />
            ))}
          </div>
          {posts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold">No posts found</h3>
              <p className="text-slate-400 mt-2">Try adjusting your search or filter.</p>
            </div>
          )}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMorePosts}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {selectedPost && <PostDetail post={selectedPost} onClose={closePost} />}
    </div>
  );
};

export default UseCases;
