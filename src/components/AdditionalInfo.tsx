import React from 'react';
import { BedDoubleIcon, GiftIcon, CarIcon } from 'lucide-react';
export const AdditionalInfo = () => {
  return <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
          Información Adicional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f5efe9] p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <BedDoubleIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-gray-800">
              Hospedaje
            </h3>
            <p className="text-gray-600 mb-4">
              Hemos reservado villas y recamaras en Ikaan a un precio especial para nuestros invitados.
            </p>
            <p className="text-gray-600 mb-2">Booking code: EMJAMES2024</p>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
          </div>
          <div className="bg-[#f5efe9] p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <GiftIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Registry</h3>
            <p className="text-gray-600 mb-6">
              Tu presencia en nuestra boda es el mejor regalo para nosotros. Si gustas honrarnos con un detalle, nos hemos registrado en:
            </p>
            <button className="px-6 py-2 bg-white text-[#d4b8aa] border border-[#d4b8aa] rounded-md hover:bg-[#d4b8aa] hover:text-white transition-colors duration-300 mb-3 w-full">
              Bed Bath & Beyond
            </button>
            <button className="px-6 py-2 bg-white text-[#d4b8aa] border border-[#d4b8aa] rounded-md hover:bg-[#d4b8aa] hover:text-white transition-colors duration-300 w-full">
              Amazon
            </button>
          </div>
          <div className="bg-[#f5efe9] p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <CarIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4 text-gray-800">
              Transportación
            </h3>
            <p className="text-gray-600 mb-4">
              Complimentary shuttle service will be provided between the
              Rosewood Hotel and the venue.
            </p>
            <p className="text-gray-600">Pickup times:</p>
            <p className="text-gray-600 mb-2">1:00 PM - 1:30 PM</p>
            <p className="text-gray-600">
              Return shuttles will run from 9:30 PM - 12:00 AM
            </p>
          </div>
        </div>
      </div>
    </div>;
};