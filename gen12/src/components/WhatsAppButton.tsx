"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "5491161591957";
    const message = encodeURIComponent("Hola GEN12! Me gustaría solicitar una consultoría.");

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-100 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] md:w-20 md:h-20"
        >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-white/20" />

            {/* Pulsing effect */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 -z-10" />
        </motion.a>
    );
}
