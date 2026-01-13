"use client";

import { MessageCircle } from "lucide-react";
import config from "@/content/config.json";

export default function FloatingContact() {
    const whatsappUrl = `https://wa.me/${config.company.phone.replace(/[^0-9]/g, "")}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}
