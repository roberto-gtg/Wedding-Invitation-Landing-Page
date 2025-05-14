import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// Construct full URLs for photos using the base URL from Vite
const baseImageUrl = import.meta.env.BASE_URL;
const photoFilenames = [
  '3.jpeg',
  '6.JPG',
  '4.JPG',
  '1.JPG',
  '2.jpeg',
  '7.JPG',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
  '11.JPG',
  '12.jpeg',
  '13.jpeg',
  '14.jpg',
  '15.JPG',
  '16.jpeg',
  '17.jpg',
  '18.jpg',
  '19.JPG',
  '20.jpg',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpeg',
  '25.jpeg',
  '26.JPG',
  '27.jpeg',
  '28.jpeg',
  '29.JPG',
  '30.JPG',
  '31.JPG'
];

const photos = photoFilenames.map(filename => `${baseImageUrl}${filename.startsWith('/') ? filename.substring(1) : filename}`);

export const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImageIndex(null);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing lightbox if clicking on button within it
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex! + 1) % photos.length);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing lightbox if clicking on button within it
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex! - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      }
      if (e.key === 'ArrowRight') {
        if (currentImageIndex !== null) {
          setCurrentImageIndex((prevIndex) => (prevIndex! + 1) % photos.length);
        }
      }
      if (e.key === 'ArrowLeft') {
        if (currentImageIndex !== null) {
          setCurrentImageIndex((prevIndex) => (prevIndex! - 1 + photos.length) % photos.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, currentImageIndex]);

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-[#faf7f5]">
      <div className="max-w-6xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-4 md:mb-6 text-gray-800">
            Nuestra Vida
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Recuerdos de nuestro amor y los momentos que han llevado a este día
            especial.
          </p>
        </Fade>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <Fade 
              key={index} 
              direction="up" 
              duration={1000} 
              delay={index * 100} 
              triggerOnce={true}
              fraction={0.3}
            >
              <div 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={photo} 
                  alt={`Couple photo ${index + 1}`} 
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                />
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {isLightboxOpen && currentImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000] p-4"
          onClick={closeLightbox} // Close when clicking on the backdrop
        >
          <button 
            onClick={closeLightbox} 
            className="absolute top-4 right-4 text-white text-3xl z-[1002]"
            aria-label="Cerrar lightbox"
          >
            <XIcon size={32} />
          </button>

          <button 
            onClick={showPrevImage} 
            className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-[1001]"
            aria-label="Imagen anterior"
          >
            <ChevronLeftIcon size={32} />
          </button>

          <button 
            onClick={showNextImage} 
            className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-[1001]"
            aria-label="Siguiente imagen"
          >
            <ChevronRightIcon size={32} />
          </button>

          <div 
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing lightbox when clicking on image itself
          >
            <img 
              src={photos[currentImageIndex]} 
              alt={`Enlarged couple photo ${currentImageIndex + 1}`} 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};