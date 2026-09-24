import React from 'react';
import { PageId, Language } from '../types';
import { CONTENT, IMAGES } from '../data/content';
import { Check, ArrowRight, Package, Box, Search, ShieldCheck, Warehouse } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceOption?: string) => void;
  lang: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, lang }) => {
  const t = CONTENT[lang];

  const serviceIcons = [
    Package,
    Box,
    Search,
    ShieldCheck,
    Warehouse,
  ];

  return (
    <div className="w-full bg-[#FAF9F7] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-white px-3 py-1 rounded-full border border-neutral-200">
            <span>{lang === 'fr' ? 'Savoir-Faire & Ateliers' : 'Expertise & Workshops'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            {lang === 'fr' ? 'Nos Solutions de Façonnage' : 'Our Contract Packaging Solutions'}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {lang === 'fr'
              ? 'De la fabrication à la mise en étuis, TOMCOS adapte ses lignes pour donner le meilleur en terme de rigueur, qualité et rapidité.'
              : 'From manufacturing to cartoning, TOMCOS delivers rigor, quality, and speed tailored to your cosmetic & perfume lines.'}
          </p>
        </div>

        {/* Visual Feature Banner */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200 relative min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] flex items-center">
          <img
            src={IMAGES.bottlesLine}
            alt="Ligne de conditionnement de flacons et parfums - TOMCOS Grasse"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/45 to-transparent flex items-center px-6 sm:px-12 py-8">
            <div className="text-white max-w-lg space-y-3 relative z-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#83bad8]">
                {lang === 'fr' ? 'Polyvalence d’atelier' : 'Workshop Versatility'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                {lang === 'fr'
                  ? 'Étuis, calages, coffrets prestige & cellophanage'
                  : 'Boxes, bespoke inserts, prestige sets & overwrapping'}
              </h2>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                {lang === 'fr'
                  ? 'Une chaîne de conditionnement flexible et rigoureuse au cœur de Grasse. Tout type de format et d’outillage disponible.'
                  : 'A flexible, rigorous packaging chain at the heart of Grasse. All formats and tooling available.'}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Detailed Service Cards */}
        <div className="space-y-6">
          {t.servicesList.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-2xs hover:border-neutral-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Service Header & Detail */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          Service 0{index + 1}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-neutral-800">
                      {service.summary}
                    </p>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.detail}
                    </p>
                  </div>

                  {/* Service Bullet Points & Action */}
                  <div className="lg:col-span-5 bg-neutral-50 rounded-xl p-5 border border-neutral-200/80 space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-neutral-500">
                      {lang === 'fr' ? 'Points clés & Caractéristiques' : 'Key Specifications'}
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-700">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-neutral-200">
                      <button
                        onClick={() => onNavigate('contact', service.title)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-all shadow-2xs"
                      >
                        <span>{lang === 'fr' ? 'Demander un devis pour ce service' : 'Request quote for this service'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Bottom */}
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            {lang === 'fr' ? 'Un besoin spécifique ou un volume particulier ?' : 'Specific requirements or volumes?'}
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Notre atelier étudie la faisabilité technique de vos emballages et vous conseille dès la phase de conception.'
              : 'Our workshop analyzes the technical feasibility of your packaging and advises you from initial conception.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 bg-white hover:bg-neutral-100 transition-colors shadow-md"
            >
              <span>{lang === 'fr' ? 'Prendre contact avec nous' : 'Get in Touch'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
