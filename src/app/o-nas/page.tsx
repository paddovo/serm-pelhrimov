import React from 'react';
import Link from 'next/link';
import { Shield, BookOpen, Target, Award, Users, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `O škole | ${siteConfig.name}`,
  description: 'Informace o Škole historického šermu Pelhřimov, naší metodice výuky, historii a pojetí historického šermu jako bojového umění.',
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            O naší škole
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Tradice, historie a reálný boj
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Škola historického šermu Pelhřimov se věnuje studiu, rekonstrukci a praktickému tréninku evropských bojových umění (HEMA).
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900 border border-slate-800 rounded-xl p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase">
              Naše filozofie
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Šerm vnímáme jako komplexní bojové umění a fyzický i duševní sport. Nejsme divadelní spolek a nevytváříme hrané scénky. Náš přístup spočívá ve studiu autentických historických manuálů (Fechtbuchů) a jejich převodu do bezpečného, ale plně funkčního sportovního tréninku.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Důraz klademe na mechaniku pohybu, taktické myšlení, správné časování (Tempus) a schopnost reagovat v reálném čase.
            </p>
          </div>
          <div className="space-y-4 border-l border-amber-900/40 pl-6">
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Prameny a manuály</h3>
                <p className="text-xs text-slate-400">Čerpáme z děl mistrů jako Johannes Liechtenauer, Hans Lecküchner či Fiore dei Liberi.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Bezpečnost a metodika</h3>
                <p className="text-xs text-slate-400">Používáme certifikované trenažéry, masky, prošívanice a speciální chrániče.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Kontinuální rozvoj</h3>
                <p className="text-xs text-slate-400">Od základních kroků a držení zbraně po pokročilý sparring a taktické koncepty.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase text-center">
            Pílíře výuky v Pelhřimově
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Technika & Práce s tělem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Správný postoj, rovnováha, přenos váhy a efektivní práce paží i trupu bez zbytečného plýtvání energií.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Taktika & Vzdálenost</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Odhad vzdálenosti (Mensur), čtení záintentů soupeře, kryty s protiútokem a práce na kontaktní vazbu.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Fyzická kondice</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Posilování středu těla, výbušnost, koordinace, vytrvalost a flexibilita přizpůsobená zátěži šermu.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-300 mb-6">
            Zaujala vás naše metodika? Přijďte se podívat na trénink nebo se rovnou přihlaste!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/prihlaska"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3 rounded uppercase tracking-wider text-sm transition-all"
            >
              Podat přihlášku
            </Link>
            <Link
              href="/kontakt"
              className="border border-slate-700 hover:border-amber-500 text-slate-300 font-bold px-8 py-3 rounded uppercase tracking-wider text-sm transition-all"
            >
              Kontaktovat nás
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
