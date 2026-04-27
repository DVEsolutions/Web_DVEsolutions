"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import VerticalLines from '@/components/effects/VerticalLines';
import FeatureDivider from '@/components/effects/FeatureDivider';

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section id="pricing" className="relative mx-auto max-w-6xl scroll-my-24 px-4 xl:px-0">
        <VerticalLines />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
              {t('section_label')}
              <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <p className="text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
              {t('headline')}
            </p>
            <p className="mt-4 text-lg text-gray-600 text-balance">
              {t('subheadline')}
            </p>

            <a
              href="https://cal.com/daniel-de-vecchi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-1 rounded-md border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all hover:shadow-orange-300"
            >
              {t('cta')}
            </a>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              {[t('badge1'), t('badge2'), t('badge3')].map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <svg className="size-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
