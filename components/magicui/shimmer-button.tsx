"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.07em",
  shimmerDuration = "2s",
  borderRadius = "0px",
  background = "#d5001c",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--border-radius": borderRadius,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--background": background,
          "--cut": "0.1em",
          borderRadius,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-8 py-3 text-white",
        "[background:var(--background)]",
        "before:absolute before:inset-0 before:rounded-[inherit]",
        "before:[background:linear-gradient(90deg,transparent_calc(var(--shimmer-size)*2),var(--shimmer-color),transparent_calc(100%-var(--shimmer-size)*2))]",
        "before:[background-size:200%_100%]",
        "before:opacity-0 hover:before:opacity-30 before:transition-opacity",
        "before:[animation:shimmer_var(--shimmer-duration)_linear_infinite] group-hover:before:animate-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
