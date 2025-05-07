"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaCalendarAlt } from "react-icons/fa"; // Icon for the date

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline
        animate={true}
        lineColor={theme === "light" ? "#d1d5db" : "#4b5563"}
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              color: theme === "light" ? "#1f2937" : "#f3f4f6",
              borderRadius: "1rem",
              border: theme === "light"
                ? "1px solid #e5e7eb"
                : "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow:
                theme === "light"
                  ? "0 4px 12px rgba(0, 0, 0, 0.05)"
                  : "0 4px 20px rgba(255, 255, 255, 0.1)",
              padding: "1.5rem 2rem",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid #6b7280",
            }}
            iconStyle={{
              background: theme === "light" ? "#ffffff" : "#1f2937",
              color: theme === "light" ? "#4b5563" : "#e5e7eb",
              boxShadow:
                theme === "light"
                  ? "0 0 0 4px #e5e7eb"
                  : "0 0 0 4px rgba(255, 255, 255, 0.1)",
            }}
            icon={item.icon}
          >
            {/* Custom Date Badge */}
            <div className="absolute top-5 right-4 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full font-medium text-gray-700 dark:text-gray-300 shadow-md flex items-center">
              <FaCalendarAlt className="mr-1" />
              {item.date}
            </div>

            <div className="hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-bold capitalize mb-1">
                <br></br>
                {item.title}
              </h3>
              <p className="text-sm mb-2 italic text-gray-600 dark:text-gray-400">
                {item.location}
              </p>
              <p className="text-gray-700 dark:text-white/80 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
