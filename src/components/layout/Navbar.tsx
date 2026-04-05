'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCinematicAudio } from '@/hooks/useCinematicAudio';

const locales = ['it', 'en', 'cs'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  
  const { playHover, playClick } = useCinematicAudio();

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      {bannerVisible && (
        <div className="relative z-50 bg-accent text-white text-xs md:text-sm font-bold text-center py-2.5 px-6 flex items-center justify-center gap-3">
          <span>{t('banner_text')}</span>
          <a href="#cta" className="underline underline-offset-4 font-black whitespace-nowrap hover:no-underline">
            {t('banner_cta')} →
          </a>
          <button
            onClick={() => { playClick(); setBannerVisible(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Chiudi"
          >
            ✕
          </button>
        </div>
      )}

      {/* Cinematic scroll progress bar under the top edge */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100] shadow-[0_0_12px_rgba(255,90,31,0.6)]"
        style={{ scaleX }}
      />

      <div className="fixed top-4 inset-x-0 z-40 pointer-events-none">
        <div className="px-4 max-w-6xl mx-auto">
          <nav className={cn(
            'pointer-events-auto rounded-[24px] border transition-all duration-500',
            scrolled
              ? 'bg-surface/80 backdrop-blur-2xl border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]'
              : 'bg-transparent border-transparent'
          )}>
            <div className="hidden md:grid grid-cols-3 items-center px-6 h-[64px]">

              <div className="flex items-center gap-1">
                {locales.map((loc) => (
                  <a
                    key={loc}
                    href={`/${loc}`}
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className={cn(
                      'px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-all rounded-xl',
                      loc === locale
                        ? 'text-accent bg-accent/10 pointer-events-none ring-1 ring-accent/20'
                        : 'text-white/30 hover:text-white hover:bg-white/5 interactive'
                    )}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {loc}
                  </a>
                ))}
              </div>

              <div className="flex justify-center">
                <Link href={`/${locale}`} className="flex items-center justify-center interactive" onMouseEnter={playHover} onClick={playClick}>
                  <Image
                    src="/images/loghi/logo-light.png"
                    alt="LaunchLab"
                    width={200}
                    height={48}
                    priority
                    className="h-10 w-auto object-contain scale-[1.35] origin-top md:origin-center mt-2 md:mt-0 drop-shadow-md brightness-110"
                  />
                </Link>
              </div>

              <div className="flex justify-end">
                <a
                  href="#cta"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="interactive group relative overflow-hidden px-6 py-2.5 rounded-full text-[10px] tracking-widest font-bold bg-white/5 text-white border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all snappy-click font-mono uppercase"
                >
                  <span className="relative z-10 group-hover:text-accent transition-colors">{t('cta')}</span>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 blur-md transition-colors pointer-events-none" />
                </a>
              </div>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex items-center justify-between px-5 h-[60px]">
              <Link href={`/${locale}`} className="flex items-center interactive relative z-10" onClick={playClick}>
                <Image
                  src="/images/loghi/logo-light.png"
                  alt="LaunchLab"
                  width={150}
                  height={40}
                  priority
                  className="h-8 w-auto scale-[1.25] origin-left drop-shadow-md"
                />
              </Link>
              <button
                className="text-white p-2 transition-colors interactive"
                onClick={() => {
                  playClick();
                  setMenuOpen(!menuOpen);
                }}
                aria-label="Menu"
              >
                {menuOpen
                  ? <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  : <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                }
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="md:hidden pointer-events-auto mt-2 bg-surface/95 backdrop-blur-3xl border border-white/10 rounded-2xl px-5 py-6 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 justify-center">
                {locales.map((loc) => (
                  <a
                    key={loc}
                    href={`/${loc}`}
                    onClick={playClick}
                    className={cn(
                      'px-4 py-2 text-[11px] uppercase tracking-widest font-bold transition-all rounded-xl',
                      loc === locale
                        ? 'text-accent bg-accent/10 pointer-events-none ring-1 ring-accent/20'
                        : 'text-white/30 hover:text-white hover:bg-white/5 interactive'
                    )}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {loc}
                  </a>
                ))}
              </div>
              <a
                href="#cta"
                onClick={() => {
                  playClick();
                  setMenuOpen(false);
                }}
                className="block text-center px-6 py-4 rounded-xl text-[11px] font-bold tracking-widest uppercase bg-accent text-white interactive font-mono"
              >
                {t('cta')}
              </a>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
