"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Gauge, Shield, Flag, Sparkles, ChevronRight, Info } from "lucide-react";

interface ItemCard {
  id: string;
  title: string;
  category: "Carros Lendários" | "Capacetes Icônicos" | "Corridas Épicas";
  year: string;
  specs: { label: string; value: string }[];
  description: string;
  badge: string;
  image: string;
}

const items: ItemCard[] = [
  {
    id: "mp4-4",
    title: "McLaren MP4/4 (1988)",
    category: "Carros Lendários",
    year: "1988",
    badge: "15 Vitórias em 16 Corridas",
    specs: [
      { label: "Motor", value: "Honda RA168E V6 Turbo 1.5L" },
      { label: "Potência", value: "+650 hp @ 12.500 RPM" },
      { label: "Peso", value: "540 kg" },
      { label: "Conquista", value: "Campeão Mundial de Construtores & Pilotos" },
    ],
    description:
      "Considerado o carro mais dominante de todos os tempos na Fórmula 1. Com ele, Senna venceu 8 corridas e conquistou seu primeiro título mundial em Suzuka.",
    image: "/images/hero_senna.jpg",
  },
  {
    id: "helmet-classic",
    title: "Capacete Icônico Amarelo",
    category: "Capacetes Icônicos",
    year: "1988 — 1994",
    badge: "Desenhado por Sid Mosca",
    specs: [
      { label: "Cor Base", value: "Amarelo Vibrante" },
      { label: "Listras", value: "Verde e Azul (Bandeira do Brasil)" },
      { label: "Designer", value: "Sid Mosca (Custom Paint)" },
      { label: "Símbolo", value: "Padrão de Proteção & Identidade" },
    ],
    description:
      "O capacete amarelo mais famoso do desporto mundial. As faixas verde e azul emergem da viseira simbolizando a garra e o orgulho do povo brasileiro.",
    image: "/images/helmet_senna.jpg",
  },
  {
    id: "lotus-97t",
    title: "Lotus 97T (1985)",
    category: "Carros Lendários",
    year: "1985",
    badge: "Primeira Vitória F1 (Estoril)",
    specs: [
      { label: "Motor", value: "Renault EF15 1.5L V6 Turbo" },
      { label: "Potência", value: "+1000 hp (Qualifying setup)" },
      { label: "Cor", value: "Preto e Dourado (John Player Special)" },
      { label: "Feito", value: "7 Pole Positions em 1985" },
    ],
    description:
      "O bólido com pintura preto e dourado no qual Senna deu sua primeira aula magistral na chuva no GP de Portugal 1985, pondo uma volta em quase todo o grid.",
    image: "/images/hero_senna.jpg",
  },
  {
    id: "gp-brasil-91",
    title: "GP do Brasil 1991 (Interlagos)",
    category: "Corridas Épicas",
    year: "1991",
    badge: "Vitória com 6ª Marcha",
    specs: [
      { label: "Local", value: "Autódromo de Interlagos, São Paulo" },
      { label: "Drama", value: "Câmbio travado apenas na 6ª marcha" },
      { label: "Resultado", value: "1º Lugar (Vitória em Casa)" },
      { label: "Pódio", value: "Levantou o troféu exausto pelo esforço" },
    ],
    description:
      "Nas últimas voltas sob chuva fraca, a caixa de marchas da McLaren quebrou. Senna guiou o carro usando apenas a 6ª marcha em curvas lentas e venceu com bravura sobre-humana.",
    image: "/images/hero_senna.jpg",
  },
  {
    id: "mp4-6",
    title: "McLaren MP4/6 (1991)",
    category: "Carros Lendários",
    year: "1991",
    badge: "O Carro do Tricampeonato",
    specs: [
      { label: "Motor", value: "Honda RA121E V12 3.5L" },
      { label: "Potência", value: "730 hp @ 13.500 RPM" },
      { label: "Câmbio", value: "Manual H-Pattern 6 velocidades" },
      { label: "Títulos", value: "Campeão Mundial de Pilotos (3º título)" },
    ],
    description:
      "O último carro com câmbio manual a vencer um Campeonato Mundial de Fórmula 1, equipado com o estrondoso motor Honda V12.",
    image: "/images/hero_senna.jpg",
  },
  {
    id: "donington-93",
    title: "GP da Europa 1993 (Donington)",
    category: "Corridas Épicas",
    year: "1993",
    badge: "A Melhor 1ª Volta da História",
    specs: [
      { label: "Circuito", value: "Donington Park, Inglaterra" },
      { label: "Clima", value: "Chuva intensa e pista mutável" },
      { label: "1ª Volta", value: "Superou 4 carros (Schumacher, Wendlinger, Hill, Prost)" },
      { label: "Vantagem", value: "Venceu com mais de 1 minuto de vantagem" },
    ],
    description:
      "Partindo de 5º na chuva, Senna ultrapassou quatro adversários em apenas 10 curvas na primeira volta. É considerada consensualmente a maior volta da história do automobilismo.",
    image: "/images/hero_senna.jpg",
  },
];

const categories = ["Todos", "Carros Lendários", "Capacetes Icônicos", "Corridas Épicas"];

export default function CarsAndHelmets({ onSelectItem }: { onSelectItem?: (item: ItemCard) => void }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<ItemCard | null>(null);

  const filteredItems =
    activeCategory === "Todos"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const handleOpenModal = (item: ItemCard) => {
    setSelectedItem(item);
    if (onSelectItem) onSelectItem(item);
  };

  return (
    <section id="garagem" className="py-24 bg-[#0A0A0C] relative">
      {/* Background speed grid */}
      <div className="absolute inset-0 racing-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-senna-yellow/10 border border-senna-yellow/30 text-senna-yellow text-xs font-black uppercase tracking-widest mb-4">
              <Gauge className="w-3.5 h-3.5" />
              Engenharia & Glória
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
              GARAGEM <span className="text-senna-yellow">&</span> MÁQUINAS LENDÁRIAS
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Explore os carros que fizeram história, os capacetes inconfundíveis e os momentos técnicos da carreira de Ayrton.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-senna-yellow text-black shadow-[0_0_15px_rgba(255,225,0,0.4)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col group"
              >
                {/* Card Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181E] via-transparent to-black/60" />

                  {/* Category & Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-senna-yellow border border-senna-yellow/30">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-senna-yellow text-black text-[10px] font-black uppercase">
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-black/70 border border-white/10 text-white text-[11px] font-bold">
                      🏆 {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-black text-xl text-white uppercase group-hover:text-senna-yellow transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Technical Mini Grid */}
                  <div className="grid grid-cols-2 gap-2 bg-black/40 p-3 rounded-xl border border-white/5">
                    {item.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label} className="overflow-hidden">
                        <span className="text-[10px] uppercase font-bold text-gray-500 block truncate">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-gray-200 truncate block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleOpenModal(item)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-senna-yellow hover:text-black text-xs font-bold uppercase tracking-wider text-gray-200 transition-all duration-300 border border-white/10 hover:border-senna-yellow"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Ver Ficha Técnica Completa
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#121216] border border-senna-yellow/40 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>

              <span className="px-3 py-1 rounded-full bg-senna-yellow/10 text-senna-yellow border border-senna-yellow/30 text-xs font-bold uppercase tracking-widest">
                {selectedItem.category} • {selectedItem.year}
              </span>

              <h3 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-3 mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <h4 className="text-xs font-black uppercase tracking-widest text-senna-yellow mb-3">
                Especificações Técnicas & Fatos:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selectedItem.specs.map((spec) => (
                  <div key={spec.label} className="bg-black/60 p-3.5 rounded-xl border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-white mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-xl bg-senna-yellow text-black font-bold uppercase text-xs hover:bg-senna-yellow-hover transition-colors"
                >
                  Fechar Visualização
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
