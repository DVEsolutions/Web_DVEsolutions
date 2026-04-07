'use client';

import { useTranslations } from 'next-intl';

export default function FooterAgentLead() {
  const t = useTranslations('agent_lead');

  return (
    <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-mono text-sm text-gray-500">[LaunchLab]</span>
          <span className="text-gray-400 ml-2">
            · Agent <span className="text-orange-400">Lead</span>
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
