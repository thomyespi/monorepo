"use client";

import { useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Target, Zap, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useRef, useState, useEffect } from "react";
import { M } from "./ui/M";

function AnimatedValue({ value }: { value: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        const match = value.match(/^(\d+)(.*)$/);
        if (!match || !isInView) {
            setDisplay(value);
            return;
        }
        const target = parseInt(match[1]);
        const suffix = match[2];
        let frame = 0;
        const totalFrames = 50;
        const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${Math.round(eased * target)}${suffix}`);
            if (frame >= totalFrames) clearInterval(timer);
        }, 1200 / totalFrames);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return <span ref={ref}>{display}</span>;
}

export function About() {
    const { t } = useLanguage();
    const isMobile = useIsMobile() === true;

    const stats = [
        { label: t('about.stats.projects'), value: "100%", icon: Target },
        { label: t('about.stats.experience'), value: "24/7", icon: Zap },
        { label: t('about.stats.clientRating'), value: "20+", icon: Users },
    ];

    return (
        <section id="nosotros" className="py-8 md:py-14 px-6 relative overflow-hidden bg-[#0a1625]/40">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center">

                {/* Left: Stats */}
                <div className="w-full lg:w-2/5 grid grid-cols-1 gap-4 order-2 lg:order-1">
                    {stats.map((stat, i) => (
                        <M
                            key={i}
                            mobile={isMobile}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-6 p-6 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/6 hover:border-accent/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0">
                                <stat.icon className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <div className="text-3xl font-black text-foreground leading-none mb-1">
                                    {isMobile ? stat.value : <AnimatedValue value={stat.value} />}
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-wider text-foreground/40">
                                    {stat.label}
                                </div>
                            </div>
                        </M>
                    ))}
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-3/5 order-1 lg:order-2">
                    <M tag="span" mobile={isMobile}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block"
                    >
                        {t('about.badge')}
                    </M>

                    <M tag="h2" mobile={isMobile}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-[0.85] mb-8"
                    >
                        {t('about.title')} <br />
                        <span className="text-accent italic">{t('about.titleAccent')}</span>
                    </M>

                    <M tag="p" mobile={isMobile}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-foreground/60 font-medium leading-relaxed"
                    >
                        {t('about.description2')}
                    </M>
                </div>
            </div>
        </section>
    );
}
