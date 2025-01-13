"use client";

import { useEffect, useState } from "react";
import { ABCFavoritMonoVF, ABCGramercyDisplay } from "./Fonts";
import LinkButton from "./LinkButton";

const HeroTexts = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* MAIN HEADINGS */}
      <h1
        className={`${ABCGramercyDisplay.className} antialiased font-bold absolute top-10 left-10 text-8xl`}
      >
        TAEHOON <br /> LEE
        <br />
        <i className={`${ABCGramercyDisplay.className} antialiased`}>(ETHAN)</i>
      </h1>
      <h1
        className={`${ABCGramercyDisplay.className} antialiased font-bold absolute bottom-10 right-10 text-8xl text-right`}
      >
        CREATIVE <br /> DEVELOPER
      </h1>

      {/* SUBHEADINGS */}
      <div className="font-bold absolute top-10 right-10 text-2xl text-right">
        <h2 className="text-2xl font-bold mb-1">ATLANTA, GA</h2>
        <h3
          className={`${ABCFavoritMonoVF.className} text-base font-normal text-gray-400 leading-5`}
        >
          {now.getMonth() + 1}/{now.getDate()}/{now.getFullYear()}
          <br />
          {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
        </h3>
      </div>
      <div className="absolute bottom-10 left-10 text-lg flex flex-col gap-2">
        <LinkButton href={"https://github.com/ethn1ee"} text={"GITHUB"} />
        <LinkButton href={"https://linkedin.com/in/ethn1ee"} text={"LINKEDIN"} />
      </div>
    </>
  );
};

export default HeroTexts;
