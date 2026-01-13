"use client";

import { motion } from "framer-motion";
import config from "@/content/config.json";

export default function Gallery() {
    const section = config.sections.find(s => s.id === "gallery") as { id: string, title: string, items: { title: string, category: string, image: string }[] } | undefined;

    return (
        <section id="gallery" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 uppercase tracking-tighter" style={{ color: '#111827' }}>{section?.title}</h2>
                    <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: config.theme.primary }} />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {section?.items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ type: "spring", stiffness: 80, damping: 12 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                        >
                            <img
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                src={item.image}
                                alt={item.title}
                                className="transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-red-500 text-sm font-bold mb-1">{item.category}</span>
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
