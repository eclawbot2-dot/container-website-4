'use client';

import { useState, useEffect } from 'react';
import { useLang } from './LangProvider';
import { LangToggle } from './LangToggle';
import { Crest } from './Ornament';
import { TICKETS_URL } from '@/lib/config';

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape for keyboard users
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Root-relative so they work from /events/[slug]/ and the 404 page too —
  // bare fragments only rewrite the hash on non-home URLs (dead links).
  const links = [
    { href: '/#about', label: t.nav.about },
    { href: '/#lineup', label: t.nav.lineup },
    { href: '/#visit', label: t.nav.visit },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-gold/20 bg-night2/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <a
          href="/#top"
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-[0.18em] text-cream"
        >
          <Crest className="h-8 w-8 shrink-0" />
          <span className="gold-glow">{t.hero.title}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-cream/75 transition hover:text-gold-light"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* No ticket URL yet — show a non-linking "coming soon" placeholder
              rather than an <a>. Becomes a real link once TICKETS_URL is set. */}
          {TICKETS_URL ? (
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-gold/55 px-4 py-2 text-sm font-semibold text-cream transition hover:bg-gold/15 hover:shadow-gold sm:inline-flex"
            >
              {t.nav.buyTickets}
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="hidden cursor-not-allowed rounded-full border border-gold/35 px-4 py-2 text-sm font-semibold text-cream/55 sm:inline-flex"
            >
              {t.event.ticketsSoon}
            </span>
          )}
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream transition hover:bg-gold/10 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-gold/15 bg-night2/95 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-gold/10 py-3.5 text-base font-semibold text-cream/85 transition hover:text-gold-light"
              >
                {l.label}
              </a>
            ))}
            {TICKETS_URL ? (
              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex justify-center rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-5 py-3 text-sm font-bold text-night2"
              >
                {t.nav.buyTickets}
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="mt-3 inline-flex cursor-not-allowed justify-center rounded-full border border-gold/35 px-5 py-3 text-sm font-bold text-cream/55"
              >
                {t.event.ticketsSoon}
              </span>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
