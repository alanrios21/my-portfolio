"use client";

import { MutableRefObject, useState } from "react";
import { IoMdClose } from "react-icons/io"; 
import LaunchUI from "@/components/logos/launch-ui";
import "./navbar.css";

interface RefProps {
  homeRef: MutableRefObject<HTMLDivElement | null>;
  experienceRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
}

export default function NavbarComponent({
  homeRef,
  experienceRef,
  projectsRef,
  aboutRef,
}: RefProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative top-0 z-50 flex justify-between items-center p-4 bg-transparent">
      <div className="flex items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo(homeRef)}
          className="text-xl font-bold text-white"
        >
          <LaunchUI />
        </button>
      </div>

      {/* Menú para pantallas grandes */}
      <nav className="hidden md:flex gap-6 justify-center flex-1">
        <div onClick={() => scrollTo(homeRef)} className="navbar-item">
          Inicio
        </div>
        <div onClick={() => scrollTo(aboutRef)} className="navbar-item">
          Sobre mí
        </div>
        <div onClick={() => scrollTo(experienceRef)} className="navbar-item">
          Mi experiencia
        </div>
        <div onClick={() => scrollTo(projectsRef)} className="navbar-item">
          Mis proyectos
        </div>
      </nav>

      {/* Menú hamburguesa para móviles */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menú lateral que aparece a la derecha */}
      <div
        className={`fixed inset-0 flex justify-end items-start z-40 bg-black bg-opacity-50 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`bg-white w-[60vw] h-full p-4 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="close-button" onClick={closeMenu}>
            <IoMdClose className="h-6 w-6 text-black" />
          </button>
          <button onClick={() => scrollTo(homeRef)} className="sidebar-button">
            Inicio
          </button>
          <button onClick={() => scrollTo(aboutRef)} className="sidebar-button">
            Sobre mí
          </button>
          <button
            onClick={() => scrollTo(experienceRef)}
            className="sidebar-button"
          >
            Mi experiencia
          </button>
          <button
            onClick={() => scrollTo(projectsRef)}
            className="sidebar-button"
          >
            Mis proyectos
          </button>
        </div>
      </div>
    </header>
  );
}
