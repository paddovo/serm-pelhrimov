import React from 'react';
import Link from 'next/link';
import { HelpCircle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Pro začátečníky | ${siteConfig.name}`,
  description: 'Vše, co potřebujete vědět před první návštěvou tréninku historického šermu v Pelhřimově. Nemusíte nic umět ani vlastnit meč.',
};

export default function ForBeginnersPage() {
  const faqs = [
    {
      q: 'Musím už něco umět?',
      a: 'Absolutně ne. Naše tréninky pro začátečníky počítají s tím, že jste drželi meč naposledy jako děti z větve. Vše vás naučíme postupně od základního postoje, kroků až po držení zbraně.',
    },
    {
      q: 'Potřebuji vlastní meč nebo drahé vybavení?',
      a: 'Není to potřeba. Pro první měsíce vám veškeré tréninkové trenažéry (plastové meče, cvičné tesáky) zapůjčíme zdarma. Vlastní vybavení si doplňujete až časem podle zájmu.',
    },
    {
      q: 'Co si mám vzít na první trénink?',
      a: 'Stačí vám běžné sportovní oblečení (tričko, tepláky/kraťasy), sálová obuv vhodná do tělocvičny a láhev s pitím.',
    },
    {
      q: 'Je historický šerm nebezpečný?',
      a: 'Bezpečnost je naší nejvyšší prioritou. Výuka probíhá bezpečně a systematicky. Cvičí se kontrolované techniky a do plného kontaktu či sparringu se přechází až po zvládnutí krytů a s odpovídajícími chrániči.',
    },
    {
      q: 'Kolik stojí první trénink?',
      a: 'První zkušební trénink je zdarma, abyste si mohli šerm vyzkoušet na vlastní kůži a zjistit, zda vás baví.',
    },
  ];

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            První krok k šermu
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Pro začátečníky
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Nemusíš mít žádné předchozí zkušenosti ani vlastní meč. Přijď a vyzkoušej si to na vlastní kůži.
          </p>
        </div>

        {/* 3 Step Onboarding */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold font-serif mx-auto flex items-center justify-center text-xl">
              1
            </div>
            <h2 className="font-bold text-slate-100 uppercase text-sm">Vyber si termín</h2>
            <p className="text-xs text-slate-400">Podívej se na náš rozvrh tréninků (Úterý nebo Pátek).</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold font-serif mx-auto flex items-center justify-center text-xl">
              2
            </div>
            <h2 className="font-bold text-slate-100 uppercase text-sm">Rezervuj si místo</h2>
            <p className="text-xs text-slate-400">Vyplň krátký formulář, abychom pro tebe připravili meč.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold font-serif mx-auto flex items-center justify-center text-xl">
              3
            </div>
            <h2 className="font-bold text-slate-100 uppercase text-sm">Přijď v teniskách</h2>
            <p className="text-xs text-slate-400">Vezmi si sportovní oblečení, sálovou obuv a pití. Trenažér ti půjčíme!</p>
          </div>
        </div>

        {/* What to Expect List */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase border-b border-amber-900/40 pb-3">
            Co tě čká na prvním tréninku?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Seznámení se školou</h3>
                <p className="text-xs text-slate-400">Představení trenérů, bezpečnostních pravidel a tělocvičny.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Základní postoj a krok</h3>
                <p className="text-xs text-slate-400">Nácvik rovnováhy, přenosu váhy a stabilního kroku.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Držení zbraně</h3>
                <p className="text-xs text-slate-400">Správný úchop meče/tesáku bez zbytečného křečovitého svírání.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-200 text-sm uppercase">Bezpečný nácvik ve dvojici</h3>
                <p className="text-xs text-slate-400">Základní kryty a kontrolované seky s cvičným partnerem.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase text-center">
            Nejčastější otázky nováčků
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-lg space-y-2">
                <h3 className="text-slate-100 font-bold text-base flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-950 border border-amber-900/40 rounded-xl p-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-100 uppercase">
            Jsi připraven udělat první krok?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Rezervuj si své místo na prvním zkušebním tréninku ještě dnes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/rezervace"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all"
            >
              Rezervovat zkušební trénink
            </Link>
            <Link
              href="/prihlaska"
              className="border border-slate-700 hover:border-amber-500 text-slate-200 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all"
            >
              Přihláška do školy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
