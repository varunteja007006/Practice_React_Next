"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { cn } from "@/lib/utils";
import DebouncedInput from "./DebouncedInput";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { updateNullValues } from "@/utils/utils";

/*
 * Props
 * === Required ===
 * columns
 * data
 *
 * === Table ===
 * tableClassName : string
 * tableHeaderClassName : string
 * filterClassName : string
 * enableGlobalFilter : boolean
 * searchPlaceHolderText : string
 *
 * === Pagination related ===
 * showText : boolean
 * paginationIndexView : boolean
 * showPagination : boolean
 * prevText : string
 * nextText : string
 * showRowSizeSelector : boolean
 * initialPageSize : number
 * tableFooterClassName : string
 * setPageIndex : function
 * isLoading : boolean
 */

function DataTable({
  columns,
  data, // ! DATA SHOULD NOT HAVE NULL VALUES THIS WILL CORRUPT GLOBAL FILTERING FUNCTIONALITY
  prevText = "",
  nextText = "",
  showPagination = true,
  showText = false,
  paginationIndexView = false,
  showRowSizeSelector = false,
  initialPageSize = 10,
  tableFooterClassName = "",
  tableClassName = "",
  tableHeaderClassName = "",
  filterClassName = "",
  enableGlobalFilter = false,
  searchPlaceHolderText = "Search",
  setPageIndex = null,
  isLoading = false,
  customComp = null,
}) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState([]);

  const sanitizedData = React.useMemo(
    () => updateNullValues(data) || [],
    [data]
  );

  const table = useReactTable({
    data: sanitizedData, // table data to be rendered
    columns, // columns
    state: {
      sorting, // sorting state
      pagination, // pagination state
      globalFilter, // global filter
    },
    getCoreRowModel: getCoreRowModel(), // tanstack row model
    getPaginationRowModel: getPaginationRowModel(), // tanstack pagination
    getFilteredRowModel: getFilteredRowModel(), // tanstack filter model
    getSortedRowModel: getSortedRowModel(), // tanstack sorting model
    onPaginationChange: setPagination, // pagination state
    onGlobalFilterChange: setGlobalFilter, // global filtration state
    onSortingChange: setSorting, // sorting state
  });

  React.useEffect(() => {
    if (initialPageSize) {
      if (typeof initialPageSize === "string") {
        return;
      }
      if (initialPageSize > 50) {
        handleTogglePageSize(50);
      } else if (initialPageSize < 0) {
        handleTogglePageSize(10);
      } else {
        handleTogglePageSize(initialPageSize);
      }
    }
  }, [initialPageSize]);

  // toggle the pageSize
  const handleTogglePageSize = (value) => {
    setPagination((oldState) => {
      const intVal = Number(value ? value : "0");
      const newState = { ...oldState, pageSize: intVal };
      return newState;
    });
  };

  const handlePageIndex = (value) => {
    setPagination((oldState) => {
      const newState = { ...oldState, pageIndex: value };
      return newState;
    });
  };

  React.useEffect(() => {
    if (setPageIndex) setPageIndex(table.getState().pagination.pageIndex);
  }, [table.getState().pagination.pageIndex]);

  // component
  const PaginationPageIndexView = () => {
    return (
      <>
        {table.getPageCount() > 0 && (
          <div className="">
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      {enableGlobalFilter && (
        <div
          className={cn(
            "flex flex-col lg:flex-row space-y-2.5 items-center justify-start py-4",
            filterClassName.toString()
          )}
        >
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="max-w-sm"
            placeholder={searchPlaceHolderText}
          />
          {customComp && customComp}
        </div>
      )}
      <div className={cn("rounded-md border", tableClassName.toString())}>
        <ScrollArea className="p-2 rounded-md max-h-fit">
          <Table>
            <TableHeader className={cn("", tableHeaderClassName)}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        style={{ width: `${header.getSize()}px` }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{ width: `${cell.column.columnDef.size}px` }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No Results
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {(showRowSizeSelector || showPagination) && (
        <div
          className={cn(
            "flex flex-col items-stretch lg:flex-row lg:items-center justify-end gap-4 py-4",
            tableFooterClassName.toString()
          )}
        >
          {showRowSizeSelector && (
            <div>
              <Select onValueChange={handleTogglePageSize}>
                <SelectTrigger className="w-fit  max-w-[180px]">
                  <SelectValue
                    placeholder={`${initialPageSize} Rows per Page`}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10" className="">
                    10 Rows per Page
                  </SelectItem>
                  {table.getFilteredRowModel().rows.length > 10 && (
                    <>
                      {" "}
                      <SelectItem value="30" className="">
                        30 Rows per Page
                      </SelectItem>
                      <SelectItem value="50" className="">
                        50 Rows per Page
                      </SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
          )}
          {showPagination && (
            <div className="flex flex-row items-center justify-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size={"icon"}
                      onClick={() => handlePageIndex(0)}
                      disabled={!table.getCanPreviousPage()}
                    >
                      <MdOutlineKeyboardDoubleArrowLeft />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to First Page</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size={showText ? "sm" : "icon"}
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      {showText ? (
                        prevText || "Previous"
                      ) : (
                        <MdOutlineKeyboardArrowLeft />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to Previous Page</p>
                  </TooltipContent>
                </Tooltip>
                {paginationIndexView && <PaginationPageIndexView />}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size={showText ? "sm" : "icon"}
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      {showText ? (
                        nextText || "Next"
                      ) : (
                        <MdOutlineKeyboardArrowRight />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Go to Next Page</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size={"icon"}
                      onClick={() => handlePageIndex(table.getPageCount() - 1)}
                      disabled={!table.getCanNextPage()}
                    >
                      <MdOutlineKeyboardDoubleArrowRight />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Go to Last Page</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DataTable;