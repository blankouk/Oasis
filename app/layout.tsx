import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oasis Studio — Web things, crafted with care.',
  description:
    'Independent dev studio building modern web apps, landing pages and MVPs. Run by Artem — student, builder, occasional perfectionist.',
  openGraph: {
    title: 'Oasis Studio',
    description: 'Web things, crafted with care.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} style={{ overflowX: 'clip' }}>
      <body className="bg-oasis-bg text-oasis-ink antialiased" style={{ overflowX: 'clip' }}>
        {children}
      </body>
    </html>
  );
}
