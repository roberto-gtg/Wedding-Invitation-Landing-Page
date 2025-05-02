import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Church, MapPinIcon, CalendarIcon, GlassesIcon, PartyPopper } from 'lucide-react';

export const EventDetails = () => {
  return (
    <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
            Acompañanos en nuestro día especial
          </h2>
        </Fade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Calendar Card */}
          <Fade direction="up" duration={1000} delay={100} triggerOnce={true} fraction={0.3}>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                  <CalendarIcon className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Fecha y Horarios</h3>
              <p className="text-gray-600">Septiembre 20, 2025</p>
              <p className="text-gray-600">Iglesia: 12:00 PM</p>
              <p className="text-gray-600">Recepción: 4:00 PM</p>
            </div>
          </Fade>
          
          {/* Church Card */}
          <Fade direction="up" duration={1000} delay={200} triggerOnce={true} fraction={0.3}>
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                  <Church className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Iglesia
              </h3>
              <p className="text-gray-600">Parroquia El Señor de la Misericordia</p>
              
              {/* Spacer to push button to bottom */}
              <div className="flex-grow"></div>
              
              {/* Map Button */}
              <a 
                href="https://maps.app.goo.gl/7i58KFD1cCg1xT5S8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 inline-block px-4 py-2 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300 mx-auto"
              >
                <div className="flex items-center justify-center">
                  <MapPinIcon size={16} className="mr-2" />
                  Abrir Mapa
                </div>
              </a>
            </div>
          </Fade>
          
          {/* Reception Card */}
          <Fade direction="up" duration={1000} delay={300} triggerOnce={true} fraction={0.3}>
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                  <PartyPopper className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Recepción
              </h3>
              <p className="text-gray-600">Ikaan</p>
              
              {/* Spacer to push button to bottom */}
              <div className="flex-grow"></div>
              
              {/* Map Button */}
              <a 
                href="https://maps.app.goo.gl/hJ7e3chDhHQ5Puep6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 inline-block px-4 py-2 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300 mx-auto"
              >
                <div className="flex items-center justify-center">
                  <MapPinIcon size={16} className="mr-2" />
                  Abrir Mapa
                </div>
              </a>
            </div>
          </Fade>
          
          {/* Dress Code Card */}
          <Fade direction="up" duration={1000} delay={400} triggerOnce={true} fraction={0.3}>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                  <GlassesIcon className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Vestimenta
              </h3>
              <p className="text-gray-600">Vestido de gala</p>
              <p className="text-gray-600">Traje formal</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};