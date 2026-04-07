"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getCarBySlug } from "@/lib/cars";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function ModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = use(params);
  const car = getCarBySlug(model);
  if (!car) return notFound();

  return (
    <div className="min-h-screen bg-[#f5f4f2]">

      {/* Hero do modelo — imagem full-width */}
      <div className="relative h-[80vh] overflow-hidden bg-[#060606]">
        <img src={car.heroImage} alt={car.name} className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.2) 0%, transparent 40%, rgba(6,6,6,0.85) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase font-bold block mb-4">{car.category}</span>
            <h1 className="font-display text-5xl md:text-8xl italic text-white mb-4" style={{ letterSpacing: "-0.02em" }}>{car.name}</h1>
            <p className="text-white/60 text-sm tracking-wide max-w-md">{car.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Placeholder: Video Scrub do carro */}
      <div className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <span className="text-[9px] tracking-[0.4em] uppercase font-bold block mb-4" style={{ color: "#c9a84c" }}>
            Em Breve
          </span>
        </div>
        <div
          className="w-full flex items-center justify-center"
          style={{ aspectRatio: "16/7", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)" }}
        >
          <div className="text-center">
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
              style={{ border: "1px solid rgba(201,168,76,0.3)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <polygon points="5,3 19,12 5,21" fill="#c9a84c" opacity="0.8" />
              </svg>
            </div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: "rgba(201,168,76,0.5)" }}>
              Video Scrub · {car.name}
            </p>
            <p className="text-[9px] tracking-widest uppercase mt-2" style={{ color: "rgba(255,255,255,0.2)" }}>
              Adicione o vídeo em /videos/{car.slug}-scrub.mp4
            </p>
          </div>
        </div>
      </div>

      {/* Especificações — linha horizontal */}
      <div className="bg-[#111111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <span className="text-[9px] tracking-[0.4em] uppercase font-bold block mb-10" style={{ color: "#c9a84c" }}>
            Especificações
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-l border-white/5">
            {car.specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-r border-b md:border-b-0 border-white/5 px-6 py-6"
              >
                <p className="text-[8px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.6)" }}>{spec.label}</p>
                <p className="text-lg font-semibold text-white leading-tight">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo — fundo claro */}
      <div className="bg-[#f5f4f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Descrição + CTA */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold block mb-6" style={{ color: "#c9a84c" }}>A Experiência</span>
              <h2 className="font-display text-3xl md:text-4xl italic mb-6 leading-tight" style={{ color: "#111111" }}>{car.name}</h2>
              <p className="text-sm leading-relaxed tracking-wide mb-8" style={{ color: "#555555" }}>{car.description}</p>
              <p className="text-xs tracking-widest uppercase mb-12" style={{ color: "#999999" }}>{car.price}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/configure/${car.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 text-xs font-bold tracking-widest uppercase text-black w-full sm:w-auto"
                    style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e8d5a3 50%, #c9a84c 100%)" }}
                  >
                    Configurar Este Modelo
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border text-xs font-bold tracking-widest uppercase w-full sm:w-auto transition-all hover:bg-black/5" style={{ borderColor: "#cccccc", color: "#333333" }}>
                    Solicitar Test Drive
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Cores disponíveis */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold block mb-8" style={{ color: "#c9a84c" }}>Cores Disponíveis</span>
              <div className="flex gap-4 mb-12">
                {car.colors.map((color, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full transition-all"
                    style={{ background: color, border: "2px solid rgba(0,0,0,0.1)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
                  />
                ))}
              </div>

              {/* Preço destaque */}
              <div className="border-t pt-8" style={{ borderColor: "#e0e0e0" }}>
                <p className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: "#999" }}>Preço Base</p>
                <p className="font-display text-4xl italic" style={{ color: "#111111" }}>{car.price}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
}
