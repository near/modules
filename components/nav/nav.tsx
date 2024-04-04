"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DesktopNavContent from "@/components/nav/desktop-nav-content";
import MobileNavContent from "@/components/nav/mobile-nav-content";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos ||
        currentScrollPos < 50;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  if (false) {
    return (
      <nav
        className={`border-b mb-12 text-sm bg-white fixed top-0 left-0 w-full transition-all z-50 duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl flex items-center mx-auto px-5 py-4 md:px-10">
          <Link href="/">
            <h4 className="text-slate-800 text-base font-extrabold">
              NEAR
              <span className="text-green-500">
                MODULAR
              </span>
            </h4>
          </Link>
          <MobileNavContent />
          <DesktopNavContent />
        </div>
      </nav>
    );
  } else {
    return <OldNav />;
  }
}

const OldNav = () => (
  <nav className="flex mb-12 text-sm items-center">
    <h4 className="text-slate-800 text-base font-extrabold">
      NEAR
      <span className="text-green-500">MODULAR</span>
    </h4>
    <a
      className="ml-auto underline text-slate-800"
      href="https://docs.near.org/abstraction/data-availability"
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
