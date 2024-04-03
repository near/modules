import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NearModular.com",
  description: "Explore modularity on NEAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen p-5 md:p-10 py-10 mt-24 max-w-screen-xl mx-auto">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
