"use client";

import { useState, useEffect } from "react";
import config from "@/content/config.json";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-110"
                        style={{ backgroundColor: config.theme.primary }}
                    >
                        {config.company.logo}
                    </div>
                    <span className={cn(
                        "font-black text-xl tracking-tighter uppercase italic transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        {config.company.name}
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#" className={cn("text-sm font-medium transition-colors hover:text-red-600", isScrolled ? "text-gray-900" : "text-white")}>Inicio</a>
                    <a href="#values" className={cn("text-sm font-medium transition-colors hover:text-red-600", isScrolled ? "text-gray-900" : "text-white")}>Valores</a>
                    <a href="#gallery" className={cn("text-sm font-medium transition-colors hover:text-red-600", isScrolled ? "text-gray-900" : "text-white")}>Galería</a>
                    <a href="#testimonials" className={cn("text-sm font-medium transition-colors hover:text-red-600", isScrolled ? "text-gray-900" : "text-white")}>Testimonios</a>
                    <a
                        href={`tel:${config.company.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-white transition-transform hover:scale-105 shadow-lg"
                        style={{ backgroundColor: config.theme.primary }}
                    >
                        <Phone size={16} />
                        <span className="text-sm font-semibold">{config.company.phone}</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden", isScrolled ? "text-gray-900" : "text-white")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b p-6 flex flex-col space-y-4 md:hidden">
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
                    <a href="#values" onClick={() => setIsMobileMenuOpen(false)}>Valores</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
                </div>
            )}
        </nav>
    );
}
