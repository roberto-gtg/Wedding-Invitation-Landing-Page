import React, { useEffect, useState } from 'react';
import { HeartIcon, MenuIcon, XIcon } from 'lucide-react';
export const HeroSection = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <div className="w-full min-h-screen bg-[url('https://uploadthingy.s3.us-west-1.amazonaws.com/qLXwM3wqj9cRsaskcaZoPm/RobertoCompletas%2828%29.jpg')] bg-cover bg-center">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-sm' : 'bg-transparent'}`}>
        {/* Desktop Navigation */}
        <div className="max-w-6xl mx-auto px-4 py-4 hidden md:flex items-center justify-between">
          <img src="/logo_knr_white.png" alt="K&R Logo" className="h-12 w-auto" />
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
        {/* Mobile Navigation */}
        <div className="md:hidden px-4 py-4 flex items-center justify-between">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 -ml-2">
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <img src="/logo_knr_white.png" alt="K&R Logo" className="h-10 w-auto" />
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden">
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-8 text-center">
                <li>
                  <button onClick={() => scrollToSection('details')} className="text-white text-xl hover:text-[#d4b8aa] transition-colors">
                    Detalles
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('rsvp')} className="text-white text-xl hover:text-[#d4b8aa] transition-colors">
                    RSVP
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('timeline')} className="text-white text-xl hover:text-[#d4b8aa] transition-colors">
                    Horario
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-white text-xl hover:text-[#d4b8aa] transition-colors">
                    Galería
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('info')} className="text-white text-xl hover:text-[#d4b8aa] transition-colors">
                    Información
                  </button>
                </li>
              </ul>
            </div>
          </div>}
      </nav>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center px-4">
        <p className="text-base md:text-xl font-light tracking-widest uppercase mb-4">
          Celebrando nuestro matrimonio
        </p>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif mb-2">
          Kattia & Roberto
        </h1>
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-8 md:w-12 bg-white"></div>
          <HeartIcon className="mx-3 md:mx-4" size={20} />
          <div className="h-px w-8 md:w-12 bg-white"></div>
        </div>
        <p className="text-lg md:text-2xl font-light mb-6 md:mb-8">
          Septiembre 20, 2025
        </p>
        <p className="text-base md:text-xl font-light">
          Ikaan • Nuevo León • México
        </p>
        <button onClick={() => scrollToSection('rsvp')} className="mt-8 md:mt-12 px-6 md:px-8 py-3 border-2 border-white hover:bg-white hover:bg-opacity-20 transition-all duration-300 text-white font-light tracking-wider text-sm md:text-base">
          RSVP
        </button>
        <div className="mt-6 md:mt-8 flex flex-col items-center">
          <p className="text-2xl md:text-4xl font-serif mb-2">{daysLeft}</p>
          <p className="text-xs md:text-base font-light tracking-wider uppercase">
            Días para nuestra boda
          </p>
        </div>
      </div>
    </div>;
};