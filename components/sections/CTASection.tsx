"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#080808] py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
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
          <p className="text-white/40 text-sm tracking-wide max-w-lg mx-auto mb-12 leading-relaxed">
            Escolha o modelo, selecione os opcionais e configure o Porsche que reflete sua visão de perfeição.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/showroom">
              <div className="relative overflow-hidden">
                <BorderBeam size={80} duration={8} colorFrom="#c9a84c" colorTo="#e8d5a3" />
                <MovingBorderButton
                  duration={3000}
                  className="px-12 py-4 text-xs font-bold tracking-[0.25em] uppercase"
                  borderClassName=""
                >
                  <span className="px-2 py-1 text-white">Ver Showroom</span>
                </MovingBorderButton>
              </div>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 border border-white/10 text-white text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300"
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
