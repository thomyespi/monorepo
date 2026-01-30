"use client";

import { motion } from "framer-motion";
import { BarChart3, ShoppingCart, Globe, Shield, Terminal, Activity, MousePointerClick, LayoutDashboard } from "lucide-react";

export function LogisticsVisual() {
    return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_24px]" />

            {/* Abstract Package Flow */}
            <div className="relative z-10 flex gap-4">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className="w-16 h-20 rounded-lg border border-slate-700 bg-slate-800/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-colors"
                    >
                        <div className="w-8 h-1 bg-slate-600 rounded-full" />
                    </motion.div>
                ))}
            </div>

            {/* Connecting Line */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent z-0"
            />
        </div>
    );
}

export function CommerceVisual() {
    return (
        <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />

            {/* Minimal Card UI */}
            <motion.div
                whileHover={{ y: -5 }}
                className="w-48 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 relative z-10"
            >
                <div className="w-full h-24 bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-primary/20" />
                </div>
                <div className="h-2 w-2/3 bg-gray-100 rounded-full mb-2" />
                <div className="h-2 w-1/2 bg-gray-100 rounded-full mb-4" />
                <div className="flex justify-between items-center">
                    <div className="h-3 w-8 bg-black rounded-md" />
                    <div className="h-6 w-16 bg-primary text-[8px] text-white flex items-center justify-center font-bold tracking-wider rounded-lg">Buy</div>
                </div>
            </motion.div>
        </div>
    );
}

export function ConversionVisual() {
    return (
        <div className="w-full h-full bg-slate-50 flex items-center justify-center relative overflow-hidden">
            {/* Funnel Circles */}
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-primary"
                    >
                        <MousePointerClick className="w-6 h-6" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 40 }}
                    transition={{ delay: 0.6 }}
                    className="w-0.5 bg-primary/20"
                />

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="px-4 py-2 bg-primary text-white text-[10px] font-bold rounded-full tracking-widest uppercase shadow-xl shadow-primary/20"
                >
                    Converted
                </motion.div>
            </div>
        </div>
    );
}

export function IdentityVisual() {
    return (
        <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />

            <div className="relative z-10 text-center">
                <motion.h1
                    initial={{ letterSpacing: "0.5em", opacity: 0 }}
                    animate={{ letterSpacing: "0.2em", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-white text-2xl font-black uppercase"
                >
                    Brand
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-0.5 bg-linear-to-r from-transparent via-accent to-transparent mt-2"
                />
            </div>
        </div>
    );
}

export function AnalyticsVisual() {
    return (
        <div className="w-full h-full bg-slate-900 flex items-end justify-center gap-2 p-12 pb-16 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/10 to-transparent" />

            {[40, 70, 50, 90, 65].map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
                    className="w-4 bg-slate-700 rounded-t-sm relative group overflow-hidden"
                >
                    <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-primary to-transparent opacity-80" />
                </motion.div>
            ))}

            {/* Floating Badge */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-8 right-8 bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded border border-slate-700 font-mono"
            >
                +24% Growth
            </motion.div>
        </div>
    );
}
