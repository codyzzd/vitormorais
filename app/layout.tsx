import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Suspense } from "react";
import { FacebookPixelEvents } from "./comps/pixel";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Método Vitor Morais",
    default: "Método Vitor Morais",
  },
  description:
    "Obtenha acesso ao meu método de treino e veja como é simples perder peso, ganhar força e definir o corpo em treinos que tomam menos de 30 minutos do seu dia.",
  /*verification: {
    other: {
      "facebook-domain-verification": ["xxx"],
    },
  },*/
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Suspense fallback={null}>
        <FacebookPixelEvents />
      </Suspense>
      <Analytics />
      <SpeedInsights />
      <body className={`${inter.variable} ${bebas.variable}`}>{children}</body>
    </html>
  );
}
