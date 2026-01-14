"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Instagram, Linkedin, Send } from "lucide-react";

export function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "5491161591957";
        const text = `Hola! Soy ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    };

    return (
        <section className="py-32 px-6 bg-primary text-white relative rounded-t-[4rem] overflow-hidden">
            {/* Geometric accents */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10"
                        >
                            HABLEMOS DE <br />
                            <span className="text-accent italic">TU IDEA.</span>
                        </motion.h2>

                        <p className="text-xl text-white/50 font-bold mb-16 max-w-md">
                            Estamos listos para escalar tu negocio al siguiente nivel con tecnología de clase mundial.
                        </p>

                        <div className="flex flex-col gap-8">
                            <a
                                href="mailto:gen12software@gmail.com"
                                className="flex items-center gap-6 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Email</p>
                                    <p className="text-xl font-black text-break group-hover:text-accent transition-colors">gen12software@gmail.com</p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/gen12.software"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Instagram</p>
                                    <p className="text-xl font-black group-hover:text-accent transition-colors">@gen12.software</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[3rem] shadow-2xl"
                    >
                        <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Nombre</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl text-primary font-black placeholder:text-primary/20 outline-none focus:ring-4 focus:ring-accent/10 transition-all"
                                    placeholder="Ingresá tu nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Proyecto</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl text-primary font-black placeholder:text-primary/20 outline-none focus:ring-4 focus:ring-accent/10 transition-all resize-none"
                                    placeholder="Contanos un poco sobre lo que tenés en mente..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-6 bg-accent text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-accent/20"
                            >
                                Enviar Mensaje
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                    <p>© 2026 GEN12 SOFTWARE. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-accent transition-colors">Politicas</a>
                        <a href="#" className="hover:text-accent transition-colors">Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
