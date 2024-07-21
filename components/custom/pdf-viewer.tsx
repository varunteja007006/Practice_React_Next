"use client";
import * as React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PDFViewer({ docURL }: Readonly<{ docURL: string }>) {
  const [numPages, setNumPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [pageScale, setPageScale] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function changePageScale(params: number) {
    docURL;
    setPageScale((prevState) => prevState + params);
  }

  function zoomIn() {
    changePageScale(0.2);
  }
  function zoomOut() {
    changePageScale(-0.2);
  }

  return (
    <div className="flex flex-col items-center w-full gap-3 overflow-hidden justify-stretch">
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row min-w-full gap-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  disabled={pageScale === 1}
                  onClick={zoomOut}
                  size="icon"
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
                  variant="outline"
                  disabled={pageScale === 2}
                  onClick={zoomIn}
                  size="icon"
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
      </div>
      <div className="flex flex-col items-center object-contain w-full h-full mt-3 overflow-auto">
        <div className="overflow-x-auto">
          <Document
            file={docURL}
            onLoadSuccess={onDocumentLoadSuccess}
            className={"w-[60%]"}
          >
            <Page
              scale={pageScale}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <p className="text-sm">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className="flex flex-row min-w-full gap-10">
          <Button
            variant="outline"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
