"use client";

import { useAnimate, stagger, useScroll } from "motion/react";
import { useEffect } from "react";

interface AnimatedTextProps {
  children: string;
}

const AnimatedText = ({ children }: AnimatedTextProps) => {
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    animate(
      ".stagger",
      { opacity: [0, 1], y: ["100%", "0%"] },
      {
        duration: 0.8,
        delay: stagger(0.2, { startDelay: 0.5, ease: [0.12, 0, 0.39, 0] }),
        ease: [0, 0.55, 0.45, 1],
      }
    );
  }, [animate]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div
      ref={scope}
      className="relative overflow-y-hidden overflow-x-visible w-fit"
    >
      {children.split("").map((char, index) => (
        <span key={index} className="stagger inline-block">
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
