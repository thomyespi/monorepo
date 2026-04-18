"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const WA_ICON = (
  <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M19.1 17.5c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.8 1 3.9 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2.1 0-4-.6-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.6 10.6 0 0 1 5.4 16c0-5.8 4.8-10.6 10.6-10.6S26.6 10.2 26.6 16 21.8 26.6 16 26.6z" />
  </svg>
);

export function Contact() {
  const {
    name, setName,
    email, setEmail,
    message, setMessage,
    handleSubmit,
    isLoading,
    error,
    success,
    attemptedSubmit,
  } = useContactForm();

  const [showPolicies, setShowPolicies] = useState(false);

  const inputClass = (invalid: boolean) =>
    `w-full bg-transparent border-0 border-b text-ink font-sans text-[16px] py-2 px-0 outline-none resize-vertical transition-colors duration-200 placeholder:text-ink-4 focus:border-accent ${invalid ? "border-red-500/70" : "border-[var(--rule-2)]"}`;

  return (
    <section
      id="contacto"
      className="mt-[clamp(80px,10vw,140px)] pb-20 max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)]"
    >
      <div
        className="grid gap-[clamp(32px,5vw,80px)] pt-10 grid-cols-1 lg:grid-cols-2"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        {/* ── Left: copy + channels ── */}
        <div>
          <span className="font-mono text-accent text-[12px]">// contacto</span>
          <h2
            className="m-0 mt-5 font-display font-extrabold text-ink leading-none tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 6vw, 74px)" }}
          >
            Hablemos de{" "}
            <em className="not-italic font-light text-accent">tu idea.</em>
          </h2>
          <p className="mt-[22px] mb-10 text-ink-2 max-w-[48ch]">
            Tu visión merece una ejecución impecable. Escribinos y evaluemos la
            viabilidad de tu proyecto — respondemos en menos de 24h.
          </p>

          <ul
            className="list-none m-0 p-0 font-mono text-[13px]"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            {[
              { k: "whatsapp", v: "+54 9 11 6159-1957", href: "https://wa.me/5491161591957" },
              { k: "email",    v: "gen12software@gmail.com", href: "mailto:gen12software@gmail.com" },
              { k: "instagram", v: "@gen12.software", href: "https://instagram.com/gen12.software" },
              { k: "linkedin", v: "GEN12 Software", href: "https://www.linkedin.com/company/gen12-software" },
              { k: "respuesta", v: "rápida · días hábiles", href: null },
              { k: "zona",     v: "remoto · GMT-3", href: null },
            ].map(({ k, v, href }) => (
              <li
                key={k}
                className="grid gap-4 py-4 items-baseline"
                style={{ gridTemplateColumns: "120px 1fr", borderBottom: "1px solid var(--rule)" }}
              >
                <span className="text-ink-3 text-[11.5px]">{k}</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                    style={{ borderBottom: "1px solid var(--accent-dim)", paddingBottom: "1px" }}
                  >
                    {v}
                  </a>
                ) : (
                  <span className="text-ink">{v}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: form ── */}
        <div
          className="rounded-[22px] p-8 grid gap-[22px] content-start relative overflow-hidden"
          style={{ background: "var(--paper)", border: "1px solid var(--rule)" }}
        >
          {/* "// new message" label */}
          <span className="absolute top-3.5 right-[18px] font-mono text-ink-4 text-[11px]">
            // new message
          </span>

          {/* WA direct */}
          <div>
            <p className="text-ink-2 text-[13px] mb-4">¿Preferís hablar directo?</p>
            <a
              href="https://wa.me/5491161591957"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-display font-semibold text-[14px] transition-all hover:border-[#25D366]"
              style={{ background: "var(--paper)", border: "1px solid var(--rule-2)", color: "#25D366" }}
            >
              {WA_ICON}
              WhatsApp directo
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px grow" style={{ background: "var(--rule)" }} />
            <span className="font-mono text-ink-4 text-[11px] whitespace-nowrap">o completá el formulario</span>
            <div className="h-px grow" style={{ background: "var(--rule)" }} />
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-[22px]">
            <div className="grid gap-2">
              <label className="text-ink-3 text-[11.5px]">nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Cómo te llamás"
                disabled={isLoading}
                className={inputClass(!!attemptedSubmit && !name)}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-ink-3 text-[11.5px]">email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                disabled={isLoading}
                className={inputClass(!!attemptedSubmit && !email)}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-ink-3 text-[11.5px]">qué necesitás</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Contame en una o dos líneas en qué te puedo ayudar"
                disabled={isLoading}
                className={inputClass(!!attemptedSubmit && !message)}
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-1">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-accent font-display font-semibold text-[15px] tracking-[-0.01em] transition-all hover:-translate-y-px disabled:opacity-60 disabled:translate-y-0"
                style={{ color: "#0A0B0F", boxShadow: "0 6px 30px -10px color-mix(in srgb, var(--accent) 60%, transparent)" }}
              >
                {isLoading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</>
                ) : (
                  <>
                    Enviar mensaje
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl text-red-300 text-sm overflow-hidden"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}
              >
                <XCircle className="w-4 h-4 shrink-0" />{error}
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl text-green-300 text-sm overflow-hidden font-mono"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                ✓ mensaje enviado — te respondemos en &lt; 24h.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>


      {/* Policies modal */}
      <AnimatePresence>
        {showPolicies && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(7,14,24,0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setShowPolicies(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl w-full p-10 rounded-[22px] relative"
              style={{ background: "var(--paper)", border: "1px solid var(--rule)" }}
            >
              <button
                onClick={() => setShowPolicies(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-ink-3 hover:text-ink transition-colors"
                style={{ background: "var(--rule)" }}
              >
                ×
              </button>
              <h3 className="font-display font-bold text-2xl text-ink mb-6 tracking-tight">Políticas de Privacidad</h3>
              <div className="space-y-4 text-ink-2 text-[14px] leading-relaxed">
                <p>En GEN12 SOFTWARE, la privacidad de su información es nuestra prioridad técnica.</p>
                <p>Los datos suministrados a través de este formulario son utilizados exclusivamente para la gestión de su consulta y el diseño preliminar de su propuesta tecnológica.</p>
                <p>No compartimos información con terceros. Su proyecto es tratado bajo estrictos acuerdos de confidencialidad desde el primer contacto.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
