import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zvezde Oriona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="sl">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
