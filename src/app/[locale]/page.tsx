"use client";

import { useLocale, useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PainCards from '@/components/sections/PainCards';
import Metodo from '@/components/sections/Metodo';
import Processo from '@/components/sections/Processo';
import Pricing from '@/components/sections/Pricing';
import SocialProof from '@/components/sections/SocialProof';
import CtaFinale from '@/components/sections/CtaFinale';
import WhatWeBuild from '@/components/sections/WhatWeBuild';

export default function HomePage() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <>
      <Navbar
        links={[
          { href: '#method', label: t('link_method') },
          { href: '#process', label: t('link_timeline') },
          { href: '#pricing', label: t('link_pricing') },
          { href: `/${locale}/agent-lead`, label: 'Agent Lead', isRoute: true, highlight: true },
        ]}
        ctaText={t('cta')}
        ctaHref="#cta"
      />
      <main className="relative mx-auto flex flex-col">
        <Hero />
        <WhatWeBuild />
        <PainCards />
        <Metodo />
        <Processo />
        <Pricing />
        <SocialProof />
        <CtaFinale />
      </main>
      <Footer />
    </>
  );
}
