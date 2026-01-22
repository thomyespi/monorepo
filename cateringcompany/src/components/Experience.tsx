"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const Experience = () => {
    const stats = [
        { label: "Años de Experiencia", value: 25, suffix: "+" },
        { label: "Fundada en", value: 1998, suffix: "" },
        { label: "Servicio", value: 24, suffix: "/7" },
        { label: "Sectores", value: 3, suffix: "+" },
    ];

    return (
        <section id="nosotros" className="relative mt-12 md:mt-32 mb-12 md:mb-32 py-16 md:py-32 overflow-hidden mx-4 md:mx-8 rounded-[3rem] md:rounded-[5rem] shadow-2xl" style={{ backgroundColor: '#14362d', color: '#fffcf2' }}>


            <div className="max-w-7xl mx-auto px-6 relative z-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#e76f51' }}>Nuestro Servicio</h2>
                        <h3 className="text-4xl md:text-6xl font-bold mb-8 italic text-white">Más de 25 años acompañando a la industria argentina.</h3>
                        <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-8">
                            <p>
                                Somos una empresa de catering integral acompañando a empresas y operaciones productivas en Argentina desde 1998.
                                Nos especializamos en brindar soluciones gastronómicas para plantas industriales, empresas, minería y actividades pesqueras,
                                adaptándonos a entornos de alta exigencia operativa, turnos rotativos y servicios continuos.
                            </p>
                            <p>
                                Trabajamos con foco en la calidad, la seguridad alimentaria y la eficiencia, entendiendo que la alimentación es un factor clave
                                para el bienestar, el rendimiento y la continuidad operativa de cada organización.
                            </p>
                            <p className="font-semibold text-white/90 border-l-2 pl-6 py-2" style={{ borderColor: '#e76f51' }}>
                                <span className="block text-sm uppercase tracking-widest mb-2" style={{ color: '#e76f51' }}>Nuestro Objetivo</span>
                                Brindar servicios de catering integral para empresas, minería y pesca, ofreciendo soluciones gastronómicas seguras, eficientes y adaptadas a cada operación.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-l-2 pl-6" style={{ borderColor: '#e76f51' }}>
                                    <div className="text-4xl font-bold mb-1 text-white">
                                        <AnimatedNumber value={stat.value} disableFormatting={stat.value === 1998} />
                                        {stat.suffix}
                                    </div>
                                    <div className="text-sm text-white/50 uppercase tracking-wider whitespace-nowrap">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden transition-all"
                    >
                        <img
                            src="/experience-team.png"
                            alt="Catering Team"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
