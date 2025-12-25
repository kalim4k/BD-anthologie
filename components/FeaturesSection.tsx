
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="avantages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Pourquoi choisir notre collection ?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Une expérience de lecture numérique pensée pour les vrais fans de bande dessinée.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
