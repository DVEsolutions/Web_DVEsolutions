'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const t = useTranslations('agent_lead');

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5'),
    t('pricing.feature6'),
    t('pricing.feature7'),
    t('pricing.feature8'),
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          {t('pricing.section_label')}
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>

        <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900">
          {t('pricing.title_1')}{' '}
          <span className="text-orange-500">{t('pricing.title_highlight')}</span>{' '}
          {t('pricing.title_2')}
        </h3>

        <p className="mt-3 text-lg text-gray-600 max-w-lg">
          {t('pricing.subtitle')}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 mx-auto max-w-xl rounded-2xl bg-white p-8 md:p-10 border-2 border-orange-500 shadow-2xl shadow-orange-500/10"
        >
          <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600 ring-1 ring-orange-200 mb-6">
            {t('pricing.badge')}
          </span>

          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-black text-gray-900 tracking-tighter">
              {t('pricing.price')}
            </span>
            <span className="text-xl text-gray-500 font-medium">
              {t('pricing.price_period')}
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                <svg
                  className="size-4 shrink-0 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </div>
            ))}
          </div>

          <button className="mt-8 w-full inline-flex items-center justify-center gap-1 rounded-md border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-4 text-base font-semibold text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04)] hover:shadow-orange-300 transition-all">
            {t('pricing.cta')}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            {t('pricing.note')}
          </p>

          <div className="mt-6 rounded-lg bg-orange-50 ring-1 ring-orange-200 p-4 text-sm text-gray-700 text-center">
            {t('pricing.guarantee')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
