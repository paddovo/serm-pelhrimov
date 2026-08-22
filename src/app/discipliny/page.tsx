import React from 'react';
import Link from 'next/link';
import { Swords, Shield, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Disciplíny | ${siteConfig.name}`,
  description: 'Zbraně a disciplíny vyučované v Škole historického šermu Pelhřimov: Dlouhý meč, tesák, dýka, zápas (ringen), sekera a štít a tyčové zbraně.',
};

export default function DisciplinesPage() {
  const disciplines = [
    {
      id: 'dlouhy-mec',
      name: 'Dlouhý meč',
      subtitle: 'Královská disciplína evropského šermu',
      description: 'Obouruční meč tvořící základ náš výuky. Využívá pákovou mechaniku, práci s odstupem (Mensur) a cit v vazbě (Fühlen). Výuka pokrývá seků, bodů, krytů i zápasnických technik s mečem v ruce.',
      details: ['Základní postoje a středy', 'Seky zvrchu (Oberhau) a zespodu (Unterhau)', 'Mečové vazby a přenášení (Versetzen)', 'Volný boj s trenažéry a maskou'],
    },
    {
      id: 'tesak',
      name: 'Tesák (Messer)',
      subtitle: 'Jednoruční zbraň měšťanů a vojáků',
      description: 'Dynamický a rychlý šerm jednoručním tesákem s ochranným trnem (Nagel). Vynikající škola pro práci s krátkou vzdáleností, odzbrojování a rychlé kryty.',
      details: ['Práce jedním ramene a odklony', 'Využití záštity a trnu k zachycení', 'Seky a páky na ruku soupeře', 'Boj na velmi blízkou vzdálenost'],
    },
    {
      id: 'dyka',
      name: 'Dýka',
      subtitle: 'Osobní obrana a boj zblízka',
      description: 'Nácvik historických technik obrany a ústupu s dýkou. Výuka staví na technikách mistrů 14. a 15. století.',
      details: ['Kryty předloktím a zápěstím', 'Páky, hody a odzbrojení', 'Práce se zbraní v těsném kontaktu'],
    },
    {
      id: 'ringen',
      name: 'Ringen (Zápas)',
      subtitle: 'Středověké zápasení a podklady pohybu',
      description: 'Historický zápas tvoří pohybový základ pro všechny šermířské zbraně. Rozvíjí rovnováhu, tělesné těžiště a flexibilitu.',
      details: ['Strhy, páky a podkopy', 'Práce s těžištěm soupeře', 'Bezpečný pád a kontrola těla'],
    },
    {
      id: 'sekera-stit',
      name: 'Sekera a Štít',
      subtitle: 'Tradice vojenského a štítového boje',
      description: 'Bojové náčiní zaměřené na krytí štítem, práci se sekerou a týmové formace.',
      details: ['Krytí pukléřem a štítem', 'Využití háku sekery k zachycení', 'Seminární a doplňkový trénink'],
    },
    {
      id: 'tycove-zbrane',
      name: 'Dřevěné tyčové zbraně',
      subtitle: 'Dřevce, hole a kordeláče',
      description: 'Výuka dlouhých tyčových zbraní rozvíjející odhad vzdálenosti, synchronizaci a sílu záda.',
      details: ['Bodné a sečné dříky', 'Vyměnitelná vzdálenost', 'Doplňkové workshopy'],
    },
  ];

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Vyučované arzenály
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Disciplíny & Zbraně
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Přehled historických zbraňových systémů, které trénujeme v Pelhřimově.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((disc) => (
            <div
              key={disc.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-xl p-8 space-y-4 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Swords className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-serif text-slate-100">
                    {disc.name}
                  </h2>
                  <p className="text-xs text-amber-400 font-medium">
                    {disc.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {disc.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase mb-2">Co se trénuje:</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                  {disc.details.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Trénink: Úterý & Pátek</span>
                <Link
                  href="/treninky"
                  className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  Zobrazit rozvrh <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-900 border border-amber-900/40 rounded-xl p-8 text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase">
            Chcete si vyzkoušet šerm s mečem na vlastní kůži?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Všechny trenažéry vám pro začátek zapůjčíme. Stačí si rezervovat první lekci zdarma.
          </p>
          <div className="pt-2">
            <Link
              href="/pro-zacatecniky"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-all"
            >
              Chci začít šermovat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
