import type { Metadata } from "next";
import "../styles/globals.css";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { helveticaStd } from "../../public/fonts/helvetica-std";
import { helvetica } from "../../public/fonts/helvetica";

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
      <body
        className={`${helveticaStd.variable} ${helvetica.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
