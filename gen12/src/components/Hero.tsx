"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Hero() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();

    // Skip animations if on mobile or if we haven't detected yet (safety)
    const skipAnimations = isMobile === true;

    return (
        <section className="relative min-h-[85dvh] flex flex-col items-center justify-center pt-24 pb-16 md:pt-20 md:pb-16 px-6">
            <motion.div
                initial={skipAnimations ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
            >
                <Zap className="w-4 h-4 text-accent fill-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                    {t('hero.badge')}
                </span>
            </motion.div>

            <div className="max-w-5xl mx-auto text-center">
                <motion.h1
                    initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-7xl lg:text-8xl font-black text-primary tracking-tight leading-none mb-6"
                >
                    {t('hero.title')} <br />
                    <span className="text-accent italic">{t('hero.titleAccent')}</span> <br />
                    {t('hero.titleSuffix')}
                </motion.h1>

                <motion.p
                    initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto text-base md:text-2xl text-primary/50 font-medium leading-relaxed mb-8"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contacto');
                            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                        }}
                        className="group relative px-10 py-6 bg-primary text-white rounded-2xl font-black tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('hero.ctaMain')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-accent to-accent/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </a>

                    <a
                        href="#servicios"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('servicios');
                            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-3 px-10 py-6 rounded-2xl font-black tracking-widest text-primary hover:bg-primary/5 transition-all cursor-pointer"
                    >
                        {t('hero.ctaSecondary')}
                        <ChevronRight className="w-5 h-5 opacity-50" />
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
