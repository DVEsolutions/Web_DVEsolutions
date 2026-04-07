"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cards = [
  { iconKey: "pain.card1_icon", hookKey: "pain.card1_hook", bodyKey: "pain.card1_body" },
  { iconKey: "pain.card2_icon", hookKey: "pain.card2_hook", bodyKey: "pain.card2_body" },
  { iconKey: "pain.card3_icon", hookKey: "pain.card3_hook", bodyKey: "pain.card3_body" },
] as const;

export default function PainSection() {
  const t = useTranslations("agent_lead");

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          {t("pain.section_label")}
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>

        <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mt-4">
          {t("pain.title_1")}{" "}
          <span className="text-orange-500">{t("pain.title_highlight")}</span>
        </h3>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.hookKey}
              className="rounded-xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:ring-orange-400/40 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 ring-1 ring-orange-200 flex items-center justify-center text-xl mb-4">
                {t(card.iconKey)}
              </div>
              <p className="text-lg font-semibold text-gray-900 tracking-tight">
                {t(card.hookKey)}
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {t(card.bodyKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
