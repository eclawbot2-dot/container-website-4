'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { dict, type Lang, type Dict } from '@/lib/i18n';

type Ctx = { lang: Lang; t: Dict; toggle: () => void; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = 'container-lang';

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = (typeof window !== 'undefined'
      ? window.localStorage.getItem(STORAGE_KEY)
      : null) as Lang | null;
    if (saved === 'en' || saved === 'ar') setLangState(saved);
  }, []);

  // Reflect to <html> and persist
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dict[lang].dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === 'en' ? 'ar' : 'en'));

  return (
    <LangContext.Provider value={{ lang, t: dict[lang], toggle, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
