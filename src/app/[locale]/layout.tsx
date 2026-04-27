import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

async function loadMessages(locale: string) {
  switch (locale) {
    case 'en': return (await import('@/messages/en.json')).default;
    case 'cs': return (await import('@/messages/cs.json')).default;
    default:   return (await import('@/messages/it.json')).default;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const base = 'https://dvesolution.fl1.it';
  const path = locale === 'it' ? '' : `/${locale}`;

  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      url: `${base}${path}`,
      title: t('home.title'),
      description: t('home.description'),
    },
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        it: base,
        en: `${base}/en`,
        cs: `${base}/cs`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'it' | 'en' | 'cs')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
