"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Lazy-load below-fold sections — JS se descarga solo cuando el navegador los necesita
const About    = dynamic(() => import("@/components/About").then(m => ({ default: m.About })), { ssr: false });
const Services = dynamic(() => import("@/components/Services").then(m => ({ default: m.Services })), { ssr: false });
const Process  = dynamic(() => import("@/components/Process").then(m => ({ default: m.Process })), { ssr: false });
const Products = dynamic(() => import("@/components/Products").then(m => ({ default: m.Products })), { ssr: false });
const Clients  = dynamic(() => import("@/components/Clients").then(m => ({ default: m.Clients })), { ssr: false });
const Partners = dynamic(() => import("@/components/Partners").then(m => ({ default: m.Partners })), { ssr: false });
const FAQ      = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })), { ssr: false });
const Contact  = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })), { ssr: false });
import { Menu, X } from "lucide-react";
import { SCROLL_OFFSET } from "@/lib/constants";

export default function Home() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active section detection — rootMargin más generoso para secciones cortas
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0,
      rootMargin: "-25% 0px -65% 0px"
    });

    const sectionIds = ['nosotros', 'servicios', 'clientes', 'faq', 'contacto'];

    // Retry hasta que los dynamic imports rendericen los elementos
    let retries = 0;
    const attach = () => {
      const found = sectionIds.filter(id => {
        const el = document.getElementById(id);
        if (el) { observer.observe(el); return true; }
        return false;
      });
      if (found.length < sectionIds.length && retries++ < 10) {
        setTimeout(attach, 300);
      }
    };
    attach();

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
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - SCROLL_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen relative z-0 selection:bg-accent selection:text-white">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-60 pointer-events-none"
      />

      <AnimatedBackground />
      <WhatsAppButton />

      {/* Dynamic Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out",
        isScrolled ? "py-2 md:py-4 px-6" : "py-6 md:py-10 px-0"
      )}>
        <div className={cn(
          "mx-auto relative flex items-center justify-between transition-all duration-1000 ease-in-out",
          isScrolled
            ? "max-w-5xl p-2 md:p-3 px-6 md:px-10 rounded-2xl bg-[#070e18]/85 backdrop-blur-xl border border-white/8 shadow-lg shadow-black/30"
            : "max-w-5xl px-6 md:px-10 bg-transparent border-transparent"
        )}>

          {/* Left: Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center group cursor-pointer shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={cn(
              "bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-black/30 transition-all duration-500 overflow-hidden ring-2 ring-white/10",
              isScrolled ? "w-8 h-8 rotate-0" : "w-10 h-10 rotate-12 group-hover:rotate-0"
            )}>
              <img src="/logos/gen12-icon.png" alt="G" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Center: Name + Nav — absolutely centered on the full navbar width */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={cn(
                "font-black tracking-tighter uppercase italic text-foreground transition-all duration-500 whitespace-nowrap",
                isScrolled ? "text-sm" : "text-base"
              )}
            >
              GEN<span className="text-accent">12</span>SOFTWARE
            </button>

            <div className="h-4 w-px bg-white/15" />

            <nav className="flex items-center gap-6">
              {[
                { id: 'home', label: t('navbar.home') },
                { id: 'nosotros', label: t('navbar.about') },
                { id: 'servicios', label: t('navbar.services') },
                { id: 'clientes', label: t('navbar.projects') },
                { id: 'faq', label: t('navbar.faq') },
              ].map((link) => (
                <a
                  key={link.id}
                  href={link.id === 'home' ? '#' : `#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className={cn(
                    "text-[10px] font-black tracking-[0.3em] transition-colors whitespace-nowrap",
                    activeSection === link.id ? "text-foreground" : "text-foreground/40 hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: CTA + Mobile controls */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
                className={cn(
                  "bg-foreground text-background px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-black/20 transition-all duration-500 whitespace-nowrap",
                  isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
              >
                {t('navbar.contact')}
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/8 text-foreground"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop CTA */}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
              className={cn(
                "hidden md:inline-flex bg-foreground text-background rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/20 hover:scale-105 transition-all cursor-pointer",
                isScrolled ? "px-5 py-2.5" : "px-6 py-3"
              )}
            >
              {t('navbar.contact')}
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#070e18]/98 backdrop-blur-2xl border-b border-white/8 overflow-hidden"
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
                      activeSection === link.id ? "text-accent" : "text-foreground/60"
                    )}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="h-px bg-white/8 my-2" />

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="bg-foreground text-background px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-black/20"
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
