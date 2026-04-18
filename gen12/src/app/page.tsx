"use client";

import { useScroll, useSpring, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Strip } from "@/components/Strip";
import { StackSection } from "@/components/StackSection";
import { Servicios } from "@/components/Servicios";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const About   = dynamic(() => import("@/components/About").then(m => ({ default: m.About })),   { ssr: false });
const Process = dynamic(() => import("@/components/Process").then(m => ({ default: m.Process })), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients").then(m => ({ default: m.Clients })), { ssr: false });
const FAQ     = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })),         { ssr: false });
const Contact = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen relative z-0 selection:bg-accent selection:text-white">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-60 pointer-events-none"
      />

      <AnimatedBackground />
      <WhatsAppButton />

      <Nav />
      <Hero />
      <Strip />
      <About />
      <Process />
      <Servicios />
      <Clients />
      <StackSection />

      {/* bg-bg wrapper aísla el fondo de secciones dinámicas anteriores */}
      <div className="relative bg-bg">
        <FAQ />
        <div id="contacto">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
