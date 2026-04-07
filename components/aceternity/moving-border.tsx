"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx = "0%",
  ry = "0%",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength?.() ?? 0;
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function MovingBorderButton({
  borderRadius = "0px",
  children,
  className,
  borderClassName,
  duration,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  duration?: number;
  [key: string]: unknown;
}) {
  return (
    <button
      className={cn("relative overflow-hidden bg-transparent p-[1px] text-sm", className)}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="0%" ry="0%">
          <div
            className={cn("h-20 w-20 opacity-[0.8] blur-[1px]", borderClassName)}
            style={{ background: "radial-gradient(#d5001c 40%, transparent 60%)" }}
          />
        </MovingBorder>
      </div>
      <div
        className="relative flex items-center justify-center border border-white/10 bg-background/80 backdrop-blur-xl"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </button>
  );
}
