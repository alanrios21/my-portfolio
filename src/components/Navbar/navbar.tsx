"use client";

import { MutableRefObject, useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import LaunchUI from "@/components/logos/launch-ui";
import gsap from "gsap";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        {
          x: 0,
          duration: 0.1,
          ease: "power3.out",
          onComplete: () => setIsAnimating(false),
        }
      );
    } else {
      setIsAnimating(true);
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.1,
        ease: "power3.in",
        onComplete: () => setIsAnimating(false),
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    if (!isAnimating) setIsOpen(false);
  };

  const scrollTo = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className="navbar">
      <div className="flex items-center">
        <button onClick={() => scrollTo(homeRef)} className="text-xl font-bold text-white">
          <LaunchUI />
        </button>
      </div>

      <nav className="navbar-menu">
        <div onClick={() => scrollTo(homeRef)} className="navbar-item">Inicio</div>
        <div onClick={() => scrollTo(aboutRef)} className="navbar-item">Sobre mí</div>
        <div onClick={() => scrollTo(experienceRef)} className="navbar-item">Mi experiencia</div>
        <div onClick={() => scrollTo(projectsRef)} className="navbar-item">Mis proyectos</div>
      </nav>

      {/* Botón de menú hamburguesa */}
      <button
        className={`menu-button ${isOpen ? "fixed" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar z-50 ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          <IoMdClose className="h-6 w-6 text-black" />
        </button>
        <button onClick={() => scrollTo(homeRef)} className="sidebar-button mt-10">Inicio</button>
        <button onClick={() => scrollTo(aboutRef)} className="sidebar-button">Sobre mí</button>
        <button onClick={() => scrollTo(experienceRef)} className="sidebar-button">Mi experiencia</button>
        <button onClick={() => scrollTo(projectsRef)} className="sidebar-button">Mis proyectos</button>
      </div>
    </header>
  );
}
