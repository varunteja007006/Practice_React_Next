import CustomHeading from "@/components/ui/custom/CustomHeading";
import React from "react";
import projectData from "../../../data/projectData";
import ProjectCard, { TProjectCardProps } from "./ProjectCard";

function Projects() {
  return (
    <section className="mt-16">
      <CustomHeading className="mb-10">Projects</CustomHeading>
      <div className="grid grid-cols-1 gap-2 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectData.map((item) => {
          const data: TProjectCardProps = {
            title: item.project_title,
            subtitle: item.project_subtitle,
            badges: item.project_badges,
            description: item.project_description,
            github: item.project_github,
            link: item.project_link,
            images: item.project_images,
          };
          return item.toShow && <ProjectCard key={item.id} data={data} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
