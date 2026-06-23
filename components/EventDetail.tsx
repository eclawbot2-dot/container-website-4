'use client';

import { useLang } from './LangProvider';
import { Flourish, Crest } from './Ornament';
import {
  type EventItem,
  TICKETS_URL,
  MAPS_URL,
} from '@/lib/config';
import { formatEventDate } from '@/lib/i18n';

// Per-event hero artwork (festival posters reused from the homepage set)
const EVENT_IMG: Record<string, string> = {
  'anja-schneider': '/images/stage-fire.jpg',
  cassy: '/images/dj-stage.jpg',
};

export function EventDetail({ ev }: { ev: EventItem }) {
  const { t, lang } = useLang();
  const img = EVENT_IMG[ev.id] ?? '/images/night-stage.jpg';
  const genre = ev.genre?.[lang];
  const bio = ev.bio?.[lang];

  return (
    <main className="relative">
      {/* ── Grand festival hero ─────────────────────────────────── */}
      <section className="relative flex min-h-[78svh] items-end overflow-hidden px-5 pb-14 pt-32">
        <div className="absolute inset-0 -z-10" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt=""
            aria-hidden
            fetchPriority="high"
            className="h-full w-full animate-kenburns object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_15%,rgba(226,98,43,0.30),transparent_55%)] mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-night2/75 via-night2/45 to-night2" />
          <div className="absolute inset-0 bg-gradient-to-t from-night2 via-transparent to-night2/40" />
        </div>

        {/* glow halo behind the title */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[55vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,166,75,0.32),transparent_65%)] blur-2xl animate-glowPulse"
        />

        <div className="mx-auto w-full max-w-4xl text-center">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold tracking-wide text-cream/80 transition hover:border-gold-light hover:bg-gold/10 hover:text-gold-light"
          >
            <span aria-hidden className="ltr:order-none rtl:rotate-180">
              ←
            </span>
            {t.event.backToLineup}
          </a>

          <p className="animate-fadeUp font-display text-xs font-semibold uppercase tracking-[0.45em] text-gold-light/90 sm:text-sm">
            {t.event.presents}
          </p>

          <Flourish className="mx-auto mt-5 h-5 w-48 animate-fadeUp text-gold/80" />

          <h1 className="mt-4 animate-fadeUp font-display text-[clamp(2.4rem,9vw,6rem)] font-bold leading-[0.95] tracking-tight">
            <span className="gold-text gold-glow">{ev.artist}</span>
          </h1>

          <p className="mx-auto mt-5 animate-fadeUp font-display text-base font-semibold uppercase tracking-[0.25em] text-cream/85">
            {formatEventDate(ev.dateISO, lang)}
            {ev.time ? <span className="text-gold-light"> · {ev.time}</span> : null}
          </p>
          {genre ? (
            <p className="mt-3 animate-fadeUp text-sm uppercase tracking-[0.3em] text-gold/70">
              {genre}
            </p>
          ) : null}

          <div className="mt-9 flex animate-fadeUp flex-col items-center justify-center gap-4 sm:flex-row">
            {TICKETS_URL ? (
              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-night2 shadow-gold-lg transition hover:scale-[1.03] hover:shadow-ember"
              >
                {t.event.tickets}
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex min-h-[48px] cursor-not-allowed items-center justify-center rounded-full border border-gold/35 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-cream/55"
              >
                {t.event.ticketsSoon}
              </span>
            )}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 font-semibold text-cream transition hover:border-gold-light hover:bg-gold/10 hover:shadow-gold"
            >
              {t.event.mapCta}
              <span aria-hidden className="rtl:rotate-180">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Details ─────────────────────────────────────────────── */}
      <section className="relative px-5 pb-24 pt-4 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="divider mb-12" aria-hidden>
            <Flourish className="h-5 w-24 text-gold/70" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="gilt panel rounded-2xl p-6">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-gold/70">
                {t.event.dateLabel}
              </h2>
              <p className="mt-2 font-display text-lg font-semibold text-cream">
                {formatEventDate(ev.dateISO, lang)}
              </p>
            </div>
            <div className="gilt panel rounded-2xl p-6">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-gold/70">
                {t.event.timeLabel}
              </h2>
              <p className="mt-2 font-display text-lg font-semibold text-cream">
                {ev.time ?? '—'}
              </p>
            </div>
            {genre ? (
              <div className="gilt panel rounded-2xl p-6">
                <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-gold/70">
                  {t.event.genreLabel}
                </h2>
                <p className="mt-2 font-display text-lg font-semibold text-cream">
                  {genre}
                </p>
              </div>
            ) : null}
            <div className="gilt panel rounded-2xl p-6">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-gold/70">
                {t.event.venueLabel}
              </h2>
              <p className="mt-2 font-display text-base font-semibold text-cream">
                {t.event.venueName}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-cream/65">
                {t.event.venueAddress}
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition hover:text-gold"
              >
                {t.event.mapCta}
                <span aria-hidden className="rtl:rotate-180">
                  →
                </span>
              </a>
            </div>
          </div>

          {bio ? (
            <div className="gilt panel mt-4 rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <Crest className="h-7 w-7 shrink-0" />
                <h2 className="font-display text-lg font-semibold text-gold-light">
                  {t.event.bioLabel}
                </h2>
              </div>
              <p className="mt-3 text-base leading-relaxed text-cream/80">
                {bio}
              </p>
            </div>
          ) : null}

          <p className="mt-10 text-center text-sm text-cream/55">
            {t.event.subjectToChange}
          </p>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-cream/85 transition hover:border-gold-light hover:bg-gold/10 hover:text-gold-light"
            >
              <span aria-hidden className="ltr:order-none rtl:rotate-180">
                ←
              </span>
              {t.event.backToLineup}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
