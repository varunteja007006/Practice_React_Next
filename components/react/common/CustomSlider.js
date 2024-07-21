import React from "react";
import * as Slider from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

function CustomSlider(props) {
  return (
    <Slider.Root className={cn("relative flex items-center select-none touch-none w-full max-w-xl h-5", props?.SliderRootClassName ?? "")} {...props}>
      <Slider.Track className={cn("bg-slate-200 relative flex-grow rounded-lg h-2", props?.SliderTrackClassName ?? "")}>
        <Slider.Range className={cn("absolute bg-brandLight rounded-full h-full", props?.SliderRangeClassName ?? "")} />
      </Slider.Track>
      <Slider.Thumb className={cn("block w-6 h-6 bg-white rounded-full border-2 focus:outline-0 focus:shadow hover:bg-slate-100", props?.SliderThumbClassName ?? "")} aria-label="Volume" />
    </Slider.Root>
  );
}

export default CustomSlider;
