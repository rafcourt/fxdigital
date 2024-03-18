import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyFlix",
  description: "A simple OTT VOD app powered by data from the TMDB API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><div id="app" className="w-hd-tv-app h-hd-tv-app overflow-hidden bg-gray-900">{children}</div></body>
    </html>
  );
}