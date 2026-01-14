"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Layout, Building2, LayoutPanelLeft, Cpu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const productTypes = [
    {
        id: "ecommerce-st",
        title: "ST E-Shop Premium",
        desc: "Plataforma de gestión de materiales eléctricos con buscador inteligente y ofertas relámpago.",
        icon: ShoppingBag,
        tech: "Next.js • Framer • Tailwind",
        size: "md:col-span-2",
        image: "/concepts/eshop_real.png"
    },
    {
        id: "ecommerce",
        title: "E-Commerce High-End",
        desc: "Tiendas escalables con checkouts ultra-rápidos y gestión de inventario inteligente.",
        icon: ShoppingBag,
        tech: "Vite • Stripe • Node",
        size: "md:col-span-1",
        image: "/concepts/ecommerce.png"
    },
    {
        id: "landing",
        title: "Landing Pages Pro",
        desc: "Sitios de alta conversión diseñados específicamente para anuncios y campañas de marketing.",
        icon: Layout,
        tech: "Next.js • Framer • Tailwind",
        size: "md:col-span-1",
        image: "/concepts/landing.png"
    },
    {
        id: "corporate",
        title: "Sitios Corporativos",
        desc: "Presencia digital premium que transmite autoridad y los valores de marcas establecidas.",
        icon: Building2,
        tech: "React • CMS • SEO",
        size: "md:col-span-1",
        image: "/concepts/corporate_new.png"
    },
    {
        id: "saas",
        title: "SaaS Dashboards",
        desc: "Interfaces complejas de gestión de datos, métricas y administración de usuarios.",
        icon: LayoutPanelLeft,
        tech: "React Query • Auth.js • SQL",
        size: "md:col-span-2",
        image: "/concepts/dashboard.png"
    }
];

export function Products() {
    return (
        <section id="proyectos" className="py-32 px-6 bg-gray-50/30">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                    >
                        Nuestra Versatilidad
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9] md:leading-tight"
                    >
                        TRANSFORMAMOS IDEAS EN <br />
                        <span className="text-accent italic">PRODUCTOS REALES.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {productTypes.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-[4rem] bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col min-h-[500px]",
                                item.size
                            )}
                        >
                            {/* Visual Preview Header */}
                            <div className="h-64 overflow-hidden relative border-b border-gray-50">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40" />
                                <div className="absolute top-6 left-6">
                                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-accent">Concepto</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-10 flex-1 flex flex-col">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl font-black text-primary tracking-tighter leading-tight">{item.title}</h3>
                                </div>

                                <p className="text-primary/50 font-medium leading-relaxed mb-auto">
                                    {item.desc}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-50 pt-8 mt-10">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/20">
                                        {item.tech}
                                    </span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent/60 px-3 py-1 bg-accent/5 rounded-full">
                                        Premium Concept
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Final AI Card (Full width on mobile/md) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 p-10 md:p-14 rounded-[2.5rem] bg-primary text-white flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl hover:shadow-primary/20 transition-all"
                    >
                        <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center shrink-0">
                            <Cpu className="w-10 h-10" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-black tracking-tighter mb-4">Agentes de IA Personalizados</h3>
                            <p className="text-white/60 font-medium max-w-2xl leading-relaxed">
                                Desarrollamos ecosistemas de inteligencia artificial que automatizan tareas complejas,
                                desde chatbots expertos hasta motores de recomendación y análisis de datos.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/5491161591957?text=Hola%20GEN12!%20Me%20interesa%20un%20proyecto%20con%20IA."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-sm shrink-0"
                        >
                            Consultar
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
