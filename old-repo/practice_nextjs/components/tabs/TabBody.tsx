"use client";
import { TData } from "@/app/(root)/react/projects/tabs/page";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function TabBody({ data }: { data: TData[] }) {
  const [tabActive, setTabActive] = useState(1);
  const [selectedData, setSelectedData] = useState<TData | undefined>(data[0]);
  const handleSetActiveTab = (order: number) => {
    setTabActive(order);
  };

  useEffect(() => {
    if (data) {
      setSelectedData(data?.find((item) => item.order === tabActive));
    }
  }, [tabActive]);

  return (
    <div>
      <div className="flex flex-row gap-5 items-center">
        {data.map((item: TData) => {
          return (
            <Button
              key={item.id}
              className={cn(
                "",
                tabActive === item.order && "bg-green-400 text-black"
              )}
              onClick={() => handleSetActiveTab(item.order)}
            >
              {item.company}
            </Button>
          );
        })}
      </div>
      {selectedData && (
        <div className="p-5">
          <p className="text-lg font-semibold text-white mb-3">
            {" "}
            {selectedData.title}{" "}
          </p>
          <p className="text-white mb-3"> {selectedData.dates} </p>

          <ul className="ps-5 list-disc">
            {selectedData.duties.map((item) => {
              return <li className="mb-3">{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TabBody;
