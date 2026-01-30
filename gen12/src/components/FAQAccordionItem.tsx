"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQItem } from "@/types";

interface FAQAccordionItemProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

export function FAQAccordionItem({ item, isOpen, onToggle }: FAQAccordionItemProps) {
    return (
        <motion.div
            className={cn(
                "group rounded-4xl border transition-all duration-700 ease-in-out",
                isOpen
                    ? "bg-primary border-primary shadow-2xl shadow-primary/20"
                    : "bg-white border-gray-100 hover:border-primary/20"
            )}
        >
            <button
                onClick={onToggle}
                className="w-full p-8 md:p-10 flex items-center justify-between gap-6 text-left"
            >
                <span className={cn(
                    "text-xl md:text-2xl font-black tracking-tight transition-colors",
                    isOpen ? "text-white" : "text-primary"
                )}>
                    {item.q}
                </span>
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all",
                    isOpen ? "bg-accent text-white" : "bg-primary/5 text-primary"
                )}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-10 md:px-10 md:pb-12 pt-0">
                            <div className="h-px w-full bg-white/10 mb-8" />
                            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
                                {item.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
