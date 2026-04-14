"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Layout, Server, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";
import { M } from "./ui/M";

export function Partners() {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile() === true;

    const categories = [
        { id: 'frontend', icon: Layout, color: "text-blue-400" },
        { id: 'infra', icon: Server, color: "text-emerald-400" },
        { id: 'ai', icon: BrainCircuit, color: "text-purple-400" },
    ];

    return (
        <section id="trabajo" className="py-10 md:py-16 bg-[#0a1625]/40 relative overflow-hidden">
            <div
                className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none translate-z-0"
                style={{ background: 'radial-gradient(circle, rgba(10, 25, 47, 0.08) 0%, transparent 70%)' }}
            />
            <div
                className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none translate-z-0"
                style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <M tag="span" mobile={isMobile}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block"
                    >
                        {t('partners.title')}
                    </M>
                    <M tag="h2" mobile={isMobile}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none"
                    >
                        Nuestras <span className="text-accent italic">Herramientas</span>
                    </M>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => {
                        const title = t(`partners.categories.${cat.id}.title`);
                        const desc = t(`partners.categories.${cat.id}.desc`);
                        const techs = tData<string[]>(`partners.categories.${cat.id}.techs`) || [];
                        const Icon = cat.icon;

                        return (
                            <M key={cat.id} mobile={isMobile}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                className="group p-8 rounded-4xl bg-white/5 border border-white/8 shadow-xl shadow-black/20 md:hover:shadow-2xl md:hover:shadow-black/30 transition-all duration-500 md:hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-white/8 via-white/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 md:group-hover:scale-110 bg-white/8",
                                        cat.color.replace('text-', 'bg-').replace('400', '50/50')
                                    )}>
                                        <Icon className={cn("w-6 h-6", cat.color)} />
                                    </div>

                                    <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight">
                                        {title}
                                    </h3>
                                    <p className="text-foreground/50 font-medium mb-8 leading-relaxed h-12">
                                        {desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg bg-white/8 border border-white/10 text-xs font-bold text-foreground/70 group-hover:bg-white/12 group-hover:border-white/15 group-hover:shadow-sm transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </M>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
