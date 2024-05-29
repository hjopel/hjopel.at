import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/ui/nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://hjopel.at'),
  title: {
    default: 'Jan Hoppel',
    template: '%s | Jan Hoppel'
  },
  description:
    'Fullstack developer with a passion for creating versatile and modern software solutions.',
  openGraph: {
    title: 'Jan Hoppel',
    description:
      'Fullstack developer with a passion for creating versatile and modern software solutions.',
    url: 'https://hjopel.at',
    siteName: 'Jan Hoppel',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Jan Hoppel',
    card: 'summary_large_image'
  }
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71'
  // }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('text-black bg-white dark:text-white dark:bg-[#111010]')}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
