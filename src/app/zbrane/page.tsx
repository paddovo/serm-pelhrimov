import React from 'react';
import Link from 'next/link';
import { Swords, Shield, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Historické zbraně | ${siteConfig.name}`,
  description: 'Přehled zbraní vyučovaných v Škole historického šermu Pelhřimov: Dlouhý meč, tesák (Messer), dýka, zápas a tyčové zbraně.',
};

export default function WeaponsPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Vyučovaný arzenál
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Historické zbraně
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Náš trénink pokrývá klíčové zbraňové systémy evropského středověku a renesance. Výuka probíhá systematicky od základní biomechaniky po volný boj.
          </p>
        </div>

        {/* Weapons List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.weapons.map((weapon) => (
            <div
              key={weapon.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-xl p-8 space-y-4 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Swords className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-serif text-slate-100">
                    {weapon.name}
                  </h2>
                  <p className="text-xs text-amber-400 font-medium">
                    {weapon.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {weapon.description}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Trénujeme: Pravidelně / Semináře</span>
                <Link
                  href="/treninky"
                  className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  Navštívit trénink <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment & Safety Box */}
        <div className="bg-slate-900/60 border border-amber-900/40 rounded-xl p-8 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase text-center">
            Vybavení a trenažéry
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed text-center max-w-2xl mx-auto">
            Pro začátek nepotřebujete vlastní meč ani drahé zbroje. V začátcích zapůjčujeme plastové či dřevěné trenažéry. Pro pokročilý sparring se využívají tupé ocelové federsechvery (HEMA meče) a kompletní ochranná výstroj (maska, prošívanice, rukavice).
          </p>
          <div className="pt-4 text-center">
            <Link
              href="/jak-zacit"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider"
            >
              Jak začít s prvním tréninkem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
