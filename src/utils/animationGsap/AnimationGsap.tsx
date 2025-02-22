import { gsap } from "gsap";
import { RefObject } from "react";

export const buttonTranslateAnimate = ({ buttonTranslateRef }: { buttonTranslateRef: RefObject<HTMLDivElement | null> }) => {
  if (!buttonTranslateRef.current) return; // Asegura que el ref no sea null
  
  gsap.from(buttonTranslateRef.current, {
    opacity: 0,
    scale: 0.1,
    ease: "power2",
    duration: 0.5,
    delay: 2,
  });
};
