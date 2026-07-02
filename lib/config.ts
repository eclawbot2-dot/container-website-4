// ── Venue config — single place to confirm/swap real values ────────────────
// Canonical production origin (also asserted independently by
// scripts/check-site.mjs so a drift here fails CI).
export const SITE_URL = 'https://container4.jahdev.com';

// No verified Instagram handle exists for this venue. Until one is confirmed,
// the site shows a non-linking "coming soon" placeholder rather than guessing
// a handle/URL that may belong to someone else.
// TODO real IG unknown — set INSTAGRAM_URL to the verified profile when confirmed.
export const INSTAGRAM_URL: string | null = null;

// TODO: no ticket URL yet — placeholder until on sale
export const TICKETS_URL: string | null = null;

// No verified mailbox is provisioned at this address yet; shown as a label.
// TODO real contact email unknown — confirm a monitored mailbox.
export const CONTACT_EMAIL = 'info@container.jahdev.com';
export const CONTACT_EMAIL_LIVE = false; // true once the mailbox is real

// Venue geo (Al Moulysaa district, Jeddah port, Red Sea coast)
export const VENUE_COORDS = { lat: 21.2727, lng: 39.1935 };

// Open the location in Google Maps (keep this text link)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${VENUE_COORDS.lat},${VENUE_COORDS.lng}`;

// Reliable, no-API-key Google Maps embed iframe. `hl` is set to the active language.
export function mapEmbedUrl(lang: 'en' | 'ar' = 'en') {
  return `https://www.google.com/maps?q=${VENUE_COORDS.lat},${VENUE_COORDS.lng}&z=15&hl=${lang}&output=embed`;
}

// Per-event hero artwork (also used as each event page's og:image so link
// unfurls match the page, not the site-wide og-image). All files 1920x1280.
export const EVENT_IMAGES: Record<string, string> = {
  'anja-schneider': '/images/stage-fire.jpg',
  cassy: '/images/dj-stage.jpg',
};
export const EVENT_IMAGE_FALLBACK = '/images/night-stage.jpg';

export type EventItem = {
  id: string; // slug, used for /events/[slug]
  dateISO: string; // for sorting / datetime attr
  artist: string;
  tba?: boolean;
  time?: string; // local door/set time, e.g. "~23:00"
  genre?: { en: string; ar: string };
  bio?: { en: string; ar: string };
};

// Real confirmed lineup (verified facts only). Lineup subject to change.
export const EVENTS: EventItem[] = [
  {
    id: 'anja-schneider',
    dateISO: '2026-08-21',
    artist: 'Anja Schneider',
    time: '~23:00',
    genre: { en: 'House · Techno', ar: 'هاوس · تكنو' },
    bio: {
      en: 'Berlin-based DJ, producer and broadcaster — a long-standing figure in international house and techno, and founder of the SOUS Music label.',
      ar: 'منسّقة أغانٍ ومنتجة وإعلامية مقيمة في برلين — شخصية راسخة في مشهد الهاوس والتكنو العالمي، ومؤسِّسة علامة SOUS Music.',
    },
  },
  {
    id: 'cassy',
    dateISO: '2026-09-11',
    artist: 'Cassy',
    genre: { en: 'House · Techno', ar: 'هاوس · تكنو' },
    bio: {
      en: 'Austrian-Greek DJ and producer celebrated for deep, hypnotic house and techno and long, immersive sets; founder of Kwench Records.',
      ar: 'منسّقة أغانٍ ومنتجة نمساوية-يونانية، تشتهر بالهاوس والتكنو العميق المنوّم وبجلساتها الطويلة الغامرة؛ مؤسِّسة Kwench Records.',
    },
  },
  { id: 'tba-1', dateISO: '2026-10-16', artist: 'TBA', tba: true },
];

// Helper for event detail pages
export const EVENT_SLUGS = EVENTS.filter((e) => !e.tba).map((e) => e.id);
export function getEvent(slug: string): EventItem | undefined {
  return EVENTS.find((e) => e.id === slug && !e.tba);
}
