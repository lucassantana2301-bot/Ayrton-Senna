"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play, Heart, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function Hero() {
  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFE100", "#009B3A", "#002776", "#FFFFFF"],
    });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0A0A0C]">
      {/* Background Image with Dark Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_senna.jpg"
          alt="Ayrton Senna em alta velocidade na chuva com McLaren"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 filter contrast-125 brightness-90"
        />
        {/* Dark Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-transparent to-[#0A0A0C]" />
        {/* Racing Grid overlay pattern */}
        <div className="absolute inset-0 racing-grid opacity-30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start">
        
        {/* Lando Norris-inspired Skewed Racing Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 border border-senna-yellow/60 text-senna-yellow text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,225,0,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-senna-yellow animate-ping" />
          <span className="text-white">TRICAMPEÃO MUNDIAL DE FORMULA 1</span>
          <span className="text-senna-green font-bold">🇧🇷 Brasil</span>
        </motion.div>

        {/* Main Impact Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-none mb-6 max-w-5xl"
        >
          AYRTON <span className="text-transparent bg-clip-text bg-gradient-to-r from-senna-yellow via-yellow-200 to-senna-yellow drop-shadow-[0_0_35px_rgba(255,225,0,0.5)]">SENNA</span>
          <br />
          <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-300 tracking-normal block mt-2">
            O REI DA VELOCIDADE <span className="text-senna-yellow">&</span> A LENDA ETERNA
          </span>
        </motion.h1>

        {/* Subtitle / Quote intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-10"
        >
          &quot;Eu não tenho modelos. Eu admiro a dedicação, o trabalho e a determinação.&quot;
          <span className="block mt-2 text-sm text-gray-400 font-semibold">
            Três títulos mundiais, 41 vitórias e um legado que ultrapassa gerações.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#trajetoria"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-black uppercase tracking-wider text-black bg-senna-yellow hover:bg-senna-yellow-hover rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(255,225,0,0.4)] hover:shadow-[0_0_40px_rgba(255,225,0,0.7)] hover:scale-105 group"
          >
            Explorar Trajetória
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <a
            href="#instituto"
            onClick={triggerCelebration}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-senna-green rounded-xl transition-all duration-300 backdrop-blur-md hover:scale-105 group"
          >
            <Heart className="w-4 h-4 mr-2 text-senna-green fill-senna-green group-hover:scale-110 transition-transform" />
            Apoiar o Instituto
          </a>
        </motion.div>
      </div>

      {/* Bottom Subtle Gradient Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0C] to-transparent pointer-events-none" />
    </section>
  );
}
