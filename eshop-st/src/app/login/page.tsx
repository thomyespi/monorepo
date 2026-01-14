"use client";

import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        router.push("/shop");
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-transparent relative overflow-hidden">
            <AnimatedBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white/95 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10">
                    <div className="text-center mb-12">
                        <div className="w-20 h-20 bg-primary rounded-4xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/30 rotate-6 group">
                            <ShieldCheck className="text-white group-hover:scale-110 transition-transform" size={40} />
                        </div>
                        <h2 className="text-5xl font-black text-primary tracking-tighter uppercase mb-3">Ingresar</h2>
                        <p className="text-foreground/40 font-bold text-sm tracking-widest uppercase">Portal Corporativo ST</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-8">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Email Corporativo</label>
                            <input
                                type="email"
                                placeholder="usuario@st.com.ar"
                                className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-black placeholder:text-foreground/20 shadow-inner"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Contraseña</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-black placeholder:text-foreground/20 shadow-inner"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-6 bg-primary text-white rounded-4xl font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Acceder al Sistema
                        </button>
                    </form>

                    <div className="mt-12 pt-10 border-t border-gray-100 text-center">
                        <p className="text-foreground/40 text-sm font-bold tracking-tight">
                            ¿Necesitás credenciales?{" "}
                            <span
                                onClick={() => router.push("/register")}
                                className="text-primary hover:underline cursor-pointer font-black border-b-2 border-primary/10"
                            >
                                Registrarse
                            </span>
                        </p>
                    </div>
                </div>

                {/* Floating elements for extra polish */}
                <div className="absolute top-20 right-20 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-8 h-8 bg-primary/10 rounded-full blur-lg animate-bounce" />
            </motion.div>
        </main>
    );
}
