"use client";

import { useEffect, useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { useTranslation } from "@/Hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";

interface ExperienceProps {
  onToggle: (height: number) => void;
  setActiveHeight: (height: number) => void;
  onClose: () => void;
}

export default function Experience({
  onToggle,
  setActiveHeight,
  onClose,
}: ExperienceProps) {
  const t = useTranslation();
  const experiences = t.experience?.experiences || [];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const toggleAccordion = (index: number) => {
    const isOpening = activeIndex !== index;

    if (isOpening) {
      const contentElement = document.getElementById(
        `accordion-content-${index}`
      );
      if (contentElement) {
        const height = contentElement.scrollHeight;
        setActiveHeight(height);
        onToggle(height);
      }
      setActiveIndex(index);
    } else {
      setTimeout(() => {
        setActiveHeight(0);
        onClose();
        onToggle(0);
      }, 350);
      setActiveIndex(null);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center -mt-8 sm:mt-20 bg-black text-white px-5 z-50"
      data-aos="fade-left"
    >
      <div className="w-full max-w-xl space-y-6 relative">
        <Card className="bg-black border border-gray-700 p-6">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              {t.experience.title}
            </CardTitle>
            <div className="flex flex-wrap gap-2 justify-center pt-5">
              {[
                "Typescript",
                "React",
                "Next",
                "Nest",
                "Postgres SQL",
                "Jest",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardHeader>
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start text-white">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-[2px] h-full bg-gray-600 hidden sm:block text-white z-0"></div>
                )}
                <div className="relative z-10 hidden sm:flex items-center justify-center w-12 h-12 mt-3 bg-gray-900 border-2 border-gray-500 rounded-full">
                  <FaStar
                    className={`text-[17px] sm:text-xl transition-all duration-300 ${
                      activeIndex === index
                        ? "text-yellow-400 drop-shadow-lg"
                        : "text-gray-300"
                    }`}
                  />
                </div>

                <div className="flex-1 ml-8 z-50">
                  <button
                    className="flex justify-between items-center w-full px-5 py-4 rounded-lg transition-all duration-300 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="text-left">
                      <span className="text-[15px] sm:text-[17px] font-semibold">
                        {exp.title}
                      </span>
                      <div className="text-[11px] sm:text-base text-gray-400">
                        {exp.duration}
                      </div>
                    </div>
                    <FaChevronDown
                      className={`transition-transform duration-300 text-[10px] sm:text-base ml-5 sm:ml-0 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      } text-white`}
                    />
                  </button>

                  <motion.div
                    id={`accordion-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      activeIndex === index
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                    onAnimationComplete={() => {
                      if (activeIndex === null) {
                        setActiveHeight(0);
                      }
                    }}
                  >
                    <div className="px-5 text-gray-300 py-2">
                      {exp.clients ? (
                        exp.clients.map((client, i) => (
                          <div key={i}>
                            <span className="font-semibold text-[14px] sm:text-[16px] pt-2 pb-2 block">
                              {client.name}
                            </span>

                            <ul className="list-none text-[13px] sm:text-[16px]">
                              {client.tasks.map((task, j) => (
                                <li key={j} className="flex items-start mb-1">
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <ul className="list-none text-[13px] sm:text-[16px]">
                          {exp.tasks.map((task, i) => (
                            <li key={i} className="flex items-start mb-1">
                              {task}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
