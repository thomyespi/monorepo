"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Globe2, Layers, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Desarrollo Full-Stack",
        description: "Aplicaciones web y móviles de alto rendimiento construidas con el stack más moderno: Next.js, React y Node.js.",
        icon: Code2,
        accent: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Inteligencia Artificial",
        description: "Integración de modelos LLM y visión por computadora para automatizar procesos y generar valor en tiempo real.",
        icon: BrainCircuit,
        accent: "bg-purple-500/10 text-purple-600",
    },
    {
        title: "UX/UI Experience",
        description: "Diseños que no solo se ven increíbles, sino que están optimizados para la conversión y la retención de usuarios.",
        icon: Layers,
        accent: "bg-accent/10 text-accent",
    },
];

export function Services() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 md:py-32 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                        >
                            Nuestras Capacidades
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9] md:leading-tight"
                        >
                            SOLUCIONES QUE <br />
                            <span className="text-accent underline decoration-4 underline-offset-8">ESCALAN</span> TU NEGOCIO
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease-in-out", willChange: "transform, opacity" }}
                            className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110", service.accent)}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">{service.title}</h3>
                            <p className="text-primary/50 font-medium leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <a
                                href={`https://wa.me/5491161591957?text=${encodeURIComponent(`Hola GEN12! Me interesa saber más sobre el servicio de ${service.title}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-accent transition-colors cursor-pointer"
                            >
                                Saber Más
                                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
