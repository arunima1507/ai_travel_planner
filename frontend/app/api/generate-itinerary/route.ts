import { NextResponse } from "next/server";

import { model } from "@/lib/gemini";

export async function POST(req: Request) {

  const body = await req.json();

  console.log("[generate-itinerary] received body:", body);

  const prompt = `
  
  Create a detailed personalized travel itinerary.

  Destination: ${body.destination}

  Number of days: ${body.days}

  Traveler Type: ${body.travelerType}

  Travel Style: ${body.travelStyle}

  Personality: ${body.personality}

  Preferred Weather: ${body.weather}

  Activity Level: ${body.activityLevel}

  Recommended places already shortlisted by our recommendation engine: ${
    Array.isArray(body.recommendedPlaces)
      ? body.recommendedPlaces.join(", ")
      : "none provided"
  }

  Generate:
  - day-wise itinerary
  - morning/afternoon/evening activities
  - food recommendations
  - hidden gems
  - travel tips
  - estimated spending
  - local experiences

  Make it feel premium, smart, and human-like.
  
  `;

  try {
    console.log("[generate-itinerary] calling Gemini...");

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    console.log("[generate-itinerary] Gemini call succeeded, length:", text.length);

    return NextResponse.json({
      itinerary: text,
    });
  } catch (err) {
    console.error("[generate-itinerary] Gemini call failed:", err);

    return NextResponse.json(
      { error: "Failed to generate itinerary." },
      { status: 500 }
    );
  }
}