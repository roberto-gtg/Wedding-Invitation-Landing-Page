import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Gift } from 'lucide-react';

export const GiftRegistry = () => {
  return (
    <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <div className="p-8 flex flex-col items-center bg-[#f5efe9] rounded-lg">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
                <Gift className="text-[#d4b8aa]" size={32} />
            </div>
            <h3 className="text-2xl font-medium mb-4 text-gray-800">
              Mesa de Regalos
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo especial, 
              puedes consultar nuestra mesa de regalos.
            </p>
            
            <a 
              href="https://www.amazon.com.mx/wedding/registry/2E0W8S4YNZTC4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300"
            >
              <div className="flex items-center justify-center">
                <Gift size={20} className="mr-3" />
                Ver Mesa de Regalos
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}; 