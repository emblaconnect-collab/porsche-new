"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  { label: "Aceleração", value: 2.7, suffix: "s", sub: "0 – 100 km/h", decimals: 1 },
  { label: "Vel. Máxima", value: 330, suffix: "", sub: "km/h Máximo" },
  { label: "Modelos", value: 6, suffix: "+", sub: "Linhas Icônicas" },
  { label: "Anos de Legado", value: 75, suffix: "+", sub: "Desde 1948" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background — vídeo (adicione em /videos/stats-bg.mp4) */}
      <div className="absolute inset-0 bg-[#080808]">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/stats-bg.mp4"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.2) 50%, rgba(8,8,8,0.6) 100%)" }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold">Performance Pura</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border-l border-white/10 pl-8 group hover:border-[#d5001c] transition-colors duration-500 py-4"
            >
              <span className="block text-[9px] text-[#d5001c] font-bold tracking-[0.4em] uppercase mb-5">
                {stat.label}
              </span>
              <div className="font-display text-5xl md:text-7xl text-white mb-2 leading-none group-hover:text-white/90 transition-colors">
                {inView ? (
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    decimalPlaces={stat.decimals ?? 0}
                    delay={i * 0.1}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <span className="text-[10px] text-white/40 tracking-widest uppercase">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
