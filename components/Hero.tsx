'use client';

import { useLang } from './LangProvider';
import { INSTAGRAM_URL } from '@/lib/config';

export function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16"
    >
      {/* rotating conic glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 animate-spinSlow rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'conic-gradient(from 0deg, #0ff5ff, #9b5cff, #ff2ec4, #ff5cf0, #0ff5ff)',
        }}
      />
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="animate-fadeUp text-sm font-semibold uppercase tracking-[0.4em] text-neon-cyan/90">
          {t.hero.kicker}
        </p>
        <h1 className="animate-fadeUp font-display text-[clamp(3rem,13vw,9rem)] font-bold leading-[0.92] tracking-tight">
          <span className="grad-text">{t.hero.title}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fadeUp text-lg leading-relaxed text-white/75 md:text-xl">
          {t.hero.tagline}
        </p>
        <div className="mt-10 flex animate-fadeUp flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#lineup"
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta px-8 py-4 font-semibold text-ink shadow-[0_0_30px_rgba(155,92,255,0.55)] transition hover:scale-[1.04] hover:shadow-[0_0_44px_rgba(255,46,196,0.7)]"
          >
            {t.hero.cta}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_24px_rgba(15,245,255,0.45)]"
          >
            <InstagramIcon />
            {t.hero.instagram}
          </a>
        </div>
      </div>
      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-floatY text-white/40">
        <span className="text-xs tracking-[0.3em]">▼</span>
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
