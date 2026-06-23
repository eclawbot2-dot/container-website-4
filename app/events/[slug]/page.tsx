import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { EventDetail } from '@/components/EventDetail';
import { EVENT_SLUGS, getEvent, VENUE_COORDS } from '@/lib/config';

const SITE_URL = 'https://container4.jahdev.com';

export function generateStaticParams() {
  return EVENT_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ev = getEvent(params.slug);
  if (!ev) return { title: 'Event not found · The Container' };

  const title = `${ev.artist} at The Container · Jeddah`;
  const description = ev.bio
    ? `${ev.artist} live at The Container, Shams Container Terminal, Jeddah — ${new Date(
        ev.dateISO + 'T00:00:00',
      ).toDateString()}. ${ev.bio.en}`
    : `${ev.artist} live at The Container, Jeddah.`;
  const canonical = `${SITE_URL}/events/${ev.id}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: 'The Container',
      title,
      description,
      images: [{ url: '/og-image.jpg', width: 1920, height: 1280, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const ev = getEvent(params.slug);
  if (!ev) notFound();

  // Per-event structured data (verified facts only)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${ev.artist} at The Container`,
    startDate: `${ev.dateISO}T20:00:00+03:00`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: `${SITE_URL}/events/${ev.id}/`,
    image: `${SITE_URL}/og-image.jpg`,
    performer: { '@type': 'MusicGroup', name: ev.artist },
    organizer: { '@type': 'Organization', name: 'The Container', url: SITE_URL },
    location: {
      '@type': 'MusicVenue',
      name: 'The Container',
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <EventDetail ev={ev} />
      <Footer />
    </>
  );
}
