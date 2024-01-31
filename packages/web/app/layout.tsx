import "@glideapps/glide-data-grid/dist/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "./components/AppProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dokkebi World Admin",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
