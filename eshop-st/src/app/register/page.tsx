"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate register
        router.push("/login");
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
                        <div className="w-20 h-20 bg-primary rounded-4xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/30 -rotate-6 group">
                            <ShieldCheck className="text-white group-hover:scale-110 transition-transform" size={40} />
                        </div>
                        <h2 className="text-5xl font-black text-primary tracking-tighter uppercase mb-3">Registro</h2>
                        <p className="text-foreground/40 font-bold text-sm tracking-widest uppercase">Alta de Usuario Corporativo</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Nombre Completo</label>
                            <input
                                type="text"
                                required
                                placeholder="Juan Pérez"
                                className="w-full px-8 py-4 bg-gray-50 border-none rounded-3xl focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-black placeholder:text-foreground/20 shadow-inner"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Email de Empresa</label>
                            <input
                                type="email"
                                required
                                placeholder="j.perez@st.com.ar"
                                className="w-full px-8 py-4 bg-gray-50 border-none rounded-3xl focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-black placeholder:text-foreground/20 shadow-inner"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Nueva Contraseña</label>
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full px-8 py-4 bg-gray-50 border-none rounded-3xl focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all text-primary font-black placeholder:text-foreground/20 shadow-inner"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-6 bg-primary text-white rounded-4xl font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all mt-4"
                        >
                            Crear Cuenta
                        </button>
                    </form>

                    <div className="mt-12 pt-10 border-t border-gray-100 text-center">
                        <p className="text-foreground/40 text-sm font-bold tracking-tight">
                            ¿Ya tenés cuenta?{" "}
                            <span
                                onClick={() => router.push("/login")}
                                className="text-primary hover:underline cursor-pointer font-black border-b-2 border-primary/10"
                            >
                                Iniciar Sesión
                            </span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
