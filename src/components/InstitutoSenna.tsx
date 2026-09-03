"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, GraduationCap, Users, Award, ExternalLink, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function InstitutoSenna() {
  const handleDonate = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#FFE100", "#009B3A", "#002776", "#FFFFFF"],
    });
    window.open("https://institutoayrtonsenna.org.br/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="instituto" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-senna-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-senna-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact Highlight Card */}
        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Side */}
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[500px]">
              <Image
                src="/images/instituto_senna.jpg"
                alt="Instituto Ayrton Senna — Transformando o futuro pela Educação"
                fill
                className="object-cover object-center filter contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-senna-yellow/40 text-senna-yellow text-xs font-black uppercase tracking-widest">
                <Heart className="w-3.5 h-3.5 fill-senna-yellow" />
                Legado de Transformação Social
              </div>
            </div>

            {/* Right Text Content Side */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 bg-[#121217]/90">
              
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-senna-green block mb-2">
                  Fundado pela Família Senna em 1994
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight leading-tight">
                  INSTITUTO <span className="text-senna-yellow">AYRTON SENNA</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  Ayrton sempre acreditou que o Brasil só alcançaria seu verdadeiro potencial através da educação. Há mais de 30 anos, o Instituto transforma vidas desenvolvendo capacidades socioemocionais e cognitivas em estudantes de escolas públicas.
                </p>
              </div>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                <div>
                  <span className="font-display font-black text-2xl sm:text-3xl text-senna-yellow block">
                    +36M
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase leading-tight block mt-0.5">
                    Alunos Impactados
                  </span>
                </div>

                <div>
                  <span className="font-display font-black text-2xl sm:text-3xl text-senna-green block">
                    +3.000
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase leading-tight block mt-0.5">
                    Municípios
                  </span>
                </div>

                <div>
                  <span className="font-display font-black text-2xl sm:text-3xl text-white block">
                    +200K
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase leading-tight block mt-0.5">
                    Educadores/Ano
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleDonate}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-black uppercase tracking-wider text-black bg-senna-yellow hover:bg-senna-yellow-hover rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(255,225,0,0.4)] hover:shadow-[0_0_40px_rgba(255,225,0,0.7)] hover:scale-105 group"
                >
                  <Heart className="w-4 h-4 mr-2 text-black fill-black group-hover:scale-110 transition-transform" />
                  Apoiar o Instituto Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>

                <a
                  href="https://institutoayrtonsenna.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10"
                >
                  Conhecer os Projetos
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
