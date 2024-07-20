import { Card, CardTitle } from "@/components/ui/card";
import * as React from "react";
import industrySkillsData from "@/local-data/industrySkillsData";
import technicalSkillsData from "@/local-data/technicalSkillsData";

export default function Skills() {
  const technicalSkillTypes = React.useMemo(() => {
    return Object.keys(technicalSkillsData) as Array<
      keyof typeof technicalSkillsData
    >;
  }, []);

  return (
    <section id="skills" className="space-y-20">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Technical Skills</h3>

        {technicalSkillTypes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <p className="font-semibold">{technicalSkillsData[item].label}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technicalSkillsData[item].skillList.map((item) => {
                  if (!item.toShow) {
                    return null;
                  }
                  return (
                    <Card key={item.name}>
                      <div className="p-5 flex items-center gap-5">
                        <item.icon className="size-12" />
                        <CardTitle className="text-base">{item.name}</CardTitle>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Industry Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industrySkillsData.map((item) => {
            if (!item.toShow) {
              return null;
            }
            return (
              <Card key={item.id}>
                <div className="p-5 flex items-center gap-5">
                  <item.icon className="size-12" />
                  <CardTitle className="text-base">{item.name}</CardTitle>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
