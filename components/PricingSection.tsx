
import React from 'react';
import { PRICE } from '../constants';
import { CheckCircle2, CreditCard, Smartphone, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onBuy: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onBuy }) => {
  return (
    <section id="buy" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Prêt à lire la collection ?</h2>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto">
          Rejoignez des milliers de lecteurs. Un seul paiement pour un accès à vie à nos 6 meilleures œuvres.
        </p>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl shadow-indigo-100 text-left border border-slate-800 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-indigo-600 py-4 text-white text-xs text-center font-bold uppercase tracking-[0.2em]">
              Offre Premium Intégrale
            </div>
            <div className="p-10 text-white">
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-5xl font-black">{PRICE}</span>
              </div>
              
              <ul className="space-y-6 mb-10">
                {[
                  "6 Bandes Dessinées HD",
                  "Tous les chapitres & saisons",
                  "Lecture hors-ligne optimisée",
                  "Support technique prioritaire",
                  "Fichiers PDF sécurisés"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onBuy}
                className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-white/5 active:scale-95"
              >
                Passer la commande
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-6 opacity-40">
                <Smartphone className="w-5 h-5" />
                <CreditCard className="w-5 h-5" />
                <ShieldCheck className="w-5 h-5" />
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-slate-400 text-xs font-medium">
            Paiement sécurisé via MoneyFusion Pay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
