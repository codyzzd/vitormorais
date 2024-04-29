import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Krüger Advocacia",
    default: "Krüger Advocacia",
  },
  description:
    "Kruger Toledo Advocacia é um escritório especializado em Direito Bancário,  Atendimento personalizado, transparência, confiabilidade, eficiência e Resultados.",
  verification: {
    other: {
      "facebook-domain-verification": ["xxx"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
