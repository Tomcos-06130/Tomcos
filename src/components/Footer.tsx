import React from 'react';
import { PageId, Language } from '../types';
import { COMPANY_INFO, CONTENT } from '../data/content';
import { TomcosLogo } from './TomcosLogo';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = CONTENT[lang];

  return (
    <footer className="bg-[#141414] text-neutral-300 border-t border-neutral-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Values */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo TOMCOS"
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                TOMCOS
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'fr'
                ? 'Spécialiste du façonnage et du conditionnement cosmétique de précision à Grasse. Rigueur, qualité et rapidité au service des créateurs de beauté.'
                : 'Contract packaging and precision cosmetic manufacturing specialist in Grasse, France. Rigor, quality, and speed for luxury beauty houses.'}
            </p>
            <div className="pt-2 text-xs text-neutral-400">
              <span className="text-neutral-200 font-medium">Grasse, France</span> · Capitale mondiale des parfums
            </div>
          </div>

          {/* Col 2: Coordonnées de Grasse */}
          <div className="space-y-3 md:justify-self-end max-w-md">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              {lang === 'fr' ? 'Atelier & Siège' : 'Workshop & HQ'}
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=TOMCOS,+45+Boulevard+Marcel+Pagnol,+06130+Grasse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block text-neutral-400 hover:text-white transition-colors"
                    title={lang === 'fr' ? 'Localiser TOMCOS sur Google Maps' : 'Locate TOMCOS on Google Maps'}
                  >
                    <strong className="text-neutral-200 group-hover:underline block">{COMPANY_INFO.address.site}</strong>
                    <span className="block">{COMPANY_INFO.address.street}</span>
                    <span className="block">{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, France</span>
                    <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-[#83bad8] group-hover:underline">
                      <span>{lang === 'fr' ? 'Voir sur Google Maps' : 'View on Google Maps'}</span>
                      <ArrowUpRight className="w-3 h-3 inline" />
                    </span>
                  </a>
                </address>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-white hover:underline tabular-nums font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-neutral-500">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{COMPANY_INFO.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} TOMCOS. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-6">
            <span>Travail à façon cosmétique & parfum à Grasse</span>
            <span>·</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white"
            >
              <span>{lang === 'fr' ? 'Nous contacter' : 'Contact Us'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
