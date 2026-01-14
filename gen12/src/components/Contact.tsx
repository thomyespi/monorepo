"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Instagram, Send, X } from "lucide-react";

export function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [showPolicies, setShowPolicies] = useState(false);

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "5491161591957";
        const text = `Hola! Soy ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    };

    return (
        <section className="py-20 md:py-32 px-6 bg-primary text-white relative rounded-t-[4rem] overflow-hidden">
            <AnimatePresence>
                {showPolicies && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center px-6 bg-primary/95 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white text-primary p-10 md:p-16 rounded-[3rem] max-w-2xl w-full relative shadow-2xl"
                        >
                            <button
                                onClick={() => setShowPolicies(false)}
                                className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h3 className="text-4xl font-black tracking-tighter mb-8">POLÍTICAS Y PRIVACIDAD</h3>

                            <div className="space-y-6 text-primary/60 font-medium overflow-y-auto max-h-[60vh] pr-4">
                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">Protección de Datos</h4>
                                    <p>En GEN12 Software, valoramos tu privacidad. Los datos capturados en este sitio se utilizan exclusivamente para establecer contacto directo con vos y coordinar tu proyecto.</p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">Uso de Información</h4>
                                    <p>Tu información no es compartida, vendida ni cedida a terceros bajo ninguna circunstancia. No utilizamos tu contacto para spam publicitario.</p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">Comunicación Directa</h4>
                                    <p>Toda la comunicación se realiza de forma directa y cifrada a través de los servidores oficiales de WhatsApp. No almacenamos tus mensajes en bases de datos intermedias, garantizando que tu idea permanezca entre vos y GEN12.</p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">Conexión Segura</h4>
                                    <p>Este sitio opera bajo protocolos HTTPS con certificados SSL de alta seguridad, asegurando que cualquier interacción entre tu navegador y nuestra plataforma esté totalmente cifrada.</p>
                                </section>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Geometric accents */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10"
                        >
                            HABLEMOS DE <br />
                            <span className="text-accent italic">TU IDEA.</span>
                        </motion.h2>

                        <p className="text-lg md:text-xl text-white/50 font-bold mb-16 max-w-md">
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
                        <button
                            onClick={() => setShowPolicies(true)}
                            className="hover:text-accent transition-colors cursor-pointer"
                        >
                            Politicas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
