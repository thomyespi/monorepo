"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { Send, CheckCircle2, XCircle, Loader2, Mail, Instagram, Linkedin } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Contact() {
    const { t } = useLanguage();
    const [showPolicies, setShowPolicies] = useState(false);
    const isMobile = useIsMobile();
    const skipAnimations = isMobile === true;

    const {
        name, setName,
        message, setMessage,
        handleWhatsAppSubmit,
        isLoading,
        error
    } = useContactForm();

    return (
        <section id="contacto" className="py-16 md:py-32 px-6 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.span
                            initial={skipAnimations ? false : { opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={skipAnimations ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block"
                        >
                            {t('contact.badge')}
                        </motion.span>
                        <motion.h2
                            initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={skipAnimations ? { duration: 0 } : { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.85] mb-8"
                        >
                            {t('contact.title')} <br />
                            <span className="text-accent italic">{t('contact.titleAccent')}</span>
                        </motion.h2>
                        <p className="text-white/40 text-base md:text-xl font-medium max-w-xl leading-relaxed mb-12">
                            {t('contact.desc')}
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:gen12software@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Email</span>
                                    <span className="text-white font-bold tracking-tight group-hover:text-accent transition-colors">gen12software@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://wa.me/5491161591957" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c-.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">WhatsApp</span>
                                    <span className="text-white font-bold tracking-tight group-hover:text-accent transition-colors">+54 9 11 6159-1957</span>
                                </div>
                            </a>

                            <a href="https://instagram.com/gen12.software" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Instagram</span>
                                    <span className="text-white font-bold tracking-tight group-hover:text-accent transition-colors">@gen12.software</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/company/gen12-software" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">LinkedIn</span>
                                    <span className="text-white font-bold tracking-tight group-hover:text-accent transition-colors">GEN12 Software</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={skipAnimations ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-2xl p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/20 transition-colors duration-700" />

                        <form onSubmit={handleWhatsAppSubmit} className="space-y-8 relative z-10">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="bg-red-500/20 border border-red-500/50 p-4 rounded-2xl flex items-center gap-3 text-red-200 text-sm font-bold"
                                >
                                    <XCircle className="w-5 h-5 shrink-0" />
                                    {error}
                                </motion.div>
                            )}

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    required
                                    disabled={isLoading}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl text-white font-black placeholder:text-white/10 outline-none focus:ring-4 focus:ring-accent/20 focus:bg-white/10 transition-all text-lg disabled:opacity-50"
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                                    {t('contact.form.project')}
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    disabled={isLoading}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl text-white font-black placeholder:text-white/10 outline-none focus:ring-4 focus:ring-accent/20 focus:bg-white/10 transition-all resize-none text-lg disabled:opacity-50"
                                    placeholder={t('contact.form.projectPlaceholder')}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-8 bg-accent text-white rounded-4xl font-black tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-accent/40 group/btn overflow-hidden relative disabled:opacity-70 disabled:scale-100"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {isLoading ? (
                                        <>
                                            {t('contact.form.sending') || 'ENVIANDO...'}
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            {t('contact.form.send')}
                                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Section */}
                <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                    <p>© 2026 GEN12 SOFTWARE. {t('contact.footer.rights')}</p>
                    <div className="flex gap-10">
                        <button
                            onClick={() => setShowPolicies(true)}
                            className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-accent transition-colors cursor-pointer"
                        >
                            {t('contact.footer.policies')}
                        </button>
                        <a
                            href="https://www.linkedin.com/company/gen12-software"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors cursor-pointer"
                        >
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>

            {/* Policies Modal (Minimalist) */}
            <AnimatePresence>
                {showPolicies && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-primary/95 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white p-10 md:p-16 rounded-[4rem] max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
                        >
                            <button
                                onClick={() => setShowPolicies(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                            >
                                <CheckCircle2 className="w-6 h-6" />
                            </button>
                            <h3 className="text-3xl font-black text-primary mb-10 tracking-tighter">Políticas de Privacidad</h3>
                            <div className="space-y-6 text-primary/60 font-medium leading-relaxed">
                                <p>En GEN12 SOFTWARE, la privacidad de su información es nuestra prioridad técnica.</p>
                                <p>Los datos suministrados a través de este formulario son utilizados exclusivamente para la gestión de su consulta y el diseño preliminar de su propuesta tecnológica.</p>
                                <p>No compartimos información con terceros ni utilizamos algoritmos de rastreo invasivos. Su proyecto es tratado bajo estrictos acuerdos de confidencialidad desde el primer contacto.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
