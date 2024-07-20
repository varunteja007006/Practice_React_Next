import React from "react";

export default function TailwindNumberInput() {
  return (
    <div className="space-y-4 ">
      <div>TailwindNumberInput</div>
      <div>
        <input
          type="number"
          min={0}
          className="w-full p-2 lg:w-2/3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="how to remove the arrows from the input "
        />
      </div>
    </div>
  );
}
