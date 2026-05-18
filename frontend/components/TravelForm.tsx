"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { generateRecommendations } from "../lib/recommendations";
import { generateItinerary } from "../lib/itinerary";


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
    const [recommendations, setRecommendations] = useState<any[]>([]);
    const [itinerary, setItinerary] = useState<any[]>([]);
    const [travelerPersonality, setTravelerPersonality] = useState("");
    const [mlPrediction, setMlPrediction] = useState("");

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
            traveler_personality: travelerPersonality,
            }
        ]);

    if (error) {
        console.log(error);

        alert("Failed to save preferences.");
    } else {
        const results = generateRecommendations(
        destination,
        travelerType,
        travelStyle,
        Number(exactBudget),
        travelerPersonality,
        weather,
        activityLevel
        );

        setRecommendations(results);

        const generatedItinerary = generateItinerary(
        results,
        Number(days)
        );

        setItinerary(generatedItinerary);

        const response = await fetch(
        "/api/predict",
        {
            method: "POST",

            headers: {
            "Content-Type": "application/json",
            },

            body: JSON.stringify({
            traveler_type: travelerType,
            travel_style: travelStyle,
            personality: travelerPersonality,
            weather,
            activity_level: activityLevel,
            budget: exactBudget,
            }),
        }
        );

        const data = await response.json();

        setMlPrediction(data.prediction);

        alert("AI itinerary generated!");
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
                Traveler Personality
            </label>

            <select
                value={travelerPersonality}
                onChange={(e) =>
                setTravelerPersonality(e.target.value)
                }
                className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            >
                <option value="">Select Personality</option>

                <option value="explorer">
                Explorer
                </option>

                <option value="relaxed">
                Relaxed Traveler
                </option>

                <option value="foodie">
                Foodie
                </option>

                <option value="photographer">
                Photographer
                </option>

                <option value="nightlife">
                Nightlife Lover
                </option>

                <option value="adventure">
                Adventure Seeker
                </option>

                <option value="culture">
                Culture Enthusiast
                </option>
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

        {recommendations.length > 0 && (
        <div className="mt-14">

            <h3 className="text-3xl font-black">
            Recommended Places
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

            {recommendations.map((place, index) => (
                <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
                >
                <h4 className="text-2xl font-bold">
                    {place.name}
                </h4>

                <p className="mt-3 opacity-70">
                    Type: {place.type}
                </p>

                <p className="mt-2 opacity-70">
                    Budget: {place.budget}
                </p>
                </div>
            ))}
            </div>
        </div>
        )}

        {itinerary.length > 0 && (
        <div className="mt-16">

            <h3 className="text-3xl font-black">
            Your AI Itinerary
            </h3>

            <div className="mt-8 space-y-8">

            {itinerary.map((dayPlan, index) => (
                <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
                >
                <h4 className="text-2xl font-bold">
                    Day {dayPlan.day}
                </h4>

                <div className="mt-6 space-y-4">

                    {dayPlan.morning && (
                        <div className="bg-black/20 rounded-2xl p-5">
                        <p className="opacity-60">
                            Morning
                        </p>

                        <h5 className="text-xl font-bold mt-2">
                            {dayPlan.morning.name}
                        </h5>
                        </div>
                    )}

                    {dayPlan.afternoon && (
                        <div className="bg-black/20 rounded-2xl p-5">
                        <p className="opacity-60">
                            Afternoon
                        </p>

                        <h5 className="text-xl font-bold mt-2">
                            {dayPlan.afternoon.name}
                        </h5>
                        </div>
                    )}

                    {dayPlan.evening && (
                        <div className="bg-black/20 rounded-2xl p-5">
                        <p className="opacity-60">
                            Evening
                        </p>

                        <h5 className="text-xl font-bold mt-2">
                            {dayPlan.evening.name}
                        </h5>
                        </div>
                    )}

                    </div>
                </div>
            ))}

            </div>
        </div>
        )} 

                {mlPrediction && (
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 rounded-3xl p-8">

            <h3 className="text-3xl font-black">
            AI Prediction
            </h3>

            <p className="mt-4 text-xl opacity-80">
            Based on your personality and travel style,
            our ML model predicts that you would love:
            </p>

            <h2 className="mt-6 text-5xl font-black">
            {mlPrediction}
            </h2>
        </div>
        )} 
    </form>
  );
}