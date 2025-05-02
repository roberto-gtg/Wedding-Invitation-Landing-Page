import React, { useEffect, useState } from 'react';
import { HeartIcon } from 'lucide-react';
export const HeroSection = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const calculateDaysLeft = () => {
      const weddingDate = new Date('2025-09-20');
      const today = new Date();
      const timeDiff = weddingDate.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysLeft(daysDiff);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    calculateDaysLeft();
    window.addEventListener('scroll', handleScroll);
    const timer = setInterval(calculateDaysLeft, 86400000);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <div className="w-full min-h-screen bg-[url('https://uploadthingy.s3.us-west-1.amazonaws.com/qLXwM3wqj9cRsaskcaZoPm/RobertoCompletas%2828%29.jpg')] bg-cover bg-center">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8 text-white text-sm tracking-wider">
            <li>
              <button onClick={() => scrollToSection('details')} className="hover:text-[#d4b8aa] transition-colors">
                Detalles
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('rsvp')} className="hover:text-[#d4b8aa] transition-colors">
                RSVP
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('timeline')} className="hover:text-[#d4b8aa] transition-colors">
                Horario
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-[#d4b8aa] transition-colors">
                Galería
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('info')} className="hover:text-[#d4b8aa] transition-colors">
                Información
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center px-4">
        <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-4">
          Celebrando nuestro matrimonio
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-2">
          Kattia & Roberto
        </h1>
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-12 bg-white"></div>
          <HeartIcon className="mx-4" size={24} />
          <div className="h-px w-12 bg-white"></div>
        </div>
        <p className="text-xl md:text-2xl font-light mb-8">
          Septiembre 20, 2025
        </p>
        <p className="text-lg md:text-xl font-light">
          Ikaan • Nuevo León • México
        </p>
        <button onClick={() => scrollToSection('rsvp')} className="mt-12 px-8 py-3 border-2 border-white hover:bg-white hover:bg-opacity-20 transition-all duration-300 text-white font-light tracking-wider">
          RSVP
        </button>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-3xl md:text-4xl font-serif mb-2">{daysLeft}</p>
          <p className="text-sm md:text-base font-light tracking-wider uppercase">
            Días para nuestra boda
          </p>
        </div>
      </div>
    </div>;
};