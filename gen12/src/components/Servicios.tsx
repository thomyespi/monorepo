"use client";

import { SCROLL_OFFSET } from "@/lib/constants";

const SERVICES = [
  {
    num: "// 01",
    title: "Desarrollo Full-Stack",
    tag: "web · apps · apis",
    desc: "Plataformas digitales que no fallan. Arquitecturas escalables diseñadas para crecer sin deuda técnica.",
    bullets: ["Arquitectura escalable", "APIs de alta velocidad", "Seguridad de primer nivel"],
  },
  {
    num: "// 02",
    title: "Inteligencia Artificial",
    tag: "agentes · automatización",
    desc: "Automatización inteligente que reduce costos. Agentes de IA que trabajan 24/7 para optimizar tus operaciones.",
    bullets: ["Agentes autónomos", "Chatbots contextuales", "Análisis predictivo"],
  },
  {
    num: "// 03",
    title: "UX / UI & Diseño",
    tag: "interfaces · diseño",
    desc: "Interfaces pensadas para vender. Estética premium con psicología de usuario para convertir visitas en clientes.",
    bullets: ["Diseño centrado en usuario", "Sistemas de diseño", "Micro-interacciones"],
  },
];

const DELIVERABLES = [
  { label: "Tienda online",       tech: "Next.js · Stripe · Shippo" },
  { label: "E-Commerce a medida", tech: "Vite · Node · PostgreSQL" },
  { label: "Landing page",        tech: "Next.js · Framer · Tailwind" },
  { label: "Sitio corporativo",   tech: "React · CMS · SEO" },
  { label: "Panel / SaaS",        tech: "React Query · Auth.js · SQL" },
  { label: "Solución con IA",     tech: "OpenAI · LangChain · Python" },
];

export function Servicios() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET, behavior: "smooth" });
  };

  return (
    <section id="servicios" className="mt-[clamp(80px,10vw,140px)] max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)]">

      {/* Header */}
      <div className="mb-[clamp(40px,6vw,70px)]">
        <span className="font-mono text-accent text-[12px]">// servicios</span>
        <h2
          className="m-0 mt-5 font-display font-extrabold text-ink leading-none tracking-[-0.045em]"
          style={{ fontSize: "clamp(40px, 6vw, 74px)" }}
        >
          Lo que <em className="not-italic font-light text-accent">construimos.</em>
        </h2>
      </div>

      {/* Service rows */}
      <div style={{ borderTop: "1px solid var(--rule)" }}>
        {SERVICES.map(({ num, title, tag, desc, bullets }) => (
          <div
            key={num}
            className="group grid gap-6 py-9 transition-colors hover:bg-white/1.5 grid-cols-1 sm:grid-cols-[80px_1.3fr_2fr_1.2fr]"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            {/* Num */}
            <span className="font-mono text-ink-3 text-[12px] pt-1">{num}</span>

            {/* Title */}
            <div>
              <h3
                className="m-0 font-display font-bold text-ink leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
              >
                {title}
              </h3>
              <span className="block mt-2 font-mono text-ink-3 text-[11.5px]">{tag}</span>
            </div>

            {/* Desc */}
            <p className="m-0 text-ink-2 leading-[1.55] max-w-[48ch] text-[15px]">{desc}</p>

            {/* Bullets */}
            <ul className="list-none m-0 p-0 grid gap-1.5 content-start">
              {bullets.map((b) => (
                <li key={b} className="relative pl-3.5 text-[12px] text-ink-3">
                  <span
                    className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full bg-accent"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Deliverables grid */}
      <div className="mt-14">
        <p className="font-mono text-ink-3 text-[12px] mb-6">// lo que entregamos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l" style={{ borderColor: "var(--rule)" }}>
          {DELIVERABLES.map(({ label, tech }) => (
            <div
              key={label}
              className="p-5 border-b border-r transition-colors hover:bg-white/2"
              style={{ borderColor: "var(--rule)" }}
            >
              <span className="block font-display font-semibold text-ink text-[15px] tracking-[-0.01em] mb-1">{label}</span>
              <span className="font-mono text-ink-4 text-[11px]">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex items-center gap-4">
        <button
          onClick={() => scrollTo("contacto")}
          className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-accent font-display font-semibold text-[15px] tracking-[-0.01em] transition-all hover:-translate-y-px"
          style={{ color: "#0A0B0F", boxShadow: "0 6px 30px -10px color-mix(in srgb, var(--accent) 60%, transparent)" }}
        >
          Arrancá tu proyecto
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
        <a
          href="https://wa.me/5491161591957"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[12px] transition-colors hover:text-accent"
          style={{ color: "#25D366" }}
        >
          <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
            <path d="M19.1 17.5c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.8 1 3.9 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2.1 0-4-.6-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.6 10.6 0 0 1 5.4 16c0-5.8 4.8-10.6 10.6-10.6S26.6 10.2 26.6 16 21.8 26.6 16 26.6z"/>
          </svg>
          WhatsApp directo
        </a>
      </div>

    </section>
  );
}
