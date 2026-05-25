export type CaseStudy = {
  brief: string;
  build: string;
  result: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  status: 'live' | 'in-dev' | 'coming-soon';
  category: string;
  stack: string[];
  featured?: boolean;
  url?: string;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  gallery?: Array<{ src: string; alt?: string }>;
  placeholderEmoji?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    id: 'vectra',
    title: 'Vectra',
    description: 'Multi-channel news aggregator that pulls and filters content from many sources in one feed.',
    status: 'live',
    category: 'News aggregator',
    stack: ['Next.js', 'Postgres', 'Supabase'],
    featured: true,
    url: 'https://vectra-blue.vercel.app/',
    gallery: [
      { src: '/vectra-project.jpg', alt: 'Vectra — homepage' },
      { src: '/vectra-2.jpg', alt: 'Vectra — feed' },
    ],
    caseStudy: {
      brief: 'A single feed for readers who track many topics across many sources — without the noise or the tab overload.',
      build: 'Pulling from 20+ sources means inconsistent formats and duplicate stories. Built a normalisation layer with Postgres and a filtering UI that stays out of the way.',
      result: 'A fast, filterable reader that feels quiet even when the news isn\'t. One place, all your sources.',
    },
  },
  {
    id: 'stryde',
    title: 'Stryde',
    description: 'Luxury footwear & essentials brand. Hand-crafted in Portugal, minimalist editorial aesthetic.',
    status: 'live',
    category: 'E-commerce landing page',
    stack: ['Next.js', 'Tailwind CSS'],
    url: 'https://stryde-theta.vercel.app/',
    gallery: [
      { src: '/stryde-home.jpg', alt: 'Stryde — homepage' },
      { src: '/stryde-2.jpg', alt: 'Stryde — products' },
    ],
    caseStudy: {
      brief: 'Launch a luxury footwear brand with an editorial feel — not a typical e-commerce grid, but a visual statement.',
      build: 'Minimalism in fashion can easily feel sterile. The challenge was communicating craft and premium quality through restraint — every spacing decision, every type choice had to earn its place.',
      result: 'A landing that positions Stryde alongside high-end editorial brands before a single product is clicked.',
    },
  },
  {
    id: 'ironworks',
    title: 'Ironworks Boxing Club',
    description: 'London boxing gym website. Coaching, schedule, membership tiers — honest, no-frills, community-first.',
    status: 'live',
    category: 'Gym landing page',
    stack: ['Next.js', 'Tailwind CSS'],
    url: 'https://ironworks-two.vercel.app/',
    media: {
      type: 'image',
      src: '/ironworks-home.jpg',
      alt: 'Ironworks Boxing Club — homepage screenshot',
    },
    caseStudy: {
      brief: 'Give a community boxing gym a web presence that\'s honest, direct, and welcoming to all levels — not just the regulars.',
      build: 'Most gym sites are either too corporate or too rough. Ironworks needed to feel real — gritty but not intimidating. Bold typography, clear schedule, transparent membership pricing.',
      result: 'Clean information architecture that attracts both first-timers and serious fighters. The tone does as much work as the layout.',
    },
  },
  {
    id: 'maison-oriel',
    title: 'Maison Oriel',
    description: 'Fine dining restaurant and wine bar in Marseille. Slow cooking, low-intervention wines, French-Mediterranean cuisine.',
    status: 'live',
    category: 'Restaurant landing page',
    stack: ['Next.js', 'Tailwind CSS'],
    url: 'https://maison-oriel.vercel.app/',
    gallery: [
      { src: '/maison-oriel-home.jpg', alt: 'Maison Oriel — main page' },
      { src: '/maison-oriel-menu.jpg', alt: 'Maison Oriel — menu' },
    ],
    caseStudy: {
      brief: 'Build an online presence for a fine dining restaurant that feels as considered as the menu — not just a booking widget with a logo.',
      build: 'Restaurant sites often feel transactional. Maison Oriel needed to communicate atmosphere before you look at the menu. Warm editorial palette, unhurried layout, typography that breathes.',
      result: 'An editorial experience that puts you in the room. Warm, considered, and impossible to skim.',
    },
  },
  {
    id: 'mirra',
    title: 'Mirra',
    description: 'Sleep and wellness app landing page. Guided breathing, ambient soundscapes, sleep stories — calm by design, no streaks, no guilt.',
    status: 'live',
    category: 'App landing page',
    stack: ['Next.js', 'Tailwind CSS'],
    url: 'https://mirra-sleep.vercel.app/',
    media: {
      type: 'image',
      src: '/mirra-home.jpg',
      alt: 'Mirra — sleep app landing page',
    },
    caseStudy: {
      brief: 'Build a calming product landing for an app that\'s deliberately anti-app — no streaks, no gamification, just rest.',
      build: 'Almost every wellness app landing looks the same: dark mode, glowing orbs, bold claims. Mirra needed to look like it meant what it said — quiet, spacious, genuinely restful.',
      result: 'A landing that communicates the product\'s philosophy before the user reads a single word.',
    },
  },
  {
    id: 'dental',
    title: 'Aldwych Dental',
    description: 'Private dental clinic in central London. Clean, trust-first design with transparent pricing, team bios, and online booking.',
    status: 'live',
    category: 'Medical landing page',
    stack: ['Next.js', 'Tailwind CSS'],
    url: 'https://dental-center-three.vercel.app/',
    gallery: [
      { src: '/dental-1.jpg', alt: 'Aldwych Dental — homepage' },
      { src: '/dental-2.jpg', alt: 'Aldwych Dental — services' },
      { src: '/dental-3.jpg', alt: 'Aldwych Dental — team' },
    ],
    caseStudy: {
      brief: 'Build a modern website for a private London dental practice that converts anxious patients into confident bookings.',
      build: 'Healthcare sites live or die on trust. The challenge was balancing clinical credibility with a warm, approachable tone — clear pricing, real team photos, and a booking flow that doesn\'t feel like a form.',
      result: 'A professional, patient-first site that addresses anxiety before it forms — with transparent fees and a calm aesthetic that reflects the clinic itself.',
    },
  },
  {
    id: 'kotleta',
    title: 'Kotleta & Co.',
    description: 'Specialty coffee bar and all-day brunch kitchen in Saint Petersburg. Slow coffee, kind mornings, warm kitchen.',
    status: 'live',
    category: 'Café landing page',
    stack: ['Next.js', 'Tailwind CSS'],
    url: 'https://kotleta-co-cafe.vercel.app/',
    media: {
      type: 'image',
      src: '/kotleta-project.jpg',
      alt: 'Kotleta & Co. — café landing page screenshot',
    },
    caseStudy: {
      brief: 'Create a warm digital home for a specialty café that felt handcrafted and specific — not another coffee template.',
      build: 'Coffee culture has a visual language that quickly goes generic. The challenge was being specific to Kotleta: the neighbourhood, the kitchen, the vibe. Warm tones, relaxed copy, real character.',
      result: 'A cosy, characterful landing that reads like a regular wrote it — because the best cafés always feel personal.',
    },
  },
  {
    id: 'cafe-landing',
    title: 'Café landing',
    description: 'Menu, hours, reservations.',
    status: 'coming-soon',
    category: 'Landing page',
    stack: [],
    placeholderEmoji: '☕',
  },
  {
    id: 'barbershop',
    title: 'Barbershop site',
    description: 'Booking, gallery, team.',
    status: 'coming-soon',
    category: 'Landing page',
    stack: [],
    placeholderEmoji: '💈',
  },
  {
    id: 'fitness-coach',
    title: 'Fitness coach',
    description: 'Programs, signups, payments.',
    status: 'coming-soon',
    category: 'Web app',
    stack: [],
    placeholderEmoji: '🏋️',
  },
];
