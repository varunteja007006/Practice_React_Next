"use client";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { TOAST_RESPONSE_FAIL } from "./customToasts";

function PDFViewerIframe({ allowDownload }) {
  const localDocPath = localStorage.getItem("docPath");
  const localFileName = localStorage.getItem("fileName");

  const [docPath, setDocPath] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownLoading] = useState(false);
  const [iframeRes, setIFrameRes] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleContextMenu = (e) => {
    // Prevent the context menu from showing up
    e.preventDefault();
  };

  const handleDownload = async () => {
    setIsDownLoading(true);
    try {
      const response = await fetch(docPath);
      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadLink({
        href: url,
        download: fileName ?? "invest4edu.pdf",
      });
      setIsDownLoading(false);
    } catch (error) {
      setIsDownLoading(false);
      TOAST_RESPONSE_FAIL();
      // description: "There was a problem with downloading the file.",
      console.error("Error downloading PDF:", error);
    }
  };

  const getIframeDoc = async () => {
    try {
      const res = await fetch(
        `https://heyzine.com/api1/?pdf=${encodeURIComponent(
          docPath
        )}&k=98ecdb583c58459f&d=0&tpl=d2645d917db1afb2dc7504d274b54f9b303648d9.pdf`
      );
      setIFrameRes(res);
      setIsLoading(false);
    } catch (error) {
      TOAST_RESPONSE_FAIL();
      // description: "There was a problem with opening the file.",
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localDocPath) {
      setDocPath(localDocPath);
    }
    if (localFileName) {
      setFileName(localFileName);
    }
  }, [localDocPath, localFileName]);

  useEffect(() => {
    if (docPath) {
      getIframeDoc();
    }
  }, [docPath]);

  useEffect(() => {
    if (downloadLink) {
      const link = document.createElement("a");
      link.href = downloadLink.href;
      link.download = downloadLink.download;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadLink(null);
    }
  }, [downloadLink]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!iframeRes.ok) {
    return <>Something went wrong. Please try again later...</>;
  }

  return (
    <>
      {allowDownload && (
        <Button
          variant={"i4eDark"}
          className={"w-fit"}
          onClick={handleDownload}
          disabled={isDownloading}
        >
          Download
        </Button>
      )}
      <iframe
        src={iframeRes.url}
        className="flex-1 w-full h-auto"
        title="PDF Viewer"
        onContextMenu={handleContextMenu}
      />{" "}
    </>
  );
}

export default PDFViewerIframe;
