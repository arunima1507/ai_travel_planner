"use client";

import { useState } from "react";

export default function TravelForm() {
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [weather, setWeather] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const travelData = {
      days,
      budget,
      travelStyle,
      weather,
      activityLevel,
    };

    console.log(travelData);

    alert("Travel preferences submitted!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl"
    >
      <h2 className="text-4xl font-black">
        Plan Your Jaipur Journey
      </h2>

      <p className="mt-3 opacity-70">
        Personalized recommendations powered by AI
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div>
          <label className="block mb-3 text-sm opacity-70">
            Number of Days
          </label>

          <input
            type="number"
            placeholder="3"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />
        </div>

        <div>
          <label className="block mb-3 text-sm opacity-70">
            Budget
          </label>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >
            <option value="">Select Budget</option>
            <option value="budget">Budget Friendly</option>
            <option value="mid-range">Mid Range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div>
          <label className="block mb-3 text-sm opacity-70">
            Travel Style
          </label>

          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >
            <option value="">Select Style</option>
            <option value="adventure">Adventure</option>
            <option value="cultural">Cultural</option>
            <option value="relaxed">Relaxed</option>
            <option value="foodie">Food Explorer</option>
          </select>
        </div>

        <div>
          <label className="block mb-3 text-sm opacity-70">
            Preferred Weather
          </label>

          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >
            <option value="">Choose Weather</option>
            <option value="cool">Cool</option>
            <option value="warm">Warm</option>
            <option value="rainy">Rainy</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-3 text-sm opacity-70">
            Daily Activity Level
          </label>

          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >
            <option value="">Select Activity Level</option>
            <option value="light">Light Exploration</option>
            <option value="moderate">Moderate</option>
            <option value="intense">Full-Day Exploration</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-10 w-full bg-white text-black py-5 rounded-2xl font-black hover:scale-[1.02] transition duration-300"
      >
        Generate AI Travel Plan
      </button>
    </form>
  );
}