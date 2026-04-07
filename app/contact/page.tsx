"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#060606] pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-4">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-7xl italic text-white mb-6" style={{ letterSpacing: "-0.02em" }}>Personal Consultation</h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg tracking-wide">
            Arrange a private viewing or consultation with our brand ambassadors. Your journey starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="space-y-8 mb-12">
              {[
                { label: "Location", value: "Stuttgart, Germany" },
                { label: "Email", value: "exclusive@porsche.com" },
                { label: "Phone", value: "+49 711 911 0" },
                { label: "Hours", value: "Mon – Sat · 9am – 7pm" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#d5001c] font-bold mb-1">{item.label}</p>
                  <p className="text-sm text-white/70 tracking-wide">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="w-12 h-px bg-[#d5001c]" />
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <div className="w-12 h-12 border border-[#d5001c] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#d5001c] text-xl">✓</span>
                </div>
                <h3 className="font-display text-2xl italic text-white mb-3">Message Received</h3>
                <p className="text-white/40 text-sm tracking-wide">Our team will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                {[
                  { placeholder: "Full Name", type: "text" },
                  { placeholder: "Email Address", type: "email" },
                  { placeholder: "Phone Number", type: "tel" },
                ].map((f) => (
                  <input
                    key={f.placeholder}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full bg-transparent border-0 border-b border-white/10 text-white text-xs tracking-widest py-4 outline-none focus:border-[#d5001c] transition-colors placeholder:text-white/25 uppercase"
                  />
                ))}
                <select className="w-full bg-transparent border-0 border-b border-white/10 text-white/40 text-xs tracking-widest py-4 outline-none focus:border-[#d5001c] transition-colors uppercase">
                  <option value="">Select Model of Interest</option>
                  <option>911 Turbo S</option>
                  <option>Taycan</option>
                  <option>Cayenne</option>
                  <option>Panamera</option>
                  <option>Macan</option>
                  <option>718 Cayman</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-white/10 text-white text-xs tracking-widest py-4 outline-none focus:border-[#d5001c] transition-colors placeholder:text-white/25 uppercase resize-none"
                />
                <ShimmerButton type="submit" background="#d5001c" className="w-full py-4 text-xs font-bold tracking-[0.3em] uppercase">
                  Schedule a Visit
                </ShimmerButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
