"use client";
import React from "react";
import Home from "@/components/pages/home";
import Nav from "@/components/nav/nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <main className="min-h-screen p-5 md:p-10 py-10 max-w-screen-xl mx-auto">
      <Nav />
      <Home />
      {children}
      <footer className="text-center text-sm text-gray-500 mt-20">
        © {currentYear} NEAR MODULAR
      </footer>
    </main>
  );
}
