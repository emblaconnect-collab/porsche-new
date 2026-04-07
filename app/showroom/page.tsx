"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cars } from "@/lib/cars";
import CarCard from "@/components/sections/CarCard";

const categories = ["Todos", "Sports Car", "Elétrico", "SUV", "Sedan Esportivo", "SUV Compacto"];

export default function ShowroomPage() {
  const [active, setActive] = useState("Todos");
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
