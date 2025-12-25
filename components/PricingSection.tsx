
import React, { useState } from 'react';
import { PRICE } from '../constants';
import { CheckCircle2, CreditCard, Smartphone, Check, Loader2 } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment process
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="buy" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Prêt à commencer la lecture ?</h2>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto">
          Obtenez les 6 BDs complètes dès maintenant pour le prix d'un seul repas. Pas d'abonnement, pas de frais cachés.
        </p>
        
        <div className="max-w-md mx-auto relative">
          <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="bg-indigo-600 py-4 text-white text-sm font-bold uppercase tracking-widest">
              Meilleure Offre (Collection Complète)
            </div>
            <div className="p-10 text-white">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-5xl font-black">{PRICE}</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <span>6 Bandes Dessinées Incluses</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <span>Format PDF Haute Définition</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <span>Toutes les Saisons & Chapitres</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <span>Lecture Hors-ligne à vie</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <span>Mises à jour gratuites</span>
                </li>
              </ul>
              
              {!isSuccess ? (
                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sécurisation...
                    </>
                  ) : (
                    "Acheter Maintenant"
                  )}
                </button>
              ) : (
                <div className="w-full py-5 bg-green-500 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 animate-bounce">
                  <Check className="w-6 h-6" />
                  Paiement Réussi !
                </div>
              )}
              
              <div className="mt-8 flex items-center justify-center gap-4 opacity-50">
                <Smartphone className="w-5 h-5" />
                <CreditCard className="w-5 h-5" />
                <span className="text-xs font-medium">Orange, MTN, Moov, Wave, Visa</span>
              </div>
            </div>
          </div>
          
          {isSuccess && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-green-800 animate-in fade-in slide-in-from-top-4 duration-500">
              <p className="font-bold mb-2">Merci pour votre achat !</p>
              <p className="text-sm">Un lien de téléchargement a été envoyé à votre adresse email. Vous pouvez également cliquer sur le bouton ci-dessous :</p>
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition-colors">
                Télécharger la Collection (ZIP/PDF)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
