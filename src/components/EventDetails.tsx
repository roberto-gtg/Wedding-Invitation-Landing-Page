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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          {/* Calendar Card */}
          <Fade direction="up" duration={1000} delay={100} triggerOnce={true} fraction={0.3}>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5efe9] flex items-center justify-center mb-4">
                  <CalendarIcon className="text-[#d4b8aa]" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">Fecha</h3>
              <p className="text-gray-600">20 de septiembre de 2025</p>
              <p className="text-gray-600 text-sm mt-1">Ceremonia: 12:00 PM</p>
              <p className="text-gray-600 text-sm">Recepción: 4:00 PM</p>
            </div>
          </Fade>
          
          {/* Church Card */}
          <Fade direction="up" duration={1000} delay={200} triggerOnce={true} fraction={0.3}>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5efe9] flex items-center justify-center mb-4">
                  <Church className="text-[#d4b8aa]" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Ceremonia Religiosa
              </h3>
              <p className="text-gray-600 text-sm">Parroquia El Señor de la Misericordia</p>
              
              <a 
                href="https://maps.app.goo.gl/qyRDUQFFNJFyPW8K6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300"
              >
                <div className="flex items-center justify-center">
                  <MapPinIcon size={16} className="mr-2" />
                  Ver Ubicación
                </div>
              </a>
            </div>
          </Fade>
          
          {/* Reception Card */}
          <Fade direction="up" duration={1000} delay={300} triggerOnce={true} fraction={0.3}>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5efe9] flex items-center justify-center mb-4">
                  <PartyPopper className="text-[#d4b8aa]" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Recepción
              </h3>
              <p className="text-gray-600 text-sm">Ikaan Villa Spa</p>
              <p className="text-gray-600 text-sm">Carretera Montemorelos - Allende km 218</p>
              <a 
                href="https://maps.app.goo.gl/FD47QoECBWpKH77J9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300"
              >
                <div className="flex items-center justify-center">
                  <MapPinIcon size={16} className="mr-2" />
                  Ver Ubicación
                </div>
              </a>
            </div>
          </Fade>
          
          {/* Dress Code Card */}
          <Fade direction="up" duration={1000} delay={400} triggerOnce={true} fraction={0.3}>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5efe9] flex items-center justify-center mb-4">
                  <GlassesIcon className="text-[#d4b8aa]" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Código de Vestimenta
              </h3>
              <p className="text-gray-600 text-sm">Hombres: Formal</p>
              <p className="text-gray-600 text-sm">Mujeres: Vestido no negro</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};