"use client";

import { useEffect, useState } from "react";
import data from "../../../public/waving_hand_ascii_art.json";
import { motion } from "motion/react";
import { ABCFavoritMonoVF } from "./Fonts";

const WavingHand = () => {
  const [frame, setFrame] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!play) return;

    setTimeout(() => {
      setFrame((frame + 1) % data.frames.length);
      if (frame === data.frames.length - 1) setPlay(false);
    }, 40);
  }, [play, frame]);

  return (
    <motion.div
      onClick={() => setPlay(true)}
      whileHover={{
        fontWeight: 700,
        color: "#ffffff",
        scale: 1.02,
        textShadow: "0px 4px 12px rgba(255, 255, 255, 0.40)",
      }}
      whileTap={{ scale: 0.97 }}
      className={`${ABCFavoritMonoVF.className} text-gray-300 whitespace-pre text-base cursor-pointer leading-5`}
    >
      {data.frames[frame].split("\n").map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split("").map((char, index) => (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default WavingHand;
