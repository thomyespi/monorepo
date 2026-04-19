const COLUMNS = [
  {
    label: "Frontend",
    items: [
      { k: "01", name: "React", v: "ui core" },
      { k: "02", name: "Next.js", v: "ssr / isr" },
      { k: "03", name: "TypeScript", v: "type safety" },
      { k: "04", name: "Tailwind", v: "styling" },
      { k: "05", name: "Framer Motion", v: "animación" },
    ],
    feat: false,
  },
  {
    label: "Backend",
    items: [
      { k: "01", name: "Node.js", v: "runtime" },
      { k: "02", name: "PostgreSQL", v: "db relacional" },
      { k: "03", name: "Supabase", v: "baas" },
      { k: "04", name: "AWS", v: "infra" },
      { k: "05", name: "Vercel", v: "deploy" },
    ],
    feat: true,
  },
  {
    label: "AI",
    items: [
      { k: "01", name: "OpenAI", v: "llm" },
      { k: "02", name: "Anthropic", v: "claude" },
      { k: "03", name: "LangChain", v: "orquestación" },
      { k: "04", name: "Python", v: "ml / data" },
      { k: "05", name: "Vector DBs", v: "rag" },
    ],
    feat: false,
  },
];

export function StackSection() {
  return (
    <section id="stack" className="mt-[clamp(48px,6vw,80px)]">
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] mb-[clamp(40px,6vw,70px)]">
        <span className="font-mono text-accent text-[12px]">// stack técnico</span>
        <h2
          className="m-0 mt-5 font-display font-extrabold text-ink leading-none tracking-[-0.045em]"
          style={{ fontSize: "clamp(40px, 6vw, 74px)" }}
        >
          Las herramientas{" "}
          <em className="not-italic font-light text-accent">que usamos.</em>
        </h2>
        <p className="mt-[22px] max-w-[56ch] text-ink-2 text-[17px]">
          Nada es moda: cada pieza del stack está ahí porque probó ser la mejor en 20+ proyectos.
        </p>
      </div>

      {/* Grid */}
      <div
        className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)]"
      >
        <div
          className="grid grid-cols-3 border-t border-b max-[860px]:grid-cols-1"
          style={{ borderColor: "var(--rule)" }}
        >
          {COLUMNS.map(({ label, items, feat }, colIdx) => (
            <div
              key={label}
              className="px-7 py-[30px] max-[860px]:px-0 max-[860px]:border-b last:border-b-0"
              style={{
                borderRight: colIdx < COLUMNS.length - 1 ? "1px solid var(--rule)" : "none",
                borderBottomColor: "var(--rule)",
                ...(feat
                  ? { background: "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--accent) 6%, transparent) 0%, transparent 70%)" }
                  : {}),
              }}
            >
              {/* Column header */}
              <header className="flex justify-between items-center mb-5 text-ink-3 text-[11.5px]">
                <span>{label}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-accent text-[10.5px]">
                  <i className="not-italic w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                  en producción
                </span>
              </header>

              {/* Item list */}
              <ul className="list-none m-0 p-0">
                {items.map(({ k, name, v }, i) => (
                  <li
                    key={k}
                    className="grid items-baseline gap-3.5 py-3.5"
                    style={{
                      gridTemplateColumns: "30px 1fr auto",
                      borderBottom: i < items.length - 1 ? "1px dashed var(--rule)" : "none",
                    }}
                  >
                    <span className="font-mono text-ink-4 text-[11px]">{k}</span>
                    <b className="font-display font-semibold text-[20px] tracking-[-0.02em] text-ink">{name}</b>
                    <span className="font-mono text-ink-3 text-[11.5px]">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
