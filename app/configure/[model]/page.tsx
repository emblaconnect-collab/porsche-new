"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getCarBySlug } from "@/lib/cars";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const interiorOptions = ["Black Leather", "Cognac Leather", "Chalk Leather", "Bordeaux Red"];
const wheelOptions = ["20\" Carrera S", "21\" Turbo", "21\" Sport Classic", "22\" RS Spyder Design"];
const packageOptions = ["Sport Chrono", "PASM Sport Suspension", "Rear-Axle Steering", "Night Vision Assist"];

export default function ConfigurePage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = use(params);
  const car = getCarBySlug(model);
  if (!car) return notFound();

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedInterior, setSelectedInterior] = useState(0);
  const [selectedWheels, setSelectedWheels] = useState(0);
  const [selectedPackages, setSelectedPackages] = useState<number[]>([]);

  const togglePackage = (i: number) =>
    setSelectedPackages((prev) => prev.includes(i) ? prev.filter((p) => p !== i) : [...prev, i]);

  return (
    <div className="min-h-screen bg-[#060606] pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#d5001c] uppercase font-bold block mb-3">Configurator</span>
          <h1 className="font-display text-4xl md:text-6xl italic text-white">Build Your {car.name}</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Preview */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="relative aspect-video overflow-hidden mb-6">
              <img
                src={car.heroImage}
                alt={car.name}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: `hue-rotate(${selectedColor * 30}deg) saturate(1.1)` }}
              />
              <div className="absolute bottom-4 right-4 w-6 h-6 border border-white/30" style={{ background: car.colors[selectedColor] }} />
            </div>
            <div className="bg-[#0f0f0f] border border-white/5 p-6">
              <h3 className="text-xs tracking-widest uppercase text-white/30 mb-4 font-bold">Your Configuration</h3>
              <div className="space-y-2 text-xs text-white/60">
                <div className="flex justify-between"><span>Model</span><span className="text-white">{car.name}</span></div>
                <div className="flex justify-between"><span>Exterior</span><span className="text-white">Color #{selectedColor + 1}</span></div>
                <div className="flex justify-between"><span>Interior</span><span className="text-white">{interiorOptions[selectedInterior]}</span></div>
                <div className="flex justify-between"><span>Wheels</span><span className="text-white">{wheelOptions[selectedWheels]}</span></div>
                <div className="flex justify-between pt-4 border-t border-white/5 text-white font-bold">
                  <span>Base Price</span><span>{car.price}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Options */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-12">
            {/* Color */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold mb-5">Exterior Color</h3>
              <div className="flex gap-3">
                {car.colors.map((color, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(i)}
                    className="w-10 h-10 transition-all duration-300"
                    style={{ background: color, outline: selectedColor === i ? "2px solid #d5001c" : "2px solid transparent", outlineOffset: "3px" }}
                  />
                ))}
              </div>
            </div>

            {/* Interior */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold mb-5">Interior</h3>
              <div className="grid grid-cols-2 gap-2">
                {interiorOptions.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedInterior(i)}
                    className={`px-4 py-3 text-[10px] tracking-widest uppercase font-bold border transition-all duration-300 ${selectedInterior === i ? "border-[#d5001c] text-white bg-[#d5001c]/10" : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Wheels */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold mb-5">Wheels</h3>
              <div className="grid grid-cols-2 gap-2">
                {wheelOptions.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedWheels(i)}
                    className={`px-4 py-3 text-[10px] tracking-widest uppercase font-bold border transition-all duration-300 ${selectedWheels === i ? "border-[#d5001c] text-white bg-[#d5001c]/10" : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold mb-5">Performance Packages</h3>
              <div className="space-y-2">
                {packageOptions.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => togglePackage(i)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-[10px] tracking-widest uppercase font-bold border transition-all duration-300 ${selectedPackages.includes(i) ? "border-[#d5001c] text-white bg-[#d5001c]/10" : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"}`}
                  >
                    {opt}
                    <span>{selectedPackages.includes(i) ? "✓" : "+"}</span>
                  </button>
                ))}
              </div>
            </div>

            <ShimmerButton background="#d5001c" className="w-full py-4 text-xs font-bold tracking-widest uppercase">
              Request This Configuration
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
