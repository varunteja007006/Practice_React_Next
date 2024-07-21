import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // custom
        success:
          "border-transparent bg-green-600 text-primary-foreground hover:bg-green-600/80",

        warning:
          "bg-yellow-300 text-secondary-foreground hover:bg-yellow-300/90",
        purple:
          "bg-purple-100 text-secondary-foreground hover:bg-purple-200/90",
        muted: "bg-gray-200 text-secondary-foreground hover:bg-gray-200/90",
        cool: "bg-sky-200 text-secondary-foreground hover:bg-sky-200/90",
        i4eDark: "text-white bg-brandDark hover:bg-brandDark/0.90",
        i4eLight: "text-black bg-brandLight hover:bg-brandLight/0.90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
