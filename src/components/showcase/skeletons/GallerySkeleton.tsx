
import React from 'react';

const SkeletonCard: React.FC = () => (
  <div className="relative overflow-hidden rounded-lg shadow-md bg-slate-800">
    <div className="w-full h-60 animate-pulse bg-slate-700" />
    <div className="p-4">
      <div className="h-6 w-3/4 mb-2 rounded animate-pulse bg-slate-700" />
      <div className="flex flex-wrap gap-2 mt-2">
        <div className="h-4 w-1/4 rounded-full animate-pulse bg-slate-700" />
        <div className="h-4 w-1/3 rounded-full animate-pulse bg-slate-700" />
      </div>
    </div>
  </div>
);

const GallerySkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default GallerySkeleton;
