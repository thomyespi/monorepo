"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Clients } from "@/components/Clients";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Languages, Menu, X } from "lucide-react";
import { AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section Detection
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0,
      rootMargin: "-45% 0px -45% 0px" // Only trigger when section is in the middle 10% of screen
    });

    const sections = ['nosotros', 'servicios', 'clientes', 'faq', 'contacto'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    // Safety timeout to ensure menu is closing/closed before scroll starts
    // This prevents layout shifts or "jumps" on mobile
    setTimeout(() => {
      const element = document.getElementById(id.replace('#', ''));
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (element) {
        const offset = 80; // Adjusted for the floating navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen relative z-0 selection:bg-accent selection:text-white">
      <AnimatedBackground />
      <WhatsAppButton />

      {/* Dynamic Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out",
        isScrolled ? "py-2 md:py-4 px-6" : "py-6 md:py-10 px-0"
      )}>
        <div className={cn(
          "mx-auto flex items-center justify-between transition-all duration-1000 ease-in-out",
          isScrolled
            ? "max-w-6xl p-2 md:p-3 px-6 md:px-10 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-primary/5"
            : "max-w-full px-12 md:px-24 bg-transparent border-transparent"
        )}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={cn(
              "bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 transition-all duration-500 overflow-hidden ring-2 ring-white/10",
              isScrolled ? "w-9 h-9 rotate-0" : "w-12 h-12 rotate-12 group-hover:rotate-0"
            )}>
              <img
                src="/logos/gen12-icon.png"
                alt="G"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={cn(
              "font-black tracking-tighter uppercase italic text-primary transition-all duration-500",
              isScrolled ? "text-lg" : "text-2xl"
            )}>
              GEN<span className="text-accent">12</span>
            </span>
          </motion.div>

          <div className="flex items-center gap-6">
            {/* Language Switcher - Now visible on mobile */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="hidden sm:flex items-center gap-2 group cursor-pointer bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-2xl transition-all"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center text-sm shadow-sm bg-white">
                {language === 'es' ? '🇪🇸' : '🇺🇸'}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:text-primary">
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>

            {/* Mobile Menu Controls */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
                className={cn(
                  "bg-primary text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 transition-all duration-500 whitespace-nowrap",
                  isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
              >
                {t('navbar.contact')}
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-12"
            >
              <div className="flex gap-8">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                  className={cn(
                    "text-[10px] font-black tracking-[0.3em] transition-colors",
                    activeSection === 'home' ? "text-primary" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {t('navbar.home')}
                </a>
                <a
                  href="#nosotros"
                  onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}
                  className={cn(
                    "text-[10px] font-black tracking-[0.3em] transition-colors",
                    activeSection === 'nosotros' ? "text-primary" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {t('navbar.about')}
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}
                  className={cn(
                    "text-[10px] font-black tracking-[0.3em] transition-colors",
                    activeSection === 'servicios' ? "text-primary" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {t('navbar.services')}
                </a>
                <a
                  href="#clientes"
                  onClick={(e) => { e.preventDefault(); scrollToSection('clientes'); }}
                  className={cn(
                    "text-[10px] font-black tracking-[0.3em] transition-colors",
                    activeSection === 'clientes' ? "text-primary" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {t('navbar.projects')}
                </a>
                <a
                  href="#faq"
                  onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                  className={cn(
                    "text-[10px] font-black tracking-[0.3em] transition-colors",
                    activeSection === 'faq' ? "text-primary" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {t('navbar.faq')}
                </a>
              </div>

              <div className="h-6 w-px bg-primary/10" />

              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
                className={cn(
                  "bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/10 hover:scale-105 transition-all cursor-pointer",
                  isScrolled ? "px-5 py-2.5" : "px-6 py-3"
                )}
              >
                {t('navbar.contact')}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {[
                  { id: 'home', label: t('navbar.home') },
                  { id: 'nosotros', label: t('navbar.about') },
                  { id: 'servicios', label: t('navbar.services') },
                  { id: 'clientes', label: t('navbar.projects') },
                  { id: 'faq', label: t('navbar.faq') }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "text-left text-xs font-black tracking-widest uppercase py-3 border-b border-gray-50 transition-colors",
                      activeSection === link.id ? "text-accent" : "text-primary/60"
                    )}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="h-px bg-gray-100 my-2" />

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                    className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl"
                  >
                    <span>{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    </span>
                  </button>

                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20"
                  >
                    {t('navbar.contact')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Hero />
      <About />
      <Process />
      <Services />
      <Products />
      <Clients />
      <Partners />
      <FAQ />

      <div id="contacto">
        <Contact />
      </div>
    </main >
  );
}
