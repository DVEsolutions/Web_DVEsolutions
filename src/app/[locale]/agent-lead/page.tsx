"use client";

import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/agent-lead/HeroSection';
import StatsBar from '@/components/agent-lead/StatsBar';
import PainSection from '@/components/agent-lead/PainSection';
import HowItWorks from '@/components/agent-lead/HowItWorks';
import UseCases from '@/components/agent-lead/UseCases';
import PricingSection from '@/components/agent-lead/PricingSection';
import CtaFinale from '@/components/agent-lead/CtaFinale';
import Footer from '@/components/layout/Footer';

export default function AgentLeadPage() {
  const t = useTranslations('agent_lead');

  return (
    <>
      <Navbar
        links={[
          { href: '#how', label: t('nav.link_how') },
          { href: '#cases', label: t('nav.link_cases') },
          { href: '#pricing', label: t('nav.link_pricing') },
        ]}
        ctaText={t('nav.cta_trial')}
        ctaHref="#cta"
        ghostText={t('nav.cta_login')}
        ghostHref="#"
      />
      <main className="relative mx-auto flex flex-col">
        <HeroSection />
        <StatsBar />
        <PainSection />
        <HowItWorks />
        <UseCases />
        <PricingSection />
        <CtaFinale />
      </main>
      <Footer />
    </>
  );
}
