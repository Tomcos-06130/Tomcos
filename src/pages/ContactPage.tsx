import React from 'react';
import { Language } from '../types';
import { CONTENT, COMPANY_INFO } from '../data/content';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
  selectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, selectedService = '' }) => {
  const t = CONTENT[lang].contact;

  return (
    <div className="w-full bg-[#FAF9F7] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-white px-3 py-1 rounded-full border border-neutral-200">
            <span>{t.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            {t.title}
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Form (Left/Main) + Contact Coordinates (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm lang={lang} defaultService={selectedService} />
          </div>

          {/* Direct Coordinates & Location Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: Direct Reach Out */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-2xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-neutral-950">
                  {t.directTitle}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-neutral-700">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500 font-medium">
                      {lang === 'fr' ? 'Téléphone direct' : 'Direct Line'}
                    </span>
                    <span className="font-bold text-neutral-950 tabular-nums group-hover:underline">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500 font-medium">
                      Email
                    </span>
                    <span className="font-bold text-neutral-950 group-hover:underline break-all">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=TOMCOS,+45+Boulevard+Marcel+Pagnol,+06130+Grasse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-200 group"
                  title={lang === 'fr' ? 'Localiser TOMCOS sur Google Maps' : 'Locate TOMCOS on Google Maps'}
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs leading-relaxed">
                    <span className="block text-neutral-500 font-medium">
                      {lang === 'fr' ? 'Ateliers & Bureaux' : 'Workshops & Offices'}
                    </span>
                    <strong className="text-neutral-900 block text-sm group-hover:underline">{COMPANY_INFO.address.site}</strong>
                    <span className="text-neutral-700 block">{COMPANY_INFO.address.street}</span>
                    <span className="text-neutral-700 block">{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, France</span>
                    <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-[#83bad8] font-semibold group-hover:underline">
                      <span>{lang === 'fr' ? 'Voir sur Google Maps' : 'View on Google Maps'}</span>
                      <ExternalLink className="w-3 h-3 inline" />
                    </span>
                  </div>
                </a>

                {/* Opening Hours */}
                <div className="flex items-center gap-3 px-3 py-2 text-xs text-neutral-600">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{COMPANY_INFO.openingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
