"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";

const dummyArray = Array.from({ length: 50 }, (_, index) => {
  return index;
});

const ChildNoMemo = (props: { value: number }) => {
  const countRef = React.useRef(0);

  React.useEffect(() => {
    countRef.current += 1;
  });

  return (
    <div className="space-y-2">
      <p>Child Not wrapped in Memo: {props?.value}</p>
      <div className="flex items-start flex-col md:items-center md:flex-row flex-wrap gap-2">
        Re-rendered: {countRef.current} ( I re-render when you click
        <span className="border-b dark:border-white border-black px-2">
          update child value
        </span>{" "}
        or{" "}
        <span className="border-b dark:border-white border-black px-2">
          update parent value
        </span>
        )
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {dummyArray.map((item, index) => {
          return (
            <div
              key={index}
              className="inline-flex items-center justify-center p-1 dark:bg-blue-900 bg-blue-100 border border-blue-500 size-10"
            >
              {item + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChildNoMemo;