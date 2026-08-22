import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, Shield, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Tréninky a rozvrh | ${siteConfig.name}`,
  description: 'Aktuální rozvrh tréninků Školy historického šermu Pelhřimov. Šerm dlouhým mečem a tesákem v Pelhřimovské sportovní hale.',
};

export default function TrainingsPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Rozvrh a lekce
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Tréninky v Pelhřimově
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Pravidelné tréninky probíhají dvakrát týdně v Pelhřimovské sportovní hale. Každá lekce je přizpůsobena dané zbrani a úrovni pokročilosti.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-6 flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500/20 text-amber-400 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider">
                    {schedule.day}
                  </span>
                  <span className="text-slate-300 font-mono text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-400" />
                    {schedule.time}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-serif text-slate-100">
                  {schedule.title}
                </h2>

                <div className="text-xs space-y-1.5 text-slate-400">
                  <p><span className="text-slate-200 font-semibold">Zbraň:</span> {schedule.weapon}</p>
                  <p><span className="text-slate-200 font-semibold">Úroveň:</span> {schedule.level}</p>
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{schedule.location}</span>
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed pt-2 border-t border-slate-800">
                  {schedule.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Kapacita: {schedule.maxCapacity} osob</span>
                  <span className="text-amber-400 font-semibold">Volná místa</span>
                </div>
                <Link
                  href={`/rezervace?schedule=${schedule.id}`}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider shadow transition-colors"
                >
                  Rezervovat lekci
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Finanční podmínky
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase">
              Ceník kurzovného
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="bg-slate-950 p-6 rounded-lg border border-amber-900/40 text-center space-y-3">
              <span className="text-slate-400 text-xs uppercase tracking-wider block">
                {siteConfig.pricing.periodLabel}
              </span>
              <div className="text-4xl font-extrabold text-amber-400 font-serif">
                {siteConfig.pricing.semester.toLocaleString()} {siteConfig.pricing.currency}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hradí se na začátku semestru. Zahrnuje kompletní přístup na pravidelné tréninky a zapůjčení základních trenažérů.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <h3 className="font-bold text-slate-100 uppercase text-xs tracking-wider">Co je v ceně zahrnuto:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Všechny tréninkové lekce v týdnu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Zapůjčení plastových a mečových trenažérů pro začátečníky</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Metodické vedení certifikovanými trenéry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Slevy na klubové semináře a workshopy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location & Instructions */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-serif text-slate-100 uppercase">
              Místo tréninků
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Trénujeme v moderních prostorách Pelhřimovské sportovní haly. K dispozici jsou šatny, sprchy a sociální zázemí.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">{siteConfig.contact.venueDetails}</p>
              <p>Parkování zdarma přímo před sportovní halou.</p>
            </div>
          </div>
          <div className="text-center md:text-right space-y-4">
            <p className="text-sm text-slate-300">
              Chcete se přijít podívat nebo si zkušebně zastínit?
            </p>
            <Link
              href="/jak-zacit"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded text-xs uppercase tracking-wider transition-all"
            >
              Informace pro nováčky
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
