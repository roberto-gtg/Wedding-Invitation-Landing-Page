import React from 'react';
export const Timeline = () => {
  const events = [{
    time: '12:00 PM',
    title: 'Iglesia',
    description: "Join us as we exchange vows in the Rosewood Garden's main pavilion."
  }, {
    time: '3:30 PM',
    title: 'Hora de coctel',
    description: "Enjoy drinks and hors d'oeuvres on the terrace while we take photos."
  }, {
    time: '4:00 PM',
    title: 'Recepción',
    description: 'Dinner, toasts, and celebration in the Grand Ballroom.'
  }, {
    time: '7:00 PM',
    title: 'Cena',
    description: 'Join us on the dance floor for a night to remember.'
  }];
  return <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
          Wedding Day Timeline
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#d4b8aa]"></div>
          {/* Timeline events */}
          {events.map((event, index) => <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <h3 className="text-xl font-medium text-gray-800">
                  {event.title}
                </h3>
                <p className="text-[#d4b8aa] font-medium mb-2">{event.time}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="my-4 md:my-0 z-10">
                <div className="w-10 h-10 rounded-full bg-[#f5efe9] border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#d4b8aa]"></div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>)}
        </div>
      </div>
    </div>;
};