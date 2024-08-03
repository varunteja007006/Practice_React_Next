"use client";

import React from "react";
import { useLearnContext } from "./learn-context-api";
import { Button } from "@/components/ui/button";

const InnerChild = () => {
  const { incValue, setIncValue } = useLearnContext();
  const handleClick = () => setIncValue(incValue + 1);
  return (
    <div className="flex items-center gap-4">
      <Button onClick={handleClick}>Click Me</Button>
      Count inside inner child -{" "}
      <span className="p-2 text-center border-b-2 border-blue-500 min-w-10">
        {incValue}
      </span>
    </div>
  );
};

export default InnerChild;
