import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gen12-software.com"),
  title: "Gen12Software — Ingeniería con propósito",
  description: "Construimos software que funciona. Web, e-commerce, apps e IA — rápido, limpio y sin deuda técnica.",
  openGraph: {
    title: "Gen12Software",
    description: "Construimos software que funciona.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen12Software",
    description: "Construimos software que funciona.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${jetbrains.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <div className="grid-bg" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
