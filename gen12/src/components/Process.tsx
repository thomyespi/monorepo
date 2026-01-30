"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MessageSquare, Code2, Rocket } from "lucide-react";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Process() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const steps = [
        {
            num: "01",
            title: t('process.steps.discovery.title'),
            text: t('process.steps.discovery.text'),
            icon: MessageSquare
        },
        {
            num: "02",
            title: t('process.steps.agile.title'),
            text: t('process.steps.agile.text'),
            icon: Code2
        },
        {
            num: "03",
            title: t('process.steps.deploy.title'),
            text: t('process.steps.deploy.text'),
            icon: Rocket
        }
    ];

    return (
        <section id="metodo" className="py-12 md:py-20 px-6 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-black text-primary tracking-tighter"
                    >
                        {t('process.title')} <span className="italic text-accent">{t('process.titleAccent')}</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Horizontal Connector Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-100 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.num}
                                    initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={skipAnimations ? { duration: 0 } : { duration: 0.8, delay: index * 0.3 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Icon Container with Badge */}
                                    <div className="relative mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="w-24 h-24 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 flex items-center justify-center relative z-10 group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500">
                                            <Icon className="w-10 h-10 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/20 z-20">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-2xl font-black text-primary mb-4 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-primary/60 font-medium leading-relaxed max-w-xs mx-auto">
                                        {step.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
