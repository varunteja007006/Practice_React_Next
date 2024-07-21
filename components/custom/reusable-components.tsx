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

export const ErrorMessage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-[11px] font-medium text-destructive", className)}>
      {children}
    </p>
  );
};

export const Required = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-xs text-red-500"> {children} </span>;
};

export function LoadingSpinner({
  message,
  textClassName,
}: Readonly<{
  message?: string;
  textClassName?: string;
}>) {
  return (
    <Skeleton
      className={`w-full h-full flex-1 p-4 flex flex-col items-center justify-center bg-inherit`}
    >
      <div
        className={cn("flex flex-row gap-4 items-center", textClassName ?? "")}
      >
        <FaSpinner className="w-6 h-6 animate-spin" />
        {message ?? `Loading....`}
      </div>
    </Skeleton>
  );
}
