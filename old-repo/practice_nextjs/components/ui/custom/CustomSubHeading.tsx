import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function CustomSubHeading({
  children,
  className,
}: Readonly<{
  children: string | ReactNode;
  className?: string;
}>) {
  return (
    <h3 className={cn("text-md py-2 mb-5 border-b-[1px]", className)}>
      {children}
    </h3>
  );
}

export default CustomSubHeading;
