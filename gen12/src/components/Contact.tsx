import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Instagram, Send, X, Linkedin } from "lucide-react";

export function Contact() {
    const { t, language } = useLanguage();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [showPolicies, setShowPolicies] = useState(false);

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "5491161591957";
        const greeting = language === 'es' ? 'Hola!' : 'Hi!';
        const nameIntro = language === 'es' ? 'Soy' : "I'm";
        const text = `${greeting} ${nameIntro} ${name}. ${message}`;
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

                            <h3 className="text-4xl font-black tracking-tighter mb-8">{t('contact.policies.title')}</h3>

                            <div className="space-y-6 text-primary/60 font-medium overflow-y-auto max-h-[60vh] pr-4">
                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{t('contact.policies.sections.data.title')}</h4>
                                    <p>{t('contact.policies.sections.data.text')}</p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{t('contact.policies.sections.usage.title')}</h4>
                                    <p>{t('contact.policies.sections.usage.text')}</p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{t('contact.policies.sections.comm.title')}</h4>
                                    <p>{t('contact.policies.sections.comm.text')}</p>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{t('contact.policies.sections.safe.title')}</h4>
                                    <p>{t('contact.policies.sections.safe.text')}</p>
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
                            {t('contact.title')} <br />
                            <span className="text-accent italic">{t('contact.titleAccent')}</span>
                        </motion.h2>

                        <p className="text-lg md:text-xl text-white/50 font-bold mb-16 max-w-md">
                            {t('contact.subtitle')}
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
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{t('contact.labels.email')}</p>
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
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{t('contact.labels.instagram')}</p>
                                    <p className="text-xl font-black group-hover:text-accent transition-colors">@gen12.software</p>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/gen12-software"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{t('contact.labels.linkedin')}</p>
                                    <p className="text-xl font-black group-hover:text-accent transition-colors">Gen12 Software</p>
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
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl text-primary font-black placeholder:text-primary/20 outline-none focus:ring-4 focus:ring-accent/10 transition-all"
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">{t('contact.form.project')}</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl text-primary font-black placeholder:text-primary/20 outline-none focus:ring-4 focus:ring-accent/10 transition-all resize-none"
                                    placeholder={t('contact.form.projectPlaceholder')}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-6 bg-accent text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-accent/20"
                            >
                                {t('contact.form.send')}
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

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
        </section>
    );
}
