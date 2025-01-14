"use client";

import {
  motion,
  useAnimate,
  stagger,
} from "motion/react";
import { useEffect } from "react";

interface AnimatedTextProps {
  children: string;
}

const AnimatedText = ({ children }: AnimatedTextProps) => {
  const [scope, animate] = useAnimate();

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

  return (
    <motion.span
      ref={scope}
      transition={{ duration: 0.2 * children.length }}
      className="relative overflow-y-hidden overflow-x-visible w-fit inline-block text-inherit"
    >
      {children.split("").map((char, index) => (
        <span key={index} className="stagger inline-block">
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
