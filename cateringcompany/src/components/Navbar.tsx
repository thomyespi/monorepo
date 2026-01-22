"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Clientes', href: '#clientes' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled
                    ? 'top-4'
                    : 'top-0'
            )}
        >
            <div className={cn(
                "mx-auto transition-all duration-500 flex items-center justify-between",
                scrolled
                    ? "max-w-5xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-8 py-3"
                    : "max-w-7xl px-6 py-6 bg-transparent"
            )}>
                <a href="#inicio" className="flex items-center gap-3 group">
                    <div className="relative">
                        <Image
                            src="/logo.png"
                            alt="Catering Company Logo"
                            width={160}
                            height={50}
                            className={cn(
                                "h-12 w-auto object-contain transition-all group-hover:scale-105",
                                scrolled ? "brightness-0 opacity-80" : "brightness-0 invert"
                            )}
                        />
                    </div>
                    <span
                        className={cn(
                            "text-lg md:text-xl font-bold tracking-tight font-serif transition-colors",
                            scrolled ? "text-brand-forest" : "text-white"
                        )}
                    >
                        Catering Company
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold transition-colors hover:opacity-70"
                            style={{ color: scrolled ? '#14362d' : '#ffffff' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-3">
                        <a
                            href="#servicios"
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-semibold transition-all",
                                scrolled
                                    ? "bg-brand-forest/10 text-brand-forest hover:bg-brand-forest/20"
                                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20"
                            )}
                        >
                            Conocer servicios
                        </a>
                        <a
                            href="#contacto"
                            className="bg-brand-forest text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-colors"
                        >
                            Solicitar propuesta
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("md:hidden", scrolled ? "text-brand-forest" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-forest/10 p-6 flex flex-col gap-4 shadow-lg md:hidden animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-brand-forest"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#servicios"
                        className="bg-brand-forest/10 text-brand-forest px-6 py-3 rounded-md text-center font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Conocer servicios
                    </a>
                    <a
                        href="#contacto"
                        className="bg-brand-forest text-white px-6 py-3 rounded-md text-center font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Solicitar propuesta
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
