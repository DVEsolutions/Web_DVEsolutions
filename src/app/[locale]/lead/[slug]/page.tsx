"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import TokenGate from "@/components/lead/TokenGate";
import StatsCards from "@/components/lead/StatsCards";
import LeadTable from "@/components/lead/LeadTable";
import SnippetBlock from "@/components/lead/SnippetBlock";
import { fetchLeads, fetchStats, ApiError } from "@/lib/agent-lead";
import type { Lead, Stats } from "@/lib/agent-lead";

function Dashboard({ slug, token, onInvalidToken }: { slug: string; token: string; onInvalidToken: () => void }) {
  const t = useTranslations("lead_dashboard");
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      const [leadsData, statsData] = await Promise.all([
        fetchLeads(slug, token),
        fetchStats(slug, token),
      ]);
      setLeads(leadsData);
      setStats(statsData);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401 || err.status === 403) {
          onInvalidToken();
          return;
        }
        if (err.status === 404) {
          setError(t("skill_not_found"));
          return;
        }
      }
      setError(t("network_error"));
    }
  }, [slug, token, onInvalidToken, t]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
          <p className="text-lg text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!leads || !stats) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-600 border-t-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <h1 className="text-2xl font-semibold text-white">{t("page_title")}</h1>
        <StatsCards stats={stats} />
        <LeadTable leads={leads} slug={slug} token={token} />
        <SnippetBlock slug={slug} />
      </div>
    </div>
  );
}

export default function LeadDashboardPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [tokenKey, setTokenKey] = useState(0);

  const handleInvalidToken = useCallback(() => {
    sessionStorage.removeItem(`lead-token-${slug}`);
    setTokenKey((k) => k + 1);
  }, [slug]);

  return (
    <TokenGate key={tokenKey} slug={slug}>
      {(token) => (
        <Dashboard slug={slug} token={token} onInvalidToken={handleInvalidToken} />
      )}
    </TokenGate>
  );
}
