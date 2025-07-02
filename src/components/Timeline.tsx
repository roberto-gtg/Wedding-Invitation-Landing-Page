import React from 'react';
import { Fade } from "react-awesome-reveal";

export const Timeline = () => {
  const events = [{
    time: '12:00 PM',
    title: 'Ceremonia Religiosa',
    description: "Ceremonia religiosa donde intercambiamos votos ante Dios en la Parroquia El Señor de la Misericordia."
  }, {
    time: '4:00 PM',
    title: 'Cóctel de Bienvenida',
    description: "Llegada al salón de eventos Ikaan para el cóctel de bienvenida. Disfrutemos de bebidas y aperitivos mientras tomamos fotos."
  }, {
    time: '5:00 PM',
    title: 'Recepción Formal',
    description: 'Los invitados toman sus asientos en la hacienda para el inicio formal de la recepción y celebración principal.'
  }, {
    time: '7:00 PM',
    title: 'Banquete y Baile',
    description: 'Comienza el servicio de banquete con entrada, cena y postre. Disfrutemos juntos de nuestro día especial.'
  }, 
];

  return (
    <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
            Itinerario
          </h2>
        </Fade>
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#d4b8aa] hidden md:block" />
          
          {/* Timeline events - each with its own Fade wrapper */}
          {events.map((event, index) => (
            <Fade 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"} 
              duration={1200} 
              triggerOnce={true}
              fraction={0.2} // Trigger animation when 20% of the element is visible
            >
              <div className={`flex flex-col md:flex-row items-center mb-16 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Mobile timeline line */}
                <div className="absolute h-full w-px bg-[#d4b8aa] left-4 top-0 md:hidden" />
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <h3 className="text-xl font-medium text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-[#d4b8aa] font-medium mb-2">{event.time}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:static my-4 md:my-0 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f5efe9] border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d4b8aa]" />
                  </div>
                </div>
                <div className="md:w-1/2" />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};