# THE CONTAINER — container-website-4

Bilingual (EN/AR) neon / cyber-rave venue site for **THE CONTAINER**, an
industrial electronic-music venue inside Shams Container Terminal on the
Jeddah Red Sea port.

Built with Next.js 14 (App Router) + TypeScript + Tailwind, statically
exported (`output: 'export'`). Live at https://container4.jahdev.com

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Notes

- Full RTL support for Arabic (`dir`, mirrored layout, Cairo font); language
  toggle persists via `localStorage` and sets `<html lang/dir>`.
- Design: dark base, animated neon gradients, glassmorphism, grain + scanline;
  respects `prefers-reduced-motion`.
- Real lineup lives in `lib/config.ts`; copy in `lib/i18n.ts`.
