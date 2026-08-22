import React from 'react';
import Link from 'next/link';
import { Shield, Swords, Calendar, Users, Award, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-12 pb-20">
        {/* Dark overlay & backdrop glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950/90 to-slate-950 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            <Shield className="w-4 h-4" /> Tréninky v Pelhřimovské sportovní hale
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif text-slate-100 uppercase leading-tight">
            Školy historického šermu <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Pelhřimov
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            Poznej šerm. Nauč se bojovat. Poznej historii. <br />
            Moderní výuka evropského bojového umění pro začátečníky i pokročilé.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/prihlaska"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-md uppercase tracking-wider text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Chci začít šermovat <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/treninky"
              className="w-full sm:w-auto border border-slate-700 hover:border-amber-500/50 bg-slate-900/80 hover:bg-slate-900 text-slate-200 font-bold px-8 py-4 rounded-md uppercase tracking-wider text-base transition-all flex items-center justify-center gap-2"
            >
              Prohlédnout tréninky
            </Link>
          </div>

          {/* Quick Info Strip */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-slate-800/80 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <Swords className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-slate-200 text-sm uppercase">Dlouhý meč & Tesák</h2>
                <p className="text-xs text-slate-400">Trénink jednoručních i obouručních historických zbraní</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-slate-200 text-sm uppercase">Pro všechny úrovně</h2>
                <p className="text-xs text-slate-400">Kompletní vedení od úplných začátečníků</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-slate-200 text-sm uppercase">Úterý a Pátek</h2>
                <p className="text-xs text-slate-400">Sportovní hala Pelhřimov</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-slate-900 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase border-b border-amber-500/40 pb-1">
                Skutečné bojové umění
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-100 uppercase tracking-tight">
                Nejsme divadlo. Jsme škola šermu.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Vyučujeme historické evropské bojové umění (HEMA). Náš trénink staví na studiu dobových manuálů a manuskriptů významných mečových mistrů 14. až 16. století.
              </p>
              <ul className="space-y-3">
                {[
                  'Systematický fyzický i technický rozvoj',
                  'Bezpečný trénink s trenažéry a ochranným vybavením',
                  'Práce s odstupem, časováním a strukturou těla',
                  'Fyzická kondice, koordinace a sebeovládání',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/o-nas"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider text-sm group"
                >
                  Více o naší metodice a historii <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Target Audience Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-lg mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Začátečníci</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nemusíte mít žádné předchozí zkušenosti ani vlastní meč. Vše vás naučíme krok za krokem Od základního postoje.
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-lg mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Pokročilí</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Rozvoj taktiky, volný šerm (sparring), náročnější vazby a příprava na soutěžní i akademický rozvoj.
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-lg mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Dospělí</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trénink koordinace, síly a soustředění pro všechny ve věku 18–60+ let bez ohledu na výchozí kondici.
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-lg mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">Mládež (15+)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pro mládež od 15 let se zaměřením na disciplínu, pohybový rozvoj a fair-play sportovní ducha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE QUICK PREVIEW */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
              Tréninkový program
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
              Pravidelné lekce v Pelhřimově
            </h2>
            <p className="text-slate-400">
              Trénujeme v tělocvičně Pelhřimovské sportovní haly. Přijďte si vyzkoušet první lekci zdarma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.schedules.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-500/20 text-amber-400 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider">
                      {schedule.day}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {schedule.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-100 mb-2">
                    {schedule.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-3">
                    Zbraň: {schedule.weapon} | Úroveň: {schedule.level}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {schedule.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Kapacita: {schedule.maxCapacity} míst
                  </span>
                  <Link
                    href={`/rezervace?schedule=${schedule.id}`}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded text-xs uppercase tracking-wider transition-colors"
                  >
                    Rezervovat místo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/jak-zacit"
              className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-200 px-6 py-3 rounded font-bold uppercase tracking-wider text-sm transition-all"
            >
              Co si vzít na první trénink? <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-amber-900/40 via-amber-800/20 to-slate-950 border-t border-b border-amber-900/30">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-100 uppercase tracking-tight">
            Chceš si vyzkoušet historický šerm?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            První trénink je nezávazný. Nemusíš kupovat žádné vybavení – stačí sportovní oblečení a chuť se učit.
          </p>
          <div className="pt-2">
            <Link
              href="/prihlaska"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded uppercase tracking-wider text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-all"
            >
              Odeslat přihlášku
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
