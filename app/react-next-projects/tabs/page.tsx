import React from "react";
import TabBody from "./_component/tabs-body";
const url = "https://course-api.com/react-tabs-project";

export interface TData {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function page() {
  const data = await getData();

  if (!data || data.length === 0) {
    return <>No Data</>;
  }

  return (
    <div className="p-2 lg:px-10 lg:py-5">
      <TabBody data={data} />
    </div>
  );
}
