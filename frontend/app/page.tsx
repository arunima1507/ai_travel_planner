export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1eb] dark:bg-[#111827] text-[#1f2937] dark:text-[#f9fafb] transition-colors duration-500 overflow-hidden">
      
      {/* Floating Background Blur Shapes */}
      <div className="absolute top-[-120px] left-[-80px] w-[350px] h-[350px] bg-[#c7d2fe] dark:bg-[#312e81] opacity-40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-[#fde68a] dark:bg-[#78350f] opacity-30 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            AI Travel Planner
          </h1>
          <p className="text-sm opacity-70">
            explore differently
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button className="hover:opacity-60 transition">
            Discover
          </button>

          <button className="hover:opacity-60 transition">
            Journeys
          </button>

          <button className="hover:opacity-60 transition">
            AI Guide
          </button>

          <button className="hover:opacity-60 transition">
            Login
          </button>
        </div>
      </nav>

      {/* Main Layout */}
      <section className="relative z-10 grid lg:grid-cols-2 min-h-[85vh]">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          
          {/* Floating Badge */}
          <div className="mb-6">
            <span className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-sm shadow-lg">
              AI Powered Travel Experience
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Travel
            <br />
            beyond
            <br />
            the map.
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl max-w-xl leading-relaxed opacity-75">
            Your itinerary adapts to your vibe, budget,
            energy, weather, and spontaneous plans —
            creating a deeply personal travel experience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#1f2937] dark:bg-[#f9fafb] text-white dark:text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Start Journey
            </button>

            <button className="border border-black/10 dark:border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center p-10">
          
          {/* Glassmorphism Card */}
          <div className="relative w-full max-w-[520px] rounded-[40px] border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
            
            {/* Top Image Area */}
            <div className="h-[320px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop"
                alt="Travel"
                className="w-full h-full object-cover scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating City Tag */}
              <div className="absolute top-6 left-6 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-medium">
                Jaipur • India
              </div>

              {/* Rating */}
              <div className="absolute bottom-6 right-6 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl">
                ⭐ 4.9 Experience
              </div>
            </div>

            {/* Bottom Content */}
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

              {/* Mini Stats */}
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

          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-20 h-20 rounded-3xl rotate-12 bg-[#fecdd3] dark:bg-[#7f1d1d] opacity-40 blur-xl"></div>

          <div className="absolute bottom-16 left-6 w-24 h-24 rounded-full bg-[#bfdbfe] dark:bg-[#1e40af] opacity-40 blur-2xl"></div>
        </div>
      </section>
    </main>
  );
}