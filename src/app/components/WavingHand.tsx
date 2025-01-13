"use client";

import { useEffect, useState } from "react";
// import wavingHand from "../../../public/ascii_arts/waving_hand.json";
import coffee from "../../../public/ascii_arts/coffee.json";
import { motion } from "motion/react";
import { ABCFavoritMonoVF } from "./Fonts";

const WavingHand = () => {
  const [frame, setFrame] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);
  const asciiAnimation = coffee;

  useEffect(() => {
    if (!play) return;

    setTimeout(() => {
      setFrame((frame + 1) % asciiAnimation.frames.length);
      // if (frame === asciiAnimation.frames.length - 1) setPlay(false);
    }, 70);
  }, [play, frame, asciiAnimation]);

  return (
    <motion.div
      onClick={() => setPlay(true)}
      whileHover={{
        fontWeight: 700,
        color: "#ffffff",
        // scale: 1.02,
        textShadow: "0px 4px 12px rgba(255, 255, 255, 0.40)",
      }}
      whileTap={{ scale: 0.97 }}
      className={`${ABCFavoritMonoVF.className} text-gray-300 whitespace-pre text-sm cursor-pointer leading-4`}
    >
      {asciiAnimation.frames[frame]}
    </motion.div>
  );
};

export default WavingHand;
