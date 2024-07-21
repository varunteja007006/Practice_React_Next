"use client";
import { useEffect, useState } from "react";

function usePopoverSize(gridRefValue, offset = 0) {
  const [popoverContentDimensions, setPopoverContentDimensions] = useState({
    width: "280px",
  });

  useEffect(() => {
    if (gridRefValue) {
      const width = gridRefValue?.offsetWidth || 280;
      setPopoverContentDimensions({
        width: `${width + offset}px`,
      });
    }
  }, [gridRefValue]);

  return popoverContentDimensions;
}

export default usePopoverSize;