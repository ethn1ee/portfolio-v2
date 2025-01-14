"use client";

import { useEffect, useState } from "react";
import wavingHand from "../../../public/ascii_arts/waving_hand.json";
import coffee from "../../../public/ascii_arts/coffee.json";
import { motion } from "motion/react";
import { ABCFavoritMonoVF } from "./Fonts";

const HeroAnimation = () => {
  const [frame, setFrame] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);
  const animations = [wavingHand, coffee];
  const animation = animations[0];

  // Animation options
  const initialOptions = { scale: 0.96, opacity: 0 };
  const animateOptions = { scale: 1, opacity: 1 };
  const transitionOptions = {
    duration: 0.5,
    ease: "easeOut",
  };
  const whileHoverOptions = {
    fontWeight: 700,
    color: "#ffffff",
    textShadow: "0px 4px 12px rgba(255, 255, 255, 0.2)",
  };
  const whileTapOptions = { scale: 0.97 };

  useEffect(() => {
    if (!play) return;

    setTimeout(() => {
      setFrame((frame + 1) % animation.frames.length);
      if (frame === animation.frames.length - 1) setPlay(false);
    }, 70);
  }, [play, frame, animation]);

  return (
    <motion.div
      onClick={() => setPlay(true)}
      initial={initialOptions}
      animate={animateOptions}
      transition={transitionOptions}
      whileHover={whileHoverOptions}
      whileTap={whileTapOptions}
      className={`${ABCFavoritMonoVF.className} fixed w-[500px] h-[500px] left-[calc(50vw-250px)] top-[calc(50vh-250px)] flex items-center justify-center text-gray-300 whitespace-pre text-sm cursor-pointer leading-4`}
    >
      {animation.frames[frame]}
    </motion.div>
  );
};

export default HeroAnimation;
