import AppProvider from "@/components/AppProvider";
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

const pretendardFont = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
  adjustFontFallback: false,
  display: "optional",
});

export const metadata: Metadata = {
  title: "Dokkebi World",
  description: "Welcome to D⃣o⃣k⃣k⃣e⃣b⃣i⃣ W⃣o⃣r⃣l⃣d⃣",
  openGraph: {
    title: "Dokkebi World",
    description: "Welcome to D⃣o⃣k⃣k⃣e⃣b⃣i⃣ W⃣o⃣r⃣l⃣d⃣",
    images: "https://dokkebi.world/og.png",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(pretendardFont.className, hailFont.variable)}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
