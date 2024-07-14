import React, { ReactNode } from "react";

function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <span className="p-1 ps-3 border-l-2 border-green-400 bg-black text-white font-mono font-medium m-3">
      {children}
    </span>
  );
}

export default CodeBlock;
