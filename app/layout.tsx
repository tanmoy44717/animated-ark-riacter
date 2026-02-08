import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARC LABS | Future Energy",
  description: "Advanced clean energy solutions powered by Arc Technology. Join the revolution.",
  icons: {
    icon: '/logo.svg',
  }
};

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import ArcRiactor from "./components/arcriactor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <SmoothScroll />
        <ArcRiactor />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
