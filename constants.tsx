
import React from 'react';
import { Download, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { ComicBook, Feature } from './types';

export const COMIC_COLLECTION: ComicBook[] = [
  {
    id: '1',
    title: 'Les Ombres du Sahel',
    description: 'Une aventure mystique au cœur du désert, où la magie ancienne rencontre le futur.',
    coverImage: 'https://picsum.photos/seed/comic1/600/800',
    genre: 'Aventure / Fantastique',
    chapters: 24
  },
  {
    id: '2',
    title: 'Abidjan 2077',
    description: 'Cyberpunk tropical. La mégalopole comme vous ne l\'avez jamais vue.',
    coverImage: 'https://picsum.photos/seed/comic2/600/800',
    genre: 'Sci-Fi',
    chapters: 18
  },
  {
    id: '3',
    title: 'Koundi & Meba',
    description: 'Les enquêtes de deux détectives pas comme les autres dans un quartier vibrant.',
    coverImage: 'https://picsum.photos/seed/comic3/600/800',
    genre: 'Policier / Humour',
    chapters: 30
  },
  {
    id: '4',
    title: 'Le Masque de Sawa',
    description: 'Légendes et combats épiques pour la protection du royaume.',
    coverImage: 'https://picsum.photos/seed/comic4/600/800',
    genre: 'Action / Historique',
    chapters: 15
  },
  {
    id: '5',
    title: 'Secret de Famille',
    description: 'Un drame familial intense qui traverse les générations.',
    coverImage: 'https://picsum.photos/seed/comic5/600/800',
    genre: 'Drame',
    chapters: 12
  },
  {
    id: '6',
    title: 'Zéro Limite',
    description: 'Course poursuite et adrénaline dans les rues de la capitale.',
    coverImage: 'https://picsum.photos/seed/comic6/600/800',
    genre: 'Action',
    chapters: 20
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Format PDF HD',
    description: 'Une qualité d\'image exceptionnelle pour un confort de lecture optimal.',
    icon: <Download className="w-6 h-6 text-indigo-600" />
  },
  {
    title: 'Lecture Hors-Ligne',
    description: 'Téléchargez une fois et lisez n\'importe où, sans connexion internet.',
    icon: <Smartphone className="w-6 h-6 text-indigo-600" />
  },
  {
    title: 'Paiement Sécurisé',
    description: 'Payez en toute confiance via Mobile Money ou Carte Bancaire.',
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
  },
  {
    title: 'Accès Instantané',
    description: 'Recevez votre lien de téléchargement immédiatement après le paiement.',
    icon: <Zap className="w-6 h-6 text-indigo-600" />
  }
];

export const PRICE = "3 000 FCFA";
