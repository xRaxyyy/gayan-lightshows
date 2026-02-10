import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-4">
              Visual <span className="text-neon-purple">Gallery</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
               Impression of our setups and lightshows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group relative aspect-video overflow-hidden bg-gray-900 border border-gray-800 rounded-sm">
              {/* Image */}
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 text-neon-blue text-sm font-bold uppercase mb-2 tracking-widest">
                  <Zap size={14} />
                  <span>{item.category}</span>
                </div>
                <h3 className="text-3xl font-display uppercase text-white group-hover:text-neon-purple transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;