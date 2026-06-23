// Small ornamental SVG flourishes used as section dividers / crest accents.

export function Crest({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden
      role="presentation"
    >
      <defs>
        <linearGradient id="crestGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7d774" />
          <stop offset="0.5" stopColor="#e0a64b" />
          <stop offset="1" stopColor="#b9772a" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="27" stroke="url(#crestGold)" strokeWidth="1.2" opacity="0.6" />
      <path
        d="M44 22a14 14 0 1 0 0 20l-4.4-4.4a8 8 0 1 1 0-11.2z"
        fill="url(#crestGold)"
      />
      <path d="M32 3l2 4-2-1-2 1z" fill="url(#crestGold)" />
      <path d="M32 61l2-4-2 1-2-1z" fill="url(#crestGold)" />
    </svg>
  );
}

export function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={className}
      fill="none"
      aria-hidden
      role="presentation"
    >
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M10 12h78" opacity="0.5" />
        <path d="M152 12h78" opacity="0.5" />
        <path d="M96 12c6-7 12-7 18 0M126 12c6 7 12 7 18 0" />
        <path d="M112 12c2.6 0 5 2 8 0-3 2-5.4 0-8 0z" fill="currentColor" />
      </g>
      <circle cx="120" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
