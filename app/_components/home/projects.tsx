import * as React from "react";

import projectData from "./data/projectData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

import MyTooltip from "@/components/ui/custom/MyTooltip";

const ProjectLink = ({
  URL,
  type,
}: {
  URL: string;
  type: "github" | "website";
}) => {
  if (type === "website") {
    return (
      <MyTooltip text="Go to deployed website">
        <Button size={"icon"} variant={"outline"} asChild>
          <a href={URL}>
            <GrDeploy className="w-4 h-4" />
          </a>
        </Button>
      </MyTooltip>
    );
  }

  if (type === "github") {
    return (
      <MyTooltip text="Go to github repository">
        <Button size={"icon"} variant={"outline"} asChild>
          <a href={URL}>
            <FaGithub className="w-4 h-4" />
          </a>
        </Button>
      </MyTooltip>
    );
  }
  return null;
};

export default function Projects() {
  return (
    <section id="certifications" className="space-y-4">
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="grid grid-cols-1 gap-5">
        {projectData.map((item) => {
          if (!item.toShow) {
            return null;
          }
          return (
            <Card key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="col-span-2">
                  <CardHeader className="pb-3">
                    <CardTitle>{item.project_title}</CardTitle>
                    <CardDescription className="py-2">
                      {item.project_subtitle}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 items-center justify-start">
                      {item.project_badges.map((item) => {
                        return (
                          <Badge
                            variant={"outline"}
                            key={item}
                            className=" ring-1 ring-blue-400 dark:ring-purple-600"
                          >
                            {item}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardHeader>
                  <CardContent className=" leading-loose">
                    {item.project_description.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </CardContent>
                  <CardFooter className="gap-5">
                    {item.project_github && (
                      <ProjectLink type="github" URL={item.project_github} />
                    )}
                    {item.project_link && (
                      <ProjectLink type="website" URL={item.project_link} />
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
