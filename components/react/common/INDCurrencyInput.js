import { cn } from "@/lib/utils";
import React, { forwardRef, memo } from "react";
import { NumberFormatBase } from "react-number-format";

const INDCurrencyInput = forwardRef(function INDCurrencyInput(
  { maximumFractionDigits, ...props },
  ref
) {
  const format = (numStr) => {
    if (numStr === "") return "";
    if (props.max) {
      const intNumStr = Number(numStr);
      if (intNumStr > props.max) {
        const formatted = intNumStr / 10;
        return new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: maximumFractionDigits || 0,
        }).format(formatted.toString());
      }
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: maximumFractionDigits || 0,
    }).format(numStr);
  };

  return (
    <NumberFormatBase
      {...props}
      format={format}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      )}
    />
  );
});

export default memo(INDCurrencyInput);
