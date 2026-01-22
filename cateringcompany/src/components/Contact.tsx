"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [errors, setErrors] = React.useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const validateField = (name: string, value: string) => {
        let error = '';
        if (!value.trim()) {
            error = 'Este campo es requerido';
        } else if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = 'Por favor, ingresá un formato de email válido';
            }
        }
        setErrors(prev => ({ ...prev, [name]: error }));
        return error === '';
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isNombreValid = validateField('nombre', formData.nombre);
        const isEmailValid = validateField('email', formData.email);
        const isMensajeValid = validateField('mensaje', formData.mensaje);

        if (isNombreValid && isEmailValid && isMensajeValid) {
            setIsSubmitting(true);
            setIsError(false);

            const data = new FormData();
            data.append('nombre', formData.nombre);
            data.append('email', formData.email);
            data.append('mensaje', formData.mensaje);

            // Import dynamically or use the imported action
            const { sendEmail } = await import('@/actions/sendEmail');

            const result = await sendEmail(data);

            setIsSubmitting(false);

            if (result.success) {
                setIsSuccess(true);
                setFormData({ nombre: '', email: '', mensaje: '' });
            } else {
                setIsError(true);
            }
        }
    };

    return (
        <section id="contacto" className="pt-12 pb-12 md:pt-24 md:pb-24 bg-brand-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#f2efe4] rounded-[3rem] p-8 md:p-16">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#e76f51' }}>Contacto</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-8 italic" style={{ color: '#14362d' }}>Solicitá una propuesta a medida</h3>
                            <p className="text-lg mb-12" style={{ color: '#5c6b66' }}>
                                Estamos listos para adaptarnos a las necesidades de tu operación. Brindamos servicios profesionales y previsibles.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm italic font-serif" style={{ color: '#e76f51' }}>
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1" style={{ color: '#14362d' }}>Ubicación</h4>
                                        <p style={{ color: '#5c6b66' }}>Buenos Aires, Parque Avellaneda</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm italic font-serif" style={{ color: '#e76f51' }}>
                                        <Phone />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1" style={{ color: '#14362d' }}>Teléfono</h4>
                                        <p style={{ color: '#5c6b66' }}>11 3670-5157</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm italic font-serif" style={{ color: '#e76f51' }}>
                                        <Mail />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1" style={{ color: '#14362d' }}>Email</h4>
                                        <p style={{ color: '#5c6b66' }}>info@ilcateringarg.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm italic font-serif" style={{ color: '#e76f51' }}>
                                        <Clock />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1" style={{ color: '#14362d' }}>Horario</h4>
                                        <p style={{ color: '#5c6b66' }}>9hs a 18hs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-4xl shadow-xl min-h-[400px] flex flex-col justify-center"
                        >
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-10"
                                    >
                                        <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#14362d' }}>¡Mensaje Enviado!</h3>
                                        <p className="text-lg text-gray-600 mb-8 max-w-xs mx-auto">
                                            Gracias por contactarnos. Te responderemos a la brevedad.
                                        </p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="px-8 py-3 rounded-xl font-bold border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white transition-all"
                                        >
                                            Enviar otro mensaje
                                        </button>
                                    </motion.div>
                                ) : isError ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-10"
                                    >
                                        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                                            <AlertCircle className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#14362d' }}>¡Ups! Algo salió mal</h3>
                                        <p className="text-lg text-gray-600 mb-8 max-w-xs mx-auto">
                                            Hubo un problema al enviar tu mensaje. Por favor, intentalo nuevamente.
                                        </p>
                                        <button
                                            onClick={() => setIsError(false)}
                                            className="px-8 py-3 rounded-xl font-bold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                        >
                                            Intentar nuevamente
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                        noValidate
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold ml-1" style={{ color: '#5c6b66' }}>Nombre</label>
                                                <input
                                                    type="text"
                                                    value={formData.nombre}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, nombre: e.target.value });
                                                        if (errors.nombre) validateField('nombre', e.target.value);
                                                    }}
                                                    className={cn(
                                                        "w-full px-5 py-4 rounded-xl bg-gray-50 border-2 transition-all outline-none",
                                                        errors.nombre ? "border-brand-forest/30 bg-brand-forest/5" : "border-transparent focus:bg-white focus:border-[#e76f51]"
                                                    )}
                                                    style={{ color: '#14362d' }}
                                                    placeholder="Tu nombre"
                                                />
                                                {errors.nombre && (
                                                    <p className="text-[10px] text-brand-forest font-bold uppercase tracking-widest ml-1 animate-in fade-in slide-in-from-top-1">
                                                        {errors.nombre}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold ml-1" style={{ color: '#5c6b66' }}>Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, email: e.target.value });
                                                    if (errors.email) validateField('email', e.target.value);
                                                }}
                                                className={cn(
                                                    "w-full px-5 py-4 rounded-xl bg-gray-50 border-2 transition-all outline-none",
                                                    errors.email ? "border-brand-forest/30 bg-brand-forest/5" : "border-transparent focus:bg-white focus:border-[#e76f51]"
                                                )}
                                                style={{ color: '#14362d' }}
                                                placeholder="email@empresa.com"
                                            />
                                            {errors.email && (
                                                <p className="text-[10px] text-brand-forest font-bold uppercase tracking-widest ml-1 animate-in fade-in slide-in-from-top-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold ml-1" style={{ color: '#5c6b66' }}>Mensaje</label>
                                            <textarea
                                                value={formData.mensaje}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, mensaje: e.target.value });
                                                    if (errors.mensaje) validateField('mensaje', e.target.value);
                                                }}
                                                className={cn(
                                                    "w-full px-5 py-4 rounded-xl bg-gray-50 border-2 transition-all outline-none h-32",
                                                    errors.mensaje ? "border-brand-forest/30 bg-brand-forest/5" : "border-transparent focus:bg-white focus:border-[#e76f51]"
                                                )}
                                                style={{ color: '#14362d' }}
                                                placeholder="Describinos tu necesidad..."
                                            ></textarea>
                                            {errors.mensaje && (
                                                <p className="text-[10px] text-brand-forest font-bold uppercase tracking-widest ml-1 animate-in fade-in slide-in-from-top-1">
                                                    {errors.mensaje}
                                                </p>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-brand-forest text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-terracotta transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                                            {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
