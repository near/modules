import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Near Modular",
  description: "Explore Data Availability on NEAR",
  keywords: [
    "DA",
    "NEAR",
    "Data Availability",
    "Blockchain",
    "Explorer",
    "Near Modular",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <main className="min-h-screen p-5 md:p-10 py-10 max-w-screen-xl mx-auto">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
