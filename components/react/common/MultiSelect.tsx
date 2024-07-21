"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

import { Check, X, ChevronsUpDown } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { CommandList } from "cmdk";
import { validArray } from "@/utils/validation";
import usePopoverSize from "@/hooks/usePopoverSize";

const MultiSelect = React.forwardRef(function MultiSelect(
  {
    options,
    selected,
    onChange,
    className,
    sizeRefValue,
    sizeOffset,
    id,
    ...props
  },
  ref
) {
  const [open, setOpen] = React.useState(false);
  const popupRef = React.useRef(null);
  const popoverContentDimensions = usePopoverSize(
    sizeRefValue || popupRef.current || null,
    sizeOffset || 0
  );
  const handleUnselect = (item) => {
    onChange(selected.filter((i) => i !== item));
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      {...props}
      suppressHydrationWarning
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between ${
            selected?.length > 1 ? "h-fit min-h-10 py-0.5" : "h-10"
          }`}
          onClick={() => setOpen(!open)}
          ref={popupRef}
          id={id}
        >
          <div className="flex flex-wrap gap-1">
            {selected.map((item) => {
              const name =
                options?.find((optionItem) => optionItem.value === item)
                  ?.label ?? "";
              return (
                <Badge
                  variant="i4eDark"
                  key={item}
                  className="my-0.5"
                  onClick={() => handleUnselect(item)}
                >
                  {name}
                  <button
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(item);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(item)}
                  >
                    <X className="w-3 h-3 text-muted/[0.8] hover:text-muted" />
                  </button>
                </Badge>
              );
            })}
            {!validArray(selected) && (
              <span className="text-gray-600">Select</span>
            )}
          </div>
          <ChevronsUpDown className="w-4 h-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{ ...popoverContentDimensions }}
        className="w-full p-0"
      >
        <Command className={className}>
          <CommandInput placeholder="Search ..." />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup className="overflow-auto max-h-64">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    onChange(
                      selected.includes(option.value)
                        ? selected.filter((item) => item !== option.value)
                        : [...selected, option.value]
                    );
                    setOpen(true);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(option.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

export { MultiSelect };
