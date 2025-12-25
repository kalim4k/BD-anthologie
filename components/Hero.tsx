
import React from 'react';
import { PRICE } from '../constants';
import { ChevronRight, Star } from 'lucide-react';

interface HeroProps {
  onBuy: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuy }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6 animate-bounce">
            <Star className="w-4 h-4 fill-indigo-600" />
            <span>Offre Limitée - 6 BDs Incluses</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            L'Anthologie BD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Collection Complète</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Plongez dans 6 univers captivants. Tous les chapitres, toutes les saisons, 
            disponibles exclusivement par email en format PDF après achat.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onBuy}
              className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:-translate-y-1"
            >
              Obtenir la collection ({PRICE})
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#avantages" className="px-8 py-4 text-slate-700 font-semibold hover:text-indigo-600 transition-colors">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
