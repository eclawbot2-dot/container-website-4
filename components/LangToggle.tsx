'use client';

import { useLang } from './LangProvider';

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, t, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={t.langToggle.switchTo}
      title={t.langToggle.switchTo}
      className={`group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur transition hover:border-neon-cyan/70 hover:text-white hover:shadow-[0_0_18px_rgba(15,245,255,0.45)] ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          lang === 'en' ? 'bg-neon-cyan' : 'bg-neon-magenta'
        } shadow-[0_0_10px_currentColor]`}
        aria-hidden
      />
      {t.langToggle.label}
    </button>
  );
}
