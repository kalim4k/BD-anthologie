
import React from 'react';
import { COMIC_COLLECTION } from '../constants';
import ComicCard from './ComicCard';

const CollectionSection: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">6 Chef-d'œuvres dans une seule Collection</h2>
            <p className="text-slate-500">De la science-fiction à l'aventure historique, explorez des récits riches et variés créés par des artistes passionnés.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <span className="block text-2xl font-bold text-indigo-600">6 BDs</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">Incluses</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-right">
              <span className="block text-2xl font-bold text-indigo-600">120+</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">Épisodes</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMIC_COLLECTION.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
