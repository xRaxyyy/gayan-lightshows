import React from 'react';
import { Music2, ArrowDown } from 'lucide-react';
import FluidBackground from './FluidBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white pb-20">
      
      {/* Dynamic Fluid Background - Absolute positioned covering the section */}
      <FluidBackground />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="z-10 flex flex-col items-center justify-center w-full px-4">

        {/* Top Branding */}
        <div className="text-center mb-8 animate-fade-in-down">
          <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tight text-white mb-2 leading-none">
            Gayan
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-3 opacity-80">
             <div className="h-[1px] w-12 md:w-20 bg-gray-400"></div>
             <Music2 className="w-5 h-5 text-neon-pink" strokeWidth={3} />
             <div className="h-[1px] w-12 md:w-20 bg-gray-400"></div>
          </div>
          
          <h2 className="text-sm md:text-xl font-sans tracking-[0.6em] uppercase text-gray-200 ml-2">
            Lightshows
          </h2>
        </div>

        {/* Main Typography Stack */}
        <div className="flex flex-col items-center leading-none space-y-2 md:space-y-4">
          
          {/* DESIGN - Metallic Gradient Top */}
          <h3 className="text-7xl md:text-[10rem] font-display uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-2xl">
            Design
          </h3>
          
          {/* Middle Row: OPERATION + VISUALS */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8">
            <span className="mb-2 md:mb-6 text-xl md:text-3xl font-bold font-sans uppercase text-neon-pink tracking-widest border-2 border-neon-pink px-6 py-2 bg-black/80 backdrop-blur-sm">
              Operation
            </span>
            <h3 className="text-7xl md:text-[10rem] font-display uppercase text-white drop-shadow-lg leading-[0.85]">
              Visuals
            </h3>
          </div>

          {/* EVENTS - Metallic Gradient Bottom */}
          <h3 className="text-7xl md:text-[10rem] font-display uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 drop-shadow-2xl">
            Events
          </h3>
        </div>

        {/* Description Text */}
        <div className="mt-16 max-w-2xl text-center">
          <p className="text-base md:text-xl font-sans text-gray-400 leading-relaxed tracking-wide">
            Bringing the festival atmosphere to every venue. Professional<br className="hidden md:block"/>
            lighting design and operation for clubs and events.
          </p>
        </div>

      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 animate-bounce z-10 opacity-50">
        <ArrowDown className="w-8 h-8 text-white" />
      </div>

    </section>
  );
};

export default Hero;