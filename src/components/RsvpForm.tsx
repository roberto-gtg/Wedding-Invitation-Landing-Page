import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

export const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '0',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    alert('RSVP Submitted! Thank you.');
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guests: '0',
      message: ''
    });
  };

  return (
    <div className="w-full py-24 px-4 bg-[#f5efe9]">
      <div className="max-w-3xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-gray-800">
            RSVP
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Favor de responder antes de Julio 21, 2025
          </p>
        </Fade>
        
        <Fade direction="up" duration={1000} delay={100} triggerOnce={true} fraction={0.2}>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b8aa]" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Correo
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b8aa]" />
            </div>
            <div className="mb-6">
              <label htmlFor="attending" className="block text-gray-700 mb-2">
                Podrás asistir?
              </label>
              <select id="attending" name="attending" value={formData.attending} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b8aa]">
                <option value="yes">Acepto con gusto</option>
                <option value="no">Lamento no poder</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Mensaje para Kattia & Roberto (Opcional)
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b8aa]"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-[#d4b8aa] text-white font-medium rounded-md hover:bg-[#c6a99b] transition-colors duration-300">
                Mandar RSVP
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </div>
  );
};