"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Layout, Server, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Partners() {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const categories = [
        { id: 'frontend', icon: Layout, color: "text-blue-400" },
        { id: 'infra', icon: Server, color: "text-emerald-400" },
        { id: 'ai', icon: BrainCircuit, color: "text-purple-400" },
    ];

    return (
        <section id="trabajo" className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.span
                        initial={skipAnimations ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 0.5 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block"
                    >
                        {t('partners.title')}
                    </motion.span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => {
                        const title = t(`partners.categories.${cat.id}.title`);
                        const desc = t(`partners.categories.${cat.id}.desc`);
                        const techs = tData<string[]>(`partners.categories.${cat.id}.techs`) || [];
                        const Icon = cat.icon;

                        return (
                            <motion.div
                                key={cat.id}
                                initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={skipAnimations ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-4xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 md:hover:shadow-2xl md:hover:shadow-primary/5 transition-all duration-500 md:hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-white via-white to-gray-50/50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 md:group-hover:scale-110 bg-gray-50",
                                        cat.color.replace('text-', 'bg-').replace('400', '50/50')
                                    )}>
                                        <Icon className={cn("w-6 h-6", cat.color)} />
                                    </div>

                                    <h3 className="text-2xl font-black text-primary mb-3 tracking-tight">
                                        {title}
                                    </h3>
                                    <p className="text-primary/50 font-medium mb-8 leading-relaxed h-12">
                                        {desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-bold text-primary/70 group-hover:bg-white group-hover:border-primary/10 group-hover:shadow-sm transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
