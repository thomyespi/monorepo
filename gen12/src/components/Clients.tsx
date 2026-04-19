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
                        className="max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-5 max-[640px]:py-7 grid items-center gap-8 py-8"
                        style={{ gridTemplateColumns: "220px 1fr auto", borderBottom: "1px solid var(--rule)" }}
                    >
                        {/* Logo + name */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-xl overflow-hidden shrink-0"
                                style={{ border: "1px solid var(--rule-2)" }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
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
                            <span className="font-display font-bold text-[15px] text-ink tracking-tight leading-tight">
                                {client.name}
                            </span>
                        </div>

                        {/* Testimonial */}
                        <p className="text-ink-2 text-[14px] leading-relaxed">
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
