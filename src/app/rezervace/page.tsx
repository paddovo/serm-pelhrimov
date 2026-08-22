import React from 'react';
import ReservationForm from '@/components/ReservationForm';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Rezervace tréninku | ${siteConfig.name}`,
  description: 'Rezervujte si místo na tréninku historického šermu dlouhým mečem nebo tesákem v Pelhřimově.',
};

export default function ReservationPage({
  searchParams,
}: {
  searchParams: { schedule?: string };
}) {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Rezervační systém
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Rezervace lekce
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Vyberte si termín a rezervujte si tréninkové místo. Rezervace je rychlá a nezávazná.
          </p>
        </div>

        <ReservationForm initialScheduleId={searchParams.schedule} />
      </div>
    </div>
  );
}
