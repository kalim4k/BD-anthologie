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
    // Détection si on est sur la page de confirmation physique ou si on a un token
    const params = new URLSearchParams(window.location.search);
    const isConfirmationPage = window.location.pathname.includes('confirmation.html');
    
    if (params.get('token') || isConfirmationPage) {
      setIsSuccess(true);
      // On nettoie l'URL pour la navigation future
      if (isConfirmationPage) {
        window.history.replaceState({}, '', '/');
      }
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

    // Page de formulaire d'achat (URL virtuelle /achat)
    if (currentPath === '/achat') {
      return <CheckoutPage />;
    }

    // Landing Page par défaut
    return (
      <div className="animate-in fade-in duration-700">
        <Hero onBuy={() => navigateTo('/achat')} />
        <FeaturesSection />
        <AIConsultant />
        <PricingSection onBuy={() => navigateTo('/achat')} />
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
        onBuy={() => navigateTo('/achat')} 
      />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;