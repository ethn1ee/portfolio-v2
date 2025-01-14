"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

interface LinkButtonProps {
  href: string;
  text: string;
  target?: string;
}

const LinkButton = ({ href, text, target = "_blank" }: LinkButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const underlineStyle = {
    default: { width: "0%", height: "1px", backgroundColor: "white" },
    hover: { width: "100%", height: "1px", backgroundColor: "white" },
  };

  return (
    <Link
      href={href}
      target={target}
      rel="noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-fit leading-5"
    >
      {text}
      <motion.div
        animate={isHovered ? underlineStyle.hover : underlineStyle.default}
      />
    </Link>
  );
};

export default LinkButton;
