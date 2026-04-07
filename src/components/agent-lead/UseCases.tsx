'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import UseCaseChatPlayer from '@/components/remotion/agent-lead/UseCaseChatPlayer';
import FeatureDivider from '@/components/effects/FeatureDivider';
import VerticalLines from '@/components/effects/VerticalLines';
import DevSymbolsBackground from '@/components/effects/DevSymbolsBackground';

const TAB_KEYS = ['restaurant', 'ecommerce', 'agency', 'saas', 'professional', 'realestate'] as const;

const TAB_COLORS: Record<string, string> = {
  restaurant: '#ea580c',
  ecommerce: '#f97316',
  agency: '#8b5cf6',
  saas: '#3b82f6',
  professional: '#0d9488',
  realestate: '#059669',
};

const TAB_NAMES: Record<string, string> = {
  restaurant: 'Ristorante',
  ecommerce: 'Shop',
  agency: 'Agenzia',
  saas: 'SaaS App',
  professional: 'Studio',
  realestate: 'Immobiliare',
};

export default function UseCases() {
  const t = useTranslations('agent_lead');
  const [activeTab, setActiveTab] = useState(0);

  const currentKey = TAB_KEYS[activeTab];

  const chatLabels = {
    messages: [
      { text: t(`${currentKey}_chat.bot1`), isBot: true },
      { text: t(`${currentKey}_chat.user1`), isBot: false },
      { text: t(`${currentKey}_chat.bot2`), isBot: true },
      { text: t(`${currentKey}_chat.user2`), isBot: false },
      { text: t(`${currentKey}_chat.bot3`), isBot: true },
    ],
    badge: t(`${currentKey}_chat.badge`),
    businessName: TAB_NAMES[currentKey],
    accentColor: TAB_COLORS[currentKey],
  };

  return (
    <>
    <FeatureDivider className="my-16 max-w-6xl" />
    <section id="cases" className="relative w-full max-w-6xl mx-auto py-20 px-4 overflow-hidden">
      <DevSymbolsBackground />
      <VerticalLines />
      <div className="relative z-[5]">
        {/* Section label */}
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          {t('cases.section_label')}
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>

        {/* Title */}
        <p className="mt-4 text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900">
          {t('cases.title_1')}{' '}
          <span className="text-orange-500">{t('cases.title_highlight')}</span>{' '}
          {t('cases.title_2')}
        </p>

        {/* Tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {TAB_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => setActiveTab(i)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                i === activeTab
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-orange-300'
              }`}
            >
              {t(`cases.tab_${key}`)}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left column — info */}
          <div className="rounded-xl bg-white/80 backdrop-blur-sm p-5 ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
              {t(`cases.${currentKey}_title`)}
            </h3>
            <p className="mt-2 text-gray-600">
              {t(`cases.${currentKey}_desc`)}
            </p>
            <ul className="mt-4 space-y-3">
              {([1, 2, 3, 4] as const).map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {t(`cases.${currentKey}_b${n}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Remotion chat */}
          <div>
            <UseCaseChatPlayer labels={chatLabels} resetKey={activeTab} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
