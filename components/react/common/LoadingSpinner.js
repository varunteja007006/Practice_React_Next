import React from "react";
import { Skeleton } from "../ui/skeleton";
import { FaSpinner } from "react-icons/fa6";
import { cn } from "@/lib/utils";

function LoadingSpinner({ message = "", textClassName = "" }) {
  return (
    <Skeleton
      className={`w-full h-full flex-1 p-4 flex flex-col items-center justify-center bg-inherit`}
    >
      <div className={cn("flex flex-row gap-4 items-center", textClassName)}>
        <FaSpinner className="w-6 h-6 animate-spin" />
        {message || `Loading....`}
      </div>
    </Skeleton>
  );
}

export default LoadingSpinner;
