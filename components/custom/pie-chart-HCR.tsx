"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PieChartHCR({
  data,
  optionalOptions,
}: Readonly<{
  data: any;
  optionalOptions?: any;
}>) {
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full rounded-md bg-slate-200">
        No Data
      </div>
    );
  }

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      type: "pie",
      // width: "full",
      height: "auto",
    },
    title: {
      enabled: false, // Hide the pie chart title
      text: "",
      align: "center", // horizontal alignment
      verticalAlign: "top", // vertical alignment
      y: 30, // position in y-axis
    },
    plotOptions: {
      // innerSize: "50%",
      series: {
        borderWidth: 0,
        colorByPoint: true,
        minSize: 90,
        type: "pie",
        size: 120,
        innerSize: "60%",
        showInLegend: true,
        dataLabels: {
          enabled: false,
          crop: false,
          // distance: "-10%",
          style: {
            fontWeight: "bold",
            fontSize: "16px",
          },
          connectorWidth: 0,
        },
        tooltip: {
          // pointFormat: "",
          pointFormat: "{point.percentage:.1f}%", // If you want to show percentage uncomment this
          // line & comment above line
        },
      },
    },
    colors: ["#49B0FC", "#0B4870"],
    legend: {
      // Shows the pie data legends
      enabled: true,
      align: "center",
      verticalAlign: "top",
      layout: "horizontal",
      itemStyle: {
        fontSize: "12px",
        color: "#333333",
      },
      // y: 0,
    },
    credits: {
      enabled: false,
    },
    series: [
      // data
      {
        data: data || [],
      },
    ],
    ...optionalOptions,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default React.memo(PieChartHCR);
