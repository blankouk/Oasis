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
  placeholderEmoji?: string;
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
    media: {
      type: 'image',
      src: '/vectra-project.jpg',
      alt: 'Vectra — news aggregator screenshot',
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
