"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

interface TokenGateProps {
  slug: string;
  children: (token: string) => ReactNode;
}

export default function TokenGate({ slug, children }: TokenGateProps) {
  const t = useTranslations("lead_dashboard");
  const searchParams = useSearchParams();

  const [token, setToken] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlToken = searchParams.get("t");
    if (urlToken) {
      sessionStorage.setItem(`lead-token-${slug}`, urlToken);
      window.history.replaceState({}, "", window.location.pathname);
      setToken(urlToken);
      return;
    }
    const stored = sessionStorage.getItem(`lead-token-${slug}`);
    if (stored) {
      setToken(stored);
    }
  }, [slug, searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    sessionStorage.setItem(`lead-token-${slug}`, trimmed);
    setError(null);
    setToken(trimmed);
  }

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
        <div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-8">
          <h1 className="text-2xl font-semibold text-white">{t("token_title")}</h1>
          <p className="mt-2 text-sm text-gray-400">{t("token_subtitle")}</p>

          {error && (
            <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("token_placeholder")}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
            >
              {t("token_submit")}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children(token)}</>;
}
