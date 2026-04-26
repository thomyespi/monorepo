"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ClientItem } from "@/types";
import { M } from "./ui/M";

export function Clients() {
    const { tData } = useLanguage();
    const isMobile = useIsMobile() === true;

    const clients = tData<ClientItem[]>('clients.items') || [];

    return (
        <section id="clientes" className="mt-[clamp(48px,6vw,80px)] max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)]">
            {/* Header */}
            <div className="mb-10 md:mb-14" style={{ borderTop: "1px solid var(--rule)", paddingTop: "clamp(32px,4vw,56px)" }}>
                <M tag="span" mobile={isMobile}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="font-mono text-[12px] text-accent mb-4 block"
                >
                    // algunos de nuestros clientes
                </M>
                <M tag="h2" mobile={isMobile}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
                    className="m-0 font-display font-extrabold text-ink leading-none tracking-[-0.035em]"
                    style={{ fontSize: "clamp(40px, 6vw, 74px)" }}
                >
                    Lo que dicen algunos{" "}
                    <em className="not-italic font-light text-accent">de nuestros clientes.</em>
                </M>
            </div>

            {/* Rows */}
            <div style={{ borderTop: "1px solid var(--rule)" }}>
                {clients.map((client, index) => (
                    <M key={client.name} mobile={isMobile}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
                        className="max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-5 max-[640px]:py-7 grid items-center gap-8 py-8 px-6 rounded-2xl"
                        style={{
                            gridTemplateColumns: "220px 1fr auto",
                            borderBottom: "1px solid var(--rule)",
                            ...(client.featured && {
                                background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 6%, transparent), color-mix(in srgb, var(--accent) 3%, transparent))",
                                border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                                borderBottom: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                                marginLeft: "-24px",
                                marginRight: "-24px",
                            })
                        }}
                    >
                        {/* Logo + name */}
                        <div className="flex items-center gap-4">
                            <div
                                className={`overflow-hidden shrink-0 ${client.featured ? "w-16 h-16 rounded-2xl" : "w-12 h-12 rounded-xl"}`}
                                style={{ border: client.featured ? "1px solid color-mix(in srgb, var(--accent) 35%, transparent)" : "1px solid var(--rule-2)" }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    style={client.logoScale ? { transform: `scale(${client.logoScale})` } : undefined}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent && !parent.querySelector('.fallback-initial')) {
                                            const span = document.createElement('span');
                                            span.className = 'fallback-initial text-lg font-black text-ink-3 flex items-center justify-center w-full h-full';
                                            span.textContent = client.name.charAt(0).toUpperCase();
                                            parent.appendChild(span);
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                {client.featured && (
                                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                                        // página destacada
                                    </span>
                                )}
                                <span className={`font-display font-bold tracking-tight leading-tight ${client.featured ? "text-[17px] text-accent" : "text-[15px] text-ink"}`}>
                                    {client.name}
                                </span>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <p className={`text-[14px] leading-relaxed ${client.featured ? "text-ink" : "text-ink-2"}`}>
                            "{client.testimonial}"
                        </p>

                        {/* Link */}
                        <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-[12px] text-accent hover:text-ink transition-colors whitespace-nowrap"
                        >
                            visitar sitio
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </M>
                ))}
            </div>
        </section>
    );
}
