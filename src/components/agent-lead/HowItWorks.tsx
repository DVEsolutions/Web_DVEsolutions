'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import FeatureDivider from '@/components/effects/FeatureDivider';
import VerticalLines from '@/components/effects/VerticalLines';
import DiagonalSVG from '@/components/effects/DiagonalSVG';

const steps = [1, 2, 3] as const;

export default function HowItWorks() {
  const t = useTranslations('agent_lead');

  return (
    <>
    <FeatureDivider className="my-16 max-w-6xl" />
    <section id="how" className="relative py-20 px-4 mx-auto max-w-6xl overflow-hidden">
      <VerticalLines />
      <DiagonalSVG id="how-diagonal" className="absolute inset-0 mask-[radial-gradient(ellipse_80%_60%_at_50%_50%,black_40%,transparent_100%)]" />
      <div className="relative z-[5] max-w-4xl mx-auto">
        {/* Section label */}
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          {t('how.section_label')}
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>

        {/* Title */}
        <p className="mt-4 text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900">
          {t('how.title_1')}{' '}
          <span className="text-orange-500">{t('how.title_highlight')}</span>
          {t('how.title_2')}
        </p>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Vertical dashed line */}
          <div className="absolute left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-orange-300" />

          {steps.map((step, i) => (
            <motion.div
              key={step}
              className="relative flex gap-6 mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Circle number */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-[0_0_0_4px_#fff7ed]">
                {step}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  {t(`how.step${step}_title`)}
                </h3>
                <p className="mt-1 text-gray-600">
                  {t(`how.step${step}_desc`)}
                </p>
                <div className="mt-3 rounded-lg bg-gray-950 px-4 py-3 font-mono text-sm text-orange-400">
                  {t.raw(`how.step${step}_code`)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
