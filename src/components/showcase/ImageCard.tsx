
import React from 'react';
import { Image, Video } from '@imagekit/react';
import { Play } from 'lucide-react';
import type { GalleryImage } from '../../data/galleryData';

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const isVideo = (path: string): boolean => /\.(mp4|webm|mov|avi)$/i.test(path);

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const isVideoFile = isVideo(image.imagePath);

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-slate-900 min-h-64"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${image.title}`}
    >
      {isVideoFile ? (
        <Video
          src={image.imagePath}
          controls
          preload="metadata"
          className="w-full h-auto max-h-96 object-contain"
        />
      ) : (
        <Image
          src={image.imagePath}
          alt={image.alt}
          loading="lazy"
          responsive={false}
          className="w-full h-auto max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      )}
      
      {isVideoFile && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
          <div className="bg-primary-600 p-4 rounded-full group-hover:scale-110 transition-transform">
            <Play size={24} className="text-white fill-white" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white text-lg font-bold">{image.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {image.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
