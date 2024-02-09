"use client";
import React, { useState, useEffect } from "react";
import Home from "@/components/pages/home";
import Nav from "@/components/nav";

export default function Page() {
  return (
    <main className="min-h-screen p-24 pt-10 max-w-screen-xl mx-auto">
      <Nav />
      <Home />
    </main>
  );
}
