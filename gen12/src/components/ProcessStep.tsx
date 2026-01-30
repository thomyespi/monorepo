"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
    num: string;
    title: string;
    text: string;
    index: number;
}

export function ProcessStep({ num, title, text, index }: ProcessStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left group"
        >
            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl mb-10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-xl shadow-primary/20 group-hover:shadow-accent/30 border-4 border-white">
                {num}
            </div>
            <h3 className="text-3xl font-black text-primary mb-6 transition-colors group-hover:text-accent">
                {title}
            </h3>
            <p className="text-lg text-primary/40 font-bold leading-relaxed max-w-xs transition-colors duration-700 group-hover:text-primary/60">
                {text}
            </p>
        </motion.div>
    );
}
