import AgentLeadNav from '@/components/agent-lead/AgentLeadNav';
import HeroSection from '@/components/agent-lead/HeroSection';
import StatsBar from '@/components/agent-lead/StatsBar';
import PainSection from '@/components/agent-lead/PainSection';
import HowItWorks from '@/components/agent-lead/HowItWorks';
import UseCases from '@/components/agent-lead/UseCases';
import PricingSection from '@/components/agent-lead/PricingSection';
import CtaFinale from '@/components/agent-lead/CtaFinale';
import FooterAgentLead from '@/components/agent-lead/FooterAgentLead';

export default function AgentLeadPage() {
  return (
    <>
      <AgentLeadNav />
      <main className="relative mx-auto flex flex-col">
        <HeroSection />
        <StatsBar />
        <PainSection />
        <HowItWorks />
        <UseCases />
        <PricingSection />
        <CtaFinale />
      </main>
      <FooterAgentLead />
    </>
  );
}
