import React, { useState } from 'react';
import { PageId, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');
  const [lang, setLang] = useState<Language>('fr');
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleNavigate = (page: PageId, serviceOption?: string) => {
    if (serviceOption) {
      setPreselectedService(serviceOption);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7] text-neutral-900 selection:bg-[#83bad8] selection:text-neutral-950 font-sans">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={setLang}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'accueil' && (
          <HomePage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'apropos' && (
          <AboutPage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} lang={lang} />
        )}
        {currentPage === 'contact' && (
          <ContactPage lang={lang} selectedService={preselectedService} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
}
