import { Language } from '../types';
import heroDroplet from '../assets/images/hero_serum_droplet_1790190108436.jpg';
import bottlesLine from '../assets/images/packaging_bottles_line_1790188964352.jpg';
import boxesCoffrets from '../assets/images/luxury_boxes_coffrets_1790188974421.jpg';
import qualityLab from '../assets/images/lab_sample_vials_1790190332674.jpg';
import grasseLandscape from '../assets/images/grasse_perfume_capital_1790190855045.jpg';

export const COMPANY_INFO = {
  name: 'TOMCOS',
  taglineFr: 'Travail à façon de produits cosmétiques & parfums',
  taglineEn: 'Contract manufacturing & packaging for cosmetics & perfumes',
  phone: '+33 4 92 98 10 67',
  phoneRaw: '+33492981067',
  email: 'tomcos@tomcos.fr',
  address: {
    site: 'AromaGrasse',
    street: '45, boulevard Marcel Pagnol',
    postalCode: '06130',
    city: 'GRASSE',
    country: 'France',
  },
  openingHours: 'Du Lundi au Vendredi : 8h45 - 17h',
};

export const CONTENT = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      ctaQuote: 'Demander un devis',
    },
    topBar: {
      speciality: 'Spécialiste du travail à façon cosmétique & parfum',
      location: 'Grasse, Capitale mondiale du parfum',
    },
    hero: {
      subtitle: 'Savoir-faire de Grasse • Fabrication Française',
      title: 'Travail à façon de produits cosmétiques et parfums',
      description: 'Basée à Grasse, la société TOMCOS offre l’excellence en matière de rigueur, qualité et rapidité pour le conditionnement et la valorisation de vos créations.',
      ctaPrimary: 'Demander un devis',
      ctaSecondary: 'Découvrir nos services',
      badgePill: 'Qualité ISO & Normes en vigueur',
    },
    competences: {
      title: 'Nos domaines de compétence',
      subtitle: 'Une polyvalence industrielle et artisanale pour sublimer vos produits',
      items: [
        {
          num: '01',
          title: 'Conditionnement & Étuyage',
          description: 'Mise en étui pattes opposées ou alternées, avec ou sans cale, insertion de notices et finitions précises adaptées à vos lignes.',
        },
        {
          num: '02',
          title: 'Coffrets, Cartonnettes & Céllophanage',
          description: 'Montage de coffrets luxe, pose sur cartonnettes et regroupement sous film thermorétractable ou céllophanage pli en X pour une présentation impeccable.',
        },
        {
          num: '03',
          title: 'Qualité, Échantillons & Logistique',
          description: 'Contrôle continu, traçabilité rigoureuse, échantillothèque aux normes et gestion de stock avec inventaire permanent.',
        },
      ],
      cta: 'Voir tous nos services',
    },
    conditioningSpotlight: {
      tag: 'Atelier de précision',
      title: 'Conditionnement',
      lead: 'Spécialiste dans le travail à façon et le conditionnement, TOMCOS vous offre toute son expertise face au besoin de haute qualité qu’exige l’industrie des cosmétiques et des parfums.',
      paragraphs: [
        'La polyvalence de nos ateliers permet la mise en étui avec pattes opposées ou alternées, avec ou sans cale, ainsi que l’insertion soignée de vos notices.',
        'Vos produits sont disposés sur cartonnettes, en coffrets prestigieux ou regroupés sous film : nous déployons la solution sur-mesure adaptée à chaque gamme.',
        'Selon vos besoins, nous sommes en mesure de vous apporter une aide précieuse dans le choix de vos emballages et dans la recherche des fournisseurs les plus fiables.',
      ],
      cta: 'Prendre contact avec l’atelier',
    },
    pillars: [
      {
        tag: 'Norme BPF Cosmétique',
        title: 'ISO 22716',
        desc: 'Application rigoureuse des Bonnes Pratiques de Fabrication (BPF) cosmétiques : maîtrise de l’hygiène, sécurisation des lignes de conditionnement, traçabilité exhaustive et contrôle qualité permanent.',
      },
      {
        tag: 'Certification Biologique & Écologique',
        title: 'Ecocert',
        desc: 'Conformité certifiée pour le façonnage de vos gammes bio et naturelles. Processus audités garantissant le respect environnemental, l’intégrité des ingrédients et des filières écoresponsables.',
      },
      {
        tag: 'Standard International Bio',
        title: 'Cosmos',
        desc: 'Respect scrupuleux du référentiel Cosmos (Organic & Natural) : absence totale de contamination croisée, traçabilité documentaire sans faille et protocoles de nettoyage validés.',
      },
    ],
    servicesList: [
      {
        id: 'conditionnement-etuyage',
        title: 'Conditionnement & Étuyage de précision',
        summary: 'Mise en étui personnalisée et finitions irréprochables.',
        detail: 'La polyvalence de nos ateliers permet la mise en étui avec pattes opposées ou alternées, avec ou sans cale, et l’insertion de toutes vos notices explicatives.',
        points: [
          'Pattes d’étuis opposées ou alternées',
          'Intégration de cales sur-mesure (carton ou thermoformé)',
          'Insertion automatique et manuelle de notices',
          'Adaptabilité aux flacons, pots, tubes et roll-on',
        ],
      },
      {
        id: 'coffrets-cellophanage',
        title: 'Coffrets, Cartonnettes & Regroupement sous film',
        summary: 'Présentation prestige pour coffrets cadeaux et gammes retail.',
        detail: 'Vos produits sont disposés sur cartonnettes, en coffrets ou regroupés sous film : nous avons la solution technique et esthétique qui convient à vos exigences commerciales.',
        points: [
          'Montage et garnissage de coffrets prestige',
          'Disposition sur cartonnettes de présentation',
          'Fardelage, mise sous film thermorétractable ou céllophanage pli en X',
          'Étiquetage code-barres et scellés de sécurité',
        ],
      },
      {
        id: 'sourcing-emballage',
        title: 'Aide au choix d’emballages & Sourcing fournisseurs',
        summary: 'Conseil expert pour sécuriser et valoriser vos composants.',
        detail: 'Selon vos besoins, nous sommes en mesure de vous apporter une aide dans le choix de vos emballages et dans la recherche de fournisseurs qualifiés du secteur cosmétique.',
        points: [
          'Analyse de compatibilité packaging / machine',
          'Recommandations de fournisseurs partenaires en France et Europe',
          'Optimisation des coûts et des délais d’approvisionnement',
          'Conseils sur l’éco-conception et la recyclabilité',
        ],
      },
      {
        id: 'qualite-tracabilite',
        title: 'Service Qualité permanent & Échantillothèque',
        summary: 'Respect absolu de vos cahiers des charges et traçabilité.',
        detail: 'Notre service qualité présent en permanence lors du conditionnement de vos produits assure le respect scrupuleux de vos cahiers de charges et une traçabilité parfaite de tous vos produits. La conservation de vos échantillons témoins est assurée selon les normes en vigueur.',
        points: [
          'Contrôle qualité continu en cours de production',
          'Traçabilité complète des lots et composants',
          'Conservation d’échantillons témoins aux normes',
          'Dossier de lot et certificats de conformité (ISO 22716, Ecocert, Cosmos)',
        ],
      },
      {
        id: 'stockage-logistique',
        title: 'Stockage & Logistique avec inventaire permanent',
        summary: 'Gestion intégrée de vos stocks et expéditions sans rupture.',
        detail: 'Notre service logistique assure le stockage de vos vracs, vos emballages et vos produits finis et réalise un inventaire permanent afin de vous garantir une réponse immédiate et vous avertir avant rupture.',
        points: [
          'Stockage sécurisé des vracs cosmétiques et emballages',
          'Inventaire informatisé permanent en temps réel',
          'Alerte prompte de réapprovisionnement avant rupture',
          'Expédition maîtrisée vers vos réseaux distributeurs',
        ],
      },
    ],
    about: {
      badge: 'Implantation historique à Grasse',
      headline: 'L’excellence du travail à façon au cœur de la parfumerie mondiale',
      description: 'La société TOMCOS, située à Grasse au sein du pôle AromaGrasse dans le sud de la France, est spécialisée dans le travail à façon de tous vos produits cosmétiques et parfums.',
      vocationBadge: 'Atelier de Façonnage & Savoir-Faire',
      vocationTitle: 'Notre Vocation Industrielle & Notre Engagement',
      vocationLead: 'Donner ce qu’il y a de meilleur en termes de rigueur, de qualité et de rapidité pour vos produits.',
      vocationText1: 'Notre souhait est d’apporter une exigence absolue de rigueur, de qualité et de réactivité. Nous accompagnons aussi bien les maisons de parfum de renom que les marques cosmétiques émergentes en quête d’un partenaire industriel agile et rigoureux.',
      vocationText2: 'Implantée au 45 boulevard Marcel Pagnol au sein du pôle technologique AromaGrasse, TOMCOS bénéficie d’un écosystème d’exception au cœur de la capitale mondiale des fragrances, garantissant des délais maîtrisés et des contrôles qualité stricts.',
      facilityTag: 'Atelier de conditionnement & Échantillothèque normée',
      facilitySubtitle: 'AromaGrasse · Site de conditionnement à Grasse',
      vocationFooter: 'AromaGrasse · 45 boulevard Marcel Pagnol, 06130 Grasse',
      grasse: {
        badge: 'Héritage & Terroir d’Exception',
        title: 'Grasse, Capitale Mondiale des Parfums et des Senteurs',
        lead: 'Une terre d’artisanat d’art et de savoir-faire olfactifs séculaires inscrits au Patrimoine Culturel Immatériel de l’UNESCO.',
        text1: "Grasse est une ville de la Côte d'Azur, située dans les collines au nord de la ville de Cannes. Elle est connue pour son industrie du parfum, établie de longue date, dont l'héritage est célébré au musée international de la Parfumerie, en plein cœur de la ville.",
        text2: 'Implantée au cœur du pôle technologique AromaGrasse, la société TOMCOS s’inscrit fièrement dans cette tradition d’exigence. Nous apportons aux créateurs, maisons de prestige et marques cosmétiques un façonnage, un étuyage et un conditionnement respectueux du raffinement et de l’élégance grassoise.',
        unescoTag: 'Savoir-faire liés au parfum en Pays de Grasse (UNESCO)',
        regionTag: 'Pays de Grasse · Côte d’Azur France',
        footerTag: 'Grasse · Alpes-Maritimes · Côte d’Azur France',
        linkLabel: 'Découvrir Grasse sur Côte d’Azur France',
      },
      values: [
        {
          tag: 'Valeur 01',
          title: 'Rigueur Industrielle',
          description: 'Tolérances strictes, vérification continue du scellage, de l’étiquetage et des volumes conditionnés.',
        },
        {
          tag: 'Valeur 02',
          title: 'Qualité & Traçabilité',
          description: 'Suivi millimétré de chaque composant et conservation des lots témoins pour une sécurité juridique totale.',
        },
        {
          tag: 'Valeur 03',
          title: 'Rapidité & Proximité',
          description: 'Atelier réactif à Grasse avec inventaire permanent pour anticiper vos besoins et éviter toute rupture de stock.',
        },
      ],
    },
    contact: {
      badge: 'Un projet de façonnage ?',
      title: 'Contactez notre société',
      subtitle: 'Remplissez le formulaire ci-dessous pour nous faire part de vos besoins en conditionnement ou obtenir un devis personnalisé sous 24h à 48h.',
      form: {
        fullName: 'Nom & Prénom',
        company: 'Société / Marque',
        email: 'Email professionnel',
        phone: 'Téléphone',
        service: 'Service recherché',
        volume: 'Volume prévisionnel estimé (optionnel)',
        message: 'Détails de votre projet (produits, formats, délais...)',
        submit: 'Envoyer ma demande',
        submitting: 'Transmission en cours...',
        successTitle: 'Demande envoyée avec succès !',
        successMsg: 'Merci de votre intérêt pour TOMCOS. Notre responsable d’atelier vous contactera sous 24h ouvrées.',
        reset: 'Envoyer un autre message',
      },
      directTitle: 'Coordonnées directes',
      directSubtitle: 'Vous préférez échanger de vive voix avec notre équipe technique ?',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      ctaQuote: 'Request a Quote',
    },
    topBar: {
      speciality: 'Specialist in custom cosmetics & perfume contract manufacturing',
      location: 'Grasse, World Perfume Capital',
    },
    hero: {
      subtitle: 'Grasse Heritage • Made in France',
      title: 'Contract Manufacturing & Packaging for Cosmetics & Perfumes',
      description: 'Located in Grasse, TOMCOS delivers excellence in precision, quality, and speed for packaging and elevating your beauty and perfume lines.',
      ctaPrimary: 'Request a Quote',
      ctaSecondary: 'Discover Our Services',
      badgePill: 'ISO Quality & Active Regulatory Standards',
    },
    competences: {
      title: 'Our Core Competencies',
      subtitle: 'Industrial versatility and artisanal attention to detail',
      items: [
        {
          num: '01',
          title: 'Packaging & Boxing',
          description: 'Cartoning with opposite or alternating flaps, with or without inserts, leaflet insertion, and refined finishes.',
        },
        {
          num: '02',
          title: 'Gift Sets & Overwrapping',
          description: 'Luxury gift set assembly, backing cards, and shrink-wrapping for flawless shelf presentation.',
        },
        {
          num: '03',
          title: 'Quality, Retained Samples & Logistics',
          description: 'Permanent on-site QA, comprehensive traceability, standard-compliant sample storage, and real-time inventory.',
        },
      ],
      cta: 'View All Services',
    },
    conditioningSpotlight: {
      tag: 'Precision Workshop',
      title: 'Contract Packaging',
      lead: 'Specializing in custom manufacturing and packaging, TOMCOS brings high-level expertise meeting the demanding quality standards of luxury cosmetics and perfumery.',
      paragraphs: [
        'Our workshops handle cartoning with opposite or alternating flaps, with or without bespoke inserts, and automated or manual leaflet placement.',
        'Whether your products are mounted on display cards, packaged in prestige gift boxes, or grouped under film, we tailor the exact technical solution.',
        'According to your requirements, we assist in selecting packaging materials and finding reliable component suppliers.',
      ],
      cta: 'Contact the Workshop',
    },
    pillars: [
      {
        tag: 'Cosmetics GMP Standard',
        title: 'ISO 22716',
        desc: 'Strict adherence to cosmetic Good Manufacturing Practices (GMP): comprehensive hygiene control, secure packaging lines, full batch traceability, and permanent quality control.',
      },
      {
        tag: 'Organic & Eco Certification',
        title: 'Ecocert',
        desc: 'Certified compliance for packaging organic and natural ranges. Audited processes guaranteeing environmental responsibility, ingredient integrity, and eco-friendly practices.',
      },
      {
        tag: 'International Organic Standard',
        title: 'Cosmos',
        desc: 'Full alignment with Cosmos specifications (Organic & Natural): zero cross-contamination, seamless documentary traceability, and verified clean-down protocols.',
      },
    ],
    servicesList: [
      {
        id: 'conditionnement-etuyage',
        title: 'Precision Packaging & Cartoning',
        summary: 'Custom box packaging with flawless finishes.',
        detail: 'The flexibility of our workshops enables boxing with opposite or alternating flaps, with or without bespoke inserts, and the insertion of instructional leaflets.',
        points: [
          'Opposite or alternating flap configurations',
          'Bespoke insert integration (cardboard or thermoformed)',
          'Automated & manual leaflet insertion',
          'Adaptability to bottles, jars, tubes, and roll-on',
        ],
      },
      {
        id: 'coffrets-cellophanage',
        title: 'Gift Sets, Backing Cards & Film Wrapping',
        summary: 'Prestige presentation for retail & promotional packs.',
        detail: 'Your products can be arranged on backing cards, inside presentation gift sets, or grouped under shrink film: we provide the ideal solution.',
        points: [
          'Prestige gift set assembly & filling',
          'Display backing card attachment',
          'Protective shrink wrapping and bundling',
          'Barcode labeling and tamper-evident sealing',
        ],
      },
      {
        id: 'sourcing-emballage',
        title: 'Packaging Consultation & Supplier Sourcing',
        summary: 'Expert guidance to secure and optimize your components.',
        detail: 'Depending on your needs, we assist you in choosing the best packaging formats and finding verified suppliers in the cosmetics and perfume industry.',
        points: [
          'Packaging and machine compatibility assessments',
          'Reliable supplier recommendations across France and Europe',
          'Cost and lead-time optimization',
          'Eco-design and recyclability guidance',
        ],
      },
      {
        id: 'qualite-tracabilite',
        title: 'Dedicated Quality Assurance & Sample Archiving',
        summary: 'Total compliance with your specifications and traceability.',
        detail: 'Our on-site quality team ensures strict compliance with your specifications and full traceability for all products. Retention of benchmark samples is maintained in accordance with prevailing standards.',
        points: [
          'In-line quality control during all production runs',
          'Full batch and component traceability',
          'Retention of legal control sample archives',
          'Batch manufacturing records & certificates of analysis (ISO 22716, Ecocert, Cosmos)',
        ],
      },
      {
        id: 'stockage-logistique',
        title: 'Warehousing & Logistics with Permanent Inventory',
        summary: 'Seamless inventory management for bulk and finished goods.',
        detail: 'Our logistics service handles the storage of your bulk ingredients, packaging components, and finished goods, with continuous inventory monitoring to provide immediate answers and warn of potential shortages.',
        points: [
          'Secure storage for cosmetic bulk and components',
          'Continuous real-time digital inventory',
          'Proactive replenishment alerts before stockouts',
          'Coordinated dispatch to your distribution networks',
        ],
      },
    ],
    about: {
      badge: 'Historic Grasse Location',
      headline: 'Contract Manufacturing Excellence in the World Perfume Capital',
      description: 'TOMCOS, located in Grasse within the AromaGrasse industrial park in southern France, is a specialist in contract manufacturing and packaging for cosmetic and fragrance brands.',
      vocationBadge: 'Packaging Workshop & Expertise',
      vocationTitle: 'Our Industrial Purpose & Quality Commitment',
      vocationLead: 'Delivering the utmost in rigor, quality, and speed for your perfume and cosmetics collections.',
      vocationText1: 'Our mission is to uphold uncompromising industrial standards of precision, finishing quality, and agility. We support established fragrance houses and indie cosmetic creators alike with tailor-made packaging solutions.',
      vocationText2: 'Located at 45 boulevard Marcel Pagnol within the AromaGrasse technology park, TOMCOS benefits from an exceptional ecosystem at the center of the world fragrance capital, ensuring controlled lead times and stringent batch traceability.',
      facilityTag: 'Packaging workshop & standard sample library',
      facilitySubtitle: 'AromaGrasse · Packaging facility in Grasse',
      vocationFooter: 'AromaGrasse · 45 boulevard Marcel Pagnol, 06130 Grasse',
      grasse: {
        badge: 'Heritage & Exceptional Terroir',
        title: 'Grasse, World Capital of Perfumes and Fragrances',
        lead: 'A centuries-old tradition of olfactory artistry inscribed on the UNESCO Intangible Cultural Heritage list.',
        text1: 'Grasse is a town on the French Riviera, nestled in the hills north of Cannes. It is renowned for its long-established perfume industry, whose heritage is celebrated at the International Perfume Museum in the heart of the town.',
        text2: 'Located within the specialized AromaGrasse technology park, TOMCOS proudly perpetuates this culture of uncompromising precision. We provide established fragrance houses and beauty brands with cartoning, boxing, and finishing standards worthy of Grasse’s world-renowned reputation.',
        unescoTag: 'Perfume-related knowledge in the Pays de Grasse (UNESCO)',
        regionTag: 'Pays de Grasse · French Riviera',
        footerTag: 'Grasse · Alpes-Maritimes · French Riviera',
        linkLabel: 'Explore Grasse on Côte d’Azur France',
      },
      values: [
        {
          tag: 'Value 01',
          title: 'Industrial Rigor',
          description: 'Strict tolerances, continuous verification of sealing, labeling, and filled packaging volumes.',
        },
        {
          tag: 'Value 02',
          title: 'Quality & Traceability',
          description: 'Millimeter tracking of each component and retention of control batch samples for absolute regulatory safety.',
        },
        {
          tag: 'Value 03',
          title: 'Speed & Proximity',
          description: 'Responsive workshop in Grasse with ongoing inventory to anticipate your needs and prevent any stock shortage.',
        },
      ],
    },
    contact: {
      badge: 'Have a packaging project?',
      title: 'Contact Our Company',
      subtitle: 'Complete the form below to discuss your custom packaging needs or receive a tailored quotation within 24 to 48 hours.',
      form: {
        fullName: 'Full Name',
        company: 'Company / Brand',
        email: 'Business Email',
        phone: 'Phone Number',
        service: 'Primary Service Needed',
        volume: 'Estimated Unit Volume (optional)',
        message: 'Project details (products, formats, timeline...)',
        submit: 'Send Inquiry',
        submitting: 'Submitting inquiry...',
        successTitle: 'Inquiry Sent Successfully!',
        successMsg: 'Thank you for reaching out to TOMCOS. Our workshop management team will get back to you within 24 business hours.',
        reset: 'Send another message',
      },
      directTitle: 'Direct Contact Details',
      directSubtitle: 'Prefer to talk directly to our technical team?',
    },
  },
};

export const IMAGES = {
  heroDroplet,
  bottlesLine,
  boxesCoffrets,
  qualityLab,
  grasseLandscape,
};
