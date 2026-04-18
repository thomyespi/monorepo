"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SCROLL_OFFSET } from "@/lib/constants";

const LINKS = [
  { href: "inicio",    label: "inicio" },
  { href: "nosotros",  label: "nosotros" },
  { href: "servicios", label: "servicios" },
  { href: "clientes",  label: "clientes" },
  { href: "stack",     label: "stack" },
  { href: "faq",       label: "faq" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection("inicio");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const SECTION_TO_NAV: Record<string, string> = { metodo: "nosotros" };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && window.scrollY >= 80) {
            const id = e.target.id;
            setActiveSection(SECTION_TO_NAV[id] ?? id);
          }
        });
      },
      { threshold: 0, rootMargin: "-15% 0px -55% 0px" }
    );

    const attach = (retries = 0) => {
      [...LINKS.map(l => l.href), "metodo"].forEach((href) => {
        if (href === "inicio") return;
        const el = document.getElementById(href);
        if (el) observer.observe(el);
      });
      if (retries < 8) setTimeout(() => attach(retries + 1), 300);
    };
    attach();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      if (id === "inicio") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET, behavior: "smooth" });
    }, 80);
  };

  return (
    <header
      className="sticky top-0 z-50 pt-[18px] px-[clamp(20px,4vw,64px)]"
      style={{ backdropFilter: "blur(10px)", background: "linear-gradient(to bottom, rgba(7,14,24,0.85), rgba(7,14,24,0.6) 70%, transparent)" }}
    >
      {/* Pill container */}
      <div
        className="max-w-[1280px] mx-auto flex items-center gap-6 py-2.5 pl-3 pr-4 rounded-full border"
        style={{ borderColor: "var(--rule)", background: "rgba(14,16,22,0.7)" }}
      >
        {/* Brand */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); scrollTo("inicio"); }}
          className="flex items-center gap-2.5 shrink-0"
        >
          <span
            className="w-[34px] h-[34px] rounded-[10px] overflow-hidden"
            style={{ border: "1px solid var(--rule)" }}
          >
            <img src="/logos/gen12-icon.png" alt="Gen12" className="w-full h-full object-cover" />
          </span>
          <span className="font-display font-bold text-[17px] tracking-[-0.02em] text-ink">
            gen12<span className="text-ink-3 font-medium">/software</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-[22px] ml-auto mr-2 font-mono text-[13px] text-ink-3 max-[860px]:hidden! md:flex">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => { e.preventDefault(); scrollTo(href); }}
              className={`relative py-1 transition-colors duration-200 hover:text-ink ${activeSection === href ? "text-ink" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          {/* Desktop CTA */}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full font-mono text-[12px] text-ink-2 transition-all duration-200 hover:text-ink"
            style={{ border: "1px solid var(--rule-2)", background: "rgba(232,234,240,0.03)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-dim)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--rule-2)"; }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot"
              style={{ boxShadow: "0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)" }}
            />
            disponible para proyectos
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-ink"
            style={{ background: "rgba(232,234,240,0.08)" }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--rule)", background: "rgba(14,16,22,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col p-6 gap-0">
            {LINKS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-left font-mono text-sm py-3 transition-colors ${activeSection === href ? "text-accent" : "text-ink-3 hover:text-ink"}`}
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                {label}
              </button>
            ))}
            <div className="pt-4">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
                className="inline-flex items-center gap-2 font-mono text-[12px] text-ink-2"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
                disponible para proyectos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
