"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientCard = ({ logo, index }: { logo: string; index: number }) => {
    // Convert filename to display name: "alpla_avellaneda.png" -> "ALPLA AVELLANEDA"
    // We use lastIndexOf to safely remove only the extension, preserving dots in "S.A."
    const displayName = logo.substring(0, logo.lastIndexOf('.')).replace(/[_-]/g, ' ').toUpperCase();
    const logoUrl = `/clients/${logo}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center h-[160px] border border-brand-gray/5 group gap-3"
            title={displayName}
        >
            <div className="w-full h-20 flex items-center justify-center relative">
                <img
                    src={logoUrl}
                    alt={displayName}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
            </div>
            <span className="font-semibold text-gray-500 text-xs md:text-sm uppercase tracking-wide group-hover:text-brand-forest transition-colors">
                {displayName}
            </span>
        </motion.div>
    );
};

interface ClientsProps {
    logos: string[];
}

const Clients = ({ logos = [] }: ClientsProps) => {
    return (
        <section id="clientes" className="py-24 bg-brand-cream border-y border-brand-gray/5">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#14362d' }}>
                    Nuestros Clientes
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Quienes se incorporan a nuestra familia, y quienes nos siguen eligiendo.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {logos.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {logos.map((logo, index) => (
                            <ClientCard key={logo} logo={logo} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 py-12">
                        <p>No hay logos cargados en la carpeta public/clients.</p>
                        <p className="text-sm mt-2">Agregá archivos de imagen para verlos aquí.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

//-

export default Clients;
