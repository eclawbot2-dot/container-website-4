'use client';

import { useLang } from './LangProvider';
import { Flourish } from './Ornament';
import { INSTAGRAM_URL } from '@/lib/config';

export function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20"
    >
      {/* Cinematic mainstage backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-mainstage.jpg"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="h-full w-full animate-kenburns object-cover"
        />
        {/* warm cinematic grade + readability scrims */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(226,98,43,0.28),transparent_55%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-night2/70 via-night2/45 to-night2" />
        <div className="absolute inset-0 bg-gradient-to-t from-night2 via-transparent to-night2/40" />
      </div>

      {/* glow halo behind the title */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -z-10 h-[60vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,166,75,0.35),transparent_65%)] blur-2xl animate-glowPulse"
      />

      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="animate-fadeUp font-display text-xs font-semibold uppercase tracking-[0.5em] text-gold-light/90 sm:text-sm">
          {t.hero.kicker}
        </p>

        <Flourish className="mx-auto mt-5 h-5 w-48 animate-fadeUp text-gold/80" />

        <h1 className="mt-4 animate-fadeUp font-display text-[clamp(2.6rem,11vw,7.5rem)] font-bold leading-[0.95] tracking-tight">
          <span className="gold-text gold-glow">{t.hero.title}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fadeUp text-lg leading-relaxed text-cream/85 md:text-xl">
          {t.hero.tagline}
        </p>

        <div className="mt-10 flex animate-fadeUp flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#lineup"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-night2 shadow-gold-lg transition hover:scale-[1.03] hover:shadow-ember"
          >
            {t.hero.cta}
          </a>
          {INSTAGRAM_URL ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 font-semibold text-cream transition hover:border-gold-light hover:bg-gold/10 hover:shadow-gold"
            >
              <InstagramIcon />
              {t.hero.instagram}
            </a>
          ) : (
            // No verified Instagram handle yet — show a non-linking placeholder
            // rather than guessing a URL that may belong to someone else.
            <span
              aria-disabled="true"
              className="inline-flex min-h-[48px] cursor-not-allowed items-center justify-center gap-2 rounded-full border border-gold/30 px-8 py-3.5 font-semibold text-cream/55"
            >
              <InstagramIcon />
              {t.event.igSoon}
            </span>
          )}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-floatY text-gold/60">
        <span className="text-xs tracking-[0.3em]" aria-hidden>
          ▼
        </span>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
