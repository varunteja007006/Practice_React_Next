import React from "react";
import certificationData from "../../../data/certificationData";
import CustomHeading from "@/components/ui/custom/CustomHeading";

function Certification() {
  return (
    <section className="w-full mt-16">
      <CustomHeading className="mb-10">Certifications</CustomHeading>
      <ul className="grid grid-cols-1 gap-5 px-6 pt-2 pb-3 md:grid-cols-3">
        {certificationData.map((item, index) => {
          return (
            item.toShow && (
              <li
                key={index}
                className="inline-flex items-start py-3 rounded-sm ps-2"
              >
                {" "}
                <span className="flex flex-col gap-2">
                  <span>{item.certificate_name}</span>
                  <span className="text-xs">- {item.certificate_provider}</span>
                </span>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}

export default Certification;
