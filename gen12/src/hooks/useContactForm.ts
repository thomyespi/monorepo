import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function useContactForm() {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAttemptedSubmit(true);
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        // Custom Validation
        if (!name || !email || !phone || !service || !message) {
            setError(t('contact.form.errorMandatory') || "Por favor, completa todos los campos.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, service, message })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || t('contact.form.error'));
            }

            setSuccess(true);
            setAttemptedSubmit(false);
            // Reset form
            setName("");
            setEmail("");
            setPhone("");
            setService("");
            setMessage("");
        } catch (err: any) {
            setError(t('contact.form.error'));
            // Usamos warn para evitar que el overlay de desarrollo de Next.js aparezca en pantalla
            console.warn("Contact form error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        name, setName,
        email, setEmail,
        phone, setPhone,
        service, setService,
        message, setMessage,
        handleSubmit,
        isLoading,
        error,
        success,
        setSuccess,
        attemptedSubmit
    };
}
