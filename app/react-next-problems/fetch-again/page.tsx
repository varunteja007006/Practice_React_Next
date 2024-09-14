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
    useFetchAgainHook(url);

  if (error) {
    return <>Oops something went wrong!!!</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (_.isEmpty(data)) {
    return <>No data</>;
  }

  return (
    <div>
      FetchAgain
      <div>
        {data ? (data as Data[]).map((item: Data) => item.title) : null}
      </div>
    </div>
  );
}
