"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import { MutableRefObject } from "react";

interface RefProps {
  homeRef: MutableRefObject<HTMLDivElement | null>;
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Navbar({
  homeRef,
  experienceRef,
  projectsRef,
  aboutRef,
}: RefProps) {
  const scrollToHome = () => {
    if (homeRef?.current) {
      homeRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef?.current) {
      experienceRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef?.current) {
      projectsRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef?.current) {
      aboutRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative top-0 z-50 -mb-4 px-4 pb-4">
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <Link
            href=""
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <LaunchUI />
          </Link>
          <NavbarLeft className="mt-2">
            <button
              onClick={scrollToHome}
              className="hidden mr-6 text-sm text-white md:block"
            >
              Inicio
            </button>
            <button
              onClick={scrollToAbout}
              className="hidden mr-6 text-sm text-white md:block"
            >
              Sobre mí
            </button>
            <button
              onClick={scrollToExperience}
              className="hidden mr-6 text-sm text-white md:block"
            >
              Mi experiencia
            </button>
            <button
              onClick={scrollToProjects}
              className="hidden mr-6 text-sm text-white md:block"
            >
              Mis proyectos
            </button>
          </NavbarLeft>

          <NavbarRight>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5 text-white" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle>
                  <LaunchUI />
                </SheetTitle>
                <SheetDescription></SheetDescription>
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href=""
                    onClick={scrollToHome}
                    className="flex items-center mt-4 gap-2 text-xl text-black"
                  >
                    Inicio
                  </Link>
                  <Link href="" onClick={scrollToAbout} className=" text-black">
                    Sobre mí
                  </Link>
                  <Link
                    href=""
                    onClick={scrollToExperience}
                    className=" text-black"
                  >
                    Mi experiencia
                  </Link>
                  <Link
                    href=""
                    onClick={scrollToProjects}
                    className=" text-black"
                  >
                    Mis proyectos
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
