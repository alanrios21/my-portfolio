"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { forwardRef, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiVite,
  SiAngular,
  SiTailwindcss,
  SiJirasoftware,
  SiPostman,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "@/Hooks/useTranslation";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  { name: "Node", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600 text-4xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 text-4xl" />,
  },
  { name: "Vite", icon: <SiVite className="text-yellow-400 text-4xl" /> },
  { name: "Angular", icon: <SiAngular className="text-red-500 text-4xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
  },
  { name: "Jira", icon: <SiJirasoftware className="text-blue-500 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
];

const About = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    const t = useTranslation();

    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }, []);

    return (
      <div
        ref={ref}
        {...props}
        className="w-full bg-black text-white flex flex-col items-center py-20"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr] gap-8 px-6">
          <Card className="w-full h-auto xl:h-[380px] lg:h-[420px] md:h-[480px] md:-ml-8 bg-black border border-gray-700 p-6 flex flex-col sm:flex-row items-center sm:items-start">
            <div
              data-aos="fade-up-right"
              className="w-32 h-32 sm:w-[450px] sm:h-[450px] md:w-[450px] md:h-[450px]lg:w-[450px] lg:h-[450px] xl:w-[450px] xl:h-[450px] relative mb-5 sm:mb-0 md:mb-0"
            >
              <Image
                src="/Profile.png"
                alt="Perfil"
                width={450}
                height={450}
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="sm:ml-6 mt-4 sm:mt-0 text-white">
              <CardHeader data-aos="fade-up-right">
                <CardTitle className="text-lg sm:text-2xl">
                  {t.aboutMe.title}{" "}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-lg">
                  {t.aboutMe.paragraph_1}{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div data-aos="fade-up-right">
                  <p className="text-sm sm:text-lg">{t.aboutMe.paragraph_2} </p>
                  <p className="mt-4 text-sm sm:text-lg">
                    {t.aboutMe.paragraph_3}{" "}
                  </p>
                </div>
                <div className="mt-6 flex space-x-6">
                  <a data-aos="fade-up-right"
                    href="https://github.com/alanrios21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white z-50"
                  >
                    <FaGithub className="text-3xl" />
                    <span className="ml-2 text-sm sm:text-lg">GitHub</span>
                  </a>
                  <a data-aos="fade-up-right"
                    href="https://www.linkedin.com/in/alan-rios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center cursor-pointer text-gray-400 hover:text-white z-50"
                  >
                    <FaLinkedin className="text-3xl" />
                    <span className="ml-2 text-sm sm:text-lg">LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="w-full mt-10 overflow-hidden">
          <div className="flex items-center space-x-6 animate-scroll px-6">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 min-w-[80px]"
              >
                {tech.icon}
                <span className="text-sm sm:text-md text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll 15s linear infinite;
            width: max-content;
          }
        `}</style>
      </div>
    );
  }
);

About.displayName = "About";

export default About;
