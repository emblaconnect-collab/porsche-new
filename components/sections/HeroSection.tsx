"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spotlight } from "@/components/aceternity/spotlight";

const SPRING_K = 18;
const DAMPING = 7;

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    const progressBar = progressBarRef.current;
    if (!video || !hero) return;

    let targetTime = 0;
    let displayTime = 0;
    let velocity = 0;
    let lastTimestamp = 0;
    let rafId: number;

    const onScroll = () => {
      const scrollRange = hero.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(window.scrollY / scrollRange, 1));
      if (video.duration) targetTime = progress * video.duration;
      if (progressBar) progressBar.style.width = `${progress * 100}%`;
    };

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      lastTimestamp = timestamp;

      const springForce = (targetTime - displayTime) * SPRING_K;
      const dampForce = velocity * DAMPING;
      velocity += (springForce - dampForce) * dt;
      displayTime += velocity * dt;
      displayTime = Math.max(0, video.duration ? Math.min(displayTime, video.duration) : displayTime);

      if (video.duration && Math.abs(displayTime - video.currentTime) > 0.005) {
        video.currentTime = displayTime;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-[300vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#060606]">

        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          src="/videos/hero-scrub.mp4"
          onCanPlay={(e) => { (e.target as HTMLVideoElement).pause(); }}
        />

        <div className="absolute inset-0 pointer-events-none z-10" style={{
          background: "radial-gradient(ellipse at center, transparent 45%, rgba(6,6,6,0.5) 100%)"
        }} />
        <div className="absolute inset-0 pointer-events-none z-10" style={{
          background: "linear-gradient(to bottom, rgba(6,6,6,0.1) 0%, transparent 12%, transparent 60%, rgba(6,6,6,0.9) 100%)"
        }} />

        <Spotlight className="-top-40 left-0 md:left-60 z-10" fill="#c9a84c" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="inline-block text-[10px] tracking-[0.5em] uppercase mb-6 font-medium"
            style={{ color: "#c9a84c" }}
          >
            Engenharia com Paixão · Desde 1948
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="font-display italic font-normal text-white mb-6 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)", letterSpacing: "-0.03em" }}
          >
            Não Existe
            <br />
            <span style={{ color: "#c9a84c" }}>Substituto.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm md:text-base tracking-wide max-w-md mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Cada curva engenheirada. Cada momento amplificado. Cada volta, inesquecível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/showroom">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(201,168,76,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase text-black rounded-full transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e8d5a3 50%, #c9a84c 100%)" }}
              >
                Ver Showroom
              </motion.button>
            </Link>

            <Link href="/configure/911-turbo-s">
              <motion.button
                whileHover={{ backgroundColor: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.8)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 border text-white text-xs font-bold tracking-[0.25em] uppercase rounded-full transition-all duration-300"
                style={{ borderColor: "rgba(201,168,76,0.4)" }}
              >
                Configure o Seu
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-20" style={{ background: "rgba(201,168,76,0.15)" }}>
          <div ref={progressBarRef} className="h-full transition-none" style={{ width: "0%", background: "#c9a84c" }} />
        </div>
      </div>
    </div>
  );
}
