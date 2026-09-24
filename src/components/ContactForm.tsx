import React, { useState } from 'react';
import { ContactFormData, Language } from '../types';
import { CONTENT, COMPANY_INFO } from '../data/content';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ContactFormProps {
  lang: Language;
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang, defaultService = '' }) => {
  const t = CONTENT[lang].contact;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: defaultService || (lang === 'fr' ? 'Conditionnement & Étuyage' : 'Packaging & Boxing'),
    volumeEstimated: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = lang === 'fr'
    ? [
        'Conditionnement & Étuyage',
        'Coffrets, Cartonnettes & Cellophanage',
        'Aide au choix d’emballages & Sourcing',
        'Service Qualité & Traçabilité',
        'Stockage & Logistique',
        'Projet complet / Autre',
      ]
    : [
        'Packaging & Boxing',
        'Gift Sets, Backing Cards & Film Wrapping',
        'Packaging Consultation & Sourcing',
        'Quality Assurance & Sample Archiving',
        'Warehousing & Logistics',
        'Comprehensive Project / Other',
      ];

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return lang === 'fr' ? 'Veuillez renseigner votre nom complet.' : 'Please enter your full name.';
    }
    if (!formData.company.trim()) {
      return lang === 'fr' ? 'Veuillez indiquer le nom de votre société ou marque.' : 'Please provide your company or brand name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      return lang === 'fr' ? 'Veuillez saisir une adresse email professionnelle valide.' : 'Please enter a valid work email.';
    }
    if (!formData.phone.trim()) {
      return lang === 'fr' ? 'Veuillez renseigner un numéro de téléphone.' : 'Please enter a telephone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return lang === 'fr'
        ? 'Veuillez décrire brièvement votre projet (minimum 10 caractères).'
        : 'Please describe your project (minimum 10 characters).';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    try {
      const subjectText =
        formData.subject?.trim() ||
        `Demande de devis - ${formData.company} (${formData.serviceType})`;

      const formPayload = new FormData();
      formPayload.append('name', formData.fullName);
      formPayload.append('company', formData.company);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('serviceType', formData.serviceType);
      formPayload.append('subject', subjectText);
      formPayload.append('message', formData.message);

      const response = await fetch('https://formbold.com/s/91YVA', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json().catch(() => null);
        const msg =
          data?.message ||
          (lang === 'fr'
            ? 'Une erreur est survenue lors de l’envoi. Veuillez réessayer ou nous contacter par téléphone.'
            : 'An error occurred during submission. Please try again or contact us directly.');
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (err) {
      console.error('Formbold submission error:', err);
      setErrorMessage(
        lang === 'fr'
          ? 'Une difficulté de transmission est survenue. Vous pouvez nous contacter directement à tomcos@tomcos.fr ou au +33 4 92 98 10 67.'
          : 'A network error occurred. You can reach us directly at tomcos@tomcos.fr or +33 4 92 98 10 67.'
      );
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      serviceType: serviceOptions[0],
      volumeEstimated: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t.form.successTitle}</h3>
        <p className="text-neutral-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
          {t.form.successMsg}
        </p>

        <div className="bg-neutral-50 rounded-xl p-4 max-w-md mx-auto mb-8 border border-neutral-200 text-left text-xs space-y-1.5 text-neutral-700">
          <div className="font-semibold text-neutral-900 mb-1">
            {lang === 'fr' ? 'Récapitulatif transmis à nos équipes :' : 'Summary sent to our team:'}
          </div>
          <div><span className="text-neutral-500">Contact :</span> {formData.fullName} ({formData.company})</div>
          <div><span className="text-neutral-500">Email :</span> {formData.email}</div>
          <div><span className="text-neutral-500">Téléphone :</span> {formData.phone}</div>
          {formData.subject && <div><span className="text-neutral-500">Objet :</span> {formData.subject}</div>}
          <div><span className="text-neutral-500">Prestation :</span> {formData.serviceType}</div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-900 border border-neutral-300 hover:bg-neutral-100 transition-colors"
        >
          {t.form.reset}
        </button>
      </div>
    );
  }

  return (
    <form
      action="https://formbold.com/s/91YVA"
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500">
        <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
        <span>{lang === 'fr' ? 'Demande de devis & faisabilité' : 'Quotation & Feasibility Request'}</span>
      </div>

      {status === 'error' && errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            {t.form.fullName} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Ex : Claire Moreau"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            {t.form.company} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Ex : Maison Grasse Parfums"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            {t.form.email} <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="contact@votre-marque.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            {t.form.phone} <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+33 6 12 34 56 78"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400 tabular-nums"
          />
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            {lang === 'fr' ? 'Objet du message' : 'Subject'}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject || ''}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder={
              lang === 'fr'
                ? 'Ex : Demande de devis - Conditionnement coffrets parfum 50ml'
                : 'e.g., Quotation request - 50ml Perfume box packaging'
            }
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
          {t.form.message} <span className="text-rose-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={
            lang === 'fr'
              ? 'Précisez votre type de produit (parfum, crème, sérum, coffret), vos contraintes d’étui, calage, délais souhaités...'
              : 'Specify your product type, packaging formats, boxing constraints, timeline...'
          }
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400"
        ></textarea>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-600">
          {lang === 'fr'
            ? 'Données traitées en toute confidentialité par TOMCOS.'
            : 'Handled strictly confidentially by TOMCOS.'}
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 active:scale-95 transition-all shadow-md disabled:opacity-50"
        >
          <span>{status === 'submitting' ? t.form.submitting : (lang === 'fr' ? 'Envoyer le message' : 'Send Message')}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
};
