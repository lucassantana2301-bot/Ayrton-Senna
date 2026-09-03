"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

interface QuoteItem {
  id: number;
  text: string;
  context: string;
  year: string;
}

const quotes: QuoteItem[] = [
  {
    id: 1,
    text: "Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si.",
    context: "Sobre mindset e determinação no esporte",
    year: "1988",
  },
  {
    id: 2,
    text: "No que diz respeito ao empenho, ao compromisso, à dedicação, não existe meio termo. Ou você faz uma coisa bem-feita ou não faz.",
    context: "Sobre profissionalismo e busca pela perfeição",
    year: "1990",
  },
  {
    id: 3,
    text: "Se a gente quiser modificar alguma coisa, é pelas crianças que a gente tem que começar. Pela sua educação.",
    context: "Sua visão sobre o futuro do Brasil",
    year: "1993",
  },
  {
    id: 4,
    text: "O segundo colocado é apenas o primeiro dos perdedores.",
    context: "Sobre a obsessão pela vitória na F1",
    year: "1989",
  },
  {
    id: 5,
    text: "Eu não posso viver uma vida comum. Eu preciso ter um propósito, buscar o topo e inspirar as pessoas.",
    context: "Sobre seu propósito de vida",
    year: "1991",
  },
];

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="frases" className="py-24 bg-[#0D0D12] relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="w-full h-full senna-stripe-line filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-senna-yellow/10 border border-senna-yellow/30 text-senna-yellow text-xs font-black uppercase tracking-widest mb-3">
            <Quote className="w-3.5 h-3.5" />
            Palavras de Ayrton Senna
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
            CITAÇÕES <span className="text-senna-yellow">MARCANTES</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Big Quote Icon Backdrop */}
          <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-white/5 pointer-events-none rotate-12" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              {/* Year & Badge */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-senna-yellow" />
                <span className="text-xs font-black uppercase tracking-widest text-senna-yellow">
                  {quotes[currentIndex].year}
                </span>
                <span className="w-8 h-0.5 bg-senna-yellow" />
              </div>

              {/* Quote Main Text */}
              <blockquote className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-white italic leading-snug max-w-3xl">
                &ldquo;{quotes[currentIndex].text}&rdquo;
              </blockquote>

              {/* Context & Author */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-senna-yellow">
                  — Ayrton Senna da Silva
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {quotes[currentIndex].context}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {quotes.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-senna-yellow"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir para frase ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows & Autoplay Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border border-white/5"
                title={isAutoplay ? "Pausar carrossel" : "Iniciar carrossel"}
              >
                {isAutoplay ? <Pause className="w-4 h-4 text-senna-yellow" /> : <Play className="w-4 h-4 text-white" />}
              </button>

              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
                aria-label="Frase anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
                aria-label="Próxima frase"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
