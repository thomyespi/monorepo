"use client";

import { motion } from "framer-motion";
import config from "@/content/config.json";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Overlay and Parallax */}
            <motion.div
                style={{
                    backgroundImage: `url(${config.hero.image})`,
                    y
                }}
                className="absolute inset-0 z-0 opacity-60 bg-cover bg-center will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase"
                >
                    {config.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {config.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                >
                    <button
                        className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-red-900/30"
                        style={{ backgroundColor: config.theme.primary }}
                    >
                        {config.hero.cta}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
