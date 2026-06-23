'use client';

import { useLang } from './LangProvider';
import { LangToggle } from './LangToggle';
import { INSTAGRAM_URL } from '@/lib/config';

export function Nav() {
  const { t } = useLang();
  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#lineup', label: t.nav.lineup },
    { href: '#visit', label: t.nav.visit },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-[0.2em] text-white text-glow"
        >
          {t.hero.title}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition hover:text-neon-cyan hover:text-glow"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neon-magenta/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neon-magenta/15 hover:shadow-[0_0_18px_rgba(255,46,196,0.5)] sm:inline-flex"
          >
            {t.nav.tickets}
          </a>
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}
