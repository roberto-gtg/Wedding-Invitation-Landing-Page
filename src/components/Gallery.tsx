import React, { useState, useEffect, useRef } from 'react';
import { Fade } from "react-awesome-reveal";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// Construct full URLs for photos using the base URL from Vite
const baseImageUrl = import.meta.env.BASE_URL;
const photoFilenames = [
  '32.jpg',
  '33.jpg',
  '34.jpg',
  '35.jpg',
  '36.jpg',
  '37.jpg',
  '38.jpg',
  '39.jpg',
  '40.jpg',
  '41.jpg',
  '42.jpg',
  '43.jpg',
  '44.jpg',
  '44Civil_KatiaRoberto.jpg',
  '45.jpg',
  '46.jpg',
  '47.jpg',
  '48.JPG',
  '49.JPG',
  '50.jpg',
  '51.jpg',
  '52.jpeg',
  '54.jpg',
  '55.jpg',
  '56.jpg',
  '57.jpg',
  '58.JPG',
  '59.jpg',
  '60.jpg',
  '61.jpg',
  '62.jpg',
  '63.jpg',
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
  // Lightbox state
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Calculate how many images to show per slide based on screen size
  const getImagesPerSlide = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1536) return 6;          // 6 images on very large (2xl) screens
      if (width >= 1280) return 5;          // 5 images on xl
      if (width >= 1024) return 4;          // 4 images on lg
      if (width >= 640)  return 3;          // 3 images on md
      if (width >= 480)  return 2;          // 2 images on sm
      return 1;                             // 1 image on very small devices
    }
    return 3;                               // Fallback
  };
  
  const [imagesPerSlide, setImagesPerSlide] = useState(getImagesPerSlide());
  const totalSlides = Math.ceil(photos.length / imagesPerSlide);

  // Handle window resize to adjust images per slide
  useEffect(() => {
    const handleResize = () => {
      const newImagesPerSlide = getImagesPerSlide();
      setImagesPerSlide(newImagesPerSlide);
      // Adjust current slide if needed to prevent showing empty space
      const newTotalSlides = Math.ceil(photos.length / newImagesPerSlide);
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(Math.max(0, newTotalSlides - 1));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide, photos.length]);

  // Lightbox functions
  const openLightbox = (index: number) => {
    console.log('Opening lightbox for image index:', index); // Debug log
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    console.log('Closing lightbox'); // Debug log
    setIsLightboxOpen(false);
    setCurrentImageIndex(null);
  };

  const showNextImageInLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex! + 1) % photos.length);
    }
  };

  const showPrevImageInLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex! - 1 + photos.length) % photos.length);
    }
  };

  // Carousel navigation functions
  const nextSlide = () => {
    if (isTransitioning) return;
    console.log('Moving to next slide'); // Debug log
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    console.log('Moving to previous slide'); // Debug log
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    console.log('Swipe detected:', { distance, isLeftSwipe, isRightSwipe }); // Debug log

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation for lightbox
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
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50"
            aria-label="Previous images"
          >
            <ChevronLeftIcon size={24} className="text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50"
            aria-label="Next images"
          >
            <ChevronRightIcon size={24} className="text-gray-800" />
          </button>

          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex gap-2 md:gap-4"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {photos
                    .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                    .map((photo, photoIndex) => {
                      const globalIndex = slideIndex * imagesPerSlide + photoIndex;
                      return (
                        <Fade 
                          key={globalIndex} 
                          direction="up" 
                          duration={1000} 
                          triggerOnce={true}
                          fraction={0.3}
                          className="flex-1"
                        >
                          <div 
                            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-80 md:h-[30rem] lg:h-[36rem]"
                            onClick={() => openLightbox(globalIndex)}
                          >
                            <img 
                              src={photo} 
                              alt={`Wedding memory ${globalIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                              loading="lazy" 
                            />
                          </div>
                        </Fade>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setCurrentSlide(index);
                    setIsTransitioning(true);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gray-800 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && currentImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000] p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox} 
            className="absolute top-4 right-4 text-white text-3xl z-[1002]"
            aria-label="Close lightbox"
          >
            <XIcon size={32} />
          </button>

          <button 
            onClick={showPrevImageInLightbox} 
            className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-[1001]"
            aria-label="Previous image"
          >
            <ChevronLeftIcon size={32} />
          </button>

          <button 
            onClick={showNextImageInLightbox} 
            className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-[1001]"
            aria-label="Next image"
          >
            <ChevronRightIcon size={32} />
          </button>

          <div 
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={photos[currentImageIndex]} 
              alt={`Wedding memory ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};