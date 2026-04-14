"use client";

import { LucideIcon, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { SCROLL_OFFSET } from "@/lib/constants";
import { M } from "./ui/M";

interface ServiceCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    accent: string;
    features: string[];
    ctaText: string;
    index: number;
}

export function ServiceCard({ title, description, Icon, accent, features, ctaText, index }: ServiceCardProps) {
    const { t } = useLanguage();
    const isMobile = useIsMobile() === true;

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - SCROLL_OFFSET;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <M mobile={isMobile}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="group p-6 md:p-8 rounded-3xl bg-white/5 border border-white/8 md:hover:border-accent/20 md:hover:bg-white/8 md:hover:shadow-2xl md:hover:shadow-black/20 transition-all duration-500 flex flex-col"
        >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform md:group-hover:scale-110 shrink-0", accent)}>
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-foreground mb-4 shrink-0">{title}</h3>

            <p className="text-foreground/50 font-medium leading-relaxed mb-8 text-sm">
                {description}
            </p>

            <div className="mt-auto">
                <ul className="space-y-3 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <a
                    href="#contacto"
                    onClick={(e) => smoothScroll(e, 'contacto')}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/8 border border-white/12 text-foreground font-black text-xs uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group-hover:shadow-lg"
                >
                    {ctaText}
                    <ArrowUpRight className="w-3 h-3 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </M>
    );
}
