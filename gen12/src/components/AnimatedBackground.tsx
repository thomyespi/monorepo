import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {
    return (
        <div className={cn("fixed inset-0 -z-50 overflow-hidden bg-white", className)}>
            {/* White Base Layer */}
            <div className="absolute inset-0 bg-white" />

            {/* 
                CRITICAL IOS FIX: 
                Replaced 'filter: blur()' with native CSS Radial Gradients.
                This prevents WebKit from crashing/flashing white on mobile.
                The visual effect is similar (soft diffuse light) but 0% GPU cost for filtering.
            */}

            {/* Soft Midnight Blue Gradient - Top Left */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 15, // Slower for calmness and performance
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    // Radial gradient simulating a blurred circle
                    background: 'radial-gradient(circle at center, rgba(26, 54, 93, 0.08) 0%, transparent 70%)',
                    willChange: "transform, opacity"
                }}
                className="absolute -top-[20%] -left-[20%] w-[80vw] h-[80vw] rounded-full translate-z-0"
            />

            {/* Soft Bronze/Accent Gradient - Center Right */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                style={{
                    background: 'radial-gradient(circle at center, rgba(166, 124, 82, 0.06) 0%, transparent 70%)',
                    willChange: "transform, opacity"
                }}
                className="absolute top-[20%] -right-[20%] w-[90vw] h-[90vw] rounded-full translate-z-0"
            />

            {/* Secondary Blue Gradient - Bottom Left */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                style={{
                    background: 'radial-gradient(circle at center, rgba(26, 54, 93, 0.05) 0%, transparent 70%)',
                    willChange: "transform, opacity"
                }}
                className="absolute -bottom-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full translate-z-0"
            />

            {/* Fine Grid Pattern - Kept as it is lightweight */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--primary) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Vignette/Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />
        </div>
    );
}
