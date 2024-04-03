"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import SearchInput from "@/components/search-input";
import { nav_components } from "@/components/nav/nav-menu";
import NetworkDropdown from "@/components/nav/network-dropdown";
import { usePathname } from "next/navigation";

export default function MobileNavContent() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden ml-auto">
        <Button variant="outline">Menu</Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>
            <h4 className="text-slate-800 text-base font-extrabold text-left">
              NEAR
              <span className="text-green-500">
                MODULAR
              </span>
            </h4>
          </SheetTitle>
        </SheetHeader>
        <div className="my-6">
          <SearchInput />
        </div>
        <div className="flex flex-col">
          <SheetClose asChild>
            <Link
              className={`mb-6 text-lg font-medium ${
                pathname === "/" ? "text-green-500" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className={`mb-6 text-lg font-medium ${
                pathname === "/explorer"
                  ? "text-green-500"
                  : ""
              }`}
              href="/explorer"
            >
              Explorer
            </Link>
          </SheetClose>
          {nav_components.map((i, key) => (
            <SheetClose asChild key={key}>
              <Link
                className="mb-6 text-lg font-medium flex items-center"
                href={i.href}
              >
                {i.title}
                <ArrowUpRight size={16} className="ml-1" />
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="mt-auto">
          <NetworkDropdown />
        </div>
      </SheetContent>
    </Sheet>
  );
}
