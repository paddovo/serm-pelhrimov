import React from 'react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Cookies | ${siteConfig.name}`,
  description: 'Informace o používání souborů cookies na webu www.sermpelhrimov.cz.',
};

export default function CookiesPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold font-serif uppercase text-slate-100 border-b border-amber-900/40 pb-4">
          Používání souborů cookies
        </h1>

        <p>
          Tento web ({siteConfig.domain}) je navržen s důrazem na soukromí uživatelů a minimální datovou stopu.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-100 uppercase">1. Jaké cookies používáme?</h2>
          <p>
            Nepoužíváme žádné agresivní sledovací, analytické ani reklamní cookies třetích stran.
          </p>
          <p>
            Web může využívat pouze nezbytně nutné technické cookies či relační relace (např. pro fungování přihlášení do administrace), které nevyžadují udělení marketingového souhlasu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-100 uppercase">2. Správa cookies v prohlížeči</h2>
          <p>
            Ukládání souborů cookies můžete kdykoliv zakázat nebo smazat v nastavení svého internetového prohlížeče.
          </p>
        </section>
      </div>
    </div>
  );
}
