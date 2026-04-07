"use client";

import { Player, type PlayerRef } from "@remotion/player";
import { useRef, useEffect } from "react";
import UseCaseChatComposition from "./UseCaseChatComposition";
import type { ChatLabels } from "./types";

interface Props {
  labels: ChatLabels;
  resetKey: number; // Changes when tab switches to reset playback
}

export default function UseCaseChatPlayer({ labels, resetKey }: Props) {
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.play();
    }
  }, [resetKey]);

  return (
    <div className="w-full rounded-xl overflow-hidden ring-1 ring-black/5 shadow-lg bg-gray-50 transition-all hover:ring-orange-500/30">
      <Player
        ref={playerRef}
        component={UseCaseChatComposition}
        inputProps={{ labels }}
        compositionWidth={400}
        compositionHeight={500}
        durationInFrames={750}
        fps={30}
        loop
        autoPlay
        controls={false}
        acknowledgeRemotionLicense
        style={{ width: "100%", aspectRatio: "400 / 500" }}
      />
    </div>
  );
}
