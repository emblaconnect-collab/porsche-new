"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute z-[1] animate-pulse opacity-70", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse cx="1924" cy="-100" rx="1924" ry="900" fill={fill} fillOpacity="0.15" />
      </g>
      <defs>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="120" result="blur" />
        </filter>
      </defs>
    </svg>
  );
}

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [isFocused]);

  const handleFocus = useCallback(() => { setIsFocused(true); setOpacity(0.6); }, []);
  const handleBlur = useCallback(() => { setIsFocused(false); setOpacity(0); }, []);
  const handleMouseEnter = useCallback(() => setOpacity(0.6), []);
  const handleMouseLeave = useCallback(() => setOpacity(0), []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
