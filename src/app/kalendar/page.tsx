import React from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, MapPin, Clock, Tag } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Kalendář akcí | ${siteConfig.name}`,
  description: 'Kalendář tréninků, seminářů, akcí a vystoupení Školy historického šermu Pelhřimov.',
};

export default function CalendarPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Nadcházející události
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Kalendář akcí
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Přehled plánovaných náborů, workshopů, víkendových seminářů a klubových akcí.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {siteConfig.events.map((event) => (
            <div
              key={event.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg p-3 text-center shrink-0 min-w-[80px]">
                  <span className="block text-2xl font-extrabold font-serif">
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="block text-[10px] uppercase font-bold tracking-wider">
                    {new Date(event.date).toLocaleString('cs', { month: 'short' })}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-800 text-amber-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      {event.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {event.time}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold font-serif text-slate-100">
                    {event.title}
                  </h2>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> {event.location}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href="/rezervace"
                  className="block w-full md:w-auto text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
                >
                  Zúčastnit se
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Regular training notice */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center space-y-4">
          <h2 className="text-xl font-bold font-serif text-slate-100 uppercase">
            Pravidelné tréninky
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Kromě výše uvedených jednorázových akcí probíhají pravidelné tréninky každé Úterý a Pátek v Pelhřimovské sportovní hale.
          </p>
          <Link
            href="/treninky"
            className="inline-block border border-amber-500/50 hover:bg-amber-500/10 text-amber-400 font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider"
          >
            Zobrazit týdenní rozvrh
          </Link>
        </div>
      </div>
    </div>
  );
}
