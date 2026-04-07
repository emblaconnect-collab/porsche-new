"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cars } from "@/lib/cars";
import CarCard from "@/components/sections/CarCard";

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
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
