"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/aceternity/spotlight";
import { Car } from "@/lib/cars";

interface CarCardProps {
  car: Car;
  className?: string;
}

export default function CarCard({ car, className = "" }: CarCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const playVideo = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, []);

  const pauseVideo = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }, []);

  useEffect(() => {
    if (!car.video || !containerRef.current) return;

    const isMobile = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    // Mobile: play quando o card entra na viewport, pausa quando sai
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playVideo();
          else pauseVideo();
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [car.video, playVideo, pauseVideo]);

  return (
    <div
      ref={containerRef}
      className={`group ${className}`}
      onMouseEnter={() => {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) playVideo();
      }}
      onMouseLeave={() => {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) pauseVideo();
      }}
    >
      <Link href={`/showroom/${car.slug}`}>
        <SpotlightCard className="relative overflow-hidden bg-[#060606] cursor-pointer aspect-[4/5]">

          {/* Imagem — sempre visível, some no hover se tiver vídeo */}
          <img
            src={car.image}
            alt={car.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              car.video
                ? "opacity-70 group-hover:opacity-0"
                : "opacity-70 group-hover:opacity-100 group-hover:scale-105"
            }`}
          />

          {/* Vídeo — aparece no hover (desktop) ou ao entrar na viewport (mobile) */}
          {car.video && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              muted
              playsInline
              loop
              preload="metadata"
              src={car.video}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#c9a84c] group-hover:w-full transition-all duration-500 z-10" />

          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="text-[9px] tracking-[0.3em] text-[#c9a84c] uppercase font-bold block mb-2">
              {car.category}
            </span>
            <h3 className="font-display text-3xl italic text-white mb-1">{car.name}</h3>
            <p className="text-white/40 text-xs mb-4 tracking-wide">{car.price}</p>
            <div className="flex gap-4 mb-4">
              {car.specs.slice(0, 2).map((s) => (
                <div key={s.label} className="first:pl-0 pl-4 first:border-l-0 border-l border-white/10">
                  <p className="text-[9px] uppercase text-white/30 tracking-wider">{s.label}</p>
                  <p className="text-sm font-medium text-white">{s.value}</p>
                </div>
              ))}
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold tracking-widest uppercase text-white/70">
              Descobrir →
            </span>
          </div>
        </SpotlightCard>
      </Link>
    </div>
  );
}
