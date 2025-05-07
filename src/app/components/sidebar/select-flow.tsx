"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SelectFlowProps {
  flows: Flow[];
}

export function SelectFlow({ flows }: SelectFlowProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full line-clamp-1 overflow-ellipsis"
        >
          {value
            ? flows.find((flow) => flow.attributes.name === value)?.attributes
                .name
            : "Selecione um flow..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Buscar flow..." className="h-9" />
          <CommandList>
            <CommandEmpty>No flow found.</CommandEmpty>
            <CommandGroup className="w-64">
              {flows.map((flow) => (
                <CommandItem
                  className="line-clamp-2"
                  key={flow.attributes.createdAt}
                  value={flow.attributes.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {flow.attributes.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === flow.attributes.name
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
