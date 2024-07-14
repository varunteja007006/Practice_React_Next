"use client";
import React from "react";
import industrySkillsData from "../../../data/industrySkillsData";
import SkillCard from "./components/SkillCard";
import CustomSubHeading from "@/components/ui/custom/CustomSubHeading";
import Slider from "react-slick";
import reactSlickSettings from "../../../constants/reactSlickSettings";

function IndustrySkills() {
  const settings = reactSlickSettings();
  return (
    <>
      <CustomSubHeading className="mb-10">Industry Skills</CustomSubHeading>
      <div className="px-6 pb-3">
        <Slider {...settings}>
          {industrySkillsData.map((item, index) => {
            return (
              item.toShow && (
                <SkillCard key={index} name={item.name} Icon={item.icon} />
              )
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default IndustrySkills;
