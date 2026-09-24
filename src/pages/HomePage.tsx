import React from 'react';
import { PageId, Language } from '../types';
import { CONTENT, IMAGES, COMPANY_INFO } from '../data/content';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Award, Phone, Mail, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#83bad8] text-neutral-900 min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Subtle decorative glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#83bad8] via-[#83bad8]/95 to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 w-full relative z-20 bg-[#83bad8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-800/80 bg-white/40 backdrop-blur-sm px-3.5 py-1 rounded-full">
                <span>{t.hero.subtitle}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.15] text-balance">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-neutral-800 max-w-xl leading-relaxed font-normal">
                {t.hero.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Rounded Pill CTA matching the button in screenshot 1 */}
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-neutral-950 bg-[#eceded] border-2 border-neutral-950 hover:bg-neutral-950 hover:text-white active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-neutral-900 bg-white/60 hover:bg-white transition-all cursor-pointer"
                >
                  <span>{t.hero.ctaSecondary}</span>
                </button>
              </div>

              {/* Certifications (BPF-ISO22716 ; Ecocert ; Cosmos) */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-neutral-800">
                <a
                  href="#certifications"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100/90 text-emerald-900 font-semibold px-4 py-2 rounded-full border border-emerald-200/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer group active:scale-95"
                  title={lang === 'fr' ? 'Consulter le détail de nos certifications en bas de page' : 'View our certifications & standards'}
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>BPF-ISO22716 ; Ecocert ; Cosmos</span>
                  <span className="text-emerald-700 group-hover:text-emerald-950 transition-colors ml-0.5 font-bold">↓</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/flacons.jpg"
                  alt="Flacons cosmétiques et conditionnement - TOMCOS Grasse"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Si flacons.jpg n'est pas encore déposé dans public/, bascule sur l'image par défaut
                    if ((e.currentTarget as HTMLImageElement).src !== IMAGES.heroDroplet) {
                      (e.currentTarget as HTMLImageElement).src = IMAGES.heroDroplet;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NOS DOMAINES DE COMPÉTENCE - Inspired directly by Image 2 (Oversized 01 02 03 Numbers) */}
      <section className="py-20 sm:py-24 bg-white text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
              {t.competences.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {t.competences.subtitle}
            </p>
          </div>

          {/* 3 Domain Columns with huge styled numbers mirroring Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 relative">
            {t.competences.items.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center px-4 group"
              >
                {/* Giant pastel cyan / ice-blue watermark number matching Image 2 */}
                <div className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-[#D9EDF2] select-none leading-none mb-[-40px] z-0 tracking-tighter opacity-90 transition-transform group-hover:scale-105">
                  {item.num}
                </div>

                {/* Content Block layered over the number */}
                <div className="relative z-10 pt-4 max-w-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Pill Button matching the "En savoir plus" in Image 2 */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-950 border border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              <span>{t.competences.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONDITIONNEMENT SPLIT - Inspired directly by Image 3 (B&W Industrial Bottles Left + Clean Editorial Right) */}
      <section className="py-20 sm:py-24 bg-[#FAF9F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo: Industrial packaging line matching Image 3 */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 aspect-[4/3] bg-neutral-100">
                <img
                  src={IMAGES.bottlesLine}
                  alt="Ligne de conditionnement de flacons en verre à Grasse - TOMCOS"
                  className="w-full h-full object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-md text-xs text-white">
                  Ligne de conditionnement & étuyage · Grasse
                </div>
              </div>
            </div>

            {/* Right Text Content matching Image 3 layout */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                <span>{t.conditioningSpotlight.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                {t.conditioningSpotlight.title}
              </h2>

              <p className="text-base text-neutral-800 font-medium leading-relaxed">
                {t.conditioningSpotlight.lead}
              </p>

              <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                {t.conditioningSpotlight.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 transition-colors shadow-sm active:scale-95"
                >
                  <span>{t.conditioningSpotlight.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NORMES & CERTIFICATIONS (ISO 22716, Ecocert, Cosmos) */}
      <section id="certifications" className="py-16 sm:py-20 bg-white border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{lang === 'fr' ? 'Exigence & Conformité' : 'Compliance & Quality'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              {lang === 'fr' ? 'Nos Certifications & Normes' : 'Our Certifications & Standards'}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {lang === 'fr'
                ? 'TOMCOS répond aux exigences réglementaires et environnementales les plus strictes pour garantir l’excellence de vos productions.'
                : 'TOMCOS meets the highest regulatory and environmental standards to ensure excellence in your product manufacturing.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-950 mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'fr' ? 'Atelier audité & conforme' : 'Audited & compliant workshop'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONVERSION CALLOUT & DIRECT CONTACT */}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#83bad8]">
            <span>{lang === 'fr' ? 'Prêt à lancer votre production ?' : 'Ready to start your production?'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Confiez le façonnage de vos cosmétiques et parfums à notre atelier de Grasse'
              : 'Entrust the packaging of your cosmetics and perfumes to our Grasse workshop'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {lang === 'fr'
              ? 'Obtenez une étude de faisabilité et un devis personnalisé sous 24h à 48h en précisant vos spécifications.'
              : 'Receive a personalized feasibility study and quotation within 24 to 48 hours.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <span>{lang === 'fr' ? 'Accéder au formulaire de contact' : 'Go to Contact Form'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-neutral-700 hover:bg-neutral-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#83bad8]" />
              <span className="tabular-nums">{COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              AromaGrasse, 06130 GRASSE
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              tomcos@tomcos.fr
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
