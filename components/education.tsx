"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FaUniversity,
  FaLaptopCode,
  FaCalendarAlt,
  FaStar,
  FaTools,
  FaPercentage,
  FaSchool,
  FaBook,
} from "react-icons/fa";

const educationItems = [
  {
    icon: <FaUniversity />,
    title: "MIT Academy of Engineering",
    degreeIcon: <FaLaptopCode />,
    degree: "BTech in Computer Engineering",
    date: "2022–2025",
    scoreIcon: <FaStar />,
    score: "CGPA 9.14/10",
  },
  {
    icon: <FaUniversity />,
    title: "Government Polytechnic Pune",
    degreeIcon: <FaTools />,
    degree: "Diploma in Information Technology",
    date: "2019–2022",
    scoreIcon: <FaPercentage />,
    score: "Percentage 92.33%",
  },
  {
    icon: <FaSchool />,
    title: "Samarth Madhyamik Vidyalay",
    degreeIcon: <FaBook />,
    degree: "SSC",
    date: "2018–2019",
    scoreIcon: <FaPercentage />,
    score: "Percentage 89.20%",
  },
];

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="relative mt-10 before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-gray-400 before:rounded-full">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative pl-16 mb-14"
          >
            {/* Dot */}
            <div className="absolute left-1 top-1 w-6 h-6 bg-gray-600 rounded-full border-4 border-white dark:border-gray-900 z-10 animate-pulse shadow-md"></div>

            {/* Card */}
            <div className="relative p-6 bg-gray-100 dark:bg-white/10 border-t-4 border-gray-500 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              
              {/* Year Top Right */}
              <div className="absolute top-4 right-4 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1 font-semibold">
                <FaCalendarAlt />
                {item.date}
              </div>

              {/* Content */}
              <p className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
                {item.icon}
                {item.title}
              </p>
              <p className="mt-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                {item.degreeIcon}
                {item.degree}
              </p>
              <p className="mt-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                {item.scoreIcon}
                {item.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
