"use client";
import React from "react";
import { SampleDatePicker } from "./_components/sample-datepicker";
import PieChartHCR from "@/components/custom/pie-chart-HCR";
import { DateRangePicker } from "@/components/custom/date-range-picker";
import SimpleDataTable from "@/components/custom/simple-data-table";
import { columns, payments } from "./_components/sample-table-data";

const sampleData = [
  {
    name: "Water",
    y: 55.02,
  },
  {
    name: "Fat",
    sliced: true,
    selected: true,
    y: 26.71,
  },
  {
    name: "Carbohydrates",
    y: 1.09,
  },
  {
    name: "Protein",
    y: 15.5,
  },
  {
    name: "Ash",
    y: 1.68,
  },
];

export default function page() {
  return (
    <div className="space-y-5">
      <SampleDatePicker />

      <div className=" charts w-96">
        <PieChartHCR data={sampleData} />
      </div>

      <div>
        <DateRangePicker
          onUpdate={(values) => console.log(values)}
          initialDateFrom="2023-01-01"
          initialDateTo="2023-12-31"
          align="start"
          locale="en-GB"
          showCompare={false}
        />
      </div>

      <div>
        <SimpleDataTable columns={columns} data={payments} />
      </div>
    </div>
  );
}
