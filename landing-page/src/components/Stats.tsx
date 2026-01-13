"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import config from "@/content/config.json";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = numericValue;
            const totalFrames = duration * 60;
            const increment = end / totalFrames;

            let timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, numericValue, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    const section = config.sections.find(s => s.id === "stats") as { id: string, items: { label: string, value: string }[] } | undefined;

    return (
        <section className="py-20 bg-gray-50 transition-colors overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    {section?.items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="text-4xl md:text-6xl font-black mb-2"
                                style={{ color: config.theme.primary }}
                            >
                                {/* @ts-ignore */}
                                <Counter value={item.value} />
                            </div>
                            <div className="font-medium uppercase tracking-widest text-sm" style={{ color: '#374151' }}>
                                {/* @ts-ignore */}
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
