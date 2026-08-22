import React from 'react';
import ApplicationForm from '@/components/ApplicationForm';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Přihláška do školy | ${siteConfig.name}`,
  description: 'Oficiální přihláška pro zájemce o pravidelné tréninky Školy historického šermu Pelhřimov.',
};

export default function ApplicationPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Členství & Kurz
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Přihláška do ŠHŠ Pelhřimov
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Vyplňte registrační formulář pro zápis do semestrálního výukového kurzu.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </div>
  );
}
