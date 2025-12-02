
import React from 'react';

const SkeletonCard: React.FC = () => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
    <div className="h-8 w-3/4 mb-4 rounded animate-pulse bg-slate-700" />
    <div className="h-4 w-1/2 mb-6 rounded animate-pulse bg-slate-700" />
    <div className="h-4 w-full mb-2 rounded animate-pulse bg-slate-700" />
    <div className="h-4 w-5/6 mb-8 rounded animate-pulse bg-slate-700" />
    <div className="flex flex-wrap gap-2 mb-8">
      <div className="h-6 w-1/4 rounded-full animate-pulse bg-slate-700" />
      <div className="h-6 w-1/3 rounded-full animate-pulse bg-slate-700" />
    </div>
    <div className="h-6 w-1/4 rounded animate-pulse bg-slate-700" />
  </div>
);

const UseCasesSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(4)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default UseCasesSkeleton;
