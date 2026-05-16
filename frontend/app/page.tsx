import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1eb] dark:bg-[#111827] text-[#1f2937] dark:text-[#f9fafb] transition-colors duration-500 overflow-hidden">

      <div className="absolute top-[-120px] left-[-80px] w-[350px] h-[350px] bg-[#c7d2fe] dark:bg-[#312e81] opacity-40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-[#fde68a] dark:bg-[#78350f] opacity-30 blur-3xl rounded-full"></div>

      <Navbar />

      <HeroSection />
      <FeaturesSection />
    </main>
  );
}