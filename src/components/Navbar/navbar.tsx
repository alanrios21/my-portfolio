"use client";

import { MutableRefObject, useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import "./navbar.css";
import ButtonLanguague from "../BtnLanguaje/BtnLanguaje";
import { useTranslation } from "@/Hooks/useTranslation";
import { HiMenuAlt3 } from "react-icons/hi";

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
    setIsAnimating(true);
    if (isOpen) {
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
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.1,
        ease: "power3.in",
        onComplete: () => setIsAnimating(false),
      });
    }

    const handleResize = () => (window.innerWidth >= 768 ? setIsOpen(false) : null);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const closeMenu = () => (!isAnimating ? setIsOpen(false) : null);

  const t = useTranslation();

  const scrollTo = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="flex items-center">
        <ButtonLanguague />
      </div>

      <nav className="navbar-menu">
        <div onClick={() => scrollTo(homeRef)} className="navbar-item">
          {t.navbar.home}
        </div>
        <div onClick={() => scrollTo(aboutRef)} className="navbar-item">
          {t.navbar.about}
        </div>
        <div onClick={() => scrollTo(experienceRef)} className="navbar-item">
          {t.navbar.experience}
        </div>
        <div onClick={() => scrollTo(projectsRef)} className="navbar-item">
          {t.navbar.projects}
        </div>
      </nav>

      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <HiMenuAlt3 size={23} />
      </button>

      <div ref={sidebarRef} className={`sidebar z-50 ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          <IoMdClose className="h-6 w-6 text-black" />
        </button>
        <button onClick={() => scrollTo(homeRef)} className="sidebar-button mt-10">
          {t.navbar.home}
        </button>
        <button onClick={() => scrollTo(aboutRef)} className="sidebar-button">
          {t.navbar.about}
        </button>
        <button onClick={() => scrollTo(experienceRef)} className="sidebar-button">
          {t.navbar.experience}
        </button>
        <button onClick={() => scrollTo(projectsRef)} className="sidebar-button">
          {t.navbar.projects}
        </button>
      </div>
    </header>
  );
}
