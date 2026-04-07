'use client';

import { useTranslations } from 'next-intl';
import { FadeContainer, FadeDiv, FadeSpan } from '@/components/effects/Fade';
import HeroChatPlayer from '@/components/remotion/agent-lead/HeroChatPlayer';
import DevSymbolsBackground from '@/components/effects/DevSymbolsBackground';

export default function HeroSection() {
  const t = useTranslations('agent_lead');

  const heroChatLabels = {
    messages: [
      { text: t('hero_chat.bot1'), isBot: true },
      { text: t('hero_chat.user1'), isBot: false },
      { text: t('hero_chat.bot2'), isBot: true },
      { text: t('hero_chat.user2'), isBot: false },
      { text: t('hero_chat.bot3'), isBot: true },
    ],
    badge: t('hero_chat.badge'),
  };

  return (
    <section className="relative pt-44 pb-20 px-4 overflow-hidden">
      <DevSymbolsBackground />
      <FadeContainer className="relative z-[5] max-w-4xl mx-auto text-center">
        {/* Badge with pulse dot */}
        <FadeDiv>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 ring-1 ring-black/10 shadow-lg shadow-orange-400/20 text-sm font-medium text-gray-700">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            {t('hero.badge')}
          </div>
        </FadeDiv>

        {/* H1 */}
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-gray-900">
          <FadeSpan>{t('hero.title_1')}</FadeSpan>{' '}
          <FadeSpan>
            <span className="text-orange-500">{t('hero.title_highlight')}</span>
          </FadeSpan>{' '}
          <FadeSpan>{t('hero.title_2')}</FadeSpan>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-balance">
          <FadeSpan>{t('hero.subtitle')}</FadeSpan>
        </p>

        {/* CTA buttons */}
        <FadeDiv className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="#cta"
            className="rounded-md border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] hover:shadow-orange-300 transition-all"
          >
            {t('hero.cta_primary')}
          </a>
          <a
            href="#cases"
            className="rounded-sm border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-xs hover:border-orange-300 hover:text-orange-600 transition-all"
          >
            {t('hero.cta_secondary')}
          </a>
        </FadeDiv>

        {/* Note */}
        <FadeDiv>
          <p className="mt-4 text-sm text-gray-500">{t('hero.note')}</p>
        </FadeDiv>

        {/* Chat animation */}
        <div className="mt-16 mx-auto max-w-3xl animate-fade-up delay-700">
          <HeroChatPlayer labels={heroChatLabels} />
        </div>
      </FadeContainer>
    </section>
  );
}
