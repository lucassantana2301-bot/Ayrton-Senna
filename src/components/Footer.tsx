"use client";

import { Flag, Heart, ArrowUp, Globe, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070709] text-gray-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Senna Stripe Bottom Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 senna-stripe-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Tribute */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-black rounded-xl border border-senna-yellow/50">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-senna-yellow fill-current">
                  <path d="M 80,25 C 80,12 60,10 45,10 C 25,10 15,20 15,35 C 15,55 85,45 85,68 C 85,85 70,90 45,90 C 20,90 10,75 10,75 L 20,62 C 20,62 30,76 48,76 C 65,76 71,70 71,62 C 71,45 5,55 5,30 C 5,12 25,0 50,0 C 75,0 90,15 90,25 Z" />
                </svg>
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-white">
                AYRTON<span className="text-senna-yellow">SENNA</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-md leading-relaxed font-normal">
              Tributo interativo dedicado à memória, ao gênio e ao legado inesquecível de Ayrton Senna da Silva (1960 — 1994). Sempre em nossos corações.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-senna-yellow">
              <span>🇧🇷 #SennaSempre</span>
              <span>•</span>
              <span>3x Campeão Mundial F1</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#inicio" className="hover:text-senna-yellow transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#trajetoria" className="hover:text-senna-yellow transition-colors">
                  Trajetória & Linha do Tempo
                </a>
              </li>
              <li>
                <a href="#garagem" className="hover:text-senna-yellow transition-colors">
                  Garagem & Máquinas
                </a>
              </li>
              <li>
                <a href="#frases" className="hover:text-senna-yellow transition-colors">
                  Citações Marcantes
                </a>
              </li>
              <li>
                <a href="#instituto" className="hover:text-senna-yellow transition-colors">
                  Instituto Ayrton Senna
                </a>
              </li>
            </ul>
          </div>

          {/* Official Tributes & External Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Canais Oficiais & Tributos
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://institutoayrtonsenna.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-senna-yellow hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                title="Instituto Ayrton Senna"
              >
                <Heart className="w-5 h-5" />
              </a>
              <a
                href="https://senna.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-senna-yellow hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                title="Site Oficial Senna"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/sennaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-senna-yellow hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                title="Instagram Oficial"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[11px] text-gray-500 font-medium">
              Desenvolvido com inspiração na estética moderna e responsiva do automobilismo mundial.
            </p>
          </div>

        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Tributo Ayrton Senna. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-senna-yellow" />
          </button>
        </div>
      </div>
    </footer>
  );
}
