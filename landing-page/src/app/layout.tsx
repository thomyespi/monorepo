import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/content/config.json";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${config.company.name} | Soluciones Eléctricas Premium`,
  description: config.company.description,
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: config.company.name,
    description: config.company.description,
    url: 'https://tu-sitio.com',
    siteName: config.company.name,
    images: [
      {
        url: '/images/industrial.png',
        width: 1200,
        height: 630,
        alt: config.company.name,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.company.name,
    description: config.company.description,
    images: ['/images/industrial.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased selection:bg-red-100 selection:text-red-900`}>
        {children}
      </body>
    </html>
  );
}
