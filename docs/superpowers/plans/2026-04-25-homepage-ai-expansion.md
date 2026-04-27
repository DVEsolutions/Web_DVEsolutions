# Homepage AI Expansion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand DVEsolutions homepage to position the company as both MVP builder and AI solutions provider (agents, workflow automation, custom integrations like SkillBrain).

**Architecture:** 4 independent phases. Phase 1 updates hero copy across all 3 locales. Phase 2 adds a new `WhatWeBuild` section with two service cards. Phase 3 adds a 4th pain card for the "enterprise with manual workflows" persona. Phase 4 upgrades SocialProof to feature Agent Lead prominently as a launched AI product alongside QuickFy and QuickRef.

**Tech Stack:** Next.js App Router, next-intl (i18n), Framer Motion, Tailwind CSS

---

## Phase 1 — Update Hero Copy

**Files:**
- Modify: `src/messages/it.json` (hero keys)
- Modify: `src/messages/en.json` (hero keys)
- Modify: `src/messages/cs.json` (hero keys)

### Task 1.1: Update Italian hero copy

- [ ] **Step 1: Open `src/messages/it.json` and replace the `hero` block**

Replace the existing `hero` object with:

```json
"hero": {
  "badge_mvs": "MVP + AI Solutions",
  "badge_weeks": "6 settimane",
  "badge_price": "da €2.000",
  "headline_1": "Costruiamo il digitale",
  "headline_accent": "su misura.",
  "headline_2": "che fa crescere la tua azienda.",
  "subheadline": "Che tu parta da zero o voglia automatizzare i processi con l'AI — siamo il partner tecnico end-to-end. MVP, agenti AI, automazioni. Senza agenzie, senza intermediari.",
  "cta_primary": "Scopri se DVEsolutions fa per te",
  "cta_secondary": "Guarda come funziona",
  "stat_1": "2 prodotti lanciati",
  "stat_2": "15+ anni esperienza",
  "stat_3": "6 settimane al lancio",
  "stat_4": "2 founder",
  "typewriter_1": "su misura.",
  "typewriter_2": "con l'AI.",
  "typewriter_3": "end-to-end."
}
```

- [ ] **Step 2: Update English hero copy in `src/messages/en.json`**

Replace the existing `hero` object with:

```json
"hero": {
  "badge_mvs": "MVP + AI Solutions",
  "badge_weeks": "6 weeks",
  "badge_price": "from €2,000",
  "headline_1": "We build the digital",
  "headline_accent": "made for you.",
  "headline_2": "that grows your business.",
  "subheadline": "Whether you're starting from zero or want to automate your processes with AI — we're the end-to-end technical partner. MVP, AI agents, automations. No agencies, no intermediaries.",
  "cta_primary": "See if DVEsolutions is right for you",
  "cta_secondary": "See how it works",
  "stat_1": "2 products launched",
  "stat_2": "15+ years combined",
  "stat_3": "6 weeks to launch",
  "stat_4": "2 founders",
  "typewriter_1": "made for you.",
  "typewriter_2": "powered by AI.",
  "typewriter_3": "end-to-end."
}
```

- [ ] **Step 3: Update Czech hero copy in `src/messages/cs.json`**

Replace the existing `hero` object with:

```json
"hero": {
  "badge_mvs": "MVP + AI řešení",
  "badge_weeks": "6 týdnů",
  "badge_price": "od €2 000",
  "headline_1": "Stavíme digitální",
  "headline_accent": "na míru.",
  "headline_2": "který rozvíjí váš business.",
  "subheadline": "Ať začínáte od nuly nebo chcete automatizovat procesy pomocí AI — jsme end-to-end technický partner. MVP, AI agenti, automatizace. Bez agentur, bez prostředníků.",
  "cta_primary": "Zjistěte, jestli je DVEsolutions pro vás",
  "cta_secondary": "Podívejte se jak to funguje",
  "stat_1": "2 spuštěné produkty",
  "stat_2": "15+ let zkušeností",
  "stat_3": "6 týdnů ke spuštění",
  "stat_4": "2 zakladatelé",
  "typewriter_1": "na míru.",
  "typewriter_2": "s AI.",
  "typewriter_3": "end-to-end."
}
```

- [ ] **Step 4: Start dev server and verify hero renders correctly**

```bash
npm run dev
```

Open `http://localhost:3000` and check:
- Badge shows "MVP + AI Solutions"
- Headline reads "Costruiamo il digitale [typewriter] / che fa crescere la tua azienda."
- Typewriter cycles through the 3 new words
- Subheadline mentions MVP, agenti AI, automazioni

- [ ] **Step 5: Commit**

```bash
git add src/messages/it.json src/messages/en.json src/messages/cs.json
git commit -m "feat: update hero copy to include AI Solutions positioning"
```

---

## Phase 2 — New "WhatWeBuild" Section

**Files:**
- Create: `src/components/sections/WhatWeBuild.tsx`
- Modify: `src/messages/it.json` (add `what_we_build` key)
- Modify: `src/messages/en.json` (add `what_we_build` key)
- Modify: `src/messages/cs.json` (add `what_we_build` key)
- Modify: `src/app/[locale]/page.tsx` (add WhatWeBuild between Hero and PainCards)

### Task 2.1: Add i18n keys for the new section

- [ ] **Step 1: Add `what_we_build` to `src/messages/it.json`**

Add after the `hero` block:

```json
"what_we_build": {
  "section_label": "I Nostri Servizi",
  "headline": "Cosa costruiamo.",
  "subheadline": "Dal prodotto digitale al sistema AI — end-to-end, senza intermediari.",
  "card1_eyebrow": "MVP BUILD",
  "card1_title": "Dall'idea al prodotto live in 6 settimane",
  "card1_desc": "Workshop, prototipo interattivo e sviluppo completo. Consegniamo un MVP deployato con codice sorgente e 1 mese di supporto. Per founder e startup che vogliono muoversi veloci.",
  "card1_tag1": "Workshop MVS",
  "card1_tag2": "Prototipo testato",
  "card1_tag3": "Deploy in produzione",
  "card1_tag4": "Codice tuo",
  "card1_cta": "Vedi i piani",
  "card2_badge": "AI",
  "card2_eyebrow": "AI SOLUTIONS",
  "card2_title": "Agenti AI, automazioni e sistemi su misura",
  "card2_desc": "Costruiamo agenti AI, automazioni di workflow e integrazioni personalizzate per aziende che vogliono lavorare in modo più intelligente. Dall'analisi al deploy, end-to-end.",
  "card2_tag1": "Agenti AI",
  "card2_tag2": "Workflow automation",
  "card2_tag3": "Integrazioni custom",
  "card2_tag4": "AI infrastructure",
  "card2_cta": "Parliamone"
}
```

- [ ] **Step 2: Add `what_we_build` to `src/messages/en.json`**

Add after the `hero` block:

```json
"what_we_build": {
  "section_label": "Our Services",
  "headline": "What we build.",
  "subheadline": "From digital product to AI system — end-to-end, no intermediaries.",
  "card1_eyebrow": "MVP BUILD",
  "card1_title": "From idea to live product in 6 weeks",
  "card1_desc": "Workshop, interactive prototype and full development. We deliver a deployed MVP with source code and 1 month of support. For founders and startups who want to move fast.",
  "card1_tag1": "MVS Workshop",
  "card1_tag2": "Tested prototype",
  "card1_tag3": "Production deploy",
  "card1_tag4": "Your code",
  "card1_cta": "See pricing",
  "card2_badge": "AI",
  "card2_eyebrow": "AI SOLUTIONS",
  "card2_title": "AI agents, automations and custom systems",
  "card2_desc": "We build AI agents, workflow automations and custom integrations for companies that want to work smarter. From analysis to deploy, end-to-end.",
  "card2_tag1": "AI Agents",
  "card2_tag2": "Workflow automation",
  "card2_tag3": "Custom integrations",
  "card2_tag4": "AI infrastructure",
  "card2_cta": "Let's talk"
}
```

- [ ] **Step 3: Add `what_we_build` to `src/messages/cs.json`**

Add after the `hero` block:

```json
"what_we_build": {
  "section_label": "Naše Služby",
  "headline": "Co stavíme.",
  "subheadline": "Od digitálního produktu po AI systém — end-to-end, bez prostředníků.",
  "card1_eyebrow": "MVP BUILD",
  "card1_title": "Od nápadu k živému produktu za 6 týdnů",
  "card1_desc": "Workshop, interaktivní prototyp a kompletní vývoj. Dodáváme nasazený MVP se zdrojovým kódem a 1 měsíc podpory. Pro zakladatele a startupy, které se chtějí rychle pohybovat.",
  "card1_tag1": "MVS Workshop",
  "card1_tag2": "Otestovaný prototyp",
  "card1_tag3": "Nasazení do produkce",
  "card1_tag4": "Váš kód",
  "card1_cta": "Zobrazit ceny",
  "card2_badge": "AI",
  "card2_eyebrow": "AI SOLUTIONS",
  "card2_title": "AI agenti, automatizace a systémy na míru",
  "card2_desc": "Stavíme AI agenty, automatizace workflow a vlastní integrace pro firmy, které chtějí pracovat chytřeji. Od analýzy po nasazení, end-to-end.",
  "card2_tag1": "AI agenti",
  "card2_tag2": "Automatizace workflow",
  "card2_tag3": "Vlastní integrace",
  "card2_tag4": "AI infrastruktura",
  "card2_cta": "Pojďme se pobavit"
}
```

### Task 2.2: Create the WhatWeBuild component

- [ ] **Step 1: Create `src/components/sections/WhatWeBuild.tsx`**

Design system rules applied:
- Section label: `text-lg font-semibold tracking-tight text-orange-500` + `absolute -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500` bar (same as Metodo, Pricing, PainCards)
- Section structure: `<FeatureDivider>` + `<section id="services" className="relative mx-auto max-w-6xl scroll-my-24 px-4 xl:px-0">`
- Card standard (MVP): `rounded-xl bg-white p-8 ring-1 ring-black/5 shadow-sm hover:ring-orange-400/40 hover:shadow-md`
- Card highlighted (AI Solutions): `rounded-xl bg-white pt-12 p-8 ring-2 ring-orange-500 shadow-2xl shadow-orange-500/10` — same treatment as "FULL BUILD" plan in Pricing
- Badge pill: `inline-flex items-center rounded-full border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white` — same as Pricing badge
- Motion values: `initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.1/0.2 }}` — matches Pricing cards

```tsx
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
```

### Task 2.3: Add WhatWeBuild to page.tsx

- [ ] **Step 1: Update `src/app/[locale]/page.tsx`**

Add the import at the top with the other section imports:

```tsx
import WhatWeBuild from '@/components/sections/WhatWeBuild';
```

Insert `<WhatWeBuild />` between `<Hero />` and `<PainCards />`:

```tsx
<main className="relative mx-auto flex flex-col">
  <Hero />
  <WhatWeBuild />
  <PainCards />
  <Metodo />
  <Processo />
  <Pricing />
  <SocialProof />
  <CtaFinale />
</main>
```

- [ ] **Step 2: Check dev server — verify the new section appears after the hero animation, with two cards: plain white MVP card on the left, orange-ringed AI Solutions card on the right (matching the FULL BUILD pricing card style)**

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/WhatWeBuild.tsx src/app/[locale]/page.tsx src/messages/it.json src/messages/en.json src/messages/cs.json
git commit -m "feat: add WhatWeBuild section with MVP and AI Solutions cards"
```

---

## Phase 3 — Add 4th Pain Card (Enterprise persona)

**Files:**
- Modify: `src/components/sections/PainCards.tsx`
- Modify: `src/messages/it.json` (add `card4_*` keys to `pain` block)
- Modify: `src/messages/en.json` (add `card4_*` keys to `pain` block)
- Modify: `src/messages/cs.json` (add `card4_*` keys to `pain` block)

### Task 3.1: Add card4 i18n keys

- [ ] **Step 1: Add to `pain` block in `src/messages/it.json`**

```json
"card4_badge": "Azienda",
"card4_hook": "I miei team perdono ore in processi manuali ripetitivi.",
"card4_body": "Approvazioni, copy-paste, email manuali. L'AI può automatizzare tutto questo — tu dovresti pensare alla strategia."
```

- [ ] **Step 2: Add to `pain` block in `src/messages/en.json`**

```json
"card4_badge": "Enterprise",
"card4_hook": "My team loses hours on repetitive manual processes.",
"card4_body": "Approvals, copy-paste, manual emails. AI can automate all of this — you should be focused on strategy."
```

- [ ] **Step 3: Add to `pain` block in `src/messages/cs.json`**

```json
"card4_badge": "Firma",
"card4_hook": "Moje týmy ztrácejí hodiny na opakujících se manuálních procesech.",
"card4_body": "Schvalování, kopírování, manuální e-maily. AI to všechno může automatizovat — vy byste se měli věnovat strategii."
```

### Task 3.2: Update PainCards.tsx to show 4 cards

- [ ] **Step 1: Replace the full content of `src/components/sections/PainCards.tsx`**

```tsx
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import VerticalLines from '@/components/effects/VerticalLines';
import DiagonalSVG from '@/components/effects/DiagonalSVG';

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function TrendDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const cardIcons = [ClockIcon, CodeIcon, TrendDownIcon, ZapIcon];

export default function PainCards() {
  const t = useTranslations('pain');

  const cards = [
    { badge: t('card1_badge'), hook: t('card1_hook'), body: t('card1_body') },
    { badge: t('card2_badge'), hook: t('card2_hook'), body: t('card2_body') },
    { badge: t('card3_badge'), hook: t('card3_hook'), body: t('card3_body') },
    { badge: t('card4_badge'), hook: t('card4_hook'), body: t('card4_body') },
  ];

  return (
    <section className="relative mx-auto max-w-6xl scroll-my-24 mt-32 px-4 xl:px-0">
      <VerticalLines />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* Content side */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            {t('section_label')}
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            {t('headline')}
          </p>
        </div>

        {/* Visual side with diagonal pattern */}
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden min-h-[400px]">
          <DiagonalSVG id="pain-diagonal" className="mask-[linear-gradient(transparent,white_10rem)]" />
          <div className="relative z-10 grid grid-cols-1 gap-4 p-6 w-full">
            {cards.map((card, i) => {
              const Icon = cardIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-black/5 shadow-sm transition-all hover:ring-orange-400/40 hover:shadow-md hover:shadow-orange-500/5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 ring-1 ring-orange-200">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-1">{card.badge}</p>
                    <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                      &quot;{card.hook}&quot;
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{card.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

Note: the badge label is now rendered above the hook (was previously not shown in the original). This makes the persona clearer.

- [ ] **Step 2: Verify in browser — 4 pain cards visible, last one has a ZapIcon and reads about AI automation**

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/PainCards.tsx src/messages/it.json src/messages/en.json src/messages/cs.json
git commit -m "feat: add 4th pain card for enterprise AI automation persona"
```

---

## Phase 4 — Feature Agent Lead in SocialProof

**Files:**
- Modify: `src/components/sections/SocialProof.tsx`
- Modify: `src/messages/it.json` (add Agent Lead keys to `social` block)
- Modify: `src/messages/en.json` (add Agent Lead keys to `social` block)
- Modify: `src/messages/cs.json` (add Agent Lead keys to `social` block)

### Task 4.1: Add Agent Lead i18n keys

- [ ] **Step 1: Add to `social` block in `src/messages/it.json`**

```json
"cases_eyebrow": "PRODOTTI CHE ABBIAMO GIÀ LANCIATO.",
"agent_lead_name": "Agent Lead",
"agent_lead_desc": "Agente AI che qualifica i lead in tempo reale direttamente sul tuo sito web. Setup in 5 minuti, funziona 24/7.",
"agent_lead_status": "Live",
"agent_lead_cta": "Scopri Agent Lead →"
```

- [ ] **Step 2: Add to `social` block in `src/messages/en.json`**

```json
"cases_eyebrow": "PRODUCTS WE'VE ALREADY LAUNCHED.",
"agent_lead_name": "Agent Lead",
"agent_lead_desc": "AI agent that qualifies leads in real time directly on your website. 5-minute setup, works 24/7.",
"agent_lead_status": "Live",
"agent_lead_cta": "Discover Agent Lead →"
```

- [ ] **Step 3: Add to `social` block in `src/messages/cs.json`**

```json
"cases_eyebrow": "PRODUKTY, KTERÉ JSME JIŽ SPUSTILI.",
"agent_lead_name": "Agent Lead",
"agent_lead_desc": "AI agent, který v reálném čase kvalifikuje leady přímo na vašem webu. Nastavení za 5 minut, funguje 24/7.",
"agent_lead_status": "Live",
"agent_lead_cta": "Objevit Agent Lead →"
```

### Task 4.2: Update SocialProof component

The products grid currently shows QuickFy + QuickRef in 2 columns. The new layout:
- Agent Lead: full-width card (same white style as the other cards) with link to `/agent-lead` — distinguished by being full-width and having a CTA link
- QuickFy + QuickRef: 2 columns below (unchanged)

- [ ] **Step 1: Add `useLocale` import to `src/components/sections/SocialProof.tsx`**

Change the import line from:
```tsx
import { useTranslations } from 'next-intl';
```
to:
```tsx
import { useLocale, useTranslations } from 'next-intl';
```

- [ ] **Step 2: Add `useLocale()` call inside the `SocialProof` component**

After `const t = useTranslations('social');` add:
```tsx
const locale = useLocale();
```

- [ ] **Step 3: Replace the products grid block in `SocialProof.tsx`**

Find and replace the block starting with `<p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">` and the grid below it, replacing with:

```tsx
<p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
  {t('cases_eyebrow')}
</p>

{/* Agent Lead — full-width featured card (ring-2 ring-orange-500 like FULL BUILD in Pricing) */}
<motion.a
  href={`/${locale}/agent-lead`}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="block w-full rounded-xl bg-white p-6 ring-2 ring-orange-500 shadow-2xl shadow-orange-500/10 transition-all hover:shadow-orange-400/20 mb-6 group"
>
  <div className="flex items-start justify-between gap-4">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{t('agent_lead_name')}</h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {t('agent_lead_status')}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed max-w-lg">{t('agent_lead_desc')}</p>
    </div>
    <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors whitespace-nowrap self-center">
      {t('agent_lead_cta')}
    </span>
  </div>
</motion.a>

{/* QuickFy + QuickRef */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-0.5">
  {[
    { name: t('quickfy_name'), desc: t('quickfy_desc'), status: t('quickfy_status') },
    { name: t('quickref_name'), desc: t('quickref_desc'), status: t('quickref_status') },
  ].map((p, i) => (
    <motion.div
      key={p.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="rounded-xl bg-white p-6 ring-1 ring-black/5 shadow-sm flex flex-col gap-3 transition-all hover:ring-orange-400/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{p.name}</h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {p.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
    </motion.div>
  ))}
</div>
```

- [ ] **Step 4: Verify in browser — Agent Lead white full-width card appears above QuickFy/QuickRef, clicking it navigates to `/[locale]/agent-lead`**

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/SocialProof.tsx src/messages/it.json src/messages/en.json src/messages/cs.json
git commit -m "feat: feature Agent Lead as launched AI product in social proof section"
```

---

## Final Check

After all 4 phases are complete:

- [ ] Run `npm run build` and confirm no TypeScript or build errors
- [ ] Check all 3 locales (`/it`, `/en`, `/cs`) render correctly
- [ ] Verify Agent Lead link works from SocialProof section
- [ ] Confirm WhatWeBuild section appears between Hero animation and PainCards
- [ ] Confirm 4 pain cards all render with correct badges

```bash
npm run build
```

Expected output: `✓ Compiled successfully` with no errors.
