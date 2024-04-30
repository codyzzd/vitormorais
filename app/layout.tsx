import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { FacebookPixelEvents } from "./comps/pixel";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Krüger Advocacia",
    default: "Krüger Advocacia",
  },
  description: "frase.",
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
      <Suspense fallback={null}>
        <FacebookPixelEvents />
      </Suspense>
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
