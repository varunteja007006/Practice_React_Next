/*
 * Use this component for react slick since this component imports
 * the required css and other items
 *
 * Props
 *
 * // Required
 * 1. value (Renamed here as initialValue) = the value that you want to filter /
 * the value omitted by filter function
 *
 * 2. debounce = an integer which describes how long to wait
 *
 * 3. onChange = this function is the filter function to which we
 * pass the value (local value)
 *
 * // Optional
 * All the props that are HTML input attributes
 */

"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

function DebouncedInput({
  value: initialValue, // renamed value prop to initialValue
  onChange,
  debounce = 500,
  ...props
}: Readonly<
  | {
      value: string;
      onChange: (value: string) => void;
      debounce?: number;
    }
  | any
>) {
  const [value, setValue] = useState(initialValue); // local value state to track input

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default DebouncedInput;
