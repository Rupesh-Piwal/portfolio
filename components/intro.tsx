"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaCircle, FaDownload, FaGithubSquare } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { useSectionInView } from "@/lib/hooks";
import { HoverBorderGradient } from "./ui/border-hover";
import { Button } from "./ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <HoverBorderGradient className="flex items-center gap-2 text-sm">
              <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
              Available for work
            </HoverBorderGradient>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          />
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Rupesh Piwal
        </div>
        <div className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Full-Stack Developer
        </div>
        <p className="text-gray-400 text-center text-xs sm:text-sm">
          I am passionate about crafting innovative fullstack web applications.
        </p>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex flex-col sm:flex-row sm:gap-5 gap-2 items-center"
      >
        <Button asChild>
          <Link
            href="/Mayank_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="mr-2" />
            Download My Resume
          </Link>
        </Button>

        <Button asChild>
          <Link href="/#contact">
            <GrContactInfo className="mr-2 text-xl" />
            Contact Me
          </Link>
        </Button>
      </motion.div>

      <div className="flex gap-4 justify-center mt-4">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
