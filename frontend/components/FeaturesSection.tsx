const features = [
  {
    title: "AI Itinerary Planning",
    description:
      "Smart travel schedules personalized to your energy, interests, and travel pace.",
    icon: "🧠",
  },

  {
    title: "Weather Intelligence",
    description:
      "Recommendations adapt automatically to Jaipur’s weather and seasonal conditions.",
    icon: "☀️",
  },

  {
    title: "Budget Optimization",
    description:
      "Balance luxury, food, transport, and experiences within your ideal budget.",
    icon: "💰",
  },

  {
    title: "Smart Recommendations",
    description:
      "Discover cafés, forts, shopping spots, and hidden gems based on your vibe.",
    icon: "📍",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-8 md:px-16 py-28">

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black">
          Intelligent Travel Planning
        </h2>

        <p className="mt-6 text-lg opacity-70">
          Experience AI-driven travel recommendations designed
          specifically around how YOU like to travel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-[32px] border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-8 hover:scale-105 transition duration-300 shadow-xl"
          >
            <div className="text-5xl">
              {feature.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 opacity-70 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}