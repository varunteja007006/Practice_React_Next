import React from "react";
import TechnicalSkills from "./TechnicalSkills";
import IndustrySkills from "./IndustrySkills";
import CustomHeading from "@/components/ui/custom/CustomHeading";

function Skills() {
  return (
    <section className="w-full mt-16">
      <CustomHeading className="mb-10">Skills</CustomHeading>
      <div className="px-6">
        <TechnicalSkills />
        <IndustrySkills />
      </div>
    </section>
  );
}

export default Skills;
