
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AIConsultant from './components/AIConsultant';
import PricingSection from './components/PricingSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <AIConsultant />
        <PricingSection />
      </main>
      <div className="text-center py-8 text-sm text-slate-400 border-t border-slate-100">
        © 2024 BD Anthology. Tous droits réservés.
      </div>
    </div>
  );
};

export default App;
