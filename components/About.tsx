'use client';

import { useLang } from './LangProvider';

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold-light">
          {t.about.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
          {t.about.title}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Imagery */}
          <div className="gilt relative overflow-hidden rounded-3xl shadow-gold-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/golden-crowd.jpg"
              alt="A vast festival crowd with hands raised, bathed in warm golden stage light"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night2/70 via-transparent to-transparent" />
          </div>

          {/* Copy + stats */}
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-cream/80">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {t.about.stats.map((s, i) => (
                <div
                  key={i}
                  className="gilt panel rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:shadow-gold"
                >
                  <div className="gold-text font-display text-xl font-bold leading-tight md:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-cream/65">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
