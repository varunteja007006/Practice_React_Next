"use client";

import React from "react";
import contactData from "@/app/_components/home/data/contactData";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "@/components/ui/use-toast";

export default function ContactIcons({ className }: { className?: string }) {
  const [copiedText, copy] = useCopyToClipboard();

  function handleCopy(text: string) {
    copy(text);
    toast({
      variant: "success",
      description: `Copied to your clipboard: ${text}`,
    });
  }

  return (
    <TooltipProvider>
      <div className="flex justify-center items-center gap-4">
        {contactData.map((item) => {
          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className={cn(
                    "rounded-full ring-1 dark:ring-purple-300 shadow",
                    className
                  )}
                  onClick={() => handleCopy(item.contact_value)}
                  asChild
                >
                  <a href={`${item.contact_href}`}>
                    <item.contact_icon />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.contact_value}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
