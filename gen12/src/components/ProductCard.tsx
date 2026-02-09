"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProductItem } from "@/types";
import Image from "next/image";

interface ProductCardProps {
    item: ProductItem;
    index: number;
}

import { useIsMobile } from "@/hooks/useIsMobile";

export function ProductCard({ item, index }: ProductCardProps) {
    const { t } = useLanguage();
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    return (
        <motion.div
            initial={skipAnimations ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={skipAnimations ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className={`group col-span-1 md:col-span-2 relative h-[450px] md:h-[550px] rounded-4xl overflow-hidden bg-white shadow-lg md:hover:shadow-2xl md:hover:shadow-primary/20 transition-all duration-500 ${index === 0 || index === 3 ? 'md:col-span-4' : 'md:col-span-2'
                }`}
        >
            {/* Image Background (Full Cover) */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent opacity-100 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-black/10" /> {/* Subtle overall dim */}
            </div>

            {/* Content Content (Always Visible) */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full z-10 text-white">
                <div className="translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                            <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent/20">
                            {item.tech}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-none text-white drop-shadow-lg">
                        {item.title}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-8 drop-shadow-md">
                        {item.desc}
                    </p>

                    <div
                        onClick={() => {
                            const el = document.getElementById('contacto');
                            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-white transition-colors cursor-pointer"
                    >
                        {item.cta}
                        <ArrowUpRight className="w-4 h-4 transition-transform md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
