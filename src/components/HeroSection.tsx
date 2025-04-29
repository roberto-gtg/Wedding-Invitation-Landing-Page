import React from 'react';
import { HeartIcon } from 'lucide-react';
export const HeroSection = () => {
  return <div className="w-full min-h-screen bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center">
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center px-4">
        <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-4">
          We are getting married
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-2">
          Emma & James
        </h1>
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-12 bg-white"></div>
          <HeartIcon className="mx-4" size={24} />
          <div className="h-px w-12 bg-white"></div>
        </div>
        <p className="text-xl md:text-2xl font-light mb-8">August 18, 2024</p>
        <p className="text-lg md:text-xl font-light">
          Rosewood Gardens • New York
        </p>
        <button className="mt-12 px-8 py-3 border-2 border-white hover:bg-white hover:bg-opacity-20 transition-all duration-300 text-white font-light tracking-wider">
          SAVE THE DATE
        </button>
      </div>
    </div>;
};