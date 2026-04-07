"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "1948", event: "Ferry Porsche constrói o 356 — o primeiro carro a levar o nome Porsche." },
  { year: "1963", event: "O 911 é apresentado no Salão de Frankfurt. Um ícone nasce." },
  { year: "1972", event: "A Porsche AG é fundada como empresa independente em Stuttgart." },
  { year: "1984", event: "O 959 introduz a tração nas quatro rodas e redefine o conceito de superesportivo." },
  { year: "2003", event: "O Cayenne chega — primeiro SUV da Porsche, um marco comercial." },
  { year: "2019", event: "O Taycan estreia. A Porsche entra na era elétrica sem abrir mão da performance." },
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
            <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-4">Nossa História</span>
            <h1 className="font-display text-5xl md:text-7xl italic text-white" style={{ letterSpacing: "-0.02em" }}>
              Movidos por Sonhos<br />Desde 1948.
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
            "No começo, olhei ao redor e não encontrei o carro que sonhava. Então decidi construí-lo eu mesmo."
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
            Um Legado de Inovação
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
