"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import FeatureDivider from '@/components/effects/FeatureDivider';
import VerticalLines from '@/components/effects/VerticalLines';

export default function WhatWeBuild() {
  const t = useTranslations('what_we_build');

  const card1Tags = [t('card1_tag1'), t('card1_tag2'), t('card1_tag3'), t('card1_tag4')];
  const card2Tags = [t('card2_tag1'), t('card2_tag2'), t('card2_tag3'), t('card2_tag4')];

  return (
    <>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section id="services" className="relative mx-auto max-w-6xl scroll-my-24 px-4 xl:px-0">
        <VerticalLines />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            {t('section_label')}
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            {t('headline')}
          </p>
          <p className="mt-3 max-w-lg text-gray-600 text-balance">
            {t('subheadline')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 — MVP Build (standard style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl bg-white p-8 md:p-10 ring-1 ring-black/5 shadow-sm flex flex-col transition-all hover:ring-orange-400/40 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              {t('card1_eyebrow')}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{t('card1_title')}</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{t('card1_desc')}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {card1Tags.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#pricing"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-xs transition-all hover:border-orange-300 hover:text-orange-600"
            >
              {t('card1_cta')}
            </a>
          </motion.div>

          {/* Card 2 — AI Solutions (highlighted style, same as FULL BUILD in Pricing) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl bg-white pt-12 p-8 md:p-10 md:pt-10 ring-2 ring-orange-500 shadow-2xl shadow-orange-500/10 flex flex-col mt-1"
          >
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <span className="inline-flex items-center rounded-full border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {t('card2_badge')}
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              {t('card2_eyebrow')}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{t('card2_title')}</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{t('card2_desc')}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {card2Tags.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#cta"
              className="mt-8 inline-flex w-full items-center justify-center gap-1 rounded-md border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all hover:shadow-orange-300"
            >
              {t('card2_cta')}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
