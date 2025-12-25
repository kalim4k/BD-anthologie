import React from 'react';
import { PRICE } from '../constants';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onBuy: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuy }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Les décorations d'arrière-plan ont été supprimées ici */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Le badge Offre Limitée a été supprimé ici */}
          
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