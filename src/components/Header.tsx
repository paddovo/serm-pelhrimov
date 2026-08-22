'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Úvod', href: '/' },
    { name: 'O škole', href: '/o-nas' },
    { name: 'Tréninky', href: '/treninky' },
    { name: 'Zbraně', href: '/zbrane' },
    { name: 'Jak začít', href: '/jak-zacit' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Kalendář', href: '/kalendar' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-amber-900/40 py-3'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-amber-400 uppercase font-serif">
              ŠHŠ Pelhřimov
            </span>
            <span className="text-[10px] text-slate-400 tracking-widest uppercase">
              Škola historického šermu
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/prihlaska"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-1.5"
          >
            Přihlásit se <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-amber-400 p-2"
          aria-label="Otevřít menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-amber-900/40 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400 uppercase tracking-wider border-b border-slate-800/50"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/prihlaska"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded uppercase tracking-wider shadow-md"
            >
              Přihlásit se
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
