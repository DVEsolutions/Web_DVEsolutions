'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function AgentLeadNav() {
  const t = useTranslations('agent_lead');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#how', label: t('nav.link_how') },
    { href: '#cases', label: t('nav.link_cases') },
    { href: '#pricing', label: t('nav.link_pricing') },
  ];

  return (
    <nav
      className={cn(
        'fixed inset-x-4 top-4 z-50 mx-auto max-w-6xl rounded-lg border border-transparent px-4 py-3 transition duration-300',
        scrolled
          ? 'border-gray-200/50 bg-white/95 shadow-2xl shadow-black/5 backdrop-blur-md'
          : 'bg-white/0'
      )}
    >
      <div className="flex items-center justify-between">
        {/* Left — Logo */}
        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}`}
            className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-500"
          >
            [LaunchLab]
          </Link>
          <span className="text-sm font-semibold">
            <span className="text-gray-900">Agent </span>
            <span className="text-orange-500">Lead</span>
          </span>
        </div>

        {/* Center — Desktop nav links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — Desktop buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            {t('nav.cta_login')}
          </button>
          <button className="rounded-lg border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:from-orange-500 hover:to-orange-600">
            {t('nav.cta_trial')} &rarr;
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-200/60 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              {t('nav.cta_login')}
            </button>
            <button className="rounded-lg border-b-[1.5px] border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:from-orange-500 hover:to-orange-600">
              {t('nav.cta_trial')} &rarr;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
