import { FaSpinner } from "react-icons/fa6";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

export const Spinner = () => {
  return (
    <Skeleton className=" bg-inherit">
      <FaSpinner className="w-6 h-6 animate-spin" />
    </Skeleton>
  );
};

export const ErrorMessage = ({ children, className }) => {
  return (
    <p className={cn("text-[11px] font-medium text-destructive", className)}>
      {children}
    </p>
  );
};

export const CustomSeparator = ({ className }) => {
  return (
    <div className={cn("w-full h-[1px]  bg-gray-300 my-4", className)}></div>
  );
};

export const Required = ({ children }) => {
  return <span className="text-xs text-red-500"> {children} </span>;
};
