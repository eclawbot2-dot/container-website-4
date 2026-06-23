'use client';

import { useLang } from './LangProvider';

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neon-magenta">
          {t.about.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
          {t.about.title}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
            {t.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="grid gap-4 self-start">
            {t.about.stats.map((s, i) => (
              <div
                key={i}
                className="neon-border glass rounded-2xl p-6 transition hover:translate-y-[-3px] hover:shadow-[0_0_30px_rgba(155,92,255,0.3)]"
              >
                <div className="grad-text font-display text-2xl font-bold md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
