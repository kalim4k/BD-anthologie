import React from 'react';
import { Check, Mail, MessageCircle, Clock } from 'lucide-react';

interface SuccessPageProps {
  onBack: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = () => {
  return (
    <div className="px-4 w-full animate-in fade-in zoom-in duration-700">
      <div className="max-w-2xl w-full text-center mx-auto">
        <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200">
          <Check className="w-12 h-12" />
        </div>
        
        <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
          Paiement Confirmé
        </div>

        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Merci pour votre commande !</h1>
        
        <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Votre paiement a été reçu avec succès. Notre équipe prépare l'envoi de votre collection intégrale de 6 BDs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Par Email</h3>
            <p className="text-sm text-slate-500">Vous recevrez les liens de téléchargement PDF directement sur l'adresse email saisie.</p>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Par WhatsApp</h3>
            <p className="text-sm text-slate-500">Nous vous enverrons également les fichiers sur votre numéro WhatsApp pour une lecture facile.</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-indigo-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-center gap-4 shadow-xl shadow-indigo-200">
          <Clock className="w-6 h-6" />
          <span className="font-bold">Envoi prévu d'ici quelques heures le temps de valider votre accès.</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;