import React from 'react';
import { Fade } from "react-awesome-reveal";
import { ExternalLink } from 'lucide-react';

export const RsvpForm = () => {
  return (
    <div className="w-full py-24 px-4 bg-[#f5efe9]">
      <div className="max-w-3xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-gray-800">
            RSVP
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Favor de responder antes de Junio 1, 2025
          </p>
        </Fade>
        
        <Fade direction="up" duration={1000} delay={100} triggerOnce={true} fraction={0.2}>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-700 mb-8">
              Para confirmar tu asistencia, por favor completa el siguiente formulario:
            </p>
            <a 
              href="https://forms.gle/DFaJfwMiwsX29GG68" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-3 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300"
            >
              Formulario RSVP
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};