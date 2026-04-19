"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "¿Qué tiempo toma desarrollar un proyecto?",
    a: "Depende de la complejidad. Una Landing Pro puede estar lista en 5 días, mientras que un SaaS o E-Commerce robusto suele tomar entre 2 y 4 semanas.",
  },
  {
    q: "¿Cómo integran la Inteligencia Artificial?",
    a: "Desarrollamos agentes personalizados que se conectan con tus datos actuales para automatizar atención al cliente, análisis de métricas o generación de contenido.",
  },
  {
    q: "¿Cuentan con soporte post-lanzamiento?",
    a: "Sí, todos nuestros proyectos incluyen un periodo de soporte crítico y optimización para asegurar que todo funcione perfecto bajo carga real.",
  },
  {
    q: "¿Puedo escalar mi proyecto más adelante?",
    a: "Absolutamente. Construimos con Next.js y arquitecturas modulares, lo que permite agregar funcionalidades sin necesidad de reconstruir desde cero.",
  },
  {
    q: "¿Me quedo con el código?",
    a: "Siempre. El código, los accesos y la documentación son tuyos desde el día uno. No hay lock-in: si mañana querés seguir con otro equipo, podés.",
  },
  {
    q: "¿Trabajan con clientes fuera de Argentina?",
    a: "Sí. Trabajamos 100% remoto. Atendemos clientes de LATAM, USA y Europa sin fricción.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative mt-[clamp(48px,6vw,80px)] max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] grid gap-[clamp(32px,5vw,80px)] items-start grid-cols-1 lg:grid-cols-[0.9fr_1.4fr]"
    >
      {/* Sticky head */}
      <div>
        <span className="font-mono text-accent text-[12px]">// faq</span>
        <h2
          className="m-0 mt-5 font-display font-extrabold text-ink leading-none tracking-[-0.035em]"
          style={{ fontSize: "clamp(40px, 6vw, 74px)" }}
        >
          Preguntas{" "}
          <em className="not-italic font-light text-accent">frecuentes.</em>
        </h2>
        <p className="mt-5 text-ink-2 max-w-[40ch]">
          Las dudas que casi siempre aparecen en la primera llamada, respondidas acá para que llegués con menos ruido.
        </p>
      </div>

      {/* Accordion */}
      <div style={{ borderTop: "1px solid var(--rule)" }}>
        {ITEMS.map(({ q, a }, i) => (
          <div key={i} style={{ borderBottom: "1px solid var(--rule)", padding: "6px 0" }}>
            <button
              onClick={() => toggle(i)}
              className="w-full grid gap-[18px] items-center py-[22px] px-1 text-left transition-colors hover:text-accent"
              style={{
                gridTemplateColumns: "auto 1fr auto",
                color: openIndex === i ? "var(--accent)" : "var(--ink)",
              }}
            >
              <span className="font-mono text-ink-4 text-[11.5px]">q.{String(i + 1).padStart(2, "0")}</span>
              <span
                className="font-display font-medium tracking-[-0.02em]"
                style={{ fontSize: "clamp(17px, 1.6vw, 20px)" }}
              >
                {q}
              </span>
              {/* Toggle icon */}
              <span className="relative w-4 h-4 shrink-0">
                <span
                  className="absolute left-1/2 top-1/2 w-3.5 h-px bg-ink-2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                />
                <span
                  className="absolute left-1/2 top-1/2 w-3.5 h-px bg-ink-2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                  style={{ transform: openIndex === i ? "translate(-50%, -50%) rotate(0deg)" : "translate(-50%, -50%) rotate(90deg)" }}
                />
              </span>
            </button>

            {openIndex === i && (
              <div
                className="pb-[22px] text-ink-2 leading-relaxed max-[860px]:pl-0"
                style={{ paddingLeft: "60px" }}
              >
                <p className="m-0 max-w-[60ch]">{a}</p>
              </div>
            )}
          </div>
        ))}
        <div
          className="mt-6 px-[18px] py-4 rounded-[10px] flex justify-between items-center text-[12px] text-ink-3 font-mono"
          style={{ border: "1px dashed var(--rule-2)" }}
        >
          <span>¿otra pregunta?</span>
          <a href="#contacto" className="text-accent hover:underline">
            escribinos →
          </a>
        </div>
      </div>
    </section>
  );
}
