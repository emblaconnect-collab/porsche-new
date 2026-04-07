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
    <div className="min-h-screen bg-[#060606]">
      {/* Hero */}
      <div className="relative h-[80vh] overflow-hidden">
        <img src={car.heroImage} alt={car.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.3) 0%, transparent 40%, rgba(6,6,6,0.95) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] tracking-[0.4em] text-[#d5001c] uppercase font-bold block mb-4">{car.category}</span>
            <h1 className="font-display text-5xl md:text-8xl italic text-white mb-4" style={{ letterSpacing: "-0.02em" }}>{car.name}</h1>
            <p className="text-white/50 text-sm tracking-wide max-w-md">{car.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Description + CTA */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl italic text-white mb-6">The Experience</h2>
            <p className="text-white/50 text-sm leading-relaxed tracking-wide mb-8">{car.description}</p>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-12">{car.price}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/configure/${car.slug}`}>
                <ShimmerButton background="#d5001c" className="px-8 py-4 text-xs font-bold tracking-widest uppercase w-full sm:w-auto">
                  Configure This Model
                </ShimmerButton>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border border-white/15 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-all w-full sm:w-auto">
                  Request a Test Drive
                </button>
              </Link>
            </div>

            {/* Color swatches */}
            <div className="mt-12">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">Available Colors</p>
              <div className="flex gap-3">
                {car.colors.map((color, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 border border-white/20 hover:border-white/60 transition-colors"
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Specs */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
            <h2 className="font-display text-3xl italic text-white mb-8">Specifications</h2>
            <div className="space-y-0 border-t border-white/5">
              {car.specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex justify-between items-center py-5 border-b border-white/5 group hover:border-white/10 transition-colors"
                >
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">{spec.label}</span>
                  <span className="text-sm font-medium text-white group-hover:text-white/80 transition-colors">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
