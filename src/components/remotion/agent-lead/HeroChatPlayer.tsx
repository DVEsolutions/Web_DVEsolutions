"use client";

import { Player } from "@remotion/player";
import HeroChatComposition from "./HeroChatComposition";
import type { ChatLabels } from "./types";

export default function HeroChatPlayer({ labels }: { labels: ChatLabels }) {
  return (
    <div className="w-full rounded-xl overflow-hidden ring-1 ring-black/5 shadow-2xl transition-all hover:ring-orange-500/30">
      <Player
        component={HeroChatComposition}
        inputProps={{ labels }}
        compositionWidth={720}
        compositionHeight={450}
        durationInFrames={600}
        fps={30}
        loop
        autoPlay
        controls={false}
        acknowledgeRemotionLicense
        style={{ width: "100%", aspectRatio: "720 / 450" }}
      />
    </div>
  );
}
