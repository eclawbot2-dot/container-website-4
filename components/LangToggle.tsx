'use client';

import { useLang } from './LangProvider';

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, t, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={t.langToggle.switchTo}
      title={t.langToggle.switchTo}
      lang={lang === 'en' ? 'ar' : 'en'}
      className={`group relative inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold/40 bg-night/40 px-4 py-2 text-sm font-semibold tracking-wide text-cream/90 backdrop-blur transition hover:border-gold-light hover:text-cream hover:shadow-gold ${className}`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-gold-light shadow-[0_0_10px_currentColor] text-gold-light"
        aria-hidden
      />
      {t.langToggle.label}
    </button>
  );
}
