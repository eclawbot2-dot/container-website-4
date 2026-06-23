import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LangProvider } from '@/components/LangProvider';
import { Embers } from '@/components/Embers';
import { VENUE_COORDS } from '@/lib/config';

const SITE_URL = 'https://container4.jahdev.com';
const CANONICAL = `${SITE_URL}/`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'THE CONTAINER · Jeddah · Red Sea Electronic-Music Venue',
  description:
    "The Container — Jeddah's Red Sea electronic-music venue inside Shams Container Terminal. Licensed live techno & house events. Anja Schneider, Cassy and more on the Saudi waterfront.",
  keywords: [
    'The Container Jeddah',
    'Shams Container Terminal',
    'Jeddah techno',
    'Red Sea music venue',
    'Saudi Arabia electronic music',
    'Anja Schneider Jeddah',
    'Cassy Jeddah',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: {
      en: CANONICAL,
      ar: CANONICAL,
      'x-default': CANONICAL,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'The Container',
    title: 'THE CONTAINER · Jeddah · Red Sea Electronic-Music Venue',
    description:
      "Jeddah's Red Sea electronic-music venue at Shams Container Terminal. Licensed live techno & house events on the Saudi waterfront.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1920,
        height: 1280,
        alt: 'The Container — a glowing mainstage on the Jeddah Red Sea waterfront',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE CONTAINER · Jeddah · Red Sea Electronic-Music Venue',
    description:
      "Jeddah's Red Sea electronic-music venue at Shams Container Terminal. Licensed live techno & house events.",
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#160a25',
  width: 'device-width',
  initialScale: 1,
};

// schema.org structured data: MusicVenue + Events
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MusicVenue',
      '@id': `${SITE_URL}/#venue`,
      name: 'The Container',
      url: SITE_URL,
      description:
        "Jeddah's Red Sea electronic-music venue inside Shams Container Terminal, hosting licensed live techno and house events.",
      image: `${SITE_URL}/og-image.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shams Container Terminal, Al Moulysaa district',
        addressLocality: 'Jeddah',
        addressRegion: 'Makkah Province',
        addressCountry: 'SA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: VENUE_COORDS.lat,
        longitude: VENUE_COORDS.lng,
      },
    },
    {
      '@type': 'Event',
      name: 'Anja Schneider at The Container',
      startDate: '2026-08-21T20:00:00+03:00',
      endDate: '2026-08-22T03:00:00+03:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: `${SITE_URL}/events/anja-schneider/`,
      location: { '@id': `${SITE_URL}/#venue` },
      image: `${SITE_URL}/og-image.jpg`,
      performer: { '@type': 'MusicGroup', name: 'Anja Schneider' },
      organizer: { '@type': 'Organization', name: 'The Container', url: SITE_URL },
    },
    {
      '@type': 'Event',
      name: 'Cassy at The Container',
      startDate: '2026-09-11T20:00:00+03:00',
      endDate: '2026-09-12T03:00:00+03:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: `${SITE_URL}/events/cassy/`,
      location: { '@id': `${SITE_URL}/#venue` },
      image: `${SITE_URL}/og-image.jpg`,
      performer: { '@type': 'MusicGroup', name: 'Cassy' },
      organizer: { '@type': 'Organization', name: 'The Container', url: SITE_URL },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Spectral:wght@400;500;600&family=Cairo:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="atmosphere" aria-hidden />
        <div className="vignette" aria-hidden />
        <Embers />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
