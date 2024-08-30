"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
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
      <SectionHeading>About me</SectionHeading>
      <p>
        I'm a full-stack developer skilled in React (Next.js), Node.js, MongoDB,
        and TypeScript. Currently, I'm a Project Intern at{" "}
        <span className="font-semibold">Jio Platforms</span>, integrating LLMs with
        dynamic UIs and exploring advanced tech stacks.
      </p>
    </motion.section>
  );
}
