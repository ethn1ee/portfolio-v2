"use client";

import HeroTexts from "./components/HeroTexts";
import HeroAnimation from "./components/HeroAnimation";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <HeroTexts />
      <HeroAnimation />
    </main>
  );
}
