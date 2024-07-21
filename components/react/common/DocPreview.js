"use client";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import PDFViewer from "./PDFViewer";
import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function DocPreview() {
  const localDocPath = localStorage.getItem("docPath");
  const [docPath, setDocPath] = useState();
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };
  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };

  useEffect(() => {
    setDocPath(localDocPath);
  }, [localDocPath]);

  if (docPath && _.endsWith(docPath, ".pdf")) {
    return <PDFViewer />;
  }

  if (
    docPath &&
    (_.endsWith(docPath, ".jpeg") ||
      _.endsWith(docPath, ".jpg") ||
      _.endsWith(docPath, ".png"))
  ) {
    return (
      <Card className="w-full h-full mt-3">
        <div className="absolute z-10 flex flex-row items-start gap-3 p-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  disabled={zoom < 0.5}
                  variant="outline"
                  size="icon"
                  onClick={handleZoomOut}
                >
                  <LuZoomOut className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Zoom out</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  disabled={zoom > 2}
                  variant="outline"
                  size="icon"
                  onClick={handleZoomIn}
                >
                  <LuZoomIn className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Zoom In</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div
          id="style-scrollbar-primary"
          className="z-0 flex flex-col items-center justify-center h-full p-4 overflow-auto"
        >
          <Image
            src={docPath}
            width={300}
            height={300}
            alt=""
            className="object-scale-down w-full h-auto"
            unoptimized={true}
            style={{ transform: `scale(${zoom})` }}
          />
        </div>
      </Card>
    );
  }

  return (
    <div>
      <>This file is not supported.</>
    </div>
  );
}
