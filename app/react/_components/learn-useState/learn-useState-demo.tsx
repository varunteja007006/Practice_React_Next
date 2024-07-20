import { Button } from "@/components/ui/button";
import React from "react";

const LearnUseStateDemo = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="flex flex-row items-center gap-4">
      <Button onClick={() => setValue(value + 1)} className="w-40">
        Click me
      </Button>
      <p className="w-40 p-2 text-center border-b-2 border-blue-800 hover:bg-slate-50">
        {value}
      </p>
    </div>
  );
};

export default LearnUseStateDemo;
