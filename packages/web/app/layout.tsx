import { cn } from "@/utils/ui";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hailFont = localFont({
  src: "../public/fonts/hail.woff2",
  display: "swap",
  preload: true,
  variable: "--font-hail",
});

export const metadata: Metadata = {
  title: "Dokkebi World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(hailFont.variable)}>
      <body>{children}</body>
    </html>
  );
}
