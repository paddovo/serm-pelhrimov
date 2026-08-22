import React from 'react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Ochrana osobních údajů (GDPR) | ${siteConfig.name}`,
  description: 'Informace o zpracování a ochraně osobních údajů návštěvníků a členů Školy historického šermu Pelhřimov.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold font-serif uppercase text-slate-100 border-b border-amber-900/40 pb-4">
          Zásady ochrany osobních údajů (GDPR)
        </h1>

        <p>
          Spolupracujeme s ohledem na ochranu osobních údajů dle Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-100 uppercase">1. Správce osobních údajů</h2>
          <p>
            Správcem osobních údajů je {siteConfig.name}, kontaktní e-mail: {siteConfig.contact.email}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-100 uppercase">2. Rozsah a účel zpracování</h2>
          <p>
            Osobní údaje získávané prostřednictvím rezervačních a přihlašovacích formulářů (jméno, příjmení, e-mail, telefon, případně zdravotní poznámka relevantní pro bezpečný trénink) zpracováváme výhradně pro účely:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Organizování a evidence účasti na trénincích a akcích.</li>
            <li>Komunikace týkající se rezervací a organizačních změn.</li>
            <li>Zajištění bezpečnosti při tréninku.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-100 uppercase">3. Doba uchování údajů</h2>
          <p>
            Údaje uchováváme po dobu nezbytně nutnou pro realizaci tréninkového semestru nebo do odvolání souhlasu ze strany uživatele.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-100 uppercase">4. Práva subjektu údajů</h2>
          <p>
            Máte právo požadovat přístup ke svým osobním údajům, jejich opravu, výmaz nebo omezení zpracování. Pokud máte jakékoliv dotazy k nakládání s Vašimi údaji, kontaktujte nás na {siteConfig.contact.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
