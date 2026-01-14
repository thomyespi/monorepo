"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none">
            {/* Soft Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] left-[20%] w-[80%] h-[50%] bg-primary/5 rounded-full blur-[150px]"
            />

            {/* Subtle Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />
        </div>
    );
}
