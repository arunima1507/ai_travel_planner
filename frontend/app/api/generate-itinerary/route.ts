import { NextResponse } from "next/server";

import { model } from "@/lib/gemini";

export async function POST(req: Request) {

  const body = await req.json();

  const prompt = `
  
  Create a detailed personalized travel itinerary.

  Destination: ${body.destination}

  Number of days: ${body.days}

  Budget: ₹${body.budget}

  Traveler Type: ${body.travelerType}

  Travel Style: ${body.travelStyle}

  Personality: ${body.personality}

  Preferred Weather: ${body.weather}

  Activity Level: ${body.activityLevel}

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

  const result = await model.generateContent(
    prompt
  );

  const response = await result.response;

  const text = response.text();

  return NextResponse.json({
    itinerary: text,
  });
}