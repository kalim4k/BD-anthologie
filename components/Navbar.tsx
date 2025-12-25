
import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">BD<span className="text-indigo-600">Anthology</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#avantages" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Avantages</a>
            <a href="#buy" className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Acheter Maintenant</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
