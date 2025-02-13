"use client";

import React, { MutableRefObject } from "react";
import { RiArrowUpSFill } from "react-icons/ri";

interface HomeRefProps {
  homeRef: MutableRefObject<HTMLDivElement | null>;
}

const BtnBackHome = ({ homeRef }: HomeRefProps) => {
  const scrollToHome = () => {
    if (homeRef?.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button 
      onClick={scrollToHome} 
      className="fixed outline-none bottom-8 z-20 left-24 cursor-pointer rounded-full text-5xl bg-white hover:bg-gray-400 text-black transition duration-300"
    >
      <RiArrowUpSFill />
    </button>
  );
};

export default BtnBackHome;
