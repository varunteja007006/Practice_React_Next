import * as React from "react";
import ContactMe from "@/components/root/home/contact-me";
import Certifications from "@/components/root/home/certifications";
import Academics from "@/components/root/home/academics";
import Experience from "@/components/root/home/experience";
import Intro from "@/components/root/home/intro";
import Skills from "@/components/root/home/skill";
import Projects from "@/components/root/home/projects";

export default function Homepage() {
  return (
    <div className="p-2 md:py-3 md:px-10 lg:py-5 lg:px-24 space-y-20">
      {/* sections */}

      <Intro />
      <Skills />
      <Experience />
      <Academics />
      <Projects />
      <Certifications />
      <ContactMe />
    </div>
  );
}
