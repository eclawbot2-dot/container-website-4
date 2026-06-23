'use client';

import { useLang } from './LangProvider';
import { MAPS_URL, mapEmbedUrl } from '@/lib/config';

export function Visit() {
  const { t, lang } = useLang();
  const blocks = [
    { title: t.visit.addressTitle, body: t.visit.address },
    { title: t.visit.gettingThereTitle, body: t.visit.gettingThere },
    { title: t.visit.hoursTitle, body: t.visit.hours },
    { title: t.visit.entryTitle, body: t.visit.entry },
  ];
  return (
    <section id="visit" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold-light">
          {t.visit.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-5xl">
          {t.visit.title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {blocks.map((b, i) => (
              <div key={i} className="gilt panel rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-gold-light">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Reliable Google Maps embed (no API key). Fallback styled container behind it. */}
          <div className="gilt relative overflow-hidden rounded-3xl bg-night/60 shadow-gold">
            {/* fallback shown if the iframe fails to load */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,rgba(58,29,86,0.6),rgba(14,5,24,0.9))] text-center"
            >
              <span className="px-6 font-display text-sm uppercase tracking-widest text-gold/70">
                {t.visit.addressTitle}
              </span>
            </div>

            <iframe
              key={lang}
              title={t.visit.mapTitle}
              src={mapEmbedUrl(lang)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="relative z-10 aspect-[16/10] w-full border-0"
            />

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 z-20 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-night2 shadow-gold transition hover:scale-[1.03] ltr:left-4 rtl:right-4"
            >
              {t.visit.mapCta}
              <span aria-hidden className="rtl:rotate-180">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
