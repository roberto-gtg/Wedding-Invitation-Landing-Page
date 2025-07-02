# Wedding Invitation Landing Page

A beautiful, responsive wedding invitation website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎉 Modern, elegant design with smooth animations
- 📱 Fully responsive for all devices
- ⛪ Religious ceremony information with dual locations
- 📅 Detailed timeline of wedding events
- 🗺️ Interactive maps for venue locations
- 🎁 Gift registry integration
- 📧 RSVP form functionality
- 🖼️ Photo gallery showcase
- 🎨 Custom animations using react-awesome-reveal

## Recent Updates

### Gift Registry Component Refactor (Latest)
- **New Component**: Created dedicated `GiftRegistry.tsx` component
- **Repositioning**: Moved gift registry section to bottom of website (after gallery, before footer)
- **Improved Structure**: Better modularization and component separation

### Religious Ceremony Conversion
- **Event Type**: Changed from civil ceremony to religious ceremony
- **Date**: Updated to September 20, 2025
- **New Timeline**:
  - 12:00 PM: Religious ceremony at Parroquia El Señor de la Misericordia
  - 4:00 PM: Guest reception with welcome cocktail at Ikaan
  - 5:00 PM: Formal reception start at the hacienda
  - 7:00 PM: Banquet service (appetizer, dinner, dessert)
- **Dual Locations**: Added separate church and reception venue information
- **Dress Code**: Updated to formal for men, no black dress for women
- **Gift Registry**: Added Amazon Mexico wedding registry section

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **react-awesome-reveal** for animations
- **Lucide React** for beautiful icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── EventDetails.tsx    # Wedding details with locations and dress code
│   ├── Timeline.tsx        # Event schedule and timeline
│   ├── HeroSection.tsx     # Main landing section
│   ├── RsvpForm.tsx        # RSVP form component
│   ├── Gallery.tsx         # Photo gallery
│   ├── GiftRegistry.tsx    # Gift registry section
│   └── Footer.tsx          # Footer component
├── assets/                 # Images and static assets
└── App.tsx                 # Main application component
```

## Customization

The website is designed to be easily customizable:
- Colors and theme in `tailwind.config.js`
- Event details in `EventDetails.tsx`
- Timeline in `Timeline.tsx`
- Photo gallery images in `src/assets/gallery/`

## Deployment

The site is optimized for deployment on platforms like Vercel, Netlify, or GitHub Pages.

---

*Built with ❤️ for Kattia & Roberto's special day*
