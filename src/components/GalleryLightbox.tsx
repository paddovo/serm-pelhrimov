'use client';

import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  category: string;
  image?: string;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((img, index) => (
          <div
            key={img.id}
            onClick={() => openLightbox(index)}
            className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group hover:border-amber-500/50 cursor-pointer transition-all"
          >
            <div className="relative h-56 bg-slate-950 flex items-center justify-center text-slate-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
              <Camera className="w-12 h-12 text-slate-800 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute top-3 left-3 z-20 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                {img.category}
              </span>
              <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-bold font-serif text-slate-100 text-base">
                {img.title}
              </h3>
              <p className="text-xs text-slate-400">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-slate-400 hover:text-amber-400 p-2 z-50"
            aria-label="Zavřít"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-400 p-3 bg-slate-900/80 rounded-full border border-slate-800 z-50"
            aria-label="Předchozí"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-400 p-3 bg-slate-900/80 rounded-full border border-slate-800 z-50"
            aria-label="Další"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full text-center space-y-4">
            <div className="relative h-96 sm:h-[500px] bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-8">
              <Camera className="w-20 h-20 text-amber-500/30" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {items[selectedIndex].category}
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-100">
                {items[selectedIndex].title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {items[selectedIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
