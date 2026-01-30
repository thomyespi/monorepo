"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Target, Users, Zap } from "lucide-react";

import { useIsMobile } from "@/hooks/useIsMobile";

export function About() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const stats = [
        { label: t('about.stats.projects'), value: "100%", icon: Target },
        { label: t('about.stats.experience'), value: "24/7", icon: Zap },
        { label: t('about.stats.clientRating'), value: "99%", icon: Users },
    ];

    return (
        <section id="nosotros" className="py-12 md:py-20 px-6 relative overflow-hidden bg-white">
            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -ml-48" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
                {/* Left Side: Visual/Stats */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
                    <motion.div
                        initial={skipAnimations ? false : { opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-2 bg-primary p-8 md:p-12 rounded-[2.5rem] text-white relative overflow-hidden group"
                    >
                        <div className="absolute top-6 right-6 md:top-8 md:right-8 group-hover:scale-110 transition-transform duration-700 opacity-20 md:opacity-100">
                            <img src="/logos/gen12-icon.png" alt="GEN12 Logo" className="w-16 h-16 md:w-32 md:h-32 object-contain mix-blend-lighten contrast-125" />
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black mb-4">GEN12</h3>
                        <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm">
                            {t('about.description1')}
                        </p>
                    </motion.div>

                    {stats.slice(0, 2).map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={skipAnimations ? { duration: 0 } : { duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-accent/5 border border-accent/10 p-8 rounded-4xl flex flex-col justify-between hover:bg-accent/10 transition-colors duration-700"
                        >
                            <stat.icon className="w-8 h-8 text-accent mb-6" />
                            <div>
                                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-wider text-primary/40 leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <motion.span
                        initial={skipAnimations ? false : { opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block"
                    >
                        {t('about.badge')}
                    </motion.span>

                    <motion.h2
                        initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-[0.85] mb-8"
                    >
                        {t('about.title')} <br />
                        <span className="text-accent italic">{t('about.titleAccent')}</span>
                    </motion.h2>

                    <motion.p
                        initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed mb-10"
                    >
                        {t('about.description2')}
                    </motion.p>

                    <motion.div
                        initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-700">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block text-sm font-black text-primary tracking-widest mb-1">Elite Infrastructure</span>
                                <span className="text-primary/40 text-sm font-medium">Sistemas robustos diseñados para fallar cero veces.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
