"use client";

import { useEffect } from 'react';
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

  useEffect(() => {
    const navbarPortal = document.getElementById('navbar-portal');
    if (!navbarPortal) return;

    const widgetAnchor = document.createElement('div');
    widgetAnchor.id = 'lq-anchor';
    widgetAnchor.style.cssText =
      'position:absolute;top:20px;right:200px;z-index:51;display:flex;align-items:center;';
    navbarPortal.appendChild(widgetAnchor);

    const embedScript = document.createElement('script');
    embedScript.src = 'https://agentlead.fl1.it/embed/dvesolutions.js';
    embedScript.async = true;
    document.body.appendChild(embedScript);

    return () => {
      embedScript.remove();
      document.querySelector('.lq-nav-item')?.remove();
      document.querySelector('.lq-panel')?.remove();
      document.getElementById('lq-styles')?.remove();
    };
  }, []);

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
