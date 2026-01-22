"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/industrial_catering_hero.png" // This will be generated/provided
                    alt="Industrial Catering"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/75" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 md:pt-32 lg:pt-36">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block text-white/90 font-bold tracking-wider uppercase text-sm mb-6 border-l-2 pl-4"
                        style={{ borderColor: '#e76f51' }}
                    >
                        Trayectoria de más de 25 años
                    </motion.span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.05]">
                        Soluciones de catering <br />
                        <span className="text-white/70">integral para operaciones</span> <br />
                        industriales y corporativas.
                    </h1>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                        Atendemos empresas, campamentos mineros y operaciones pesqueras con servicios gastronómicos eficientes, seguros y a medida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contacto"
                            className="bg-brand-terracotta hover:bg-[#d46246] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
                        >
                            Solicitar propuesta
                            <ChevronRight size={20} />
                        </a>
                        <a
                            href="#servicios"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
                        >
                            <Play size={20} fill="white" />
                            Conocer nuestros servicios
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Stats overlay or scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce z-20">
                <span className="text-xs uppercase tracking-widest mb-2">Deslizar</span>
                <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
