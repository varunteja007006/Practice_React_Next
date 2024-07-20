import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import projectData from "../../../local-data/projectData";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  const ProjectLink = ({
    URL,
    type,
  }: {
    URL: string;
    type: "github" | "website";
  }) => {
    if (type === "website") {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size={"icon"} variant={"outline"} asChild>
              <a href={URL}>
                <GrDeploy className="w-4 h-4" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go to deployed website</p>
          </TooltipContent>
        </Tooltip>
      );
    }
    if (type === "github") {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size={"icon"} variant={"outline"} asChild>
              <a href={URL}>
                <FaGithub className="w-4 h-4" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go to github repository</p>
          </TooltipContent>
        </Tooltip>
      );
    }
    return null;
  };

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
                  <CardHeader>
                    <CardTitle>{item.project_title}</CardTitle>
                    <CardDescription>{item.project_subtitle}</CardDescription>
                    <div className="flex flex-wrap gap-5 items-center justify-start">
                      {item.project_badges.map((item) => {
                        return (
                          <Badge variant={"outline"} key={item}>
                            {item}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.project_description.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </CardContent>
                  <CardFooter className="gap-5">
                    <TooltipProvider>
                      {item.project_github && (
                        <ProjectLink type="github" URL={item.project_github} />
                      )}
                      {item.project_link && (
                        <ProjectLink type="website" URL={item.project_link} />
                      )}
                    </TooltipProvider>
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
