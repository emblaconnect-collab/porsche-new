"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "#d5001c",
  colorTo = "#ffffff",
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--delay": `-${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--size)*0.01px)_solid_transparent]",
        "[background:linear-gradient(var(--background),var(--background))_padding-box,linear-gradient(calc(var(--angle)),var(--color-from),var(--color-to),transparent)_border-box]",
        "[animation:border-beam_calc(var(--duration)*1s)_var(--delay)_infinite_linear]",
        className,
      )}
    />
  );
}
