"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { TimePicker } from "@/components/ui/time-picker";

function DateTimePicker(props) {
  return (
    <Popover>
      <FormControl>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !props?.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {props?.value ? (
              format(props?.value, "PPP HH:mm")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
      </FormControl>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={props?.value}
          onSelect={props?.onChange}
          initialFocus
        />
        <div className="p-3 border-t border-border">
          <TimePicker setDate={props?.onChange} date={props?.value} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default DateTimePicker;
