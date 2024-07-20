import React from "react";
import contactData from "@/local-data/contactData";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ContactIcons() {
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
                  className="rounded-full"
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
