import React from "react";
import Basic from "./Basic";
import BasicReact from "./BasicReact";
import { Separator } from "@/components/ui/separator";

function ImageDragDrop() {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <p className="text-lg font-semibold">
          Basic Example from React Dropzone
        </p>
        <Basic />
      </div>
      <Separator />
      <div className="space-y-3">
        <p className="text-lg font-semibold">Using React hooks</p>
        <BasicReact />
      </div>
    </div>
  );
}

export default ImageDragDrop;
