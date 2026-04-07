"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cars } from "@/lib/cars";
import { SpotlightCard } from "@/components/aceternity/spotlight";

const featured = cars.slice(0, 3);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function ShowroomPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-[10px] tracking-[0.4em] text-[#d5001c] uppercase font-bold block mb-3">A Coleção</span>
            <h2 className="font-display text-4xl md:text-5xl italic text-white">O Showroom</h2>
          </div>
          <Link href="/showroom" className="text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
            Ver Todos os Modelos
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5"
        >
          {featured.map((car) => (
            <motion.div key={car.slug} variants={item}>
              <Link href={`/showroom/${car.slug}`}>
                <SpotlightCard className="group relative overflow-hidden bg-[#0a0a0a] cursor-pointer aspect-[4/5]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Red line on hover */}
                  <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#d5001c] group-hover:w-full transition-all duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-[9px] tracking-[0.3em] text-[#d5001c] uppercase font-bold block mb-2">
                      {car.category}
                    </span>
                    <h3 className="font-display text-3xl italic text-white mb-3">{car.name}</h3>
                    <div className="flex gap-4 mb-6">
                      {car.specs.slice(0, 2).map((s) => (
                        <div key={s.label} className="first:pl-0 pl-4 first:border-l-0 border-l border-white/15">
                          <p className="text-[9px] uppercase text-white/40 tracking-wider">{s.label}</p>
                          <p className="text-sm font-medium text-white">{s.value}</p>
                        </div>
                      ))}
                    </div>
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-[10px] font-bold tracking-widest uppercase text-white/80 flex items-center gap-2"
                    >
                      Descobrir Mais →
                    </motion.span>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
