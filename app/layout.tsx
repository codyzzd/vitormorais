import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { FacebookPixelEvents } from "./comps/pixel";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
