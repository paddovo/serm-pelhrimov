'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function ApplicationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Šerm dlouhým mečem');
  const [experience, setExperience] = useState('');
  const [healthNotes, setHealthNotes] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [note, setNote] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprConsent) {
      setErrorMessage('Musíte souhlasit se zpracováním osobních údajů.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          birthDate,
          email,
          phone,
          address,
          selectedCourse,
          experience,
          healthNotes,
          emergencyContact,
          note,
          gdprConsent,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Přihlášku se nepodařilo odeslat.');
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
          Děkujeme za přihlášení!
        </h2>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Vaše přihláška do Školy historického šermu Pelhřimov byla úspěšně přijata. Ozveme se vám s dalšími informacemi k zahájení semestru na e-mail <span className="text-amber-400">{email}</span>.
        </p>
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

      <h2 className="text-xl font-bold font-serif text-slate-100 uppercase border-b border-slate-800 pb-3">
        Přihláška do školy
      </h2>

      {/* Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">Jméno *</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">Datum narození *</label>
          <input
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300 uppercase">Adresa trvalého bydliště *</label>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Ulice, Město, PSČ"
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
            className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-300 uppercase">Vybraný kurz *</label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500 font-medium"
        >
          <option value="Šerm dlouhým mečem (Pátek)">Šerm dlouhým mečem (Pátek)</option>
          <option value="Šerm tesákem (Úterý)">Šerm tesákem (Úterý)</option>
          <option value="Kombinovaný kurz (Úterý + Pátek)">Kombinovaný kurz (Úterý + Pátek)</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-300 uppercase">Předchozí zkušenosti</label>
        <textarea
          rows={2}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Šerm, bojiště, kontaktní sporty nebo bez zkušeností..."
          className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-300 uppercase">Zdravotní omezení</label>
        <p className="text-[11px] text-slate-400">Uvádějte pouze informace nezbytné pro bezpečný trénink (např. omezení kloubů, astma, alergie).</p>
        <textarea
          rows={2}
          value={healthNotes}
          onChange={(e) => setHealthNotes(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-300 uppercase">Nouzový kontakt (Jméno & Telefon) *</label>
        <input
          type="text"
          required
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          placeholder="Jan Novák st. - 777 000 111"
          className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="gdpr-app"
          required
          checked={gdprConsent}
          onChange={(e) => setGdprConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-950 text-amber-500 focus:ring-amber-500"
        />
        <label htmlFor="gdpr-app" className="text-xs text-slate-400 leading-normal">
          Souhlasím se zpracováním osobních údajů v rámci členství a přihlášky dle{' '}
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
        {status === 'submitting' ? 'Odesílám přihlášku...' : 'ODESLAT PŘIHLÁŠKU DO ŠKOLE'}
      </button>
    </form>
  );
}
