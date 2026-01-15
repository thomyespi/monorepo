import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEN12 Software | Innovación en Desarrollo",
  description: "Desarrollo de software premium, IA y soluciones tecnológicas escalables.",
  openGraph: {
    title: "GEN12 Software | Innovación en Desarrollo",
    description: "Desarrollo de software premium, IA y soluciones tecnológicas escalables.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEN12 Software Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEN12 Software",
    description: "Desarrollo de software premium e IA.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
