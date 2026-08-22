'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { CheckCircle2, AlertCircle, Calendar, Clock, MapPin, User, Mail, Phone, Lock } from 'lucide-react';

interface ReservationFormProps {
  initialScheduleId?: string;
}

export default function ReservationForm({ initialScheduleId }: ReservationFormProps) {
  const [scheduleId, setScheduleId] = useState(initialScheduleId || siteConfig.schedules[0].id);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState<number | ''>(18);
  const [note, setNote] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedSchedule = siteConfig.schedules.find(s => s.id === scheduleId) || siteConfig.schedules[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprConsent) {
      setErrorMessage('Musíte souhlasit se zpracováním osobních údajů.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scheduleId: selectedSchedule.id,
          scheduleTitle: selectedSchedule.title,
          date: 'Otevřený termín semestru',
          time: selectedSchedule.time,
          firstName,
          lastName,
          email,
          phone,
          age: Number(age),
          note,
          gdprConsent,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Rezervaci se nepodařilo odeslat.');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Chyba spojení se serverem.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold font-serif text-slate-100 uppercase">
          Rezervace byla úspěšně odeslána!
        </h2>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Děkujeme, <span className="font-semibold text-slate-100">{firstName}</span>. Potvrzení rezervace pro <span className="text-amber-400">{selectedSchedule.title}</span> jsme zaznamenali. Budeme vás kontaktovat na e-mailu <span className="text-amber-400">{email}</span>.
        </p>
        <div className="pt-4">
          <button
            onClick={() => {
              setStatus('idle');
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhone('');
              setNote('');
            }}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
          >
            Nová rezervace
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
      {errorMessage && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Select Schedule */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
          Vyberte trénink
        </label>
        <select
          value={scheduleId}
          onChange={(e) => setScheduleId(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500 text-sm font-medium"
        >
          {siteConfig.schedules.map((s) => (
            <option key={s.id} value={s.id}>
              {s.day} ({s.time}) – {s.title} [{s.level}]
            </option>
          ))}
        </select>
      </div>

      {/* Schedule details badge */}
      <div className="bg-slate-950 border border-amber-900/30 rounded p-4 text-xs text-slate-300 space-y-1">
        <div className="flex items-center gap-2 font-bold text-amber-400">
          <Calendar className="w-4 h-4" /> {selectedSchedule.day} ({selectedSchedule.time})
        </div>
        <p className="text-slate-400">{selectedSchedule.description}</p>
        <p className="text-slate-500 pt-1 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> Místo: {selectedSchedule.location} | Kapacita: {selectedSchedule.maxCapacity} osob
        </p>
      </div>

      {/* Contact info inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">Jméno *</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jan"
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">Příjmení *</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Novák"
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">E-mail *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jan.novak@example.com"
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">Telefon *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+420 777 123 456"
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-300 uppercase">Věk *</label>
        <input
          type="number"
          min={10}
          max={99}
          required
          value={age}
          onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
          className="w-full sm:w-1/2 bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-300 uppercase">Poznámka (volitelné)</label>
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Máte předchozí zkušenosti s šermem nebo dotaz na trenéra?"
          className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="gdpr"
          required
          checked={gdprConsent}
          onChange={(e) => setGdprConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-950 text-amber-500 focus:ring-amber-500"
        />
        <label htmlFor="gdpr" className="text-xs text-slate-400 leading-normal">
          Souhlasím se zpracováním osobních údajů pro účely rezervace v souladu se zásadami{' '}
          <a href="/ochrana-osobnich-udaju" target="_blank" className="text-amber-400 underline">
            GDPR
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold py-3.5 rounded uppercase tracking-wider text-sm shadow-lg shadow-amber-500/20 transition-all"
      >
        {status === 'submitting' ? 'Odesílám rezervaci...' : 'REZERVOVAT MÍSTO'}
      </button>
    </form>
  );
}
