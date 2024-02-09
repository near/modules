"use client";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex mb-12 text-sm">
      <h4 className="text-slate-800 text-sm font-bold">
        NEAR
        <span className="text-green-500">MODULAR</span>
        .COM
      </h4>
      <a
        className="ml-auto underline text-slate-800"
        href="#docs"
      >
        Docs
      </a>
      <a
        className="underline ml-4 text-slate-800"
        href="#github"
      >
        Github
      </a>
      <a
        className="underline ml-4 text-slate-800"
        href="#contact"
      >
        Contact
      </a>
    </nav>
  );
}
