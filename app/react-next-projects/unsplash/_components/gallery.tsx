"use client";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useUnsplashGlobalContext } from "../context/unsplash-context";

function Gallery({ apiKey }: Readonly<{ apiKey: string | undefined }>) {
  const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}`;

  const { searchTerm } = useUnsplashGlobalContext();

  const result = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response;
    },
  });

  if (result.isLoading) {
    return (
      <div className="my-5 alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6 stroke-current shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Searching for the images.</span>
      </div>
    );
  }

  if (result.isError) {
    return (
      <div className="my-5 alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Something went wrong.</span>
      </div>
    );
  }

  const outputData = result?.data?.data.results;
  if (outputData.length < 1) {
    return (
      <div className="my-5 alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>No results found.</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 my-5">
        {outputData.map((item: any) => {
          return (
            <img
              src={item?.urls?.regular}
              alt={item?.alt_description}
              key={item?.id}
              className="h-40 w-50"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
