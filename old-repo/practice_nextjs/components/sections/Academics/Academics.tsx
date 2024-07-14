import React from "react";
import academicData from "../../../data/academicData";
import CustomHeading from "@/components/ui/custom/CustomHeading";

function Academics() {
  return (
    <section className="mt-16">
      <CustomHeading className="mb-10">Academics</CustomHeading>
      <ul className="grid grid-cols-1 gap-10 px-6 pb-3 md:grid-cols-2 lg:grid-cols-3">
        {academicData.map((item, index) => {
          return (
            item.toShow && (
              <li
                key={index}
                className="border-[1px] border-white p-5 flex flex-col justify-between gap-3"
              >
                <p className="text-base">{item.course}</p>
                <p className="text-sm">{item.institute}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">{item.year}</p>
                  <p className="text-sm">{item.score}</p>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}

export default Academics;
