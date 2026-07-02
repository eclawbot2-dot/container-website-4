'use client';

import { useLang } from './LangProvider';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Flourish } from './Ornament';

/**
 * Branded bilingual 404 — replaces Next's default not-found page, whose
 * inlined black text is invisible on this site's dark body (fleet class #22).
 */
export function NotFoundPage() {
  const { t } = useLang();
  return (
    <main className="relative">
      <Nav />
      <section className="relative flex min-h-[80svh] items-center justify-center px-5 pt-28 pb-20">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.5em] text-gold-light/90 sm:text-sm">
            404
          </p>
          <Flourish className="mx-auto mt-5 h-5 w-48 text-gold/80" />
          <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            <span className="gold-text gold-glow">{t.notFound.title}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            {t.notFound.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-night2 shadow-gold-lg transition hover:scale-[1.03] hover:shadow-ember"
            >
              {t.notFound.backHome}
            </a>
            <a
              href="/#lineup"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 font-semibold text-cream transition hover:border-gold-light hover:bg-gold/10 hover:shadow-gold"
            >
              {t.notFound.seeLineup}
              <span aria-hidden className="rtl:rotate-180">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
