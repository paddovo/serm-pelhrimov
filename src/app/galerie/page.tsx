import React from 'react';
import GalleryLightbox, { GalleryItem } from '@/components/GalleryLightbox';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Fotogalerie | ${siteConfig.name}`,
  description: 'Fotografie z tréninků, seminářů a akcí Školy historického šermu Pelhřimov s kompletním fullscreen Lightboxem.',
};

export default function GalleryPage() {
  const galleryImages: GalleryItem[] = [
    { id: 1, title: 'Šerm dlouhým mečem', caption: 'Nácvik základních krytů a vazeb mečem.', category: 'Tréninky' },
    { id: 2, title: 'Trénink tesákem', caption: 'Práce s jednoručním tesákem zblízka.', category: 'Tréninky' },
    { id: 3, title: 'Seminář HEMA', caption: 'Intenzivní víkendový seminář.', category: 'Semináře' },
    { id: 4, title: 'Analýza manuálů', caption: 'Studium historických Fechtbuchů.', category: 'Teorie' },
    { id: 5, title: 'Sparring v maskách', caption: 'Kontrolovaný cvičný boj.', category: 'Tréninky' },
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
            Snímky z našich tréninků v Pelhřimovské sportovní hale, seminářů a klubových setkání. Klikněte pro zvětšení do fullscreen.
          </p>
        </div>

        {/* Gallery Lightbox */}
        <GalleryLightbox items={galleryImages} />

        {/* Note about Facebook */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center space-y-3">
          <p className="text-sm text-slate-300">
            Více fotek a aktuálních příspěvků najdete na našem Facebooku:
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
