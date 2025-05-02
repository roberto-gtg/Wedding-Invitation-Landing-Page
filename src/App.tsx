import React from 'react';
import { HeroSection } from './components/HeroSection';
import { EventDetails } from './components/EventDetails';
import { RsvpForm } from './components/RsvpForm';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { AdditionalInfo } from './components/AdditionalInfo';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[#faf7f5]">
      <HeroSection />
      <div id="details">
        <EventDetails />
      </div>
      <div id="rsvp">
        <RsvpForm />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="info">
        <AdditionalInfo />
      </div>
      <Footer />
    </div>;
}