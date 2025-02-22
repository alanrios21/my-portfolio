"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/Hooks/useTranslation";
import { forwardRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const HomeContent = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    const t = useTranslation();
    return (
      <>
        <div
          ref={ref}
          {...props}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            {t.home.title}{" "}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            {t.home.subtitle}{" "}
          </p>
          <div className="mt-8">
            <Button variant="secondary" downloadUrl="/CV Alan Ríos - 2024.pdf">
              <FaArrowAltCircleUp />
              {t.home.downloadCV}{" "}
            </Button>
          </div>
        </div>
      </>
    );
  }
);

HomeContent.displayName = "HomeContent";

export default HomeContent;
