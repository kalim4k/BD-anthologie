import React from 'react';
import { BookOpen } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
  onBuy: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
               <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              BD<span className="text-indigo-600">Anthology</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;