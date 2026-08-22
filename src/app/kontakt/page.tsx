import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, ExternalLink, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Kontakt | ${siteConfig.name}`,
  description: 'Kontaktní údaje, e-mail, telefon, sociální sítě a adresa tréninků Školy historického šermu Pelhřimov.',
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            Kde nás najdete
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
            Kontakt
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Máte dotaz k tréninkům, výuce nebo možnostem vystoupení? Neváhejte nás kontaktovat.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct Details */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6">
            <h2 className="text-xl font-bold font-serif text-slate-100 uppercase border-b border-slate-800 pb-3">
              Kontaktní informace
            </h2>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200 block uppercase text-xs">Místo tréninků</span>
                  <span className="text-slate-300">{siteConfig.contact.venueDetails}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200 block uppercase text-xs">E-mail</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-400 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200 block uppercase text-xs">Telefon</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-amber-400 hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="font-bold text-slate-200 block uppercase text-xs">Sociální sítě</span>
              <div className="flex gap-4">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 rounded text-xs uppercase font-bold transition-all"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 rounded text-xs uppercase font-bold transition-all"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Affiliation Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                <Shield className="w-4 h-4" /> Záštita
              </div>
              <h2 className="text-xl font-bold font-serif text-slate-100 uppercase">
                Propojení s Aurinko Félag
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Škola historického šermu Pelhřimov působí pod hlavičkou a v úzké součinnosti s projektem Aurinko Félag.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Spojuje nás sdílené nadšení pro historii, rekonstrukci dobových řemesel a bezpečný historický šerm.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <a
                href={siteConfig.parentOrganization.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 border border-amber-500/40 text-amber-400 font-bold px-5 py-3 rounded text-xs uppercase tracking-wider transition-all"
              >
                Navštívit www.aurinkofelag.cz <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
