"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { SCROLL_OFFSET } from "@/lib/constants";
import { M } from "./ui/M";

export function Hero() {
    const { t } = useLanguage();
    const isMobile = useIsMobile() === true;

    return (
        <section className="relative min-h-[85dvh] flex flex-col items-center justify-center pt-20 pb-16 md:pt-28 md:pb-24 px-6">
            <M mobile={isMobile}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-6"
            >
                <Zap className="w-4 h-4 text-accent fill-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                    {t('hero.badge')}
                </span>
            </M>

            <div className="max-w-5xl mx-auto text-center">
                <M tag="h1" mobile={isMobile}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none mb-6"
                >
                    {t('hero.title')} <br />
                    <span className="text-accent italic">{t('hero.titleAccent')}</span> <br />
                    {t('hero.titleSuffix')}
                </M>

                <M tag="p" mobile={isMobile}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mx-auto text-base md:text-xl text-foreground/60 font-medium leading-relaxed mb-10"
                >
                    {t('hero.description')}
                </M>

                <M mobile={isMobile}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('contacto');
                            if (el) window.scrollTo({ top: el.offsetTop - SCROLL_OFFSET, behavior: 'smooth' });
                        }}
                        className="group relative px-10 py-5 bg-accent text-primary rounded-2xl font-black tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/25"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('hero.ctaMain')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                    </a>

                    <a
                        href="#clientes"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById('clientes');
                            if (el) window.scrollTo({ top: el.offsetTop - SCROLL_OFFSET, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-3 px-10 py-5 rounded-2xl font-black tracking-widest text-foreground/70 border border-white/10 hover:border-white/20 hover:text-foreground transition-all cursor-pointer"
                    >
                        {t('hero.ctaSecondary')}
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </M>
            </div>
        </section>
    );
}
