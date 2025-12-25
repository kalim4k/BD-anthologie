import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Loader2, User, Mail, Phone, BookOpenCheck } from 'lucide-react';
import { initiatePayment } from '../services/paymentService';
import { PRICE } from '../constants';

const CheckoutPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    whatsapp: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await initiatePayment({
        totalPrice: 3000,
        numeroSend: formData.whatsapp,
        nomclient: formData.firstName,
        email: formData.email
      });

      if (response.statut && response.url) {
        window.location.href = response.url;
      } else {
        alert("Une erreur est survenue lors de l'initialisation du paiement.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Impossible de joindre le service de paiement.");
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[48px] p-8 md:p-14 border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
          
          <div className="text-center mb-12 relative z-10">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-xl shadow-indigo-200">
              <BookOpenCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Finalisez votre achat</h1>
            <p className="text-slate-500 text-lg">
              Entrez vos coordonnées pour recevoir la <span className="text-indigo-600 font-bold">Collection Intégrale (6 BDs)</span> immédiatement après paiement.
            </p>
          </div>

          <form onSubmit={handleConfirm} className="space-y-7 relative z-10">
            <div className="grid grid-cols-1 gap-7">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Votre Prénom</label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    placeholder="Jean-Marc"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all text-lg font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Adresse Email de livraison</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="jean@exemple.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all text-lg font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Numéro WhatsApp (Livraison Rapide)</label>
                <div className="relative group">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    placeholder="07 00 00 00 00"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:bg-white focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all text-lg font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl shadow-indigo-100 mt-10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                  <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Récapitulatif</span>
                </div>
                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">Pack Intégral</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-slate-300">6 Bandes Dessinées (PDF)</span>
                <span className="text-3xl font-black text-white">{PRICE}</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-7 bg-indigo-600 text-white rounded-2xl font-black text-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-4 active:scale-[0.97] disabled:opacity-70 group"
            >
              {loading ? (
                <Loader2 className="w-8 h-8 animate-spin" />
              ) : (
                <>
                  <CreditCard className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                  Payer et Recevoir
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Paiement 100% Sécurisé
            </div>
            <div className="flex gap-8 items-center grayscale opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Orange-logo.svg" alt="Orange" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MTN_Logo.svg" alt="MTN" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;