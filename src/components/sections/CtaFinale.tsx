"use client";

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useCinematicAudio } from '@/hooks/useCinematicAudio';
import CodeCTABackground from '@/components/effects/CodeCTABackground';

// Magnetic Button component
function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { playHover, playClick } = useCinematicAudio();

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.2); // Pull button by 20%
    y.set((clientY - centerY) * 0.2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onMouseEnter={playHover}
      onClick={playClick}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 rounded-[20px] bg-accent text-white font-bold text-lg md:text-xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_10px_40px_rgba(255,90,31,0.3)] hover:shadow-[0_0_60px_rgba(255,90,31,0.6)] font-mono uppercase tracking-tighter"
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

// Main Component
export default function CtaFinale() {
  const t = useTranslations('cta');
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="cta" className="relative overflow-hidden h-[100svh] min-h-[750px] bg-black flex flex-col justify-center">
      
      {/* Technical Background with scrolling code */}
      <CodeCTABackground />

      {/* Top gradient transition from previous section */}
      <div className="absolute top-0 inset-x-0 h-[20vh] bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Deep dark vignette around edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)] z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-6 mt-16">
        
        {/* Console-style Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-14 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl font-mono text-[10px] tracking-[0.2em] font-bold"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white/40">SYSTEM:</span>
            <span className="text-white/80">ONLINE</span>
          </div>
          <div className="w-[1px] h-3 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-white/40">SLOTS:</span>
            <span className="text-accent">AVAILABLE [2]</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white mb-8 leading-[1.0] tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('headline_1')} <br className="hidden md:block" />
          <span className="text-accent italic">
            {t('headline_2')}
          </span>
        </motion.h2>

        {/* Subline with technical font */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-white/50 text-base md:text-lg mb-20 max-w-2xl font-mono tracking-tight leading-relaxed"
        >
          {`/* ${t('subline')} */`}
        </motion.p>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-10"
        >
          <div className="relative group">
            {/* Outer glow for button */}
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <MagneticButton href="https://cal.com/daniel-de-vecchi">
              {t('button')}
            </MagneticButton>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-white/30 text-[10px] font-bold uppercase tracking-widest font-mono">
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> {t('guarantee_1')}</span>
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> {t('guarantee_2')}</span>
            <span className="flex items-center gap-2 text-white/10 select-none">|</span>
            <span className="text-white/20">v1.0.4-shipped</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
