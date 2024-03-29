"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Combobox({
  data,
  value,
  setValue,
}: {
  data: any[];
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between my-5 py-5 rounded-lg"
        >
          {value ? (
            <>{`${
              data.find((rollup) => rollup.value === value)
                ?.label
            }`}</>
          ) : (
            "Select rollup..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search rollup..." />
          <CommandEmpty>No rollup found.</CommandEmpty>
          <CommandGroup>
            {data
              .sort((a, b) =>
                a.label.localeCompare(b.label)
              )
              .map((rollup) => (
                <CommandItem
                  key={rollup.value}
                  value={rollup.value}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue === value
                        ? ""
                        : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === rollup.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {rollup.label}
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
