'use client';

import React, { useState, useEffect } from 'react';
import { Reservation, Application } from '@/lib/db';
import { Shield, Lock, Download, RefreshCw, CheckCircle, XCircle, Trash2, Filter } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'reservations' | 'applications'>('reservations');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('Vše');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setAuthToken(data.token);
        setIsAuthenticated(true);
        fetchData(data.token);
      } else {
        setAuthError(data.error || 'Nesprávné přístupové heslo.');
      }
    } catch {
      setAuthError('Chyba při komunikaci se serverem.');
    }
  };

  const fetchData = async (token = authToken) => {
    if (!token) return;
    setLoading(true);
    try {
      const resRes = await fetch('/api/reservations', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resRes.ok) {
        const resData = await resRes.json();
        setReservations(resData);
      }

      const appRes = await fetch('/api/applications', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (appRes.ok) {
        const appData = await appRes.json();
        setApplications(appData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateResStatus = async (id: string, status: 'Nová' | 'Potvrzená' | 'Zrušená') => {
    await fetch('/api/reservations', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ id, status }),
    });
    fetchData();
  };

  const deleteRes = async (id: string) => {
    if (!confirm('Opravdu chcete tuto rezervaci smazat?')) return;
    await fetch(`/api/reservations?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${authToken}` },
    });
    fetchData();
  };

  const updateAppStatus = async (id: string, status: 'Nová' | 'Vyřízená' | 'Zrušená') => {
    await fetch('/api/applications', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ id, status }),
    });
    fetchData();
  };

  if (!isAuthenticated) {
    return (
      <div className="py-20 bg-slate-950 flex items-center justify-center px-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold font-serif text-slate-100 uppercase">
              Administrace ŠHŠ Pelhřimov
            </h1>
            <p className="text-xs text-slate-400">Přístup pouze pro oprávněné trenéry a správce.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 p-2.5 rounded text-center">
                {authError}
              </p>
            )}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-300 uppercase">Heslo správce</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Vložte heslo..."
                className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded text-xs uppercase tracking-wider"
            >
              Vstoupit do správy
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredReservations = reservations.filter(
    (r) => filterStatus === 'Vše' || r.status === filterStatus
  );

  const filteredApplications = applications.filter(
    (a) => filterStatus === 'Vše' || a.status === filterStatus
  );

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <h1 className="text-2xl font-bold font-serif text-slate-100 uppercase">
                Administrační Dashboard
              </h1>
            </div>
            <p className="text-xs text-slate-400">Správa rezervací a přihlášek do školy historického šermu.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData()}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-300 text-xs rounded uppercase font-bold"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Obnovit
            </button>
            <a
              href={`/api/admin/export?type=${activeTab}&token=${authToken}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs rounded uppercase font-bold"
            >
              <Download className="w-3.5 h-3.5" /> Exportovat CSV
            </a>
          </div>
        </div>

        {/* Tab & Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-800">
          <div className="flex gap-2">
            <button
              onClick={() => { setActiveTab('reservations'); setFilterStatus('Vše'); }}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider ${
                activeTab === 'reservations'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-950 text-slate-300 hover:text-amber-400'
              }`}
            >
              Rezervace lekcí ({reservations.length})
            </button>
            <button
              onClick={() => { setActiveTab('applications'); setFilterStatus('Vše'); }}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider ${
                activeTab === 'applications'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-950 text-slate-300 hover:text-amber-400'
              }`}
            >
              Přihlášky do školy ({applications.length})
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 font-semibold">Stav:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
            >
              <option value="Vše">Všechny stavové kódy</option>
              <option value="Nová">Nová</option>
              <option value="Potvrzená">Potvrzená / Vyřízená</option>
              <option value="Zrušená">Zrušená</option>
            </select>
          </div>
        </div>

        {/* Content Table: Reservations */}
        {activeTab === 'reservations' && (
          <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Trénink</th>
                  <th className="p-4">Jméno & Příjmení</th>
                  <th className="p-4">Kontakt</th>
                  <th className="p-4">Věk</th>
                  <th className="p-4">Poznámka</th>
                  <th className="p-4">Stav</th>
                  <th className="p-4 text-right">Akce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredReservations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-500">
                      Žádné rezervace nenalezeny.
                    </td>
                  </tr>
                ) : (
                  filteredReservations.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-950/50">
                      <td className="p-4 font-bold text-slate-100">{r.scheduleTitle}</td>
                      <td className="p-4 font-semibold text-slate-200">{r.firstName} {r.lastName}</td>
                      <td className="p-4">
                        <div>{r.email}</div>
                        <div className="text-slate-500">{r.phone}</div>
                      </td>
                      <td className="p-4">{r.age} let</td>
                      <td className="p-4 max-w-xs truncate text-slate-400">{r.note || '-'}</td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${
                            r.status === 'Potvrzená'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : r.status === 'Zrušená'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => updateResStatus(r.id, 'Potvrzená')}
                          title="Potvrdit"
                          className="p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateResStatus(r.id, 'Zrušená')}
                          title="Zrušit"
                          className="p-1.5 text-amber-400 hover:bg-amber-500/10 rounded"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteRes(r.id)}
                          title="Smazat"
                          className="p-1.5 text-red-400 hover:bg-red-500/10 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Content Table: Applications */}
        {activeTab === 'applications' && (
          <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Kurz</th>
                  <th className="p-4">Jméno & Narození</th>
                  <th className="p-4">Kontakt & Adresa</th>
                  <th className="p-4">Nouzový kontakt</th>
                  <th className="p-4">Zdravotní poznámka</th>
                  <th className="p-4">Stav</th>
                  <th className="p-4 text-right">Akce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-500">
                      Žádné přihlášky nenalezeny.
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-950/50">
                      <td className="p-4 font-bold text-slate-100">{a.selectedCourse}</td>
                      <td className="p-4 font-semibold text-slate-200">
                        {a.firstName} {a.lastName}
                        <div className="text-[10px] text-slate-500">Nar: {a.birthDate}</div>
                      </td>
                      <td className="p-4">
                        <div>{a.email}</div>
                        <div className="text-slate-500">{a.phone}</div>
                        <div className="text-[10px] text-slate-500">{a.address}</div>
                      </td>
                      <td className="p-4 font-mono text-[11px]">{a.emergencyContact}</td>
                      <td className="p-4 max-w-xs truncate text-slate-400">{a.healthNotes || '-'}</td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${
                            a.status === 'Vyřízená'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : a.status === 'Zrušená'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {a.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => updateAppStatus(a.id, 'Vyřízená')}
                          title="Označit jako vyřízenou"
                          className="p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateAppStatus(a.id, 'Zrušená')}
                          title="Zrušit"
                          className="p-1.5 text-red-400 hover:bg-red-500/10 rounded"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
