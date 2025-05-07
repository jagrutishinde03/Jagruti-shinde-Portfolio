"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FaCertificate,
  FaCalendarAlt,
  FaAward,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const certificationItems = [
  {
    title: "NPTEL: Introduction to Industry 4.0 and Industrial Internet of Things",
    date: "2024",
    scoreIcon: <FaAward />,
    score: "Passed with distinction",
    provider: "Offered by SWAYAM",
    description:
      "Studied Industry 4.0 principles and digital transformation in manufacturing. Gained insights into Industrial IoT, smart sensors, and automation.",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "2023",
    provider: "Offered by AWS Academy",
    description:
      "Acquired foundational cloud knowledge and AWS core services. Covered compute, storage, networking, and security basics.",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    date: "2023",
    provider: "Offered by AWS Academy",
    description:
      "Learned to design scalable, resilient, and secure architectures on AWS. Focused on VPC, EC2, ELB, S3, and deployment strategies.",
  },
  {
    title: "RedHat System Administration I",
    date: "2023",
    provider: "Offered by Red Hat",
    description:
      "Built strong fundamentals in Linux system administration using RHEL. Covered user management, networking, storage, and security basics.",
  },
  {
    title: "Oracle Certified Foundations Associate",
    date: "2023",
    provider: "Offered by Oracle",
    description:
      "Validated understanding of Oracle Cloud Infrastructure and services. Focused on compute, storage, database, and security concepts.",
  },
  {
    title: "Google Cloud Study Jams Program 2024",
    date: "2024",
    provider: "Offered by Google Cloud",
    description:
      "Explored Google Cloud basics including Compute Engine, Cloud Storage, and IAM. Completed hands-on labs and Qwiklabs quests.",
  },
];

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  const closeDescription = () => {
    setExpanded(null);
  };

  return (
    <motion.section
      id="certifications"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full max-w-6xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My Certifications</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {certificationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between relative"
          >
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-800 dark:text-white">
              <FaCertificate className="text-gray-500 dark:text-gray-300" />
              {item.title}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                {item.score ? (
                  <>
                    {item.scoreIcon}
                    <span>{item.score}</span>
                  </>
                ) : (
                  <span>{item.provider}</span>
                )}
              </div>
            </div>

            {/* Side Arrow for Expanding Description */}
            <button
              onClick={() => toggleDescription(index)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-600 dark:text-gray-500"
            >
              <FaChevronRight />
            </button>

            {/* Side Panel Description */}
            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 right-0 w-80 bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-lg z-10"
                >
                  {/* Close Button */}
                  <button
                    onClick={closeDescription}
                    className="absolute top-2 right-2 text-xl text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
                  >
                    <FaTimes />
                  </button>

                  {/* Title of the certification in the side panel */}
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </div>
                  <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    {item.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
