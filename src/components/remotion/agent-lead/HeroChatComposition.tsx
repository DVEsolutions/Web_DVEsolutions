import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import type { ChatLabels } from "./types";

export default function HeroChatComposition({ labels }: { labels: ChatLabels }) {
  const frame = useCurrentFrame();
  const { messages, badge } = labels;

  // Each message: 30 frames typing + appear
  const MSG_TYPING = 30;
  const MSG_GAP = 60;
  const messageTimeline = messages.map((_, i) => ({
    typingStart: 30 + i * MSG_GAP,
    showAt: 30 + i * MSG_GAP + MSG_TYPING,
  }));

  const badgeFrame = 30 + messages.length * MSG_GAP + 60;
  const fadeStart = 540;
  const fadeOpacity = interpolate(frame, [fadeStart, 600], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#f9fafb", fontFamily: "Inter, system-ui, sans-serif", opacity: fadeOpacity }}>
      {/* Browser chrome */}
      <div style={{ margin: 16, borderRadius: 12, border: "1px solid #e5e7eb", backgroundColor: "white", overflow: "hidden", height: "calc(100% - 32px)", display: "flex", flexDirection: "column" }}>
        {/* Browser toolbar */}
        <div style={{ height: 32, borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", padding: "0 12px", gap: 8, backgroundColor: "#fafafa", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ff5f56" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#27c93f" }} />
          </div>
          <div style={{ flex: 1, height: 18, backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: 4, display: "flex", alignItems: "center", padding: "0 8px" }}>
            <span style={{ fontSize: 10, color: "#6b7280" }}>mio-sito.it</span>
          </div>
        </div>

        {/* Fake site content */}
        <div style={{ flex: 1, position: "relative", padding: 20, backgroundColor: "#fafafa" }}>
          {/* Mini navbar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ width: 60, height: 8, backgroundColor: "#111827", borderRadius: 2 }} />
            <div style={{ width: 40, height: 16, backgroundColor: "#f97316", borderRadius: 4 }} />
          </div>
          {/* Mini hero text */}
          <div style={{ maxWidth: 300, marginBottom: 16 }}>
            <div style={{ width: 220, height: 12, backgroundColor: "#111827", borderRadius: 2, marginBottom: 6 }} />
            <div style={{ width: 160, height: 8, backgroundColor: "#d1d5db", borderRadius: 2 }} />
          </div>
          {/* Mini cards */}
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 100, height: 60, backgroundColor: "white", borderRadius: 6, border: "1px solid #e5e7eb" }} />
            <div style={{ width: 100, height: 60, backgroundColor: "white", borderRadius: 6, border: "1px solid #e5e7eb" }} />
          </div>

          {/* Chat widget - bottom right */}
          <div style={{
            position: "absolute", bottom: 12, right: 12,
            width: 260, backgroundColor: "white",
            borderRadius: 16, border: "1px solid #e5e7eb",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            overflow: "hidden",
          }}>
            {/* Widget header */}
            <div style={{ padding: "10px 14px", backgroundColor: "#f97316", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#34d399" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "white" }}>Agent Lead</span>
            </div>
            {/* Messages area */}
            <div style={{ padding: "10px 10px", display: "flex", flexDirection: "column", gap: 6, minHeight: 180, maxHeight: 220, overflow: "hidden" }}>
              {messageTimeline.map((timing, i) => {
                const msg = messages[i];
                if (!msg) return null;
                const showTyping = frame >= timing.typingStart && frame < timing.showAt;
                const showMsg = frame >= timing.showAt;
                return (
                  <div key={i}>
                    {showTyping && msg.isBot && <TypingIndicator />}
                    {showMsg && <ChatBubble text={msg.text} isBot={msg.isBot} startFrame={timing.showAt} />}
                  </div>
                );
              })}
              {/* Badge */}
              {frame >= badgeFrame && (
                <div style={{
                  marginTop: 4,
                  padding: "6px 10px",
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  borderRadius: 8,
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#059669",
                  textAlign: "center",
                  opacity: interpolate(frame, [badgeFrame, badgeFrame + 10], [0, 1], { extrapolateRight: "clamp" }),
                }}>
                  {badge}
                </div>
              )}
            </div>
            {/* Fake input */}
            <div style={{ padding: "8px 10px", borderTop: "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ flex: 1, height: 28, backgroundColor: "#f9fafb", borderRadius: 6, border: "1px solid #e5e7eb" }} />
              <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: 12 }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
