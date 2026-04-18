# Gen12Software — Handoff para Claude Code

> Migración del diseño de referencia (`gen12.html`) a tu stack actual: **Next.js 14+ (App Router) + Tailwind CSS**.

---

## 🎯 Instrucciones para pegar en Claude Code

Copiá el bloque de abajo y pegalo en Claude Code junto con los archivos `gen12.html` y este `HANDOFF.md`:

```
Tengo un sitio en Next.js + Tailwind que quiero migrar al diseño
de referencia que está en gen12.html. Las specs completas están
en HANDOFF.md.

Por favor:
1. Leé HANDOFF.md completo antes de empezar.
2. Usá gen12.html SOLO como referencia visual/estructural.
   NO copies el CSS tal cual — tradúcelo a clases de Tailwind.
3. Configurá los design tokens en tailwind.config.ts
   (colores, fuentes, spacing) antes de tocar componentes.
4. Creá un componente por sección (Hero, Services, Method,
   Projects, Stack, Quotes, FAQ, Contact, Footer, Nav).
5. Usá TypeScript, Server Components por default; client
   solo donde haga falta (FAQ acordeón, formulario, tweaks).
6. Instalá las fuentes con next/font/google (Geist +
   JetBrains Mono + Instrument Serif).
7. Respetá la responsividad del diseño original (breakpoints
   en HANDOFF.md).
8. NO inventes contenido: usá el copy exacto de gen12.html.

Hacé primero un plan, mostrámelo, y después ejecutá paso
por paso preguntándome entre cada sección grande.
```

---

## 🎨 Design Tokens

Agregá a `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#0A0B0F",
        paper:   "#0E1016",
        elev:    "#12141C",
        "elev-2":"#191C26",
        ink:     "#E8EAF0",
        "ink-2": "#B4B8C4",
        "ink-3": "#7A7F8E",
        "ink-4": "#4A4F5D",
        rule:    "rgba(232,234,240,0.08)",
        "rule-2":"rgba(232,234,240,0.14)",
        accent: {
          DEFAULT: "#E2B829",          // mustard (default elegido)
          dim:     "#7a5f0f",
          ink:     "#0A0B0F",
        },
      },
      fontFamily: {
        display: ["var(--font-geist)", "ui-sans-serif", "system-ui"],
        sans:    ["var(--font-geist)", "ui-sans-serif", "system-ui"],
        mono:    ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        serif:   ["var(--font-instrument)", "ui-serif", "Georgia"],
      },
      letterSpacing: {
        "display-tight": "-0.045em",
        "display-md":    "-0.035em",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "22px",
      },
      animation: {
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        marquee:    "marquee 40s linear infinite",
      },
      keyframes: {
        "pulse-dot": {
          "50%": { transform: "scale(1.25)", opacity: ".7" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
export default config;
```

---

## 🔤 Fuentes (Next.js)

En `app/layout.tsx`:

```tsx
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300","400","500","600","700","800","900"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300","400","500","600","700"],
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geist.variable} ${jetbrains.variable} ${instrument.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
```

---

## 📁 Estructura de carpetas sugerida

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 ← compone todas las secciones
│   └── globals.css              ← grid-bg, noise, utilidades
└── components/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── Method.tsx
    ├── Projects.tsx
    ├── Stack.tsx
    ├── Quotes.tsx
    ├── Faq.tsx                  ← "use client" (acordeón)
    ├── Contact.tsx              ← "use client" (form)
    ├── Footer.tsx
    └── ui/
        ├── Terminal.tsx
        ├── Button.tsx
        └── Marquee.tsx
```

---

## 📐 Breakpoints del diseño original

| Breakpoint | Comportamiento clave |
|---|---|
| `>1060px` | Servicios en grid de 5 columnas, método en 4 columnas |
| `≤1060px` | Servicios colapsan a 3 columnas |
| `≤960px` | Hero 2-col → 1-col, método 4→2 columnas, stack 3→1 |
| `≤860px` | Oculta nav links (necesitás agregar menú mobile) |
| `≤640px` | Servicios 1 columna |
| `≤560px` | Stripes/method colapsan todo a 1 columna |

---

## 🧱 Secciones — checklist

- [ ] **Nav** pill flotante con sticky, backdrop blur, dot pulsante "disponible para proyectos"
- [ ] **Hero** con:
  - Título display grande con italic en acento
  - Terminal simulada (con caret pulsante — `use client`)
  - Mockup de dashboard con SVG chart
  - Stats en 3 columnas (`20+`, `14+`, `<24h`)
  - Marquee de servicios (puro CSS)
- [ ] **Strip "diferenciales"** — 4 columnas con `// 01` — `// 04`
- [ ] **Services** — lista de filas (no cards), 4 servicios, uno marcado "más pedido"
- [ ] **Method** — 4 pasos con línea horizontal y duración
- [ ] **Projects** — 3 proyectos con thumbs placeholder SVG y métricas reales
- [ ] **Stack** — 3 columnas (Frontend / Backend / AI) tipo IDE
- [ ] **Quotes** — 3 testimonios, el del medio más grande
- [ ] **FAQ** — 6 preguntas, sticky header, un solo acordeón abierto a la vez
- [ ] **Contact** — 2 campos + WhatsApp directo + 4 canales listados
- [ ] **Footer** — brand + nav + ASCII art

---

## 🧠 Detalles que suelen romperse en la migración

1. **La grilla de fondo** (`.grid-bg`): usá un `<div>` fijo con `background-image` de 2 gradientes + máscara radial. No lo hagas con SVG — pierde performance.

2. **La marquee**: duplicá los items manualmente en el JSX (no por JS). La animación es `translateX(-50%)` sobre un track que tiene el doble del contenido.

3. **El caret de la terminal**: es un `<span>` con `setInterval` que toggle-a opacity. Usalo en un `useEffect` dentro de un client component.

4. **FAQ acordeón**: si usás `<details>` nativo te ahorrás JS. Si querés animación suave, usá Radix Accordion o Framer Motion.

5. **Tipografía italic amarilla**: el diseño alterna entre italic de Geist (tono "tech") y Instrument Serif italic (tono "editorial"). Default = tech.

6. **Accesibilidad**: agregá `aria-label` a los thumbs SVG, `aria-expanded` al FAQ, labels en el form.

---

## 🖼️ Assets que necesitás proveer

| Asset | Dónde | Qué pasa si no lo tengo |
|---|---|---|
| Logo SVG de Gen12 | `public/logo.svg` | Usá el placeholder del HTML |
| Screenshots proyectos | `public/projects/{slug}.webp` | Dejá los placeholders técnicos SVG |
| Favicon | `public/favicon.ico` + `apple-icon.png` | Generalo desde el logo |
| OpenGraph image | `app/opengraph-image.tsx` | Usá Next.js ImageResponse |

---

## 🚀 SEO / Metadata (agregá a `app/layout.tsx`)

```ts
export const metadata = {
  title: "Gen12Software — Ingeniería con propósito",
  description: "Construimos software que funciona. Web, e-commerce, apps e IA — rápido, limpio y sin deuda técnica.",
  openGraph: {
    title: "Gen12Software",
    description: "Construimos software que funciona.",
    locale: "es_AR",
    type: "website",
  },
};
```

---

## ✅ Criterio de "listo"

- [ ] Lighthouse Performance > 95
- [ ] LCP < 1.5s
- [ ] CLS < 0.05
- [ ] Todo navegable por teclado
- [ ] Funciona en iPhone SE (320px wide)
- [ ] Los focus states son visibles y con color accent
- [ ] Form envía a tu backend / endpoint de email
- [ ] Link de WhatsApp abre con número correcto

---

## 🔄 Si querés mantener Tweaks en producción

Las variables CSS están listas (`--accent`, `--bg`, etc.). Podés:
- Conservar el panel como feature de admin (solo visible con `?admin=1`)
- O eliminarlo y hardcodear la paleta elegida

---

**Consejo:** pedile a Claude Code que migre de a una sección por mensaje, no todo junto. Así podés revisar cada pedazo y corregir antes de seguir. Empezá por Nav + Hero — son los de mayor impacto.
