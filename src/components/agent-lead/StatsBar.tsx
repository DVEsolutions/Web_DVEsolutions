"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import FeatureDivider from "@/components/effects/FeatureDivider";

const stats = [
  { numberKey: "stats.stat1_number", labelKey: "stats.stat1_label" },
  { numberKey: "stats.stat2_number", labelKey: "stats.stat2_label" },
  { numberKey: "stats.stat3_number", labelKey: "stats.stat3_label" },
  { numberKey: "stats.stat4_number", labelKey: "stats.stat4_label" },
] as const;

export default function StatsBar() {
  const t = useTranslations("agent_lead");

  return (
    <>
    <FeatureDivider className="my-16 max-w-6xl" />
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.numberKey}
              className={`text-center ${
                i > 0 ? "md:border-l md:border-gray-200" : ""
              }`}
            >
              <p className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-mono">
                {t(stat.numberKey)}
              </p>
              <p className="mt-1 text-sm text-gray-600">{t(stat.labelKey)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
