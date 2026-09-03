"use client";

import { motion } from "framer-motion";
import { Trophy, Flag, Zap, Award, Flame } from "lucide-react";

interface StatItem {
  value: string;
  sub: string;
  label: string;
  detail: string;
  icon: any;
  highlightColor: string;
}

const stats: StatItem[] = [
  {
    value: "3x",
    sub: "Títulos Mundiais",
    label: "Campeão Mundial F1",
    detail: "1988, 1990 e 1991 (McLaren Honda)",
    icon: Trophy,
    highlightColor: "text-senna-yellow border-senna-yellow/40",
  },
  {
    value: "41",
    sub: "Vitórias Lendárias",
    label: "Vitórias em GP",
    detail: "Incluindo 6 vitórias históricas em Mônaco",
    icon: Flame,
    highlightColor: "text-senna-green border-senna-green/40",
  },
  {
    value: "65",
    sub: "Mestre do Qualify",
    label: "Pole Positions",
    detail: "Recorde mantido por mais de uma década",
    icon: Zap,
    highlightColor: "text-senna-yellow border-senna-yellow/40",
  },
  {
    value: "80",
    sub: "Pódios Conquistados",
    label: "Pódios F1",
    detail: "Em 161 corridas disputadas na elite",
    icon: Award,
    highlightColor: "text-senna-blue border-senna-blue/40",
  },
];

export default function StatsCounter() {
  return (
    <div className="relative z-20 -mt-16 sm:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-white/10"
            >
              {/* Top Brazilian colored bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-senna-yellow via-senna-green to-senna-blue opacity-80 group-hover:h-1.5 transition-all" />

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-senna-yellow transition-colors">
                  {stat.sub}
                </span>
                <div className={`p-2.5 rounded-xl bg-black/60 border ${stat.highlightColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white group-hover:text-senna-yellow transition-colors">
                  {stat.value}
                </span>
              </div>

              <h4 className="text-base font-bold text-gray-200 group-hover:text-white">
                {stat.label}
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                {stat.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
