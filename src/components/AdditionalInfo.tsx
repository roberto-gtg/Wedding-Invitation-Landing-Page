import React from 'react';
import { Fade } from "react-awesome-reveal";
import { BedDoubleIcon, GiftIcon, CarIcon } from 'lucide-react';

export const AdditionalInfo = () => {
  return (
    <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
            Información Adicional
          </h2>
        </Fade>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:grid-rows-1 auto-rows-fr">
          {/* Accommodation Card */}
          <Fade direction="up" duration={1000} delay={100} triggerOnce={true} fraction={0.3}>
            <div className="bg-[#f5efe9] p-8 rounded-lg text-center h-full flex flex-col md:min-h-[400px]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <BedDoubleIcon className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                Hospedaje
              </h3>
              <div className="flex-grow">
                <p className="text-gray-600 mb-4">
                  Hemos reservado villas y recamaras en Ikaan a un precio especial para nuestros invitados.
                </p>
                <p className="text-gray-600 mb-2">Booking code: KATTROB2025</p>
                <p className="text-gray-600">Phone: (908) 680-4927</p>
              </div>
            </div>
          </Fade>
          
          {/* Gift Registry Card */}
          <Fade direction="up" duration={1000} delay={200} triggerOnce={true} fraction={0.3}>
            <div className="bg-[#f5efe9] p-8 rounded-lg text-center h-full flex flex-col md:min-h-[400px]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <GiftIcon className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Mesa de Regalos</h3>
              <div className="flex-grow">
                <p className="text-gray-600 mb-6">
                  Tu presencia en nuestra boda es el mejor regalo para nosotros. Si gustas honrarnos con un detalle, nos hemos registrado en:
                </p>
              </div>
              <a 
                href="https://www.amazon.com.mx/wedding/registry/2E0W8S4YNZTC4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-[#d4b8aa] border border-[#d4b8aa] rounded-md hover:bg-[#d4b8aa] hover:text-white transition-colors duration-300 w-full mt-auto"
              >
                Amazon
              </a>
            </div>
          </Fade>
          
          {/* Transportation Card */}
          <Fade direction="up" duration={1000} delay={300} triggerOnce={true} fraction={0.3}>
            <div className="bg-[#f5efe9] p-8 rounded-lg text-center h-full flex flex-col md:min-h-[400px]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <CarIcon className="text-[#d4b8aa]" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                Transportación
              </h3>
              <div className="flex-grow">
                <p className="text-gray-600 mb-4">
                  Servicio de transportación complementario entre Ikaan y Pueblo Serena.
                </p>
                <p className="text-gray-600 font-medium">Horario de salida:</p>
                <p className="text-gray-600 mb-2">1:30 PM - 2:00 PM</p>
                <p className="text-gray-600 font-medium">Horario de regreso:</p>
                <p className="text-gray-600">11:30 PM - 12:00 AM</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};