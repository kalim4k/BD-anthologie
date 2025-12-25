
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AIConsultant from './components/AIConsultant';
import PricingSection from './components/PricingSection';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';

type View = 'landing' | 'checkout' | 'success';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');

  // Détection automatique du retour de paiement via l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('token')) {
      setCurrentView('success');
    }
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50">
      <Navbar onHome={() => navigateTo('landing')} />
      
      <main className="transition-all duration-500 ease-in-out">
        {currentView === 'landing' && (
          <div className="animate-in fade-in duration-700">
            <Hero onBuy={() => navigateTo('checkout')} />
            <FeaturesSection />
            <AIConsultant />
            <PricingSection onBuy={() => navigateTo('checkout')} />
          </div>
        )}

        {currentView === 'checkout' && (
          <div className="animate-in slide-in-from-right-8 duration-500">
            <CheckoutPage onCancel={() => navigateTo('landing')} />
          </div>
        )}

        {currentView === 'success' && (
          <div className="animate-in zoom-in-95 duration-500">
            <SuccessPage />
          </div>
        )}
      </main>

      <footer className="text-center py-12 text-sm text-slate-400 border-t border-slate-100 bg-white">
        © 2024 BD Anthology. Tous droits réservés.
      </footer>
    </div>
  );
};

export default App;
