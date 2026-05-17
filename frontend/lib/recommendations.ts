import { destinations } from "../data/destinations";

export function generateRecommendations(
  destination: string,
  travelerType: string,
  travelStyle: string
) {
  const cityData = destinations.find(
    (item) => item.city === destination
  );

  if (!cityData) {
    return [];
  }

  return cityData.places.filter((place) => {
    return (
      place.type === travelStyle &&
      place.suitableFor.includes(travelerType)
    );
  });
}