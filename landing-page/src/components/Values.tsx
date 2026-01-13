"use client";

import { motion } from "framer-motion";
import config from "@/content/config.json";
import { CheckCircle } from "lucide-react";

export default function Values() {
    const section = config.sections.find(s => s.id === "values") as { id: string, title: string, items: { title: string, description: string }[] } | undefined;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        } as any
    };

    return (
        <section id="values" className="py-24 bg-white transition-colors overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter" style={{ color: '#111827' }}>{section?.title}</h2>
                    <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: config.theme.primary }} />
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {section?.items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-gray-100 group cursor-default"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: `${config.theme.primary}10`, color: config.theme.primary }}
                            >
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>{item.title}</h3>
                            <p className="leading-relaxed" style={{ color: '#4b5563' }}>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
