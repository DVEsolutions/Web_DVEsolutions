"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

// Module-level scroll tracker — shared across all CineVideo instances to avoid N listeners
let _scrollListeners: Set<() => void> = new Set();
let _scrollIdleTimer: ReturnType<typeof setTimeout> | null = null;
let _isScrollIdle = true;

function _onWindowScroll() {
  if (_isScrollIdle) {
    _isScrollIdle = false;
    _scrollListeners.forEach(fn => fn());
  }
  if (_scrollIdleTimer) clearTimeout(_scrollIdleTimer);
  _scrollIdleTimer = setTimeout(() => {
    _isScrollIdle = true;
    _scrollListeners.forEach(fn => fn());
  }, 200);
}

function useScrollIdle(): boolean {
  const [idle, setIdle] = useState(true);
  useEffect(() => {
    const notify = () => setIdle(_isScrollIdle);
    _scrollListeners.add(notify);
    if (_scrollListeners.size === 1) {
      window.addEventListener('scroll', _onWindowScroll, { passive: true });
    }
    return () => {
      _scrollListeners.delete(notify);
      if (_scrollListeners.size === 0) {
        window.removeEventListener('scroll', _onWindowScroll);
        if (_scrollIdleTimer) clearTimeout(_scrollIdleTimer);
      }
    };
  }, []);
  return idle;
}

interface CineVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
  poster?: string;
  /** If true, the video src is assigned immediately (use for above-the-fold hero) */
  eager?: boolean;
  /** rootMargin for the IntersectionObserver — how early to start loading before visible */
  loadMargin?: string;
}

export function CineVideo({
  src,
  className,
  poster,
  eager = false,
  loadMargin = "100px",
  ...props
}: CineVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isVisible, setIsVisible] = useState(eager);
  // Se eager=true, consideriamo il player 'pronto' nativamente per evitare lag fade-in
  const [isReady, setIsReady] = useState(eager);
  const isScrollIdle = useScrollIdle();

  // 1. LAZY SOURCE ASSIGNMENT
  //    Don't even set the <video src> until the container is near the viewport.
  //    This prevents the browser from opening connections to all 8 videos at once.
  useEffect(() => {
    if (eager || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: loadMargin, threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager, shouldLoad, loadMargin]);

  // 2. PLAY/PAUSE based on actual visibility (tighter threshold)
  useEffect(() => {
    if (!shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    // We observe the container div (which always has dimensions),
    // NOT the video element (which starts at opacity:0 and may be ignored by some browsers)
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  // 3. PLAY/PAUSE control — only when scroll is idle; debounced to avoid decode during scroll-by
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isVisible && isScrollIdle) {
      const t = setTimeout(() => {
        const p = video.play();
        if (p !== undefined) p.catch(() => {});
      }, 150);
      return () => clearTimeout(t);
    } else {
      video.pause();
    }
  }, [isVisible, isScrollIdle, shouldLoad]);

  // 4. Handle video ready state
  const onVideoReady = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full bg-[#050505]", className)}
    >
      {/* Shimmer placeholder while video loads */}
      {!isReady && (
        <div className="absolute inset-0 z-0">
          {poster ? (
            <img
              src={poster}
              alt=""
              className="w-full h-full object-cover blur-lg opacity-20 select-none pointer-events-none"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent animate-pulse" />
          )}
        </div>
      )}

      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700 ease-out",
            isReady ? "opacity-100" : "opacity-0"
          )}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={onVideoReady}
          {...props}
        />
      )}
    </div>
  );
}
