'use client';

import { useLang } from './LangProvider';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, CONTACT_EMAIL } from '@/lib/config';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-white/10 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-md">
            <div className="grad-text font-display text-2xl font-bold tracking-[0.15em]">
              {t.hero.title}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {t.footer.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {t.footer.follow}
              </h4>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-white/80 transition hover:text-neon-magenta"
              >
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {t.footer.contact}
              </h4>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-block break-all text-sm text-white/80 transition hover:text-neon-cyan"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {t.hero.title}. {t.footer.rights}
          </span>
          <span>{t.footer.eventsNote}</span>
        </div>
      </div>
    </footer>
  );
}
