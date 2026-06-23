'use client';

// Drifting golden embers. Pure CSS animation (disabled under
// prefers-reduced-motion via globals.css). Deterministic seed so SSR/CSR match.
const EMBERS = Array.from({ length: 18 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const rnd = seed / 233280;
  const rnd2 = ((i * 4099 + 7919) % 9973) / 9973;
  return {
    left: `${Math.round(rnd * 100)}%`,
    delay: `${(rnd2 * 14).toFixed(1)}s`,
    duration: `${(12 + rnd * 12).toFixed(1)}s`,
    scale: 0.6 + rnd2 * 1.6,
  };
});

export function Embers() {
  return (
    <div className="embers" aria-hidden>
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: e.left,
            animationDelay: e.delay,
            animationDuration: e.duration,
            transform: `scale(${e.scale})`,
          }}
        />
      ))}
    </div>
  );
}
