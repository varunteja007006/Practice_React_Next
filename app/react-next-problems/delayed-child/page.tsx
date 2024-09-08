"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function DelayedChild() {
  const [value, setValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState("");

  React.useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, 3000);

    return () => clearTimeout(timerID);
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh]">
      <Card className="space-y-3 max-w-md p-5 border-purple-900 text-lg">
        <p className="underline">Delayed Child</p>
        <p>Actual value: {value}</p>
        <p>Debounced value: {debouncedValue}</p>
        <Input
          placeholder="Enter something"
          value={value}
          onChange={(e) => setValue(e.target.value || "")}
        />
      </Card>
    </div>
  );
}
