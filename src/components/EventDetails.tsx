import React from 'react';
import { ClockIcon, MapPinIcon, CalendarIcon, GlassesIcon } from 'lucide-react';
export const EventDetails = () => {
  return <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-800">
          Join Us For Our Special Day
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <CalendarIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">The Date</h3>
            <p className="text-gray-600">Sunday, August 18, 2024</p>
          </div>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <ClockIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">The Time</h3>
            <p className="text-gray-600">Ceremony: 2:00 PM</p>
            <p className="text-gray-600">Reception: 5:00 PM</p>
          </div>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <MapPinIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              The Venue
            </h3>
            <p className="text-gray-600">Rosewood Gardens</p>
            <p className="text-gray-600">123 Blossom Street</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5efe9] flex items-center justify-center">
                <GlassesIcon className="text-[#d4b8aa]" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">
              Dress Code
            </h3>
            <p className="text-gray-600">Formal Attire</p>
            <p className="text-gray-600">Black Tie Optional</p>
          </div>
        </div>
      </div>
    </div>;
};