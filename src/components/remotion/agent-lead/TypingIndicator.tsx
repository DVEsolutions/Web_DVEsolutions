import { interpolate, useCurrentFrame } from "remotion";

export default function TypingIndicator() {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 14px", backgroundColor: "#f3f4f6", borderRadius: 16, borderBottomLeftRadius: 4, width: "fit-content" }}>
      {[0, 1, 2].map((i) => {
        const y = interpolate(
          (frame + i * 4) % 20,
          [0, 5, 10, 15, 20],
          [0, -4, 0, -4, 0]
        );
        return (
          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#9ca3af", transform: `translateY(${y}px)` }} />
        );
      })}
    </div>
  );
}
