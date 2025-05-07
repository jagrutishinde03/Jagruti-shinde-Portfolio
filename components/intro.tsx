"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/public/githubdp.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 relative"
    >
      <ParticleContainer />
      
      {/* Parallax Effect for Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 bg-fixed bg-cover bg-center z-0" style={{ backgroundImage: 'url("/path-to-background-image.jpg")' }}></div>
      
      {/* Profile Section */}
      <div className="relative z-10">
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
              <Image
                src={githubdp}
                alt="Jagruti Shinde Portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => alert('Image clicked!')} // Can be replaced with a lightbox function
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-5xl text-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>

        {/* Name and Job Title with Typing Animation */}
        <motion.h1
          className="mb-6 mt-6 px-0 sm:px-4 text-3xl sm:text-4xl font-semibold leading-snug text-white max-w-[50rem] mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold text-gradient">Hello, I'm Jagruti Shinde.</span> I'm a{" "}
          <span className="font-semibold text-gradient">Software Developer</span> at{" "}
          <a
            href="https://www.3ds.com/"
            className="font-bold underline text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            target='_blank'
            style={{ textUnderlineOffset: '4px' }}
          >
            Dassault Systèmes
          </a>{" "}
          in the Enovia Brand. Currently working with C++, Java, Vue.js, and AWS.
        </motion.h1>

        {/* Typing Animation */}
        <motion.h2
          className="text-xl text-white font-medium max-w-[50rem] mx-auto italic mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          "Building the future with code."
        </motion.h2>

        {/* Social Media Buttons */}
        <motion.div
          className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="group bg-white text-gray-950 px-8 py-3 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 transform transition cursor-pointer"
            href="https://github.com/jagrutishinde03"
            target="_blank"
          >
            <FaGithub className="opacity-75 text-lg" />
            GitHub
          </a>

          <a
            className="group bg-gray-950 text-white px-8 py-3 flex items-center gap-3 rounded-full border-2 border-white border-opacity-40 shadow-lg hover:scale-105 transform transition cursor-pointer"
            href="https://www.linkedin.com/in/jagruti-shinde-210475228/"
            target="_blank"
          >
            <BsLinkedin className="opacity-75 text-lg" />
            LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
}
