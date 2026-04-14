"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ClientItem } from "@/types";
import { M } from "./ui/M";

export function Clients() {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile() === true;

    const clients = tData<ClientItem[]>('clients.items') || [];

    return (
        <section id="clientes" className="py-12 md:py-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div
                    className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full translate-z-0"
                    style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full translate-z-0"
                    style={{ background: 'radial-gradient(circle, rgba(10, 25, 47, 0.08) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-14">
                    <M tag="span" mobile={isMobile}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                    >
                        {t('clients.badge')}
                    </M>
                    <M tag="h2" mobile={isMobile}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.95]"
                    >
                        {t('clients.title')} <br />
                        <span className="text-accent italic">{t('clients.titleAccent')}</span>
                    </M>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
                    {clients.map((client, index) => (
                        <M key={client.name} mobile={isMobile}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: 0.08 + (index * 0.05), ease: "easeOut" }}
                            className="group relative"
                        >
                            <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/8 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 flex flex-col">
                                <div className="mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="relative w-24 h-24 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-accent/30 group-hover:shadow-md transition-all duration-500">
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-all duration-500"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent && !parent.querySelector('.fallback-initial')) {
                                                        const span = document.createElement('span');
                                                        span.className = 'fallback-initial text-2xl font-black text-foreground/50';
                                                        span.textContent = client.name.charAt(0).toUpperCase();
                                                        parent.appendChild(span);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">{client.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="w-3 h-px bg-accent" />
                                                <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Partner Elite</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mb-8 grow">
                                    <Quote className="absolute -top-4 -left-2 w-8 h-8 text-accent/10" />
                                    <p className="relative z-10 text-foreground/70 font-medium leading-relaxed italic text-lg md:text-xl">
                                        "{client.testimonial}"
                                    </p>
                                </div>

                                <div className="mt-auto space-y-6">
                                    <a
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/8 border border-white/12 text-foreground text-xs font-black uppercase tracking-widest transition-all duration-500 group/btn hover:bg-accent hover:text-primary hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>{t('clients.view')}</span>
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </a>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/8">
                                        <div className="flex gap-1.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <div key={s} className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            ))}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30">Verified Project</span>
                                    </div>
                                </div>
                            </div>
                        </M>
                    ))}
                </div>
            </div>
        </section>
    );
}
