import HeroTexts from "./components/HeroTexts";
import WavingHand from "./components/WavingHand";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <HeroTexts />
      <WavingHand />
    </main>
  );
}
