"use client";
import React from "react";
import { SampleDatePicker } from "./_components/sample-datepicker";
import { DateRangePicker } from "@/components/ui/custom/date-range-picker";
import SimpleDataTable from "@/components/ui/custom/simple-data-table";
import { columns, payments } from "./_components/sample-table-data";
import Experimental from "./_components/experimental";
import ComboBoxForm from "./_components/combo-box-form";

export default function Page() {
  return (
    <div className="space-y-5">
      <SampleDatePicker />

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

      <div>
        <Experimental />
      </div>

      <div>
        <ComboBoxForm />
      </div>
    </div>
  );
}
