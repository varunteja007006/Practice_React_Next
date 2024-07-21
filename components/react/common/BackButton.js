"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/UserStore";

export function BackButton(props) {
  const { loggedInUser } = useUserStore();

  const router = useRouter();
  const handleBackNavigation = () => {
    if (props?.goBackURL) {
      router.push(
        props?.goBackURL === "/dashboard"
          ? loggedInUser?.baseRoute || ""
          : props?.goBackURL,
        { scroll: props?.scroll }
      );
      return;
    }
    router.back();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            onClick={handleBackNavigation}
            size="icon"
            className={cn("mb-2 hidden lg:flex", props?.className || "")}
          >
            <MdArrowBack className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Back</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function BackLabelButton() {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };
  return (
    <Button variant="outline" onClick={handleBackNavigation} className="mb-2">
      <MdArrowBack className="w-4 h-4 me-2" /> Back
    </Button>
  );
}
