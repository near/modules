"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "@phosphor-icons/react";

export default function InfoTooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="mx-1">
          <Info size={16} />
        </TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
