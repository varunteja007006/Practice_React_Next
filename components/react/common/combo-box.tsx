"use client";
import React, { useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FormControl } from "../ui/form";
import { Button } from "../ui/button";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { CommandList, CommandLoading } from "cmdk";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import { validArray } from "@/utils/validation";
import _ from "lodash";
import { generateUniqueID } from "@/utils/utils";
import usePopoverSize from "@/hooks/usePopoverSize";
import LoadingSpinner from "@/components/common/LoadingSpinner";
/**
 * Render a ComboBox component with a dropdown menu for selecting options.

 * @param {{
 * selectedValue: string,
 * options: array,
 * form: ReactHookForm,
 * id: string(ReactHookForm),
 * value: string,
 * label: string,
 * enableKeyGen: string,
 * cbFunc: function,
 * required: boolean,
 * disabled: boolean,
 * sizeRefValue: HTMLElement,
 * sizeOffset:number
 * loading:boolean
 * }} props - The properties passed to the ComboBox component.
 * @return {JSX.Element} The ComboBox component JSX.
 */

function ComboBox(props) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const popoverContentDimensions = usePopoverSize(
    props?.sizeRefValue || popupRef.current || null,
    props?.sizeOffset || 0
  );

  // check if selectedValue is present or not
  const checkSelectedValue = () => {
    if (!props?.selectedValue) {
      return true;
    }
    return !props?.options?.find(
      (item) => item[props?.value] === props?.selectedValue
    )?.[props?.label];
  };

  // get select value based on selectedValue & also reset the value of this dropdown
  // if selectedValue is not present
  const getSelectedValue = () => {
    if (!props?.selectedValue) {
      return "Select";
    }
    const label = props?.options?.find(
      (item) => item[props?.value] === props?.selectedValue
    )?.[props?.label];
    return label || "Select";
  };

  const handleOnSelect = (item) => {
    if (props.required) {
      props?.form?.setValue(props?.id, item[props?.value]);
    } else {
      props?.form?.getValues(props?.id) === item[props?.value]
        ? props?.form?.setValue(props?.id, "")
        : props?.form?.setValue(props?.id, item[props?.value]);
    }
    if (props.cbFunc && _.isFunction(props.cbFunc)) {
      props.cbFunc(item[props?.value]);
    }
    props?.form?.clearErrors(props?.id);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between disabled:hover:bg-white/[0.7] !pointer-events-auto disabled:cursor-not-allowed",
              checkSelectedValue() && "text-muted-foreground"
            )}
            ref={popupRef}
            disabled={props?.disabled}
            id={props?.id}
          >
            <span className="overflow-hidden text-ellipsis">
              {getSelectedValue()}
            </span>
            <HiOutlineChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 overflow-auto"
        style={{ width: "280px", ...popoverContentDimensions }}
      >
        <Command>
          <CommandInput placeholder="Search..." />
          <ScrollArea className="h-[200px]">
            <CommandList>
              <CommandEmpty>Not found</CommandEmpty>
              {props?.loading && (
                <CommandLoading>
                  <LoadingSpinner />
                </CommandLoading>
              )}
              <CommandGroup key={props?.options}>
                {validArray(props?.options) &&
                  props?.options.map((item) => (
                    <CommandItem
                      className={cn(
                        ``,
                        props?.form?.getValues(props?.id) ===
                          item[props?.value] && "bg-slate-200"
                      )}
                      value={`${item[props?.label] + item[props?.value]}`}
                      key={
                        props?.enableKeyGen
                          ? generateUniqueID()
                          : item[props?.value]
                      }
                      onSelect={() => handleOnSelect(item)}
                    >
                      {item[props?.label]}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ComboBox;
