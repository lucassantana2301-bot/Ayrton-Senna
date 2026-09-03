"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Trophy, Zap, CloudRain, Star, HeartHandshake } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  highlights: string[];
  statsBadge: string;
  icon: any;
  accentColor: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: "1973 — 1983",
    title: "O Garoto do Kart & A Ascensão Britânica",
    category: "Karting & Fórmulas de Acesso",
    subtitle: "Do Kartodromo de Interlagos para a Europa",
    description:
      "Aos 13 anos, Ayrton correu sua primeira prova oficial de Kart e venceu. Dominou o kartismo sul-americano e rumou à Inglaterra, onde conquistou os títulos da Formula Ford 1600, Formula Ford 2000 e o prestigiado Campeonato Britânico de Formula 3 em 1983.",
    highlights: [
      "Campeão Sul-Americano de Kart",
      "Campeão Britânico de Formula 3 (1983)",
      "21 vitórias em 29 corridas na F3",
    ],
    statsBadge: "Início Interlagos",
    icon: Flag,
    accentColor: "from-senna-yellow to-yellow-500",
  },
  {
    year: "1984 — 1987",
    title: "Toleman & Lotus: O Mestre sob a Chuva",
    category: "Chegada à F1 & Primeiras Vitórias",
    subtitle: "O nascimento do 'Rain Master'",
    description:
      "Estreou na F1 em 1984 com a modesta Toleman, chocando o mundo ao quase vencer o tempestuoso GP de Mônaco 1984. Na Lotus, conquistou sua primeira vitória na F1 no GP de Portugal 1985 em Estoril sob chuva torrencial.",
    highlights: [
      "2º lugar no lendário GP de Mônaco 1984 (Toleman)",
      "1ª Vitória na F1: GP de Portugal 1985 (Estoril)",
      "6 Pole Positions em 1985 com a Lotus 97T",
    ],
    statsBadge: "Estoril 1985",
    icon: CloudRain,
    accentColor: "from-senna-green to-emerald-500",
  },
  {
    year: "1988 — 1993",
    title: "A Era Ouro na McLaren: Os Tricampeonatos",
    category: "Títulos Mundiais & Dominio Global",
    subtitle: "A parceria icônica com a McLaren Honda",
    description:
      "Ao lado de Alain Prost e sob os motores Honda, Senna dominou a categoria. Conquistou os títulos mundiais de 1988, 1990 e 1991. Ficou eternizado por vitórias heroicas como o GP do Brasil 1991 (vencendo apenas com a 6ª marcha) e a histórica primeira volta de Donington Park 1993.",
    highlights: [
      "Tricampeão Mundial de F1 (1988, 1990, 1991)",
      "Vitória Épica em Interlagos 1991 (6ª marcha travada)",
      "A melhor primeira volta da F1 (Donington Park 1993)",
    ],
    statsBadge: "3x Campeão F1",
    icon: Trophy,
    accentColor: "from-senna-yellow via-yellow-400 to-senna-green",
  },
  {
    year: "1994 — Presente",
    title: "Legado Eterno & Instituto Ayrton Senna",
    category: "Impacto Social & Inspiração Global",
    subtitle: "Transformando o futuro de milhões de crianças",
    description:
      "Senna sempre desejou um Brasil melhor. O Instituto Ayrton Senna, fundado por sua família realizando seu sonho, já beneficiou mais de 36 milhões de crianças e jovens brasileiros por meio da educação pública de qualidade.",
    highlights: [
      "Mais de 36 milhões de alunos impactados",
      "Presente em mais de 3.000 municípios brasileiros",
      "Símbolo perpétuo de superação, garra e orgulho nacional",
    ],
    statsBadge: "#SennaSempre",
    icon: HeartHandshake,
    accentColor: "from-senna-blue to-indigo-600",
  },
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState(2); // Era McLaren active by default

  return (
    <section id="trajetoria" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-senna-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-senna-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-senna-yellow/10 border border-senna-yellow/30 text-senna-yellow text-xs font-black uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5 fill-senna-yellow" />
            Trajetória de um Campeão
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
            LINHA DO TEMPO <span className="text-senna-yellow">INTERATIVA</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 font-normal">
            Navegue pelos momentos marcantes que transformaram Ayrton Senna no maior ícone do automobilismo mundial.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {timelineData.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.year}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-black bg-senna-yellow shadow-[0_0_20px_rgba(255,225,0,0.4)] scale-105"
                    : "text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>

        {/* Active Phase Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
          >
            {/* Top Glowing Gradient Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${timelineData[activeTab].accentColor}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-senna-yellow border border-senna-yellow/20">
                    {timelineData[activeTab].category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 text-xs font-bold text-gray-300 border border-white/10">
                    {timelineData[activeTab].statsBadge}
                  </span>
                </div>

                <div>
                  <span className="text-senna-yellow font-display font-black text-2xl sm:text-3xl block mb-1">
                    {timelineData[activeTab].year}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase leading-tight">
                    {timelineData[activeTab].title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium mt-1">
                    {timelineData[activeTab].subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {timelineData[activeTab].description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Destaques da Época:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {timelineData[activeTab].highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/5">
                        <Zap className="w-4 h-4 text-senna-yellow shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Graphic Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-black/80 to-[#14141A] border border-white/10 p-8 flex flex-col items-center justify-center text-center group shadow-xl">
                  {/* Decorative Senna Stripe Background */}
                  <div className="absolute inset-0 senna-stripe-bg opacity-10 rounded-2xl" />

                  {/* Icon Emblem */}
                  <div className="w-20 h-20 rounded-2xl bg-black/80 border border-senna-yellow/40 flex items-center justify-center text-senna-yellow shadow-[0_0_30px_rgba(255,225,0,0.3)] mb-6 group-hover:scale-110 transition-transform">
                    {(() => {
                      const IconComp = timelineData[activeTab].icon;
                      return <IconComp className="w-10 h-10" />;
                    })()}
                  </div>

                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                    Fase Histórica
                  </span>
                  <h4 className="font-display font-black text-2xl text-white uppercase">
                    {timelineData[activeTab].year}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 max-w-xs font-medium">
                    &quot;Para ser bem-sucedido você precisa ter dedicação total, buscar seu último limite e dar o melhor de si.&quot;
                  </p>

                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-senna-yellow">
                    <span>#SENNASEMPRE</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
