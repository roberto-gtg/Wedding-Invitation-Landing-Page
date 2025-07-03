import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Gift, CreditCard } from 'lucide-react';

export const RsvpForm = () => {
  return (
    <div className="w-full py-24 bg-white">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <div className="p-8 flex flex-col items-center bg-[#f5efe9] rounded-lg">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              <Gift className="text-[#d4b8aa]" size={32} />
            </div>
            <h3 className="text-2xl font-medium mb-4 text-gray-800">
              Mesa de Regalos y Depósito Bancario
            </h3>
            <p className="text-gray-600 text-center">
            ¡Nos hará inmensamente felices contar con tu compañía en este día tan especial!</p>
            <p className="text-gray-600 text-center mb-6">
            Si, además, deseas regalarnos un detalle, hemos preparado con cariño una mesa de regalos o también ponemos a tu disposición nuestra cuenta bancaria:
            </p>
            <a
              href="https://www.amazon.com.mx/wedding/registry/2E0W8S4YNZTC4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300 mb-6"
            >
              <div className="flex items-center justify-center">
                <Gift size={20} className="mr-3" />
                Ver Mesa de Regalos
              </div>
            </a>
            <div className="w-full border-t border-gray-300 my-6"></div>
            <div className="flex flex-col items-center text-gray-800 text-center space-y-1">
              <p><strong>Banco:</strong> Santander</p>
              <p><strong>Titular:</strong> Roberto Gerardo Trevino Garcia</p>
              <p><strong>CLABE:</strong> 014580260230165511</p>
            </div>
          </div>
        </Fade>
    </div>
  );
};