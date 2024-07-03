import { Button } from "@/components/ui/button";
import React from "react";
import Child from "./child";

const LearnMemoDemo = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="space-y-4">
      <Button onClick={() => setValue(value + 1)}>Click me</Button>
      <div>
        <Child value={value} />
      </div>
    </div>
  );
};

export default LearnMemoDemo;
