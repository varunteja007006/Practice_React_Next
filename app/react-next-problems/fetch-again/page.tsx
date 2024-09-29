"use client";

import useFetchAgainHook from "@/hooks/fetch-again";
import React from "react";
import _ from "lodash";

type Data = {
  id: number;
  title: string;
  userId: number;
};

export default function FetchAgain() {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  const {
    data,
    isLoading,
    error,
  }: { data: Data[] | null; isLoading: boolean; error: unknown } =
    useFetchAgainHook(url, 5000);

  if (error) {
    return (
      <div className=" min-h-[calc(100vh-20rem)]">
        Oops something went wrong!!!
      </div>
    );
  }

  if (isLoading) {
    return <div className=" min-h-[calc(100vh-20rem)]">Loading...</div>;
  }

  if (_.isEmpty(data)) {
    return <div className=" min-h-[calc(100vh-20rem)]">No data</div>;
  }

  return (
    <div>
      ------------- FetchAgain ----------------
      <div>
        {data ? (data as Data[]).map((item: Data) => item.title) : null}
      </div>
    </div>
  );
}
