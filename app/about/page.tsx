"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "1948", event: "Ferry Porsche builds the 356 — the first car to bear the Porsche name." },
  { year: "1963", event: "The 911 is unveiled at the Frankfurt Motor Show. An icon is born." },
  { year: "1972", event: "Porsche AG is founded as an independent company in Stuttgart." },
  { year: "1984", event: "The 959 introduces all-wheel drive and redefines what a supercar can be." },
  { year: "2003", event: "The Cayenne launches — Porsche's first SUV, a commercial breakthrough." },
  { year: "2019", event: "The Taycan arrives. Porsche enters the electric era without compromise." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#060606] pt-28 pb-20">
      {/* Hero */}
      <div className="relative h-[60vh] mb-32 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdKZLIP7NmBXQIUtMLvbTnUxELUgbgAvlSRyMUYQz_YVcRnk045GDVoROfdy4RkyvnCNWprnZiXmsQx8jGgvJ744MhO-QeGxVM0G1m4-PZsXtRaStV1-ZVKkz_gG7AxTPegtFYemAZl8fdRPatQXCf77b2UmE4m32J9XxrmPEGeFhPfCj895h8SrwcAw5bGSlkXREiKGNaD6SsSgrH727_3fc1iNOVKDlo-wxfy0O2iTvSHQ2LMchZPuWhyYwU-wu22lk_4zwe1csB"
          alt="Porsche heritage"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #060606 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-4">Our Story</span>
            <h1 className="font-display text-5xl md:text-7xl italic text-white" style={{ letterSpacing: "-0.02em" }}>
              Driven by Dreams<br />Since 1948.
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-32"
        >
          <blockquote className="font-display text-2xl md:text-3xl italic text-white/80 leading-relaxed mb-8 border-l-2 border-[#d5001c] pl-8">
            "In the beginning, I looked around and could not find quite the car I dreamed of. So I decided to build it myself."
          </blockquote>
          <p className="text-white/30 text-sm tracking-widest uppercase">— Ferry Porsche</p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl italic text-white mb-16"
          >
            A Legacy of Innovation
          </motion.h2>
          <div className="space-y-0 border-t border-white/5">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-[100px_1fr] gap-8 py-8 border-b border-white/5 group hover:border-white/10 transition-colors"
              >
                <span className="font-display text-2xl italic text-[#d5001c] group-hover:text-white transition-colors duration-300">{m.year}</span>
                <p className="text-white/50 text-sm leading-relaxed tracking-wide group-hover:text-white/70 transition-colors duration-300">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
