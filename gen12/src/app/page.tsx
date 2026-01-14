"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-white">
      <AnimatedBackground />
      <WhatsAppButton />

      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 rotate-12 transition-transform group-hover:rotate-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-primary">
              GEN<span className="text-accent">12</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-12"
          >
            {['Servicios', 'Método', 'Proyectos', 'Stack'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'stack' ? 'trabajo' : item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-6 py-3 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/10 hover:scale-105 transition-all cursor-pointer"
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </nav>

      <Hero />

      <div id="servicios">
        <Services />
      </div>

      <div id="método">
        <Process />
      </div>

      <Products />

      {/* Social Proof Section (Minimalist) */}
      {/* Social Proof Section (Modern Tech Stack Showcase) */}
      <section id="trabajo" className="py-24 bg-primary/5 border-y border-primary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-16 md:gap-24 animate-infinite-scroll whitespace-nowrap filter grayscale hover:grayscale-0 transition-all duration-700">
            {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'AI AGENTS', 'NODE.JS', 'TAILWIND CSS', 'REACT', 'NEXT.JS', 'TYPESCRIPT', 'AI AGENTS', 'NODE.JS', 'TAILWIND CSS'].map((tech, i) => (
              <span key={i} className="text-3xl md:text-5xl font-black tracking-widest text-primary/40 hover:text-primary transition-colors cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <div id="contacto">
        <Contact />
      </div>
    </main>
  );
}
