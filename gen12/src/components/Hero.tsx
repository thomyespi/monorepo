"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { SCROLL_OFFSET } from "@/lib/constants";

const MARQUEE_ITEMS = [
    "Desarrollo Full-Stack",
    "Inteligencia Artificial",
    "E-Commerce",
    "Apps a medida",
    "Automatizaciones",
    "UX / UI",
    "Landing pages",
    "Integraciones",
];

export function Hero() {
    const isMobile = useIsMobile();
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET, behavior: "smooth" });
    };

    return (
        <section id="inicio" className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(40px,6vw,80px)] pb-10">

            {/* Breadcrumb meta */}
            <div className="flex items-center gap-3.5 font-mono text-[12px] text-ink-3 mb-10">
                <span className="text-accent font-semibold">01</span>
                <span className="text-ink-2">~/gen12 — desarrollo & IA</span>
            </div>

            {/* 2-col grid */}
            <div
                className="grid items-start gap-[clamp(32px,5vw,72px)] grid-cols-1 lg:grid-cols-[1.15fr_1fr]"
            >
                {/* ── Left: copy ── */}
                <div className="min-w-0">
                    <h1
                        className="m-0 font-display font-extrabold text-ink leading-[0.96] tracking-[-0.045em]"
                        style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
                    >
                        Construimos software{" "}
                        <em
                            className="not-italic font-light text-accent"
                            style={{ letterSpacing: "-0.04em" }}
                        >
                            que&nbsp;funciona.
                        </em>
                    </h1>

                    <p
                        className="mt-7 max-w-[52ch] text-ink-2 leading-relaxed"
                        style={{ fontSize: "clamp(15px, 1.3vw, 18px)" }}
                    >
                        Un equipo de developers que convierte ideas en producto real.
                        Web, e-commerce, apps e IA —{" "}
                        <span className="text-ink font-medium">rápido, limpio y sin deuda técnica.</span>
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        <a
                            href="#contacto"
                            onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
                            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-accent font-display font-semibold text-[15px] tracking-[-0.01em] transition-all hover:-translate-y-px"
                            style={{
                                color: "#0A0B0F",
                                boxShadow: "0 6px 30px -10px color-mix(in srgb, var(--accent) 60%, transparent)",
                            }}
                        >
                            Arrancá tu proyecto
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a
                            href="#servicios"
                            onClick={(e) => { e.preventDefault(); scrollTo("servicios"); }}
                            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full font-display font-semibold text-[15px] tracking-[-0.01em] text-ink transition-all hover:text-accent"
                            style={{ border: "1px solid var(--rule-2)" }}
                        >
                            <span className="font-mono">cat ./servicios</span>
                        </a>
                    </div>

                    {/* Stats */}
                    <dl
                        className="mt-14 grid grid-cols-3 border-t"
                        style={{ borderColor: "var(--rule)" }}
                    >
                        {[
                            { dt: "proyectos\nentregados", dd: "20", suffix: "+", type: "plus" },
                            { dt: "stack\ndominado", dd: "14", suffix: "+", type: "plus" },
                            { dt: "respuesta\ninicial", dd: "rápida", suffix: "", type: "unit" },
                        ].map(({ dt, dd, suffix, type }, i) => (
                            <div
                                key={dt}
                                className="py-5 flex flex-col justify-between"
                                style={{
                                    paddingRight: i < 2 ? "16px" : "0",
                                    paddingLeft: i > 0 ? "16px" : "0",
                                    borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                                }}
                            >
                                <dt className="font-mono text-ink-3 text-[10px] lowercase mb-2 whitespace-pre-line leading-[1.3]">{dt}</dt>
                                <dd className="m-0 font-display font-bold text-ink leading-none" style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.03em" }}>
                                    {dd}
                                    {type === "plus" && <span className="text-accent font-normal">{suffix}</span>}
                                    {type === "unit" && <span className="text-ink-3 ml-0.5" style={{ fontSize: "0.6em" }}>{suffix}</span>}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* ── Right: terminal + mock ── */}
                <aside className="hidden lg:flex flex-col gap-4 min-w-0">

                    {/* Terminal */}
                    <div
                        className="overflow-hidden rounded-[14px]"
                        style={{ background: "#0B0D12", border: "1px solid var(--rule-2)", boxShadow: "0 30px 80px -40px rgba(0,0,0,0.8)" }}
                    >
                        <div
                            className="flex items-center gap-2 px-3.5 py-2.5"
                            style={{ borderBottom: "1px solid var(--rule)", background: "var(--paper)" }}
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            <span className="ml-2.5 font-mono text-ink-3 text-[12px]">gen12@studio — zsh</span>
                        </div>
                        <pre className="m-0 px-[18px] py-[18px] pb-[22px] font-mono text-[12.5px] leading-[1.7] text-ink-2 whitespace-pre-wrap wrap-break-word">
                            <span className="text-accent">➜</span>{" "}
                            <span className="text-ink-2">~/gen12</span>{" "}
                            <span className="text-accent italic">main</span>{" "}
                            {"npm run build\n"}
                            <span className="text-ink-3">{"› "}</span>
                            <span className="text-green-400">{"✓"}</span>
                            {" compiled in "}
                            <span className="text-accent">1.2s</span>
                            {"\n"}
                            <span className="text-ink-3">{"› "}</span>
                            <span className="text-green-400">{"✓"}</span>
                            {" "}
                            <span className="text-accent">0</span>
                            {" errors / "}
                            <span className="text-accent">0</span>
                            {" warnings\n"}
                            <span className="text-ink-3">{"› "}</span>
                            {"deploying to production…\n"}
                            <span className="text-green-400">▲</span>
                            {"  "}
                            <span className="underline" style={{ textDecorationColor: "var(--accent-dim)" }}>
                                https://tu-producto.com
                            </span>
                            {"\n"}
                            <span className="text-accent">➜</span>{" "}
                            <span className="text-ink-2">~/gen12</span>{" "}
                            <span className="text-accent italic">main</span>{" "}
                            <span className="text-accent animate-blink">█</span>
                        </pre>
                    </div>

                    {/* Dashboard mock */}
                    <div
                        className="rounded-[14px] overflow-hidden"
                        style={{
                            border: "1px solid var(--rule)",
                            background: "linear-gradient(180deg, rgba(232,234,240,0.015), rgba(232,234,240,0))",
                        }}
                        aria-label="producto de ejemplo"
                    >
                        <div
                            className="flex justify-between items-center px-3.5 py-2.5 text-ink-3 text-[11px]"
                            style={{ borderBottom: "1px solid var(--rule)", background: "rgba(232,234,240,0.02)" }}
                        >
                            <span className="font-mono">app.cliente.com</span>
                            <span className="font-mono inline-flex items-center gap-1.5 text-accent">
                                <i className="not-italic w-1.5 h-1.5 rounded-full bg-accent" />
                                live
                            </span>
                        </div>
                        <div className="p-4 grid gap-3.5">
                            <div className="grid grid-cols-[1fr_auto] gap-4 items-end">
                                <div
                                    className="h-10 rounded-md"
                                    style={{ background: "linear-gradient(90deg, rgba(232,234,240,0.06), rgba(232,234,240,0.02))" }}
                                />
                                <div className="text-right grid gap-0.5">
                                    <span className="font-mono text-ink-3 text-[10px]">MRR</span>
                                    <strong className="text-[28px] font-bold tracking-[-0.02em] text-ink leading-none">
                                        +38<span className="text-accent text-[20px] font-normal ml-px">%</span>
                                    </strong>
                                </div>
                            </div>
                            <div className="h-[70px]">
                                <svg viewBox="0 0 200 70" preserveAspectRatio="none" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="hero-chart-grad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0" stopColor="var(--accent)" stopOpacity=".35" />
                                            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,55 L20,50 L40,52 L60,42 L80,44 L100,30 L120,34 L140,22 L160,25 L180,14 L200,10 L200,70 L0,70 Z"
                                        fill="url(#hero-chart-grad)"
                                    />
                                    <path
                                        d="M0,55 L20,50 L40,52 L60,42 L80,44 L100,30 L120,34 L140,22 L160,25 L180,14 L200,10"
                                        fill="none"
                                        stroke="var(--accent)"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                            <div
                                className="grid grid-cols-3 gap-2.5 pt-3"
                                style={{ borderTop: "1px dashed var(--rule)" }}
                            >
                                {[
                                    { label: "uptime", value: "99.98%" },
                                    { label: "p95", value: "142ms" },
                                    { label: "tests", value: "284 ✓" },
                                ].map(({ label, value }) => (
                                    <div key={label} className="grid gap-0.5">
                                        <span className="font-mono text-ink-3 text-[10px]">{label}</span>
                                        <b className="text-[13px] tracking-[-0.01em] font-semibold text-ink">{value}</b>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Marquee */}
            <div
                className="overflow-hidden mt-20 py-[18px]"
                style={{
                    marginLeft: "calc(-1 * clamp(20px, 4vw, 64px))",
                    marginRight: "calc(-1 * clamp(20px, 4vw, 64px))",
                    borderTop: "1px solid var(--rule)",
                    borderBottom: "1px solid var(--rule)",
                    maskImage: "linear-gradient(to right, transparent, 5%, black 12%, black 88%, transparent 95%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, 5%, black 12%, black 88%, transparent 95%)",
                }}
                aria-hidden="true"
            >
                <div
                    className="flex gap-7 whitespace-nowrap font-display italic font-normal text-ink-3 tracking-[-0.02em]"
                    style={{ fontSize: "clamp(22px, 3vw, 38px)", animation: `marquee ${isMobile ? "3s" : "7s"} linear infinite`, WebkitAnimation: `marquee ${isMobile ? "3s" : "7s"} linear infinite`, willChange: "transform" }}
                >
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-7">
                            {item}
                            <span className="text-accent not-italic">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
