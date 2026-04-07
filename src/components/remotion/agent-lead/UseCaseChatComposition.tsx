import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import type { ChatLabels } from "./types";

export default function UseCaseChatComposition({ labels }: { labels: ChatLabels }) {
  const frame = useCurrentFrame();
  const { messages, badge, businessName = "Agent Lead", accentColor = "#f97316" } = labels;

  const MSG_TYPING = 30;
  const MSG_GAP = 85; // Slower pace for readability
  const messageTimeline = messages.map((_, i) => ({
    typingStart: 40 + i * MSG_GAP,
    showAt: 40 + i * MSG_GAP + MSG_TYPING,
  }));

  const badgeFrame = 40 + messages.length * MSG_GAP + 40;
  const fadeStart = 700;
  const fadeOpacity = interpolate(frame, [fadeStart, 750], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", fontFamily: "Inter, system-ui, sans-serif", opacity: fadeOpacity, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{
        width: "90%", maxWidth: 360, backgroundColor: "white",
        borderRadius: 20, border: "1px solid #e5e7eb",
        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{ padding: "14px 18px", backgroundColor: accentColor, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#34d399", border: "2px solid rgba(255,255,255,0.3)" }} />
          <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{businessName}</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginLeft: "auto" }}>online</span>
        </div>

        {/* Messages */}
        <div style={{ padding: "14px 14px", display: "flex", flexDirection: "column", gap: 8, minHeight: 300 }}>
          {messageTimeline.map((timing, i) => {
            const msg = messages[i];
            if (!msg) return null;
            const showTyping = frame >= timing.typingStart && frame < timing.showAt;
            const showMsg = frame >= timing.showAt;
            return (
              <div key={i}>
                {showTyping && msg.isBot && <TypingIndicator />}
                {showMsg && <ChatBubble text={msg.text} isBot={msg.isBot} startFrame={timing.showAt} accentColor={accentColor} />}
              </div>
            );
          })}

          {frame >= badgeFrame && (
            <div style={{
              marginTop: 8, padding: "8px 12px",
              backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0",
              borderRadius: 10, fontSize: 12, fontWeight: 600,
              color: "#059669", textAlign: "center",
              opacity: interpolate(frame, [badgeFrame, badgeFrame + 10], [0, 1], { extrapolateRight: "clamp" }),
            }}>
              {badge}
            </div>
          )}
        </div>

        {/* Fake input */}
        <div style={{ padding: "10px 14px", borderTop: "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, height: 36, backgroundColor: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }} />
          <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: accentColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 14, fontWeight: 700 }}>→</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
