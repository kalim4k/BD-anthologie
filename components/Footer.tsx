
import React from 'react';
import { BookOpen, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">BD<span className="text-indigo-600">Anthology</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              La meilleure plateforme pour découvrir et lire les talents locaux et internationaux du 9ème art en format numérique.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Accueil</a></li>
              <li><a href="#collection" className="text-slate-500 hover:text-indigo-600 transition-colors">La Collection</a></li>
              <li><a href="#avantages" className="text-slate-500 hover:text-indigo-600 transition-colors">Avantages</a></li>
              <li><a href="#buy" className="text-slate-500 hover:text-indigo-600 transition-colors">Acheter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Aide & Contact</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Paiement sécurisé</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© 2024 BD Anthology. Tous droits réservés.</p>
          <p className="text-xs text-slate-300">Design Moderne & Épuré - Made with ❤️ for comic fans.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
