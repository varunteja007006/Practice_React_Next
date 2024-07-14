import Image, { StaticImageData } from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface TProjectCardProps {
  title: string;
  subtitle: string;
  badges: string | string[];
  description: string | string[];
  github: string;
  link: string;
  images: StaticImageData[];
}

// bg-gradient-to-tl from-purple-950 from-5% via-black via-80% to-purple-950

async function ProjectCard({ data }: { data: TProjectCardProps }) {
  const { title, subtitle, badges, description, github, link, images } = {
    ...data,
  };
  return (
    <Card className="grid content-between w-full text-white bg-transparent">
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
        <CardDescription className="text-center text-white">
          {subtitle}
        </CardDescription>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2">
          {typeof badges === "string" ? (
            <p>{badges}</p>
          ) : (
            badges.map((item, index) => {
              return (
                <Badge
                  key={index}
                  className="text-base bg-black border-b border-purple-800 cursor-pointer hover:bg-purple-800 hover:text-white"
                >
                  {item}
                </Badge>
              );
            })
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center ">
        {typeof description === "string" ? (
          <p className="line-clamp-2">{description} </p>
        ) : (
          description.map((item, index) => {
            return (
              <p key={index} className="line-clamp-2">
                {item}
              </p>
            );
          })
        )}
      </CardContent>
      <CardFooter className="justify-center gap-4 text-black">
        {github && (
          <a href={github} target="blank">
            <Button variant="outline" size="icon">
              <FaGithub className="w-4 h-4" />
            </Button>
          </a>
        )}
        {link && (
          <a href={link} target="blank">
            <Button variant="outline">Demo</Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
