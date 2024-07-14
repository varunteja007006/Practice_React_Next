import {
  FaReact,
  FaLinux,
  FaWindows,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaBootstrap,
  FaPhp,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiCss3,
  SiTailwindcss,
  SiDjango,
  SiMdnwebdocs,
  SiNetlify,
  SiHeroku,
  SiRailway,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiJenkins,
  SiSonarqube,
  SiGooglecloud,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { GiTortoise } from "react-icons/gi";
import { RiNextjsLine } from "react-icons/ri";

const technicalSkillsData = {
  ProgrammingLanguages: {
    label: "Programming Languages / Technologies",
    skillList: [
      { name: "React JS", icon: FaReact, toShow: true },
      { name: "Node JS", icon: FaNodeJs, toShow: true },
      { name: "Python", icon: FaPython, toShow: true },
      { name: "JavaScript", icon: SiJavascript, toShow: true },
      { name: "MongoDB", icon: SiMongodb, toShow: true },
      { name: "MySQL", icon: SiMysql, toShow: true },
      { name: "HTML", icon: FaHtml5, toShow: true },
      { name: "CSS", icon: SiCss3, toShow: true },
      { name: "Tailwind CSS", icon: SiTailwindcss, toShow: true },
      { name: "Bootstrap CSS", icon: FaBootstrap, toShow: true },
      { name: "SCSS", icon: BsFiletypeScss, toShow: true },
      { name: "PHP", icon: FaPhp, toShow: true },
    ],
  },
  frameworks: {
    label: "Frameworks",
    skillList: [
      { name: "Next JS", icon: RiNextjsLine, toShow: true },
      { name: "MERN Stack", icon: SiMdnwebdocs, toShow: true },
      { name: "Django Web Framework", icon: SiDjango, toShow: true },
    ],
  },
  platforms: {
    label: "Platforms",
    skillList: [
      { name: "AWS", icon: FaAws, toShow: true },
      { name: "Google Cloud", icon: SiGooglecloud, toShow: true },
      { name: "Netlify", icon: SiNetlify, toShow: true },
      { name: "Heroku", icon: SiHeroku, toShow: true },
      { name: "Railway", icon: SiRailway, toShow: true },
    ],
  },
  tools: {
    label: "Tools",
    skillList: [
      { name: "GitHub", icon: SiGithub, toShow: true },
      { name: "VS Code", icon: SiVisualstudiocode, toShow: true },
      { name: "Postman", icon: SiPostman, toShow: true },
      { name: "TortoiseSVN", icon: GiTortoise, toShow: true },
      { name: "Jenkins", icon: SiJenkins, toShow: true },
      { name: "SonarQube", icon: SiSonarqube, toShow: true },
    ],
  },
  os: {
    label: "Operating Systems",
    skillList: [
      { name: "Linux", icon: FaLinux, toShow: true },
      { name: "Windows 10", icon: FaWindows, toShow: true },
    ],
  },
};

export default technicalSkillsData;
