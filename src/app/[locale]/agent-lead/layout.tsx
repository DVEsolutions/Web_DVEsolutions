import Script from 'next/script';

export default function AgentLeadLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script id="agent-lead" strategy="afterInteractive">{`
                window.AgentLeadSettings = { skill_id: 'dvesolutions' };
                var s = document.createElement('script');
                s.src = 'https://agentlead.fl1.it/agent.js';
                s.async = true;
                document.body.appendChild(s);
            `}</Script>
            {children}
        </>
    );
}