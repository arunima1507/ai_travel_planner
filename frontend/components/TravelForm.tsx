"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function TravelForm() {
    const [destination, setDestination] = useState("");
    const [days, setDays] = useState("");
    const [exactBudget, setExactBudget] = useState("");
    const [travelerType, setTravelerType] = useState("");
    const [travelersCount, setTravelersCount] = useState("");
    const [accommodationType, setAccommodationType] = useState("");
    const [travelStyle, setTravelStyle] = useState("");
    const [weather, setWeather] = useState("");
    const [activityLevel, setActivityLevel] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        alert("You must be logged in.");
        return;
    }

    const { error } = await supabase
        .from("travel_preferences")
        .insert([
        {
            user_id: user.id,
            destination,
            days,
            exact_budget: exactBudget,
            traveler_type: travelerType,
            travelers_count: travelersCount,
            accommodation_type: accommodationType,
            travel_style: travelStyle,
            weather,
            activity_level: activityLevel,
            }
        ]);

    if (error) {
        console.log(error);

        alert("Failed to save preferences.");
    } else {
        alert("Travel preferences saved!");
    }
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
                Exact Budget (₹)
            </label>

            <input
                type="number"
                placeholder="15000"
                value={exactBudget}
                onChange={(e) => setExactBudget(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />
        </div>

        <div>
            <label className="block mb-3 text-sm opacity-70">
                Destination
            </label>

            <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            >
                <option value="">Select Destination</option>

                <option value="Jaipur">Jaipur</option>
                <option value="Goa">Goa</option>
                <option value="Manali">Manali</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kerala">Kerala</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Udaipur">Udaipur</option>
            </select>
        </div>

        <div>
            <label className="block mb-3 text-sm opacity-70">
                Traveler Type
            </label>

            <select
                value={travelerType}
                onChange={(e) => setTravelerType(e.target.value)}
                className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            >
                <option value="">Select Type</option>

                <option value="solo">Solo</option>
                <option value="couple">Couple</option>
                <option value="friends">Friends</option>
                <option value="family">Family</option>
            </select>
        </div>

        <div>
            <label className="block mb-3 text-sm opacity-70">
                Number of Travelers
            </label>

            <input
                type="number"
                placeholder="2"
                value={travelersCount}
                onChange={(e) => setTravelersCount(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />
        </div>

        <div>
            <label className="block mb-3 text-sm opacity-70">
                Accommodation Type
            </label>

            <select
                value={accommodationType}
                onChange={(e) => setAccommodationType(e.target.value)}
                className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            >
                <option value="">Select Accommodation</option>

                <option value="hostel">Hostel</option>
                <option value="hotel">Hotel</option>
                <option value="resort">Luxury Resort</option>
                <option value="homestay">Homestay</option>
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