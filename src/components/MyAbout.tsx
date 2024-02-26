"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function MyAbout() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        👋 Hello there! I'm Bhawesh Chaudhary, a passionate software developer
        with a love for turning ideas into reality through elegant and efficient
        code.
      </p>
      <p className="mb-3">
        💻 My journey in the world of programming began with a curiosity to
        understand how things work behind the scenes. Over the years, this
        curiosity evolved into a deep-seated passion for creating innovative
        solutions that make a difference.
      </p>
      <p className="mb-3">
        🚀 I specialize in Typescript, Nodejs, Reactjs, Expressjs, PostgreSQL,
        Postman, CI/CD, and I'm always excited to explore new tools and
        frameworks that push the boundaries of what's possible. Whether it's
        crafting robust backend systems, developing intuitive user interfaces,
        or optimizing algorithms for peak performance, I thrive on the
        challenges that come with building software.
      </p>
      <p className="mb-3">
        🌐 In addition to my technical skills, I believe in the power of
        collaboration and communication. Working with diverse teams and engaging
        in meaningful discussions is something I value. I understand that the
        best software is not just about lines of code but about solving
        real-world problems and enhancing user experiences.
      </p>
      <p className="mb-3">
        📚 Constant learning is at the core of my professional philosophy. The
        tech industry is dynamic, and staying up-to-date with the latest trends
        and best practices is something I'm committed to. I am also passionate
        about sharing knowledge and experiences with the developer community
        through blog posts, workshops, and open-source contributions.
      </p>
      <p>
        🏆 My goal is not just to write code but to create software that makes a
        positive impact. Whether it's streamlining processes, improving
        efficiency, or providing delightful user experiences, I'm dedicated to
        building solutions that matter.
      </p>
    </motion.section>
  );
}
