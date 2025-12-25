
import React, { useState, useEffect } from 'react';
import { PRICE } from '../constants';
import { CheckCircle2, CreditCard, Smartphone, Check, Loader2, Mail, User, Phone } from 'lucide-react';
import { initiatePayment, checkStatus } from '../services/paymentService';

const PricingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentToken, setPaymentToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'pending' | 'paid' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const response = await initiatePayment({
        totalPrice: 3000,
        numeroSend: formData.phone,
        nomclient: formData.name,
        email: formData.email
      });

      if (response.statut && response.url) {
        setPaymentToken(response.token);
        setStatus('pending');
        // Ouvrir la page de paiement dans un nouvel onglet
        window.open(response.url, '_blank');
      } else {
        throw new Error(response.message || "Erreur de paiement");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "Impossible de contacter le service de paiement.");
      setIsProcessing(false);
    }
  };

  // Polling pour vérifier le statut si on est en attente
  useEffect(() => {
    let interval: any;
    if (status === 'pending' && paymentToken) {
      interval = setInterval(async () => {
        try {
          const check = await checkStatus(paymentToken);
          if (check.data?.statut === 'paid') {
            setStatus('paid');
            setIsProcessing(false);
            clearInterval(interval);
          }
        } catch (e) {
          console.error("Polling error", e);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [status, paymentToken]);

  return (
    <section id="buy" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Prêt à commencer la lecture ?</h2>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto">
          Obtenez les 6 BDs complètes dès maintenant. Accès instantané et téléchargement sécurisé.
        </p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Carte de l'offre */}
          <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-200 text-left">
            <div className="bg-indigo-600 py-4 text-white text-sm text-center font-bold uppercase tracking-widest">
              Collection Complète (6 BDs)
            </div>
            <div className="p-10 text-white">
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-5xl font-black">{PRICE}</span>
              </div>
              
              <ul className="space-y-4 text-left opacity-90">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Tous les chapitres & saisons</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Format PDF HD optimisé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Lecture hors-ligne illimitée</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-4 opacity-50">
                <Smartphone className="w-5 h-5" />
                <CreditCard className="w-5 h-5" />
                <span className="text-[10px] font-medium">Orange, MTN, Moov, Wave, Visa</span>
              </div>
            </div>
          </div>

          {/* Formulaire de paiement */}
          <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-200">
            {status === 'paid' ? (
              <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Paiement Confirmé !</h3>
                <p className="text-slate-600 mb-8">
                  Un email avec vos liens de téléchargement a été envoyé à <strong>{formData.email}</strong>.
                </p>
                <a 
                  href="https://votre-lien-de-telechargement.com/collection.zip" 
                  className="inline-block w-full py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-100"
                >
                  Télécharger maintenant
                </a>
              </div>
            ) : (
              <form onSubmit={handlePay} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">Informations de livraison</h3>
                
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Numéro Mobile Money"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Votre email (pour les fichiers)"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-indigo-100"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      {status === 'pending' ? 'Attente du paiement...' : 'Initialisation...'}
                    </>
                  ) : (
                    "Payer 3000 FCFA"
                  )}
                </button>
                
                {status === 'pending' && (
                  <p className="text-xs text-indigo-600 font-medium animate-pulse mt-4">
                    Veuillez valider le paiement sur votre téléphone. Cette fenêtre s'actualisera automatiquement.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
