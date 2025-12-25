
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';
import { getComicRecommendation } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    setLoading(true);
    const result = await getComicRecommendation(input);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-12 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-indigo-900/20">
              <Bot className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Notre Expert AI en BD</h2>
            <p className="text-indigo-100">Dites-moi ce que vous aimez (films, livres, styles) et je vous dirai par quelle BD commencer dans notre collection.</p>
          </div>
          
          <form onSubmit={handleAsk} className="relative mb-8">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: J'aime les histoires de détective et l'humour..."
              className="w-full bg-white/20 border border-white/30 rounded-2xl py-5 px-6 pr-16 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-lg"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-50 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
            </button>
          </form>
          
          {recommendation && (
            <div className="bg-white rounded-3xl p-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 text-indigo-600 font-bold mb-3 uppercase tracking-wider text-xs">
                <Sparkles className="w-4 h-4" />
                Conseil de l'Expert
              </div>
              <p className="text-slate-800 italic leading-relaxed">"{recommendation}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
