"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10"
            >
                <Zap className="w-4 h-4 text-accent fill-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                    Siguiente Generación de Software
                </span>
            </motion.div>

            <div className="max-w-5xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-primary tracking-tighter leading-[0.85] mb-8"
                >
                    CONSTRUIMOS <br />
                    <span className="text-accent italic">EL FUTURO</span> <br />
                    DIGITAL
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-primary/50 font-medium leading-relaxed mb-12"
                >
                    GEN12 fusiona ingeniería de precisión con inteligencia artificial para crear ecosistemas digitales que impulsan el crecimiento exponencial.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="https://wa.me/5491161591957?text=Hola%20GEN12!%20Quiero%20empezar%20un%20proyecto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Empezar un Proyecto
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-accent to-accent/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </a>

                    <a
                        href="#servicios"
                        className="flex items-center gap-3 px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-primary hover:bg-primary/5 transition-all cursor-pointer"
                    >
                        Nuestras Soluciones
                        <ChevronRight className="w-5 h-5 opacity-50" />
                    </a>
                </motion.div>
            </div>

            {/* Visual Element: Floating Number */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-[10%] opacity-[0.03] select-none pointer-events-none hidden lg:block"
            >
                <span className="text-[20rem] font-black leading-none text-primary">12</span>
            </motion.div>
        </section>
    );
}
