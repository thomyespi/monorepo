"use client";

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    "Minera del Sur",
    "Pesquera Austral",
    "Aceros Argentinos",
    "Logística Federal",
    "Energía Norte",
    "Corporación del Plata",
    "Alimentos Pampeanos",
    "Industrial Bonaerense",
    "Siderurgia Austral",
    "Transportes Argentinos"
];

const Clients = () => {
    // Duplicate the list to create a seamless infinite loop
    const duplicatedClients = [...clients, ...clients];

    return (
        <section id="clientes" className="py-12 bg-brand-cream border-y border-brand-gray/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-forest">
                    Grandes Compañías que confían en nosotros
                </span>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, "-50%"]
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
                >
                    {duplicatedClients.map((client, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-black text-brand-gray/10 uppercase tracking-tighter transition-all hover:text-brand-terracotta/40 cursor-default select-none pb-2"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
