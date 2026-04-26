import { LucideIcon } from "lucide-react";

export interface FAQItem {
    q: string;
    a: string;
}

export interface ProductItem {
    id: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    tech: string;
    image: string;
    cta: string;
    size?: string;
}

export interface ContactFormData {
    name: string;
    message: string;
}

export interface ClientItem {
    name: string;
    url: string;
    logo: string;
    testimonial: string;
    logoScale?: number;
    featured?: boolean;
}
