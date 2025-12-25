
import React from 'react';
import { ComicBook } from '../types';
import { BookOpen, Layers } from 'lucide-react';

interface ComicCardProps {
  comic: ComicBook;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
    <div className="group bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
        <img 
          src={comic.coverImage} 
          alt={comic.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-600">
          {comic.genre}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">{comic.title}</h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{comic.description}</p>
      
      <div className="flex items-center justify-between border-t border-slate-50 pt-4">
        <div className="flex items-center gap-2 text-slate-400">
          <Layers className="w-4 h-4" />
          <span className="text-xs font-medium">Saisons Complètes</span>
        </div>
        <div className="flex items-center gap-2 text-indigo-600 font-semibold">
          <BookOpen className="w-4 h-4" />
          <span className="text-xs">{comic.chapters} Chap.</span>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
