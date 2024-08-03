"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Child from "./child";
import ChildNoMemo from "./child-no-memo";
import { Separator } from "@/components/ui/separator";

const LearnMemoDemo = () => {
  const [value, setValue] = React.useState(0);
  const [valueParent, setValueParent] = React.useState(0);
  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <Button onClick={() => setValue(value + 1)}>update child value</Button>
        <Button onClick={() => setValueParent(valueParent + 1)}>
          update parent value
        </Button>
      </div>
      <div className="space-y-5">
        <div className="font-semibold text-lg">Parent Value: {valueParent}</div>
        <Child value={value} />
        <Separator />
        <ChildNoMemo value={value} />
      </div>
    </div>
  );
};

export default LearnMemoDemo;
