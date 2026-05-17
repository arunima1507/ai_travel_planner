import { destinations } from "../data/destinations";

export function generateRecommendations(
  destination: string,
  travelerType: string,
  travelStyle: string,
  exactBudget: number,
  travelerPersonality: string,
  weather: string,
  activityLevel: string
) {

  const cityData = destinations.find(
    (item) => item.city === destination
  );

  if (!cityData) {
    return [];
  }

  const scoredPlaces = cityData.places.map((place) => {

    let score = 0;

    if (
      place.type.toLowerCase() ===
      travelStyle.toLowerCase()
    ) {
      score += 30;
    }

    if (
      place.suitableFor.includes(
        travelerType.toLowerCase()
      )
    ) {
      score += 25;
    }

    if (
      place.personalityMatch.includes(
        travelerPersonality.toLowerCase()
      )
    ) {
      score += 25;
    }

    if (
      place.weatherMatch.includes(
        weather.toLowerCase()
      )
    ) {
      score += 10;
    }

    if (
      place.activityMatch.includes(
        activityLevel.toLowerCase()
      )
    ) {
      score += 10;
    }

    if (
      place.estimatedCost <= exactBudget / 2
    ) {
      score += 20;
    }

    return {
      ...place,
      score,
    };
  });

  return scoredPlaces
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}