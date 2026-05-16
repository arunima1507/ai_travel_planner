import TravelCard from "./TravelCard";

export default function HeroSection() {
  return (
    <section className="relative z-10 grid lg:grid-cols-2 min-h-[85vh]">

      <div className="flex flex-col justify-center px-8 md:px-16 py-16">

        <div className="mb-6">
          <span className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-sm shadow-lg">
            AI Powered Travel Experience
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
          Travel
          <br />
          beyond
          <br />
          the map.
        </h2>

        <p className="mt-8 text-lg md:text-xl max-w-xl leading-relaxed opacity-75">
          Your itinerary adapts to your vibe, budget,
          energy, weather, and spontaneous plans —
          creating a deeply personal travel experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-[#1f2937] dark:bg-[#f9fafb] text-white dark:text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
            Start Journey
          </button>

          <button className="border border-black/10 dark:border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-10">
        <TravelCard />

        <div className="absolute top-20 right-10 w-20 h-20 rounded-3xl rotate-12 bg-[#fecdd3] dark:bg-[#7f1d1d] opacity-40 blur-xl"></div>

        <div className="absolute bottom-16 left-6 w-24 h-24 rounded-full bg-[#bfdbfe] dark:bg-[#1e40af] opacity-40 blur-2xl"></div>
      </div>
    </section>
  );
}