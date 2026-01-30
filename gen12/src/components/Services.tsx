"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Layers } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Services() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const services = [
        {
            title: t('services.items.fullstack.title'),
            description: t('services.items.fullstack.desc'),
            icon: Code2,
            accent: "bg-blue-500/10 text-blue-600",
            features: [
                t('services.items.fullstack.features.f1'),
                t('services.items.fullstack.features.f2'),
                t('services.items.fullstack.features.f3'),
            ]
        },
        {
            title: t('services.items.ai.title'),
            description: t('services.items.ai.desc'),
            icon: BrainCircuit,
            accent: "bg-purple-500/10 text-purple-600",
            features: [
                t('services.items.ai.features.f1'),
                t('services.items.ai.features.f2'),
                t('services.items.ai.features.f3'),
            ]
        },
        {
            title: t('services.items.uxui.title'),
            description: t('services.items.uxui.desc'),
            icon: Layers,
            accent: "bg-accent/10 text-accent",
            features: [
                t('services.items.uxui.features.f1'),
                t('services.items.uxui.features.f2'),
                t('services.items.uxui.features.f3'),
            ]
        },
    ];

    if (!services || services.length === 0) return null;

    return (
        <section id="servicios" className="py-12 md:py-20 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={skipAnimations ? false : { opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                        >
                            {t('services.badge')}
                        </motion.span>
                        <motion.h2
                            initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9] md:leading-tight"
                        >
                            {t('services.title')} <br />
                            <span className="text-accent underline decoration-4 underline-offset-8">{t('services.titleAccent')}</span> {t('services.titleSuffix')}
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            Icon={service.icon}
                            accent={service.accent}
                            features={service.features}
                            ctaText={t('services.cta')}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
