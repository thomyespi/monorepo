"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Clients() {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    // Use tData for arrays/objects as 't' only returns strings
    const clients = tData<any[]>('clients.items') || [];

    return (
        <section id="clientes" className="py-20 md:py-32 px-6 bg-gray-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.span
                        initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                    >
                        {t('clients.badge')}
                    </motion.span>
                    <motion.h2
                        initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none"
                    >
                        {t('clients.title')} <br />
                        <span className="text-accent">{t('clients.titleAccent')}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={skipAnimations ? { duration: 0 } : { duration: 0.8, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                            className="group relative"
                        >
                            <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col">
                                {/* Header / Client Logo */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="relative w-24 h-24 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-accent/30 group-hover:shadow-md transition-all duration-500">
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="w-full h-full object-cover transition-all duration-500"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f3f4f6&color=0a192f&bold=true&length=1`;
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-primary tracking-tight group-hover:text-accent transition-colors duration-300">{client.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="w-3 h-px bg-accent" />
                                                <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Partner Elite</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="relative mb-8 grow">
                                    <Quote className="absolute -top-4 -left-2 w-8 h-8 text-accent/10" />
                                    <p className="relative z-10 text-primary/60 font-medium leading-relaxed italic md:text-lg">
                                        "{client.testimonial}"
                                    </p>
                                </div>

                                {/* Footer Action */}
                                <div className="mt-auto space-y-6">
                                    <a
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest transition-all duration-500 group/btn shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>{t('clients.view')}</span>
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </a>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                        <div className="flex gap-1.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <div key={s} className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            ))}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/30">Verified Project</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
