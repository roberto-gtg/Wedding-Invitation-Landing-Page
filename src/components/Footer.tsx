import React from 'react';
import { Fade } from "react-awesome-reveal";
import { HeartIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#f5efe9]">
      <div className="max-w-4xl mx-auto text-center">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 cursive-title">
            Kattia & Roberto
          </h2>
        </Fade>
        
        <Fade direction="up" duration={1000} delay={100} triggerOnce={true}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#d4b8aa]"></div>
            <HeartIcon className="mx-4 text-[#d4b8aa]" size={24} />
            <div className="h-px w-12 bg-[#d4b8aa]"></div>
          </div>
        </Fade>
        
        <Fade direction="up" duration={1000} delay={200} triggerOnce={true}>
          <p className="text-gray-600 mb-8">
            Nos emociona celebrar este día con ustedes!
          </p>
        </Fade>
        
        <Fade direction="up" duration={1000} delay={300} triggerOnce={true}>
          <div className="mt-12 text-sm text-gray-500">
            <p>ℵ₀</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};