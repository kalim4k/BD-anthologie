
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AIConsultant from './components/AIConsultant';
import PricingSection from './components/PricingSection';
import CollectionSection from './components/CollectionSection';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Détection du retour de paiement
    const params = new URLSearchParams(window.location.search);
    if (params.get('token')) {
      setIsSuccess(true);
    }

    // Gestion de la navigation navigateur (bouton retour/suivant)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (isSuccess) {
      return <SuccessPage />;
    }

    if (currentPath === '/confirmation') {
      return <CheckoutPage />;
    }

    // Vue par défaut: Landing Page
    return (
      <div className="animate-in fade-in duration-700">
        <Hero onBuy={() => navigateTo('/confirmation')} />
        <FeaturesSection />
        <CollectionSection />
        <AIConsultant />
        <PricingSection onBuy={() => navigateTo('/confirmation')} />
      </div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50">
      <Navbar onHome={() => navigateTo('/')} onBuy={() => navigateTo('/confirmation')} />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderContent()}
      </main>

      {!isSuccess && currentPath !== '/confirmation' ? <Footer /> : (
        <footer className="text-center py-12 text-sm text-slate-400 border-t border-slate-100 bg-white">
          © 2024 BD Anthology. Tous droits réservés.
        </footer>
      )}
    </div>
  );
};

export default App;
