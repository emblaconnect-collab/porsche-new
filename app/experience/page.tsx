"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const events = [
  { title: "Porsche Driving Experience", location: "Nürburgring, Alemanha", date: "Mar – Nov 2024", description: "Domine o lendário Inferno Verde com instrutores profissionais Porsche ao seu lado.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPlS1UxhRJg3OwO6a1gNGiuKH19iqi0EBopXITPkzzwgS8wDvFUfBvCe-l_ROAPDk18OtJM3NhUTO9VK1olWc1Edal8Xsrdz64TQsqSB_IfdVzRkVuqV-xs2Yet0igJ78Z7CKFeLrUAwSrphfhcFtV86SzTZcXab1ZNiK26IUPlGA9WtcWmUuQ88P-8_TvcoFa6UdRy0hHQ-os0KlQ7BogkgGRXKHEmgB4wDqQobqnyR_n_c_mFuetZp1bpxeYPaeYzb00UvugAuNP" },
  { title: "Test Drive Exclusivo 911", location: "Sua Concessionária", date: "Disponível Agora", description: "Agende um test drive privado do 911 Turbo S. Experimente 640cv na estrada.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS7XKcxEjjdebtM9H8E8c2yvCM_057X7WpPf5yQNbawz3k_7ZxrIsTiWzvnhj-qrL8UglchQi9sCjRI22O2B_nS4ZR0zljkqp434zg0_6_-2pN6Jlr0IGbWYdGwc7U2jsGmlu2FkfA4NTWBaLh3yOsIBlFj1duL4c9HqqN4OP5SrtdxZBUzM54_Dhv790B9gD4bjIx8T-QYDyZAbLjb2YfplEIR582hdFjGQL67VV57IeSkYxIOj2G4Iaa_SfLS8y8DLWzejRpfWz3" },
  { title: "Jornada Elétrica Taycan", location: "Múltiplos Roteiros", date: "Ano todo", description: "Descubra o futuro da performance. Um roteiro de longa distância no elétrico Taycan.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANRJ6ci2F2yzYVQ-KJ3stoeMwlteQ1MoLetNUAngZpTv9kF_aIEKXu7-BB4vzZ_hDjAwE2kAgUYayG4tN-Z_LMilSEZNHmtcnFgysCgOR8sHjif1eG4qaRw_Q9uCgg2u6lrdHOPiJmyW7YALPhycstOTLnS_eV7FhG1BDF-AVbnosjtZ7wYArj843_u9ZSUoebcpvlRChBfA32IJD5itaRpwoAC6A6tD4uYRdIY2BGV0FEEKmzwlmX6EDM9N8-SPav9DqN7Gedd0dL" },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#060606] pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20">
          <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-4">Além de Dirigir</span>
          <h1 className="font-display text-5xl md:text-7xl italic text-white mb-6" style={{ letterSpacing: "-0.02em" }}>A Experiência</h1>
          <p className="text-white/40 max-w-xl text-sm leading-relaxed tracking-wide">
            De dias de pista a test drives exclusivos. Viva o estilo de vida Porsche além do showroom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-20">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-[#060606] cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <img src={ev.image} alt={ev.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#d5001c] group-hover:w-full transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[9px] tracking-[0.3em] text-[#d5001c] uppercase font-bold block mb-1">{ev.date} · {ev.location}</span>
                <h3 className="font-display text-2xl italic text-white mb-3">{ev.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{ev.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact">
            <ShimmerButton background="#d5001c" className="px-12 py-4 text-xs font-bold tracking-widest uppercase">
              Reservar uma Experiência
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
