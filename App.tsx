import React from 'react';
import Navbar from './components/Navbar';
import CheckoutPage from './components/CheckoutPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50 flex flex-col">
      <Navbar 
        onHome={() => {}} 
        onBuy={() => {}} 
      />
      
      <main className="flex-grow flex items-center justify-center py-12 lg:py-24">
        <div className="w-full">
          <CheckoutPage />
        </div>
      </main>
    </div>
  );
};

export default App;