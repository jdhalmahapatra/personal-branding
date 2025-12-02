
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Gallery from './Gallery';
import UseCases from './UseCases';

const Showcase: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeView, setActiveView] = useState<'gallery' | 'usecases'>('gallery');

  useEffect(() => {
    const view = searchParams.get('view');
    if (view === 'usecases') {
      setActiveView('usecases');
    } else {
      setActiveView('gallery');
    }
  }, [searchParams]);

  const handleToggle = (view: 'gallery' | 'usecases') => {
    setActiveView(view);
    setSearchParams({ view });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold font-display text-white mb-4">Showcase</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">A collection of my curated projects, media gallery, and in-depth case studies showcasing architectural excellence and innovative solutions.</p>
        </header>

        <div className="flex justify-center mb-12">
          <div className="glass-card p-1.5 rounded-full flex items-center sticky top-24 z-40">
            <button
              onClick={() => handleToggle('gallery')}
              aria-pressed={activeView === 'gallery'}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeView === 'gallery' 
                  ? 'bg-primary-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleToggle('usecases')}
              aria-pressed={activeView === 'usecases'}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeView === 'usecases' 
                  ? 'bg-primary-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Use Cases
            </button>
          </div>
        </div>

        <main className="animate-fade-in">
          {activeView === 'gallery' ? <Gallery /> : <UseCases />}
        </main>
      </div>
    </div>
  );
};

export default Showcase;
