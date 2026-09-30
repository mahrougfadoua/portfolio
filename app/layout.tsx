import type { Metadata } from "next";
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
