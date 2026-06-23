'use client';

import { useLang } from './LangProvider';
import { EVENTS, INSTAGRAM_URL } from '@/lib/config';
import { formatEventDate } from '@/lib/i18n';

export function Lineup() {
  const { t, lang } = useLang();
  return (
    <section id="lineup" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neon-cyan">
            {t.lineup.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
            <span className="grad-text">{t.lineup.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65 md:text-lg">
            {t.lineup.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((ev, i) => {
            const tba = ev.tba;
            return (
              <article
                key={ev.id}
                className="neon-border glass group relative overflow-hidden rounded-3xl p-7 transition duration-300 hover:translate-y-[-6px] hover:shadow-[0_0_40px_rgba(255,46,196,0.4)]"
              >
                {/* index ghost number */}
                <span
                  className="pointer-events-none absolute -top-6 ltr:-right-2 rtl:-left-2 font-display text-[7rem] font-bold leading-none text-white/[0.04]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <time
                  dateTime={ev.dateISO}
                  className="relative block text-sm font-semibold uppercase tracking-widest text-neon-cyan"
                >
                  {formatEventDate(ev.dateISO, lang)}
                </time>
                <h3
                  className={`relative mt-3 font-display text-3xl font-bold leading-tight md:text-4xl ${
                    tba ? 'text-white/60' : 'text-white text-glow'
                  }`}
                >
                  {tba ? t.lineup.tba : ev.artist}
                </h3>
                <div className="relative mt-7">
                  {tba ? (
                    <span className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/45">
                      {t.lineup.tba}
                    </span>
                  ) : (
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-magenta to-neon-violet px-6 py-2.5 text-sm font-semibold text-white transition group-hover:shadow-[0_0_22px_rgba(255,46,196,0.6)]"
                    >
                      {t.lineup.ticketsCta}
                      <span aria-hidden className="rtl:rotate-180">→</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/45">
          {t.lineup.note}
        </p>
      </div>
    </section>
  );
}
