"use client";
import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  return (
    <div className="relative">
      <MagnifyingGlass
        size={22}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
      <Input
        type="email"
        placeholder="Search by TX hash / submitter..."
        className="pl-12"
      />
    </div>
  );
}
