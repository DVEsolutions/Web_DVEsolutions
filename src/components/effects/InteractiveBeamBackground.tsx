'use client';

import { useEffect, useState } from 'react';

export default function InteractiveBeamBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Fine Grid Pattern */}
      <div className="absolute inset-0 graph-paper-dark opacity-40" />

      {/* Vertical Sweep Beam */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_20px_rgba(255,90,31,0.5)] animate-sweep" />
      </div>

      {/* Mouse Following Glow */}
      <div
        className="absolute inset-0 z-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 90, 31, 0.08), transparent 60%)`
        }}
      />
      
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-accent/5 to-transparent z-10" />
    </div>
  );
}
