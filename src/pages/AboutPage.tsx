import React from 'react';
import { PageId, Language } from '../types';
import { CONTENT, IMAGES } from '../data/content';
import { MapPin, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, lang }) => {
  const t = CONTENT[lang].about;

  return (
    <div className="w-full bg-[#FAF9F7] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-neutral-800" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
            {t.headline}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Central Card: Vocation & Savoir-Faire */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:min-h-[460px]">
            {/* Left Lab/Quality Image */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={IMAGES.qualityLab}
                alt="Flacons cosmétiques avec pipettes de précision sans marquage - TOMCOS Grasse"
                className="w-full h-full object-cover lg:absolute lg:inset-0 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1.5">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border border-white/30 text-white">
                  {t.facilityTag}
                </span>
                <p className="text-neutral-200 text-[11px] font-medium">
                  {t.facilitySubtitle}
                </p>
              </div>
            </div>

            {/* Right Story & Commitments */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#83bad8]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.vocationBadge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 leading-tight">
                  {t.vocationTitle}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed italic border-l-2 border-[#83bad8] pl-3">
                  « {t.vocationLead} »
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {t.vocationText1}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {t.vocationText2}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#83bad8]"></span>
                <span>{t.vocationFooter}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Grasse - Capitale Mondiale des Parfums et des Senteurs */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:min-h-[460px]">
            {/* Grasse Scenic Landscape Image */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={IMAGES.grasseLandscape}
                alt={t.grasse.title}
                className="w-full h-full object-cover lg:absolute lg:inset-0 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1.5">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border border-white/30 text-white">
                  {t.grasse.unescoTag}
                </span>
                <p className="text-neutral-200 text-[11px] font-medium">
                  {t.grasse.regionTag}
                </p>
              </div>
            </div>

            {/* Grasse Story & Heritage */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#83bad8]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.grasse.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 leading-tight">
                  {t.grasse.title}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed italic border-l-2 border-[#83bad8] pl-3">
                  « {t.grasse.lead} »
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {t.grasse.text1}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {t.grasse.text2}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#83bad8]"></span>
                <span>{t.grasse.footerTag}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.values.map((val, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-2xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                {val.tag}
              </span>
              <h3 className="text-xl font-bold text-neutral-950">{val.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
