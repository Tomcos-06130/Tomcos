import React, { useState, useEffect } from 'react';
import { PageId, Language } from '../types';
import { COMPANY_INFO, CONTENT } from '../data/content';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all duration-200">
      {/* Top Utility Black Bar inspired by the screenshot */}
      <div
        className={`bg-[#111111] text-neutral-300 text-xs px-4 sm:px-8 tracking-wide overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled
            ? 'max-h-0 py-0 opacity-0 -translate-y-2 pointer-events-none'
            : 'max-h-16 py-2 opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-neutral-300" />
              <span>{t.topBar.location}</span>
            </span>
            <span className="text-neutral-400 hidden md:inline">·</span>
            <span className="hidden lg:inline text-neutral-300">{t.topBar.speciality}</span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span className="tabular-nums font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-neutral-700">
              <button
                type="button"
                onClick={() => onToggleLang('fr')}
                className={`text-xs px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'fr'
                    ? 'font-bold text-white bg-neutral-800'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Français"
              >
                FR 🇫🇷
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`text-xs px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'en'
                    ? 'font-bold text-white bg-neutral-800'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="English"
              >
                EN 🇬🇧
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <button
          onClick={() => handleNav('accueil')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img
            src="logo.png"
            alt="Logo TOMCOS"
            className="h-9 sm:h-11 w-auto max-w-[120px] object-contain flex-shrink-0"
            onError={(e) => {
              // Hide cleanly until logo.png is added by the user
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
              TOMCOS
            </span>
            <span className="text-[11px] text-neutral-500 font-medium tracking-wide -mt-0.5 hidden sm:inline">
              Façonnage & Conditionnement · Grasse
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-neutral-700">
          <button
            onClick={() => handleNav('accueil')}
            className={`transition-colors relative py-1 hover:text-neutral-950 ${
              currentPage === 'accueil'
                ? 'text-neutral-950 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900'
                : 'text-neutral-600'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => handleNav('apropos')}
            className={`transition-colors relative py-1 hover:text-neutral-950 ${
              currentPage === 'apropos'
                ? 'text-neutral-950 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900'
                : 'text-neutral-600'
            }`}
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNav('services')}
            className={`transition-colors relative py-1 hover:text-neutral-950 ${
              currentPage === 'services'
                ? 'text-neutral-950 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900'
                : 'text-neutral-600'
            }`}
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => handleNav('contact')}
            className={`transition-colors relative py-1 hover:text-neutral-950 ${
              currentPage === 'contact'
                ? 'text-neutral-950 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900'
                : 'text-neutral-600'
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm active:scale-95"
          >
            <span>{t.nav.ctaQuote}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-800 hover:bg-neutral-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-5 shadow-lg space-y-4">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNav('accueil')}
              className={`text-left text-base font-medium py-2 border-b border-neutral-100 ${
                currentPage === 'accueil' ? 'text-neutral-950 font-bold' : 'text-neutral-600'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNav('apropos')}
              className={`text-left text-base font-medium py-2 border-b border-neutral-100 ${
                currentPage === 'apropos' ? 'text-neutral-950 font-bold' : 'text-neutral-600'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNav('services')}
              className={`text-left text-base font-medium py-2 border-b border-neutral-100 ${
                currentPage === 'services' ? 'text-neutral-950 font-bold' : 'text-neutral-600'
              }`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`text-left text-base font-medium py-2 border-b border-neutral-100 ${
                currentPage === 'contact' ? 'text-neutral-950 font-bold' : 'text-neutral-600'
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900"
            >
              <span>{t.nav.ctaQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
