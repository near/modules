"use client";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex mb-12 text-sm items-center">
      <h4 className="text-slate-800 text-sm font-bold">
        NEAR
        <span className="text-green-500">MODULAR</span>
        .COM
      </h4>
      <a
        className="ml-auto underline text-slate-800"
        href="https://docs.near.org/data-availability/welcome"
      >
        Docs
      </a>
      <a
        className="underline ml-4 text-slate-800"
        href="https://github.com/near/rollup-data-availability/"
      >
        Github
      </a>
      <a
        className="underline ml-4 text-slate-800"
        href="https://forms.gle/LWJoTpTiCbSheUL26"
      >
        Contact
      </a>
    </nav>
  );
}
