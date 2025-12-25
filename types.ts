import React from 'react';

export interface ComicBook {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  genre: string;
  chapters: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}