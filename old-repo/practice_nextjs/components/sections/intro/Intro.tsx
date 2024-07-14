import { TfiDownload } from "react-icons/tfi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactBtn } from "@/components/footer/FooterMain";
import Image from "next/image";

function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-10  mt-5">
    {/* <div className="grid grid-cols-1 md:grid-cols-2 mt-5"> */}
    <div className="flex flex-col items-center gap-5 max-w-[28rem]">
      <Image
        src={"/profile.webp"}
        alt="profile"
        width={250}
        height={250}
        className="w-full h-72 object-contain"
      />
      <p className="text-center cursor-pointer">
        Full Stack Developer | JavaScript | Next JS | React JS | Node JS |
      </p>
      <p className="text-center cursor-pointer">
        Python | Python Developer
      </p>
      <ContactBtn />
    </div>
    <div className="flex flex-col items-center gap-3 justify-center text-center md:text-left max-w-[40rem]">
      <p>
        I am a passionate developer who loves to work with different tech
        stacks, on both front-end and back-end. I have hands-on experience
        with various programming languages and frameworks. My core skills
        are JavaScript, React JS, Node JS, MongoDB, HTML, CSS. Also familiar
        with Bootstrap CSS, Tailwind CSS, Django, Python, MySQL, PHP. I use
        variety of other tools that can maximize productivity and optimize
        product delivery, for example GIT, VS Code,Postman, Tortoise SVN,
        SonarQube and Jenkins.
      </p>
      <p>
        I love developing web apps and python scripting for automation of
        day-to-day tasks. I am always eager to explore new technologies and
        I keep myself relevant.
      </p>
      <p>
        Currently, I work as System Engineer for HCM platform development,
        developing react based custom responsive interfaces tailored to meet
        client requirements. I have successfully developed dynamic
        dashboards and data panels. I am keen to expand my domain in other
        fields of technology. Therefore I am open to opportunities.
      </p>
      <div className="w-full inline-flex items-center justify-end">
        <p className="mb-3">- Varun Teja. K</p>
      </div>
      <Button
        variant="outline"
        className="text-black hover:bg-slate-100 hover:ring-4 hover:ring-purple-800"
      >
        <TfiDownload className="me-2" />
        <Link
          href={"./Resume_VarunK.pdf"}
          target="_blank"
          download="resume_VARUN"
        >
          Download Resume
        </Link>
      </Button>
    </div>
  </div>
  )
}
export default Intro