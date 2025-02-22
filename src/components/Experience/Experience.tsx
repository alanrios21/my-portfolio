"use client";

import { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { useTranslation } from "@/Hooks/useTranslation";

export default function Experience() {
  const t = useTranslation();
  const experiences = t.experience?.experiences || [];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col items-center py-10 bg-black min-h-screen text-white px-5">
      <div className="w-full max-w-xl space-y-6 relative">
        <Card className="bg-black border border-gray-700 p-6">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              {t.experience.title}{" "}
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
                    className="flex justify-between sm items-center w-full px-5 py-4 rounded-lg transition-all duration-300 focus:outline-none"
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

                  <div
                    className={`${
                      activeIndex === index
                        ? "opacity-100 max-h-100 py-2 transition-all duration-500 ease-in-out"
                        : "opacity-0 max-h-0"
                    } overflow-hidden`}
                  >
                    {exp.clients ? (
                      exp.clients.map((client, i) => (
                        <div key={i} className="px-5 text-gray-300">
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
                      <ul className="px-5 text-gray-300 list-none text-[13px] sm:text-[16px]">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex items-start mb-1">
                            {task}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
