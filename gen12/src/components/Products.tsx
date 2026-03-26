"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ShoppingBag, Layout, Building2, LayoutPanelLeft, Cpu } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProductItem } from "@/types";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Products() {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const productTypes: ProductItem[] = [
        {
            id: "ecommerce-st",
            title: t('products.items.eshop.title'),
            desc: t('products.items.eshop.desc'),
            cta: t('products.items.eshop.cta'),
            icon: ShoppingBag,
            tech: "Next.js • Framer • Tailwind",
            image: "/concepts/st_logistics_v2.png"
        },
        {
            id: "ecommerce",
            title: t('products.items.ecommerce.title'),
            desc: t('products.items.ecommerce.desc'),
            cta: t('products.items.ecommerce.cta'),
            icon: ShoppingBag,
            tech: "Vite • Stripe • Node",
            image: "/concepts/ecommerce.png"
        },
        {
            id: "landing",
            title: t('products.items.landing.title'),
            desc: t('products.items.landing.desc'),
            cta: t('products.items.landing.cta'),
            icon: Layout,
            tech: "Next.js • Framer • Tailwind",
            image: "/concepts/landing.png"
        },
        {
            id: "corporate",
            title: t('products.items.corporate.title'),
            desc: t('products.items.corporate.desc'),
            cta: t('products.items.corporate.cta'),
            icon: Building2,
            tech: "React • CMS • SEO",
            image: "/concepts/corporate_new.png"
        },
        {
            id: "saas",
            title: t('products.items.saas.title'),
            desc: t('products.items.saas.desc'),
            cta: t('products.items.saas.cta'),
            icon: LayoutPanelLeft,
            tech: "React Query • Auth.js • SQL",
            image: "/concepts/dashboard.png"
        }
    ];

    if (!productTypes || productTypes.length === 0) {
        return (
            <section className="py-20 md:py-32 px-6 bg-white text-center">
                <p className="text-primary/40 font-black uppercase tracking-widest italic">Actualmente no hay proyectos destacados.</p>
            </section>
        );
    }

    return (
        <section className="py-20 md:py-40 px-6 bg-primary relative overflow-hidden">
            {/* Dark mode background accents */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full -mr-[25%] -mt-[10%]" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full -ml-[20%] -mb-[10%]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-4xl mb-24 text-center md:text-left">
                    <motion.span
                        initial={skipAnimations ? false : { opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block"
                    >
                        {t('products.badge')}
                    </motion.span>
                    <motion.h2
                        initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] md:mb-4"
                    >
                        {t('products.title')} <br />
                        <span className="text-accent italic font-serif font-normal">{t('products.titleAccent')}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
                    {/* Clean Column Layout */}
                    {productTypes.map((item, index) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}

                    {/* Final AI Card (Full width, updated style for dark) */}
                    <motion.div
                        initial={skipAnimations ? false : { opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-6 p-10 md:p-24 rounded-[3.5rem] bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center gap-16 transition-all duration-700 relative overflow-hidden group hover:bg-white/8 hover:border-accent/30 translate-z-0"
                    >
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent/10 to-transparent flex items-center justify-center opacity-50">
                            <Cpu className="w-80 h-80 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                        </div>

                        <div className="relative z-10 w-24 h-24 rounded-4xl bg-accent flex items-center justify-center shrink-0 shadow-2xl shadow-accent/20 group-hover:rotate-12 transition-transform duration-500">
                            <Cpu className="w-12 h-12 text-primary" />
                        </div>
                        <div className="relative z-10 flex-1 text-center lg:text-left">
                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 underline decoration-accent/30 underline-offset-8">{t('products.ai.title')}</h3>
                            <p className="text-white/60 text-base md:text-xl font-medium max-w-3xl leading-relaxed">
                                {t('products.ai.desc')}
                            </p>
                        </div>
                        <a
                            href={`https://wa.me/5491161591957?text=${encodeURIComponent(t('whatsapp.ai'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 px-12 py-8 bg-accent text-primary rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all text-sm shrink-0 shadow-xl"
                        >
                            {t('products.ai.cta')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
