const ITEMS = [
  {
    num: "// 01",
    title: "Velocidad",
    titleItalic: "real.",
    desc: "MVP en días, no semanas. Iteramos con demos en vivo cada sprint.",
  },
  {
    num: "// 02",
    title: "IA aplicada,",
    titleItalic: "no decorativa.",
    desc: "Agentes, chatbots contextuales y automatización que mueve métricas.",
  },
  {
    num: "// 03",
    title: "Código",
    titleItalic: "que dura.",
    desc: "Arquitectura escalable, tests y documentación. Cero deuda técnica heredada.",
  },
  {
    num: "// 04",
    title: "Trato",
    titleItalic: "directo.",
    desc: "Hablás con quien escribe el código. Sin PMs intermediarios ni tickets perdidos.",
  },
];

export function Strip() {
  return (
    <section className="max-w-[1280px] mx-auto mt-[clamp(80px,10vw,140px)] px-[clamp(20px,4vw,64px)]">
      <div
        className="grid grid-cols-4 border-t border-b max-[960px]:grid-cols-2 max-[560px]:grid-cols-1"
        style={{ borderColor: "var(--rule)" }}
      >
        {ITEMS.map(({ num, title, titleItalic, desc }, i) => (
          <div
            key={num}
            className="py-9 max-[560px]:py-7"
            style={{
              paddingLeft:  i > 0 ? "28px" : "0",
              paddingRight: i < ITEMS.length - 1 ? "28px" : "0",
              borderRight: i < ITEMS.length - 1 ? "1px solid var(--rule)" : "none",
            }}
          >
            <span className="block font-mono text-accent text-[12px] mb-[18px]">{num}</span>
            <h3
              className="m-0 mb-2.5 font-display font-bold leading-[1.05] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(22px, 2vw, 28px)" }}
            >
              {title}{" "}
              <em className="not-italic font-light text-accent">{titleItalic}</em>
            </h3>
            <p className="m-0 text-ink-2 text-[14px] leading-[1.55]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
