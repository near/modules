"use client";
import React from "react";
import NavMenu from "@/components/nav/nav-menu";
import SearchInput from "@/components/search-input";
import NetworkDropdown from "@/components/nav/network-dropdown";

export default function DesktopNavContent() {
  return (
    <div className="hidden md:flex md:items-center w-full">
      <div className="ml-12">
        <NavMenu />
      </div>
      <div className="w-72 max-w-72 ml-auto mr-4">
        <SearchInput />
      </div>
      <NetworkDropdown />
    </div>
  );
}
