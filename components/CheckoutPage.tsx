
import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Loader2, User, Mail, Phone } from 'lucide-react';
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
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-2">Finaliser ma commande</h1>
            <p className="text-slate-500">Ces informations serviront à vous envoyer vos BDs après l'achat.</p>
          </div>

          <form onSubmit={handleConfirm} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Prénom</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  name="firstName"
                  required
                  placeholder="Ex: Jean"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Adresse Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Ex: jean@mail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Numéro WhatsApp</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="tel" 
                  name="whatsapp"
                  required
                  placeholder="Ex: 0700000000"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-500 font-medium">Contenu</span>
                <span className="text-slate-900 font-bold">Pack 6 BDs Intégrales</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <span className="text-slate-500 font-medium text-lg">Total</span>
                <span className="text-2xl font-black text-indigo-600">{PRICE}</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="w-7 h-7 animate-spin" />
              ) : (
                <>
                  <CreditCard className="w-6 h-6" />
                  Payer {PRICE}
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-4 text-slate-400">
            <p className="text-[10px] font-bold text-center uppercase tracking-widest opacity-50">Sécurisé par MoneyFusion Pay</p>
            <div className="flex gap-4 opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Orange-logo.svg" alt="Orange" className="h-5" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MTN_Logo.svg" alt="MTN" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
