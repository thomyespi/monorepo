"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Code2, BrainCircuit, Layers } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import { M } from "./ui/M";

export function Services() {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile() === true;

    const services = [
        {
            title: t('services.items.fullstack.title'),
            description: t('services.items.fullstack.desc'),
            icon: Code2,
            accent: "bg-blue-500/15 text-blue-400",
            features: tData<string[]>('services.items.fullstack.features') || [],
            cta: t('services.items.fullstack.cta')
        },
        {
            title: t('services.items.ai.title'),
            description: t('services.items.ai.desc'),
            icon: BrainCircuit,
            accent: "bg-purple-500/15 text-purple-400",
            features: tData<string[]>('services.items.ai.features') || [],
            cta: t('services.items.ai.cta')
        },
        {
            title: t('services.items.uxui.title'),
            description: t('services.items.uxui.desc'),
            icon: Layers,
            accent: "bg-accent/10 text-accent",
            features: tData<string[]>('services.items.uxui.features') || [],
            cta: t('services.items.uxui.cta')
        },
    ];

    if (!services || services.length === 0) return null;

    return (
        <section id="servicios" className="py-10 md:py-16 px-6 bg-[#0a1625]/40 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <div className="max-w-2xl">
                        <M tag="span" mobile={isMobile}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                        >
                            {t('services.badge')}
                        </M>
                        <M tag="h2" mobile={isMobile}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none md:leading-tight"
                        >
                            {t('services.title')} <br />
                            <span className="text-accent underline decoration-4 underline-offset-8">{t('services.titleAccent')}</span> {t('services.titleSuffix')}
                        </M>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            Icon={service.icon}
                            accent={service.accent}
                            features={service.features}
                            ctaText={service.cta}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
