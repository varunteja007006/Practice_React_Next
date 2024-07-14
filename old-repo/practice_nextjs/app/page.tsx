import dynamic from "next/dynamic";
import Intro from "@/components/sections/intro/Intro";
const Experience = dynamic(
  () => import("@/components/sections/Experience/Experience")
);
const Skills = dynamic(() => import("@/components/sections/skills/Skills"));
const Academics = dynamic(
  () => import("@/components/sections/Academics/Academics")
);
const Certification = dynamic(
  () => import("@/components/sections/certifications/Certification")
);
const ContactPage = dynamic(() => import("./contact/page"));
const Projects = dynamic(
  () => import("@/components/sections/projects/Projects")
);

export default function Home() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col gap-5 md:px-4 lg:px-20 mb-10">
      <Intro />
      <Experience />
      <Academics />
      <Projects />
      <Skills />
      <Certification />
      <ContactPage />
    </div>
  );
}
