"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Heart, Menu, X, Trophy, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Trajetória", href: "#trajetoria" },
  { name: "Conquistas & Garagem", href: "#garagem" },
  { name: "Frases", href: "#frases" },
  { name: "Instituto Senna", href: "#instituto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-[#0A0A0C]/90 via-[#0A0A0C]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo "S do Senna" */}
          <a
            href="#inicio"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex items-center justify-center w-11 h-11 bg-black rounded-xl border border-senna-yellow/40 group-hover:border-senna-yellow group-hover:shadow-[0_0_20px_rgba(255,225,0,0.4)] transition-all">
              {/* Custom Senna 'S' Graphic */}
              <svg
                viewBox="0 0 100 100"
                className="w-7 h-7 text-senna-yellow fill-current transition-transform duration-500 group-hover:rotate-12"
              >
                <path d="M 80,25 C 80,12 60,10 45,10 C 25,10 15,20 15,35 C 15,55 85,45 85,68 C 85,85 70,90 45,90 C 20,90 10,75 10,75 L 20,62 C 20,62 30,76 48,76 C 65,76 71,70 71,62 C 71,45 5,55 5,30 C 5,12 25,0 50,0 C 75,0 90,15 90,25 Z" />
              </svg>
              {/* Brazilian stripe dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-senna-green border-2 border-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-wider text-white group-hover:text-senna-yellow transition-colors leading-none">
                AYRTON<span className="text-senna-yellow">SENNA</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 font-semibold uppercase mt-0.5">
                LEGEND #12
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-senna-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#instituto"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-senna-yellow hover:bg-senna-yellow-hover rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,225,0,0.3)] hover:shadow-[0_0_25px_rgba(255,225,0,0.6)] hover:scale-105 group"
            >
              <Heart className="w-3.5 h-3.5 mr-2 text-black fill-black group-hover:scale-110 transition-transform" />
              Instituto Senna
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-senna-yellow" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D11]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold text-gray-200 hover:text-senna-yellow transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#instituto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 text-sm font-black uppercase tracking-wider text-black bg-senna-yellow rounded-xl shadow-[0_0_20px_rgba(255,225,0,0.4)]"
                >
                  <Heart className="w-4 h-4 mr-2 fill-black" />
                  Apoiar o Instituto Senna
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
