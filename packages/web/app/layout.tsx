import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
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
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex flex-col flex-1 overflow-hidden pt-16">
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
