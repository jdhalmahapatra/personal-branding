
import React, { useState, useEffect } from 'react';
import { galleryData } from '../../data/galleryData';
import type { GalleryImage } from '../../data/galleryData';
import ImageCard from '../../components/showcase/ImageCard';
import Lightbox from '../../components/showcase/Lightbox';
import GallerySkeleton from '../../components/showcase/skeletons/GallerySkeleton';

const Gallery: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const imagesPerPage = 6;

  useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    setTimeout(() => {
      const newImages = galleryData.slice(0, imagesPerPage);
      setImages(newImages);
      setHasMore(galleryData.length > imagesPerPage);
      setLoading(false);
    }, 1000);
  }, []);

  const loadMoreImages = () => {
    const nextPage = page + 1;
    const startIndex = images.length;
    const endIndex = nextPage * imagesPerPage;
    const newImages = galleryData.slice(startIndex, endIndex);

    setImages((prevImages) => [...prevImages, ...newImages]);
    setPage(nextPage);
    setHasMore(galleryData.length > endIndex);
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! > 0 ? prevIndex! - 1 : images.length - 1));
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! < images.length - 1 ? prevIndex! + 1 : 0));
    }
  };

  if (loading) {
    return <GallerySkeleton />;
  }

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <ImageCard key={image.id} image={image} onClick={() => openLightbox(index)} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={loadMoreImages}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
          >
            Load More
          </button>
        </div>
      )}
      {lightboxOpen && selectedImageIndex !== null && (
        <Lightbox
          image={images[selectedImageIndex]}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Gallery;
