"use client";

import { motion, AnimatePresence as FramerAnimatePresence, HTMLMotionProps } from "framer-motion";
import React from "react";

export const UIBox = motion.div;
export const UISpan = motion.span;
export const UIHeader = motion.h1;
export const UIHeader2 = motion.h2;
export const UIHeader3 = motion.h3;
export const UIParagraph = motion.p;
export const UIAnimatePresence = FramerAnimatePresence;

// Example of a custom wrapper for specific animation patterns
export function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
}
