'use client';

import { useTranslations } from 'next-intl';

export default function CtaFinale() {
  const t = useTranslations('agent_lead');

  return (
    <section className="relative py-24 px-4 bg-gray-900">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">
          {t('cta.title_1')}{' '}
          <span className="text-orange-500">{t('cta.title_highlight')}</span>
        </h2>

        <button className="mt-8 inline-flex items-center justify-center gap-1 rounded-md border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-4 text-base font-semibold text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04)] hover:shadow-orange-300 transition-all">
          {t('cta.button')}
        </button>

        <p className="mt-4 text-sm text-gray-400">
          {t('cta.note')}
        </p>
      </div>
    </section>
  );
}
