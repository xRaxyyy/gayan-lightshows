import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Videos from './components/Videos';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-neon-pink selection:text-white">
      <Hero />
      <Portfolio />
      <Videos />
      <Footer />
    </main>
  );
};

export default App;