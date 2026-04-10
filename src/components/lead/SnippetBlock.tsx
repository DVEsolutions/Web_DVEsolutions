"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function SnippetBlock({ slug }: { slug: string }) {
  const t = useTranslations("lead_dashboard");
  const [copied, setCopied] = useState(false);

  const snippet = `<script src="https://agentlead.fl1.it/embed/${slug}.js"></script>`;

  function handleCopy() {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6">
      <h3 className="text-lg font-semibold text-white">{t("snippet_title")}</h3>
      <p className="mt-1 text-sm text-gray-400">{t("snippet_desc")}</p>

      <div className="mt-4 flex items-center gap-2">
        <code className="flex-1 rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-orange-400 overflow-x-auto">
          {snippet}
        </code>
        <button
          onClick={handleCopy}
          className="shrink-0 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
        >
          {copied ? t("snippet_copied") : t("snippet_copy")}
        </button>
      </div>

      <div className="mt-4 space-y-1 text-xs text-gray-500">
        <p>{t("snippet_wordpress")}</p>
        <p>{t("snippet_shopify")}</p>
        <p>{t("snippet_wix")}</p>
        <p>{t("snippet_other")}</p>
      </div>
    </div>
  );
}
