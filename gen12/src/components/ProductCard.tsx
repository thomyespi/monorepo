"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProductItem } from "@/types";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProductCardProps {
    item: ProductItem;
    index: number;
}

export function ProductCard({ item, index }: ProductCardProps) {
    const { t, tData } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    // Get feature list from translated data instead of splitting hardcoded string
    // 'products.items.[id].features' returns the list of features for that product
    const features = tData<string[]>(`products.items.${item.id.split('-')[0]}.features`) || [];

    return (
        <motion.div
            initial={skipAnimations ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={skipAnimations ? { duration: 0 } : { duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
        >
            {/* Background Index Number */}
            <div className="absolute top-8 right-10 text-8xl font-black text-primary/3 select-none transition-all duration-700 group-hover:text-accent/8 group-hover:scale-110">
                0{index + 1}
            </div>

            {/* Header: Icon & Badge */}
            <div className="p-8 md:p-10 pb-0 flex items-center justify-between relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col grow relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                </h3>

                <p className="text-primary/60 font-medium leading-relaxed mb-8 grow">
                    {item.desc}
                </p>

                {/* Features List (localized) */}
                <ul className="space-y-3 mb-10">
                    {features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary/60 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA Button (inspired by Make It Studio) */}
                <button
                    onClick={() => {
                        const el = document.getElementById('contacto');
                        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }}
                    className="w-full py-5 rounded-2xl bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 hover:bg-accent hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] group/btn"
                >
                    <span>{item.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
            </div>

            {/* Subtle bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-700 group-hover:w-full" />
        </motion.div>
    );
}
