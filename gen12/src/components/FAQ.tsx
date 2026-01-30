"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FAQAccordionItem } from "./FAQAccordionItem";
import { FAQItem } from "@/types";

import { useIsMobile } from "@/hooks/useIsMobile";

export function FAQ() {
    const { t, tData } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const items = tData<FAQItem[]>('faq.items');

    if (!items || items.length === 0) return null;

    return (
        <section id="faq" className="py-12 md:py-20 px-6 bg-white relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span
                        initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block"
                    >
                        {t('faq.badge')}
                    </motion.span>
                    <motion.h2
                        initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9]"
                    >
                        {t('faq.title')} <br />
                        <span className="text-accent italic">{t('faq.titleAccent')}</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <FAQAccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
