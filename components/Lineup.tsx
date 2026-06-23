'use client';

import { useLang } from './LangProvider';
import { Flourish } from './Ornament';
import { EVENTS } from '@/lib/config';
import { formatEventDate } from '@/lib/i18n';

const CARD_IMG = ['/images/stage-fire.jpg', '/images/dj-stage.jpg', '/images/fireworks.jpg'];

export function Lineup() {
  const { t, lang } = useLang();
  return (
    <section
      id="lineup"
      className="relative overflow-hidden px-5 py-24 md:py-32"
    >
      {/* faint stage glow band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(163,36,107,0.22),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold-light">
            {t.lineup.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-5xl">
            <span className="gold-text">{t.lineup.title}</span>
          </h2>
          <Flourish className="mx-auto mt-5 h-5 w-52 text-gold/75" />
          <p className="mx-auto mt-4 max-w-2xl text-cream/70 md:text-lg">
            {t.lineup.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {EVENTS.map((ev, i) => {
            const tba = ev.tba;
            return (
              <article
                key={ev.id}
                className="gilt group relative flex flex-col overflow-hidden rounded-3xl shadow-gold transition duration-300 hover:-translate-y-1.5 hover:shadow-gold-lg"
              >
                {/* poster image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CARD_IMG[i % CARD_IMG.length]}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                      tba ? 'opacity-45 grayscale' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night2 via-night2/40 to-transparent" />
                </div>

                <div className="relative flex flex-1 flex-col p-7">
                  <time
                    dateTime={ev.dateISO}
                    className="block font-display text-xs font-semibold uppercase tracking-widest text-gold-light"
                  >
                    {formatEventDate(ev.dateISO, lang)}
                  </time>
                  <h3
                    className={`mt-3 font-display text-2xl font-bold leading-tight md:text-3xl ${
                      tba ? 'text-cream/55' : 'gold-text'
                    }`}
                  >
                    {tba ? t.lineup.tba : ev.artist}
                  </h3>
                  <div className="mt-auto pt-7">
                    {tba ? (
                      <span className="inline-flex items-center rounded-full border border-gold/25 px-5 py-2.5 text-sm font-semibold text-cream/50">
                        {t.lineup.tba}
                      </span>
                    ) : (
                      <a
                        href={`/events/${ev.id}/`}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-6 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-night2 transition group-hover:shadow-gold"
                      >
                        {t.lineup.ticketsCta}
                        <span aria-hidden className="rtl:rotate-180">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-cream/55">
          {t.lineup.note}
        </p>
      </div>
    </section>
  );
}
