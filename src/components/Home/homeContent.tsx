"use client";

import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const HomeContent = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <>
        <div
          ref={ref}
          {...props}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Desarrollador Full Stack
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            La tecnología tiene que ser hecha desde lo funcional y la vanguardia
          </p>
          <div className="mt-8">
            <Button variant="secondary" downloadUrl="/CV Alan Ríos - 2024.pdf">
              <FaArrowAltCircleUp />
              Descargar CV
            </Button>
          </div>
        </div>
      </>
    );
  }
);

HomeContent.displayName = "HomeContent";

export default HomeContent;
