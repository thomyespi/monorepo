"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ShieldCheck, Languages } from "lucide-react";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-white">
      <AnimatedBackground />
      <WhatsAppButton />

      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-primary/5">
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

          <div className="flex items-center gap-6">
            {/* Language Switcher - Now visible on mobile */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 group cursor-pointer bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-2xl transition-all"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center text-sm shadow-sm bg-white">
                {language === 'es' ? '🇪🇸' : '🇺🇸'}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:text-primary">
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-12"
            >
              <div className="flex gap-8">
                <a href="#servicios" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
                  {t('navbar.services')}
                </a>
                <a href="#método" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
                  {t('navbar.method')}
                </a>
                <a href="#proyectos" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
                  {t('navbar.projects')}
                </a>
                <a href="#trabajo" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
                  {t('navbar.stack')}
                </a>
              </div>

              <div className="h-6 w-px bg-primary/10" />

              <a
                href="#contacto"
                className="px-6 py-3 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/10 hover:scale-105 transition-all cursor-pointer"
              >
                {t('navbar.contact')}
              </a>
            </motion.div>
          </div>
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
