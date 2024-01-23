import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "/public/corpcomment.png";
import rmtdevImg from "/public/rmtdev.png";
import wordanalyticsImg from "/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Engineer",
    location: "Nepal · Remote",
    description:
      "I worked as a frontend engineer for 3 years remotely where i build company website using technology like astro.js, javascript, tailwindcss, css3, & html5. ",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Naples, Florida, United States · Remote",
    description:
      "I am working as an associate software engineer and my work involve fullstack development that use these technologies like typescript, react.js, postgresql, node.js, express.js, github, & postman.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Invoice Processing System",
    description:
      "A Fullstack Project made during spare time that can be used to create pending invoices.",
    tags: [
      "React.js",
      "Material UI",
      "Java",
      "Spring Boot",
      "Hibernate",
      "DAO",
      "MySQL",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Indeed Clone",
    description:
      "A Fullstack clone of indeed job portal website that can be used to post jobs and apply as a candidate.",
    tags: [
      "React.js",
      "Javascript",
      "Java",
      "Spring Boot",
      "MongoDB",
      "Hibernate",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio Website",
    description:
      "This is the portfolio website for personal project, skill, and experience showcase.",
    tags: ["Typescript", "Next.js", "Framer", "Tailwind CSS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Java",
  "Spring Boot",
  "Django",
  "Framer Motion",
  "MySQL",
] as const;
