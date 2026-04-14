"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Code2, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { M } from "./ui/M";

export function Process() {
    const { t } = useLanguage();
    const isMobile = useIsMobile() === true;

    const steps = [
        { num: "01", title: t('process.steps.discovery.title'), text: t('process.steps.discovery.text'), icon: MessageSquare },
        { num: "02", title: t('process.steps.agile.title'), text: t('process.steps.agile.text'), icon: Code2 },
        { num: "03", title: t('process.steps.deploy.title'), text: t('process.steps.deploy.text'), icon: Rocket }
    ];

    return (
        <section id="metodo" className="py-12 md:py-16 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-14">
                    <M tag="span" mobile={isMobile}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block"
                    >
                        Nuestra Metodología
                    </M>
                    <M tag="h2" mobile={isMobile}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-black text-foreground tracking-tighter"
                    >
                        {t('process.title')} <span className="italic text-accent">{t('process.titleAccent')}</span>
                    </M>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-white/10 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <M key={step.num} mobile={isMobile}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.08 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="relative mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="w-24 h-24 rounded-3xl bg-white/6 border border-white/10 shadow-xl shadow-black/30 flex items-center justify-center relative z-10 group-hover:shadow-2xl group-hover:shadow-black/40 transition-all duration-500">
                                            <Icon className="w-10 h-10 text-foreground/80 group-hover:text-foreground transition-colors duration-500" />
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/20 z-20">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground/60 font-medium leading-relaxed max-w-xs mx-auto">
                                        {step.text}
                                    </p>
                                </M>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
