import React from 'react';

interface FlagProps {
  className?: string;
}

/**
 * Drapeau français en SVG natif
 * Garantit un affichage parfait et identique sur Windows, macOS, Linux, iOS et Android.
 */
export const FlagFR: React.FC<FlagProps> = ({ className = 'w-4 h-3' }) => (
  <svg
    viewBox="0 0 900 600"
    className={`${className} inline-block shrink-0 rounded-[2px] shadow-2xs overflow-hidden align-middle`}
    aria-label="Drapeau Français"
    role="img"
  >
    <rect width="900" height="600" fill="#ED2939" />
    <rect width="600" height="600" fill="#FFFFFF" />
    <rect width="300" height="600" fill="#002395" />
  </svg>
);

/**
 * Drapeau britannique (Union Jack) en SVG natif
 * Garantit un affichage parfait et identique sur tous les systèmes d'exploitation.
 */
export const FlagGB: React.FC<FlagProps> = ({ className = 'w-4 h-3' }) => (
  <svg
    viewBox="0 0 60 30"
    className={`${className} inline-block shrink-0 rounded-[2px] shadow-2xs overflow-hidden align-middle`}
    aria-label="Flag of the United Kingdom"
    role="img"
  >
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);
