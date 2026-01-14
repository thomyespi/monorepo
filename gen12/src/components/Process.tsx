"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Descubrimiento",
        text: "Analizamos tu negocio y definimos el roadmap técnico para maximizar el ROI."
    },
    {
        num: "02",
        title: "Desarrollo Ágil",
        text: "Iteraciones cortas con demos constantes para que siempre tengas el control."
    },
    {
        num: "03",
        title: "Despliegue & Escala",
        text: "Lanzamiento con soporte crítico y optimización continua de rendimiento."
    }
];

export function Process() {
    return (
        <section className="py-20 md:py-32 px-6 relative overflow-hidden">
            {/* Background Text Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] text-[30rem] font-black text-primary select-none pointer-events-none">
                BUILD
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-primary tracking-tighter"
                    >
                        NUESTRO <span className="italic text-accent">MÉTODO</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-primary/10 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl mb-10 group-hover:bg-accent group-hover:scale-110 transition-all shadow-xl shadow-primary/20 group-hover:shadow-accent/30 border-4 border-white">
                                {step.num}
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-6 transition-colors group-hover:text-accent">
                                {step.title}
                            </h3>
                            <p className="text-lg text-primary/40 font-bold leading-relaxed max-w-xs transition-colors group-hover:text-primary/60">
                                {step.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
