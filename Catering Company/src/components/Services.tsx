"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Pickaxe, Anchor, Apple, Truck, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Building2 className="w-8 h-8" />,
        title: "Catering Corporativo",
        description: "Servicio gastronómico para empresas y oficinas. Comedores empresariales, viandas diarias, coffee breaks y eventos internos. Adaptación a cantidad de colaboradores.",
        tags: ["Oficinas", "Plantas Industriales", "Centros Administrativos", "Comedores Empresariales", "Viandas Diarias"],
        color: "bg-emerald-50/80 border-emerald-900/10"
    },
    {
        icon: <Pickaxe className="w-8 h-8" />,
        title: "Catering Minero",
        description: "Operaciones gastronómicas en entornos de alta exigencia. Campamentos mineros, servicio 24/7, turnos rotativos y abastecimiento integral.",
        tags: ["Campamentos Mineros", "Servicio 24/7", "Operaciones Remotas", "Trabajo Continuo"],
        color: "bg-orange-50/80 border-orange-900/10"
    },
    {
        icon: <Anchor className="w-8 h-8" />,
        title: "Catering Pesquero",
        description: "Alimentación para plantas y operaciones pesqueras. Servicio en plantas, turnos intensivos, menús energéticos y refuerzos en picos productivos.",
        tags: ["Plantas Pesqueras", "Turnos Intensivos", "Menús Energéticos"],
        color: "bg-stone-50/80 border-stone-900/10"
    }
];

const subServices = [
    {
        icon: <Apple className="w-6 h-6" style={{ color: '#e76f51' }} />,
        title: "Menús & Nutrición",
        text: "Propuestas equilibradas: menú tradicional, saludable, vegetariano y especialidades. Planificación semanal/mensual."
    },
    {
        icon: <Truck className="w-6 h-6" style={{ color: '#e76f51' }} />,
        title: "Logística & Operación",
        text: "Gestión integral, abastecimiento continuo, equipamiento gastronómico y protocolos de seguridad."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" style={{ color: '#e76f51' }} />,
        title: "Calidad & Seguridad",
        text: "Manipulación segura, trazabilidad, y cumplimiento normativo bajo estrictos estándares."
    }
];

const stats = [
    { value: "+25", label: "Años de experiencia" },
    { value: "+100", label: "Clientes satisfechos" },
    { value: "+1M", label: "Servicios mensuales" }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-brand-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#e76f51' }}>Nuestra Empresa</h2>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 italic" style={{ color: '#14362d' }}>Excelencia gastronómica para los sectores más exigentes.</h3>
                    <p className="text-lg" style={{ color: '#5c6b66' }}>
                        Somos especialistas en brindar soluciones gastronómicas para sectores de alta exigencia operativa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-3xl ${service.color} border border-transparent hover:border-accent/10 transition-all`}
                        >
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6" style={{ color: '#e76f51' }}>
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-brand-forest">{service.title}</h4>
                            <p className="text-brand-gray mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-white rounded-full text-brand-gray border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="rounded-[3rem] p-12 md:p-20 overflow-hidden relative shadow-2xl shadow-brand-forest/30 border border-white/5" style={{ backgroundColor: '#14362d', color: '#fffcf2' }}>
                    {/* Decorative Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {subServices.map((sub, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-2">
                                    {sub.icon}
                                </div>
                                <h5 className="text-xl font-bold text-white">{sub.title}</h5>
                                <p className="leading-relaxed font-light text-white/70">
                                    {sub.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
