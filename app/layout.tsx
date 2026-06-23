import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LangProvider } from '@/components/LangProvider';

export const metadata: Metadata = {
  title: 'THE CONTAINER · Jeddah · Red Sea Port',
  description:
    "Jeddah's raw industrial techno & house venue inside a working Red Sea shipping-container terminal. Licensed live electronic-music events.",
  metadataBase: new URL('https://container4.jahdev.com'),
  openGraph: {
    title: 'THE CONTAINER · Jeddah · Red Sea Port',
    description:
      "Jeddah's raw industrial techno & house venue on the Red Sea port.",
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#05010f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Cairo:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="aurora" aria-hidden />
        <div className="grain" aria-hidden />
        <div className="scanline" aria-hidden />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
