import React from 'react';
import Link from 'next/link';
import { Shield, BookOpen, Target, Award, Users, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `O nás | ${siteConfig.name}`,
  description: 'Informace o Škole historického šermu Pelhřimov, naší historii, lektorech a metodice studování evropských bojových manuskriptů.',
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Kdo jsme a kam směřujeme
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            O škole historického šermu
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Jsme škola zaměřená na studium, výuku a rekonstrukci evropských bojových umění (HEMA) v Pelhřimově.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase border-b border-amber-900/40 pb-3">
            Naše vize a vznik
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Škola historického šermu Pelhřimov vznikla z touhy zprostředkovat zájemcům z Vysočiny autentické bojové umění evropského středověku a renesance. Naším cílem není vytvářet divadelní kostýmovaná představení, ale systematicky rozvíjet tělesnou i taktickou zdatnost šermířů podle dochovaných dobových pramenů.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm">
            Vyučujeme šerm jako plnohodnotné bojové umění – s důrazem na biomechaniku, správný odhad vzdálenosti, časování, kontrolu zbraně a bezpečnost při tréninku.
          </p>
        </div>

        {/* Treatises and Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-100 uppercase">Historické prameny</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Studujeme německou (Johannes Liechtenauer, Hans Lecküchner) i italskou (Fiore dei Liberi) šermířskou tradici. Pracujeme s překlady a výklady středověkých Fechtbuchů.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-100 uppercase">Moderní výukové metody</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Spojujeme historickou přesnost s moderní sportovní metodikou. Trénink zahrnuje rozcvičku, drily, kontrolovaný nácvik ve dvojicích i bezpečný volný boj (sparring).
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-300 mb-6 text-sm">
            Chcete se o naší výuce přesvědčit sami? Přijďte si vyzkoušet první trénink!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pro-zacatecniky"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3 rounded uppercase tracking-wider text-xs transition-all"
            >
              Chci si to vyzkoušet
            </Link>
            <Link
              href="/kontakt"
              className="border border-slate-700 hover:border-amber-500 text-slate-300 font-bold px-8 py-3 rounded uppercase tracking-wider text-xs transition-all"
            >
              Kontaktovat školu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
