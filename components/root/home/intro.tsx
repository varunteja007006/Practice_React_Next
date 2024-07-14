import Image from "next/image";
import React from "react";
import ContactIcons from "@/components/root/home/contact-icons";
import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      id="intro"
      className="space-y-4 min-h-[calc(100vh-10rem)] items-center flex flex-col justify-center"
    >
      <div className="gap-5 grid grid-cols-1 md:grid-cols-3 p-2 md:p-5 items-center">
        <div className="flex flex-col items-center gap-5">
          <Image
            alt="profile"
            src={"/profile.webp"}
            width={100}
            height={100}
            className="w-full h-auto rounded-lg"
            unoptimized={true}
            priority={true}
          />
          <div>
            <Button variant={"outline"} asChild>
              <a download href="/resume_varun.pdf">
                Download my resume <HiDownload className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
        <div className="col-span-2 p-2 md:px-10 text-center text-base space-y-4 leading-loose">
          <div>
            I enjoy working with various tech stacks and have experience in both
            frontend and backend development. My main skills are JavaScript,
            Next.js, React.js, Node.js, SQL, MongoDB, HTML, and CSS. I also know
            Bootstrap, Tailwind CSS, Django, Python, and PHP.
          </div>
          <div>
            I use tools like Git, VS Code, Postman, SonarQube, and Jenkins to
            improve productivity and efficiency.
          </div>
          <div>
            I like creating web applications and writing Python scripts to
            automate daily tasks. I always try to learn new technologies and
            keep my skills updated.
          </div>
          <div>
            Currently, I am a Software Engineer at Invest4Edu, a startup where I
            build web apps using Next.js, React, Node.js, and SQL. I am curious
            about new technologies and open to new opportunities.
          </div>
          <div className="font-semibold">- Varun Teja</div>
          <div>
            <ContactIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
