"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cars } from "@/lib/cars";
import { SpotlightCard } from "@/components/aceternity/spotlight";

const categories = ["Todos", "Sports Car", "Elétrico", "SUV", "Sedan Esportivo", "SUV Compacto"];

export default function ShowroomPage() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);

  const categoryMap: Record<string, string> = { "Elétrico": "Electric", "Sedan Esportivo": "Sports Sedan", "SUV Compacto": "Compact SUV" };
  const filtered = active === "Todos" ? cars : cars.filter((c) => c.category === (categoryMap[active] ?? active));

  return (
    <div className="min-h-screen bg-[#060606] pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-4">Todos os Modelos</span>
          <h1 className="font-display text-5xl md:text-7xl italic text-white mb-6">O Showroom</h1>
          <p className="text-white/40 max-w-xl text-sm leading-relaxed tracking-wide">
            De esportivos icônicos a pioneiros elétricos. Cada Porsche é projetado para entregar a experiência definitiva de dirigir.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-[10px] tracking-widest uppercase font-bold transition-all duration-300 border ${
                active === cat
                  ? "bg-[#d5001c] border-[#d5001c] text-white"
                  : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map((car, i) => (
            <motion.div
              key={car.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link href={`/showroom/${car.slug}`}>
                <SpotlightCard className="group relative overflow-hidden bg-[#060606] cursor-pointer aspect-[4/5]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#d5001c] group-hover:w-full transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-[9px] tracking-[0.3em] text-[#d5001c] uppercase font-bold block mb-2">{car.category}</span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
