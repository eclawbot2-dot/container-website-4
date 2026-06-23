'use client';

import { useLang } from './LangProvider';
import { Flourish } from './Ornament';
import { INSTAGRAM_URL, CONTACT_EMAIL, CONTACT_EMAIL_LIVE } from '@/lib/config';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-gold/15 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="divider mb-12" aria-hidden>
          <Flourish className="h-5 w-24 text-gold/70" />
        </div>
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-md">
            <div className="gold-text font-display text-2xl font-bold tracking-[0.14em]">
              {t.hero.title}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream/65">
              {t.footer.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-gold/70">
                {t.footer.follow}
              </h3>
              {INSTAGRAM_URL ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-cream/85 transition hover:text-gold-light"
                >
                  Instagram
                </a>
              ) : (
                // No verified handle yet — labelled placeholder, never a guess.
                <span className="mt-3 inline-block text-sm text-cream/45">
                  {t.event.igSoon}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-gold/70">
                {t.footer.contact}
              </h3>
              {CONTACT_EMAIL_LIVE ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 inline-block break-all text-sm text-cream/85 transition hover:text-gold-light"
                >
                  {CONTACT_EMAIL}
                </a>
              ) : (
                // Mailbox not provisioned yet — shown as a plain label, not a mailto.
                <span className="mt-3 inline-block text-sm text-cream/45">
                  {t.event.contactSoon}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-gold/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {t.hero.title}. {t.footer.rights}
          </span>
          <span>{t.footer.eventsNote}</span>
        </div>
      </div>
    </footer>
  );
}
