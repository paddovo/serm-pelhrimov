import React from 'react';
import Image from 'next/image';
import { Camera, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Fotogalerie | ${siteConfig.name}`,
  description: 'Fotografie z tréninků, seminářů a akcí Školy historického šermu Pelhřimov.',
};

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, title: 'Šerm dlouhým mečem', caption: 'Nácvik základních krytů a vazeb mečem.', category: 'Tréninky' },
    { id: 2, title: 'Trénink tesákem', caption: 'Práce s jednoručním tesákem zblízka.', category: 'Tréninky' },
    { id: 3, title: 'Seminář HEMA', caption: 'Intenzivní víkendový seminář.', category: 'Semináře' },
    { id: 4, title: 'Analýza manuálů', caption: 'Studium historických Fechtbuchů.', category: 'Teorie' },
    { id: 5, title: 'Sparing v maskách', caption: 'Kontrolovaný cvičný boj.', category: 'Tréninky' },
    { id: 6, title: 'Tým ŠHŠ Pelhřimov', caption: 'Společná fotka ze sportovní haly.', category: 'Akce' },
  ];

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Život v klubu
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Fotogalerie
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Snímky z našich tréninků v Pelhřimovské sportovní hale, seminářů a klubových setkání.
          </p>
        </div>

        {/* Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all"
            >
              <div className="relative h-56 bg-slate-950 flex items-center justify-center text-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <Camera className="w-12 h-12 text-slate-800 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute top-3 left-3 z-20 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                  {img.category}
                </span>
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

        {/* Note about Facebook */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center space-y-3">
          <p className="text-sm text-slate-300">
            Více aktuálních fotografií a videí najdete na naší oficiální Facebook stránce:
          </p>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
          >
            Navštívit Facebook SHSPelhrimov.cz
          </a>
        </div>
      </div>
    </div>
  );
}
