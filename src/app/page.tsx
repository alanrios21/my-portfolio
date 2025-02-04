"use client";

import About from "@/components/About/About";
import BtnBackHome from "@/components/BtnBackHome/btnBackHome";
import HomeContent from "@/components/Home/homeContent";
import Navbar from "@/components/Navbar/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showBtnBackHome, setShowBtnBackHome] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBtnBackHome(!entry.isIntersecting);
      },
      { root: null, threshold: 0.5 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full w-full bg-black relative overflow-y">
      {/* Fondo y estrellas */}
      <div className="absolute inset-0 h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
      </div>
      <Navbar
        aboutRef={aboutRef}
        homeRef={homeRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
      />
      <div ref={homeRef} className="h-screen">
        <HomeContent />
      </div>
      <div ref={aboutRef} className="h-screen">
        <About />
      </div>
      ¡{" "}
      <div
        className={`fixed bottom-8 right-40 z-50 transition-all duration-300 ease-in-out transform ${
          showBtnBackHome ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <BtnBackHome homeRef={homeRef} />
      </div>
      {/* Shooting Stars */}
      <ShootingStars
        className="absolute inset-0"
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
