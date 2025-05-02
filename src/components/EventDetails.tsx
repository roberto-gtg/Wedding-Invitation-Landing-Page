import React from 'react';
import { ClockIcon, MapPinIcon, CalendarIcon, GlassesIcon } from 'lucide-react';
export const EventDetails = () => {
  return <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
          Acompañanos en nuestro día especial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <CalendarIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Fecha</h3>
            <p className="text-gray-600">Sábado, Septiembre 21, 2025</p>
          </div>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <ClockIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Horarios</h3>
            <p className="text-gray-600">Iglesia: 12:00 PM</p>
            <p className="text-gray-600">Recepción: 4:00 PM</p>
          </div>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <MapPinIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              Dirección
            </h3>
            <p className="text-gray-600">Ikaan</p>
            <p className="text-gray-600">Carretera Montemorelos-Allende km 218</p>
            <p className="text-gray-600">Nuevo León, 67500</p>
          </div>
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
        </div>
      </div>
    </div>;
};