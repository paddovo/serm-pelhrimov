import React from 'react';
import Link from 'next/link';
import { Shield, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-900/30 text-slate-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-amber-400" />
              <span className="font-bold text-lg text-slate-100 font-serif tracking-wider uppercase">
                ŠHŠ Pelhřimov
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500 block uppercase tracking-wider mb-2">Sledujte nás</span>
              <div className="flex gap-3">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-slate-200 font-bold uppercase tracking-wider text-sm mb-4 border-b border-amber-900/40 pb-2">
              Rychlé odkazy
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Úvodní stránka</Link></li>
              <li><Link href="/o-nas" className="hover:text-amber-400 transition-colors">O škole</Link></li>
              <li><Link href="/treninky" className="hover:text-amber-400 transition-colors">Rozvrh tréninků</Link></li>
              <li><Link href="/zbrane" className="hover:text-amber-400 transition-colors">Historické zbraně</Link></li>
              <li><Link href="/jak-zacit" className="hover:text-amber-400 transition-colors">Jak začít šermovat</Link></li>
              <li><Link href="/rezervace" className="hover:text-amber-400 transition-colors">Rezervace tréninku</Link></li>
              <li><Link href="/prihlaska" className="hover:text-amber-400 transition-colors">Přihláška do školy</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-slate-200 font-bold uppercase tracking-wider text-sm mb-4 border-b border-amber-900/40 pb-2">
              Místo a kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.venueDetails}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-amber-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Affiliation & Legal */}
          <div>
            <h3 className="text-slate-200 font-bold uppercase tracking-wider text-sm mb-4 border-b border-amber-900/40 pb-2">
              Propojení & Právní
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-xs text-slate-400">
                Škola historického šermu Pelhřimov působí v rámci širšího projektu:
              </p>
              <a
                href={siteConfig.parentOrganization.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold border border-amber-500/30 rounded px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 transition-all text-xs uppercase tracking-wider"
              >
                {siteConfig.parentOrganization.name} <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="pt-2 space-y-1 text-xs block">
                <div><Link href="/ochrana-osobnich-udaju" className="hover:text-amber-400">Ochrana osobních údajů (GDPR)</Link></div>
                <div><Link href="/cookies" className="hover:text-amber-400">Zásady cookies</Link></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Všechna práva vyhrazena.</p>
          <p>Doména: <span className="text-slate-400">{siteConfig.domain}</span></p>
        </div>
      </div>
    </footer>
  );
}
