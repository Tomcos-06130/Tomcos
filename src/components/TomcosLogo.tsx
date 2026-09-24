import React from 'react';

interface TomcosLogoProps {
  className?: string;
  idSuffix?: string;
}

export const TomcosLogo: React.FC<TomcosLogoProps> = ({
  className = 'h-10 w-auto',
  idSuffix = 'main',
}) => {
  const weaveBlueId = `tomcos-weave-blue-${idSuffix}`;
  const weaveGoldId = `tomcos-weave-gold-${idSuffix}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 460"
      className={className}
      aria-label="TOMCOS Logo"
      role="img"
    >
      <defs>
        {/* Weave pattern for Turquoise/Blue outer bracket */}
        <pattern id={weaveBlueId} width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#38AFD5" />
          <line x1="0" y1="2" x2="8" y2="2" stroke="#4EC1EC" strokeWidth="1.2" opacity="0.85" />
          <line x1="0" y1="6" x2="8" y2="6" stroke="#2388AD" strokeWidth="1.2" opacity="0.75" />
          <line x1="2" y1="0" x2="2" y2="8" stroke="#4EC1EC" strokeWidth="1.2" opacity="0.85" />
          <line x1="6" y1="0" x2="6" y2="8" stroke="#1D789B" strokeWidth="1.2" opacity="0.75" />
          <circle cx="2" cy="6" r="0.9" fill="#176380" opacity="0.65" />
          <circle cx="6" cy="2" r="0.9" fill="#176380" opacity="0.65" />
        </pattern>

        {/* Weave pattern for Sand/Gold inner bracket */}
        <pattern id={weaveGoldId} width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#DABF8E" />
          <line x1="0" y1="2" x2="8" y2="2" stroke="#EEDCAA" strokeWidth="1.2" opacity="0.85" />
          <line x1="0" y1="6" x2="8" y2="6" stroke="#B89B65" strokeWidth="1.2" opacity="0.75" />
          <line x1="2" y1="0" x2="2" y2="8" stroke="#EEDCAA" strokeWidth="1.2" opacity="0.85" />
          <line x1="6" y1="0" x2="6" y2="8" stroke="#9E824F" strokeWidth="1.2" opacity="0.75" />
          <circle cx="2" cy="6" r="0.9" fill="#886E3C" opacity="0.65" />
          <circle cx="6" cy="2" r="0.9" fill="#886E3C" opacity="0.65" />
        </pattern>
      </defs>

      {/* Textured Architectural L-shape */}
      <g id="rulers">
        {/* Sand Vertical & Horizontal */}
        <rect
          x="76"
          y="28"
          width="36"
          height="398"
          fill={`url(#${weaveGoldId})`}
          stroke="#B59862"
          strokeWidth="1.2"
        />
        <rect
          x="38"
          y="390"
          width="320"
          height="36"
          fill={`url(#${weaveGoldId})`}
          stroke="#B59862"
          strokeWidth="1.2"
        />

        {/* Turquoise Vertical & Horizontal */}
        <rect
          x="54"
          y="42"
          width="37"
          height="404"
          fill={`url(#${weaveBlueId})`}
          stroke="#1F83A7"
          strokeWidth="1.2"
        />
        <rect
          x="18"
          y="406"
          width="318"
          height="37"
          fill={`url(#${weaveBlueId})`}
          stroke="#1F83A7"
          strokeWidth="1.2"
        />
      </g>

      {/* Layer 1: Semi-transparent Drop Shadow Letters */}
      <g
        fontFamily="'Didot', 'Bodoni MT', 'Times New Roman', 'Playfair Display', Georgia, serif"
        fill="#BDC0C8"
        opacity="0.85"
      >
        <text x="140" y="156" fontSize="140" fontWeight="400" textAnchor="middle">
          T
        </text>
        <text x="144" y="270" fontSize="140" fontWeight="400" textAnchor="middle">
          O
        </text>
        <text x="144" y="386" fontSize="132" fontWeight="400" textAnchor="middle">
          M
        </text>
        <text x="204" y="400" fontSize="134" fontWeight="400" fontStyle="italic">
          cos
        </text>
        <text x="430" y="332" fontSize="28" fontWeight="400">
          ®
        </text>
      </g>

      {/* Layer 2: Main Grey Serif Letters */}
      <g
        fontFamily="'Didot', 'Bodoni MT', 'Times New Roman', 'Playfair Display', Georgia, serif"
        fill="#666A73"
        fontWeight="400"
      >
        <text x="130" y="146" fontSize="140" textAnchor="middle">
          T
        </text>
        <text x="134" y="260" fontSize="140" textAnchor="middle">
          O
        </text>
        <text x="134" y="376" fontSize="132" textAnchor="middle">
          M
        </text>
        <text x="194" y="390" fontSize="134" fontStyle="italic">
          cos
        </text>
        <text x="420" y="322" fontSize="28">
          ®
        </text>
      </g>
    </svg>
  );
};
