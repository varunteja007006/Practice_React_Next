import TabBody from "@/components/tabs/TabBody";
import React from "react";
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

async function TabsPage() {
  const data = await getData();

  if (!data || data.length === 0) {
    return <>No Data</>;
  }

  return (
    <div>
      <TabBody data={data} />
    </div>
  );
}

export default TabsPage;
