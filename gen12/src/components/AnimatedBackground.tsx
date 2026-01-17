import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {

    return (
        <div className={cn("absolute inset-0 -z-10 overflow-hidden bg-white", className)}>
            {/* White Base Layer */}
            <div className="absolute inset-0 bg-white" />

            {/* 
                Optimized Blobs:
                - Reduced blur radius for better WebKit performance (was 80-90px, now 60-80px)
                - Added 'transform-gpu' to force hardware acceleration
                - Added 'backface-hidden' to prevent flickering
            */}

            {/* Soft Midnight Blue Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 40, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
                className="absolute -top-[15%] -left-[10%] w-[80%] h-[80%] bg-primary/3 rounded-full blur-[60px] transform-gpu backface-hidden"
            />

            {/* Soft Bronze Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
                className="absolute top-[30%] -right-[15%] w-[70%] h-[70%] bg-accent/4 rounded-full blur-[60px] transform-gpu backface-hidden"
            />

            {/* Subtle Accent Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
                className="absolute -bottom-[20%] left-[10%] w-[90%] h-[60%] bg-primary/2 rounded-full blur-[70px] transform-gpu backface-hidden"
            />

            {/* Fine Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--primary) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />
        </div>
    );
}
