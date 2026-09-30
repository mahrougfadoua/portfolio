import type { Metadata } from "next";
// @ts-expect-error Next.js handles CSS imports at build time.
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadoua Mahroug | Portfolio",
  description:
    "Portfolio of Fadoua Mahroug, Artificial Intelligence and Data Science graduate.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
