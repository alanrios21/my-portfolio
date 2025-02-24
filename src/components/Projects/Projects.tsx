"use client";

import { useTranslation } from "@/Hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  contentHeight: number;
}

export default function Projects({ contentHeight }: ProjectsProps) {
  const t = useTranslation();
  const projects = t.projects?.projectList || [];
  return (
    <section
      className="relative flex flex-col items-center pt-16 bg-black min-h-auto text-white px-5 z-10"
      style={{ marginTop: contentHeight }}
    >
      <h2 className="text-2xl font-bold mb-8 text-white">
        {t.projects.title}{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-900 rounded-md overflow-visible transition-all duration-300 hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              unoptimized
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-[16px] font-medium mb-2">{project.title} </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-[12px] text-white px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.url}
                target="_blank"
                className="inline-block bg-white text-black text-[13px] px-3 py-1 rounded-md font-medium transition-all duration-300 hover:bg-gray-300"
              >
                {project.btnProject}{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
