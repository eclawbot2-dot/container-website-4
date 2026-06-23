'use client';

import { useLang } from './LangProvider';
import { MAPS_URL, STATIC_MAP_URL } from '@/lib/config';

export function Visit() {
  const { t } = useLang();
  const blocks = [
    { title: t.visit.addressTitle, body: t.visit.address },
    { title: t.visit.gettingThereTitle, body: t.visit.gettingThere },
    { title: t.visit.hoursTitle, body: t.visit.hours },
    { title: t.visit.entryTitle, body: t.visit.entry },
  ];
  return (
    <section id="visit" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neon-violet">
          {t.visit.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
          {t.visit.title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {blocks.map((b, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-neon-cyan">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <div className="neon-border relative overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STATIC_MAP_URL}
              alt={t.visit.addressTitle}
              loading="lazy"
              className="h-full min-h-[300px] w-full object-cover saturate-150 [filter:hue-rotate(280deg)_contrast(1.1)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 ltr:left-5 rtl:right-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              {t.visit.mapCta}
              <span aria-hidden className="rtl:rotate-180">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
