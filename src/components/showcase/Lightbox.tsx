
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { Image, Video } from '@imagekit/react';
import type { GalleryImage } from '../../data/galleryData';

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const isVideo = (path: string): boolean => /\.(mp4|webm|mov|avi)$/i.test(path);

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onPrev, onNext }) => {
  const isVideoFile = isVideo(image.imagePath);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-slate-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 -right-3 text-white hover:text-primary-400 transition-colors z-50 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        <div className="relative md:w-2/3 flex items-center justify-center bg-black p-4">
          {isVideoFile ? (
            <Video
              src={image.imagePath}
              controls
              preload="metadata"
              className="max-w-full max-h-[80vh] h-auto w-auto object-contain"
            />
          ) : (
            <Image
              src={image.imagePath}
              alt={image.alt}
              responsive={false}
              className="max-w-full max-h-[80vh] h-auto w-auto object-contain"
            />
          )}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/60 transition-colors"
            aria-label="Previous media"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/60 transition-colors"
            aria-label="Next media"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="md:w-1/3 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-2">{image.title}</h2>
          <div className="text-sm text-slate-400 mb-4">
            <p><strong>Date:</strong> {image.date}</p>
            {image.location && <p><strong>Location:</strong> {image.location}</p>}
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">{image.alt}</p>
          
          {image.source && (
            <div className="mb-6">
              {image.source.type === 'instagram' && image.source.url ? (
                <a
                  href={image.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-primary-400 border border-primary-500/50 rounded-lg hover:bg-primary-500/10 hover:border-primary-400 transition-all cursor-pointer"
                >
                  <Instagram size={18} />
                  <span>Source: Instagram</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-500 border border-slate-600 rounded-lg bg-slate-900/50 cursor-not-allowed">
                  <span>Source: Direct</span>
                </div>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {image.tags.map((tag) => (
              <span key={tag} className="text-xs text-primary-400 bg-primary-900/50 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
