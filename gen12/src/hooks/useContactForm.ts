import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function useContactForm() {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const phoneNumber = "5491161591957";
            const greeting = t('whatsapp.form.greeting');
            const nameIntro = t('whatsapp.form.intro');
            const text = `${greeting} ${nameIntro} ${name}. ${message}`;
            const encodedText = encodeURIComponent(text);
            window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
        } catch (err) {
            setError("Error sending message. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        name,
        setName,
        message,
        setMessage,
        handleWhatsAppSubmit,
        isLoading,
        error
    };
}
