import React from 'react';
import Link from 'next/link';
import { HelpCircle, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Jak začít | ${siteConfig.name}`,
  description: 'Odpovědi na nejčastější dotazy pro začátečníky. Co si vzít na první trénink historického šermu v Pelhřimově.',
};

export default function HowToStartPage() {
  const faqs = [
    {
      q: 'Musím už něco umět?',
      a: 'Absolutně ne. Naše tréninky pro začátečníky počítají s tím, že jste drželi meč naposledy jako děti z větve. Vše vás naučíme postupně od správného postoje, kroků až po držení zbraně.',
    },
    {
      q: 'Potřebuji vlastní meč nebo drahé vybavení?',
      a: 'Není to potřeba. Pro první měsíce vám veškeré tréninkové trenažéry (plastové meče, cvičné tesáky) zapůjčíme. Vlastní vybavení si budete doplňovat postupně až podle vašeho zájmu.',
    },
    {
      q: 'Co si mám vzít na první trénink?',
      a: 'Stačí vám běžné sportovní oblečení (tričko, tepláky/kraťasy), sálová obuv vhodná do tělocvičny (která nedělá šmouhy) a láhev s pitím.',
    },
    {
      q: 'Je historický šerm nebezpečný?',
      a: 'Bezpečnost je naší nejvyšší prioritou. Výuka probíhá bezpečně a systematicky. Cvičí se kontrolované techniky a do plného kontaktu či sparringu se přechází až po zvládnutí krytů a s odpovídajícími chrániči.',
    },
    {
      q: 'Můžu přijít na jakýkoliv trénink?',
      a: 'Doporučujeme přijít na páteční začátečnický trénink od 20:30 nebo úterní tesák od 19:00. Nezapomeňte si rezervovat místo přes rezervační formulář.',
    },
    {
      q: 'Kolik stojí první trénink?',
      a: 'První zkušební trénink je zdarma, abyste si mohli šerm vyzkoušet na vlastní kůži a zjistit, zda vás baví.',
    },
  ];

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            První krok k šermu
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Jak začít šermovat
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Vše, co potřebujete vědět před vaší první návštěvou tréninku v Pelhřimově.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold font-serif mx-auto flex items-center justify-center">
              1
            </div>
            <h2 className="font-bold text-slate-100 uppercase text-sm">Vyberte si termín</h2>
            <p className="text-xs text-slate-400">Podívejte se na rozvrh a vyberte si lekci pro začátečníky.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold font-serif mx-auto flex items-center justify-center">
              2
            </div>
            <h2 className="font-bold text-slate-100 uppercase text-sm">Rezervujte si místo</h2>
            <p className="text-xs text-slate-400">Vyplňte krátkou rezervaci, abychom o vás věděli.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold font-serif mx-auto flex items-center justify-center">
              3
            </div>
            <h2 className="font-bold text-slate-100 uppercase text-sm">Přijďte v teniskách</h2>
            <p className="text-xs text-slate-400">Vezměte si tričko, tepláky a pití. Trenažér vám půjčíme!</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase text-center">
            Často kladené otázky (FAQ)
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

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-amber-900/40 via-amber-800/20 to-slate-950 border border-amber-900/40 rounded-xl p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase">
            Jste připraveni udělat první krok?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Rezervujte si své místo na nejbližším tréninku nebo vyplňte přihlášku do školy ještě dnes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/rezervace"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all"
            >
              Rezervovat první trénink
            </Link>
            <Link
              href="/prihlaska"
              className="border border-slate-700 hover:border-amber-500 text-slate-200 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all"
            >
              Příhláška do školy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
