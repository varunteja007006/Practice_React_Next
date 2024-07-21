import React from "react";
import { SampleDatePicker } from "./_components/sample-datepicker";
import PieChartHCR from "@/components/custom/pie-chart-HCR";

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
    </div>
  );
}
