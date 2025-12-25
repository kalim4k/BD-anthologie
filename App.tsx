import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AIConsultant from './components/AIConsultant';
import PricingSection from './components/PricingSection';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Détection du retour de paiement via le paramètre token renvoyé par MoneyFusion
    const params = new URLSearchParams(window.location.search);
    if (params.get('token')) {
      setIsSuccess(true);
      // Nettoyer l'URL sans recharger la page
      window.history.replaceState({}, '', '/');
    }

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
    // Priorité à l'affichage du succès
    if (isSuccess) {
      return <SuccessPage onBack={() => {
        setIsSuccess(false);
        navigateTo('/');
      }} />;
    }

    // Page de confirmation d'achat
    if (currentPath === '/confirmation') {
      return <CheckoutPage />;
    }

    // Landing Page épurée sans CollectionSection ni Footer
    return (
      <div className="animate-in fade-in duration-700">
        <Hero onBuy={() => navigateTo('/confirmation')} />
        <FeaturesSection />
        <AIConsultant />
        <PricingSection onBuy={() => navigateTo('/confirmation')} />
      </div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50">
      <Navbar 
        onHome={() => {
          setIsSuccess(false);
          navigateTo('/');
        }} 
        onBuy={() => navigateTo('/confirmation')} 
      />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;