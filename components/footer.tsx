"use client";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-gray-500 mt-20">
      © {currentYear} NEAR MODULAR
    </footer>
  );
}
