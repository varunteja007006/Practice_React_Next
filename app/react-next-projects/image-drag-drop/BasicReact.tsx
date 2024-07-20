"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

function BasicReact() {
  const [images, setImages] = useState<any>([]);
  const fileInputRef = useRef<any>(null);
  function initiateFileUpload(e: any) {
    fileInputRef.current.click();
  }

  function addFiles(files: any) {
    if (files.length === 0) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (!images.some((item: any) => item.name === files[i].name)) {
        setImages((oldState: any) => {
          const newState = [
            ...oldState,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ];
          return newState;
        });
      }
    }
  }

  function handleFileUpload(e: any) {
    const files = e.target.files;
    addFiles(files);
  }

  const handleOnDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };
  const handleOnDragLeave = (e: any) => {
    e.preventDefault();
  };
  const handleOnDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    addFiles(files);
  };

  return (
    <div>
      <div className="flex flex-row gap-5 items-start justify-start">
        <div
          className=" bg-transparent size-72 border p-5"
          onClick={initiateFileUpload}
          onDragLeave={handleOnDragLeave}
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
        >
          <span className="">Drag & Drop</span>
          <input
            type="file"
            accept=".pdf,.jpeg,.jpg,.png"
            name="files"
            id="files"
            multiple={true}
            ref={fileInputRef}
            onChange={handleFileUpload}
            hidden={true}
          />
        </div>
        <div className="space-y-3">
          <Button
            variant="destructive"
            onClick={() => {
              setImages([]);
              fileInputRef.current.value = null;
            }}
          >
            Delete All Files
          </Button>
          <p>Files list:</p>
          <ul>
            {images.map((item: any) => {
              return <li key={item.url}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BasicReact;
