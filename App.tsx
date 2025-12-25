import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionSection from './components/CollectionSection';
import FeaturesSection from './components/FeaturesSection';
import AIConsultant from './components/AIConsultant';
import PricingSection from './components/PricingSection';
import CheckoutPage from './components/CheckoutPage';
import Footer from './components/Footer';

type View = 'landing' | 'checkout';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');

  const goToCheckout = () => {
    setView('checkout');
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setView('landing');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50">
      <Navbar 
        onHome={goToHome} 
        onBuy={goToCheckout} 
      />
      
      <main className="transition-all duration-500 ease-in-out">
        {view === 'landing' ? (
          <div className="animate-in fade-in duration-700">
            <Hero onBuy={goToCheckout} />
            <CollectionSection />
            <FeaturesSection />
            <AIConsultant />
            <PricingSection onBuy={goToCheckout} />
            <Footer />
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <CheckoutPage />
            <div className="max-w-2xl mx-auto px-4 pb-20 text-center">
              <button 
                onClick={goToHome}
                className="text-slate-400 font-bold hover:text-indigo-600 transition-colors text-sm uppercase tracking-widest"
              >
                Annuler et revenir à l'accueil
              </button>
            </div>
            <Footer />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;