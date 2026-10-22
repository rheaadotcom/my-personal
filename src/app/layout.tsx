import type { Metadata } from "next";
import { Caveat, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riya Bhardwaj — Portfolio",
  description: "Portfolio of Riya Bhardwaj, a Computer Science and Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${caveat.variable}`}>{children}</body>
    </html>
  );
}
