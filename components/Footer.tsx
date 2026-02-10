import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900 relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute bottom-0 right-0 w-full max-w-2xl h-64 bg-neon-purple opacity-5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Brand & CTA */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 leading-none">
                            Let's Make <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">It Shine</span>
                        </h2>
                        <p className="text-gray-400 max-w-md text-lg mb-8 leading-relaxed">
                            Ready to elevate your event? We provide top-tier lighting design and operation for unforgettable experiences.
                        </p>
                    </div>
                    
                    <div>
                         <a href="mailto:info@gayanlightshows.nl" className="group inline-flex items-center gap-3 text-xl font-bold uppercase tracking-widest hover:text-neon-purple transition-colors">
                            Get in Touch <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col justify-center md:items-end space-y-8">
                    <div className="text-right">
                        <h4 className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-4">Contact Info</h4>
                        <div className="flex flex-col gap-4 items-end">
                            <a href="mailto:info@gayanlightshows.nl" className="flex items-center gap-4 text-2xl font-display uppercase hover:text-neon-blue transition-colors">
                                info@gayanlightshows.nl <Mail size={24} />
                            </a>
                            <a href="tel:+31612345678" className="flex items-center gap-4 text-2xl font-display uppercase hover:text-neon-blue transition-colors">
                                +31 6 12345678 <Phone size={24} />
                            </a>
                             <div className="flex items-center gap-4 text-xl font-sans text-gray-400">
                                Dinxperlo, NL <MapPin size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <h4 className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-4">Follow Us</h4>
                        <div className="flex gap-4 justify-end">
                            <a href="#" className="p-3 border border-gray-800 rounded-full hover:bg-neon-purple hover:border-neon-purple transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 border border-gray-800 rounded-full hover:bg-neon-blue hover:border-neon-blue transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs uppercase tracking-widest">
                <span>&copy; 2026 Gayan Lightshows. All rights reserved.</span>
                <span className="mt-2 md:mt-0">Design by Gayan</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;