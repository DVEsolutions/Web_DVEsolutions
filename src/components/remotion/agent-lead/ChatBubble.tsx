import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  text: string;
  isBot: boolean;
  startFrame: number;
  accentColor?: string;
}

export default function ChatBubble({ text, isBot, startFrame, accentColor = "#f97316" }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - startFrame;
  if (localFrame < 0) return null;

  const progress = spring({ frame: localFrame, fps, config: { damping: 15, stiffness: 120 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [12, 0]);

  return (
    <div style={{
      display: "flex",
      justifyContent: isBot ? "flex-start" : "flex-end",
      opacity,
      transform: `translateY(${translateY}px)`,
    }}>
      <div style={{
        maxWidth: "80%",
        padding: "8px 14px",
        borderRadius: 16,
        borderBottomLeftRadius: isBot ? 4 : 16,
        borderBottomRightRadius: isBot ? 16 : 4,
        backgroundColor: isBot ? "#f3f4f6" : accentColor,
        color: isBot ? "#374151" : "white",
        fontSize: 13,
        fontFamily: "Inter, system-ui, sans-serif",
        lineHeight: 1.5,
      }}>
        {text}
      </div>
    </div>
  );
}
