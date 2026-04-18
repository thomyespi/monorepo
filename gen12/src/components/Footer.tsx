const NAV_LINKS = [
  { href: "inicio",    label: "inicio" },
  { href: "nosotros",  label: "nosotros" },
  { href: "servicios", label: "servicios" },
  { href: "clientes",  label: "clientes" },
  { href: "stack",     label: "stack" },
  { href: "faq",       label: "faq" },
  { href: "contacto",  label: "contacto" },
];

export function Footer() {
  return (
    <footer
      className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] pt-[60px] pb-10"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      {/* Top row */}
      <div
        className="flex items-center justify-between gap-6 flex-wrap pb-[30px]"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span
            className="w-[34px] h-[34px] rounded-[10px] overflow-hidden shrink-0"
            style={{ border: "1px solid var(--rule)" }}
          >
            <img src="/logos/gen12-icon.png" alt="Gen12" className="w-full h-full object-cover" />
          </span>
          <span className="font-display font-bold text-[17px] tracking-[-0.02em] text-ink">
            gen12<span className="text-ink-3 font-medium">/software</span>
          </span>
        </div>

        {/* Status line */}
        <p className="font-mono text-ink-3 text-[11.5px]">
          <span className="text-accent">●</span> sistemas operativos — construido con código propio, 2026
        </p>

        {/* Nav links */}
        <nav className="flex gap-[18px] font-mono text-[12px] text-ink-3">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              className="transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-7 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] text-ink-4">
        <p>© 2026 GEN12 SOFTWARE. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/company/gen12-software" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://instagram.com/gen12.software" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
        </div>
      </div>

      {/* ASCII art */}
      <pre
        className="mt-7 font-mono text-[11px] leading-[1.3] overflow-x-auto text-ink-4"
        aria-hidden="true"
      >
{`╔═════════════════════════════════════════════════════════════╗
║  gen12/software — ingeniería con propósito                  ║
║  // sin deuda técnica · sin vueltas · sin sorpresas         ║
╚═════════════════════════════════════════════════════════════╝`}
      </pre>
    </footer>
  );
}
