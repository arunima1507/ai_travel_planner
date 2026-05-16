export default function TravelCard() {
  return (
    <div className="relative w-full max-w-[520px] rounded-[40px] border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">

      <div className="h-[320px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop"
          alt="Travel"
          className="w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="absolute top-6 left-6 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-medium">
          Jaipur • India
        </div>

        <div className="absolute bottom-6 right-6 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl">
          ⭐ 4.9 Experience
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-2xl font-bold">
              Smart AI Itinerary
            </h3>

            <p className="mt-2 opacity-70">
              Adaptive schedules based on weather,
              crowd levels, and your energy patterns.
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-[#dbeafe] dark:bg-[#1e3a8a] flex items-center justify-center text-2xl">
            ✈️
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center">
            <p className="text-2xl font-black">12k+</p>

            <p className="text-sm opacity-60">
              Trips
            </p>
          </div>

          <div className="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center">
            <p className="text-2xl font-black">98%</p>

            <p className="text-sm opacity-60">
              Happy
            </p>
          </div>

          <div className="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center">
            <p className="text-2xl font-black">AI</p>

            <p className="text-sm opacity-60">
              Guided
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}