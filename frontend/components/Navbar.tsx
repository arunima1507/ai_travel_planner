export default function Navbar() {
  return (
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
  );
}