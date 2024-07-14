import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { MdDoubleArrow } from "react-icons/md";

function CustomHeading({
  children,
  className,
}: Readonly<{ children: string | ReactNode; className?: string }>) {
  return (
    <h3 className={cn("py-2 text-xl", className)}>
      <span className="flex flex-row items-center">
        <MdDoubleArrow className="text-2xl me-2" />
        {children}
      </span>
    </h3>
  );
}

export default CustomHeading;
