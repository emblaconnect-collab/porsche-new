"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const liquidGlass = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
} as React.CSSProperties;

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background image */}
      <img
        src="/images/porsche-garage.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.65) 0%, rgba(6,6,6,0.55) 50%, rgba(6,6,6,0.75) 100%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-6">
            Comece Sua Jornada
          </span>
          <h2
            className="font-display italic text-white mb-8 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Monte Seu Porsche Perfeito.
          </h2>
          <p className="text-white/50 text-sm tracking-wide max-w-lg mx-auto mb-12 leading-relaxed">
            Escolha o modelo, selecione os opcionais e configure o Porsche que reflete sua visão de perfeição.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/showroom">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase text-white rounded-full transition-all duration-300"
                style={liquidGlass}
              >
                Ver Showroom
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase text-white rounded-full transition-all duration-300"
                style={liquidGlass}
              >
                Agendar Consulta
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
