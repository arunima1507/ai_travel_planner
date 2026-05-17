import { destinations } from "../data/destinations";

export function generateRecommendations(
  destination: string,
  travelerType: string,
  travelStyle: string,
  exactBudget: number
) {
  const cityData = destinations.find(
    (item) => item.city === destination
  );

  if (!cityData) {
    return [];
  }

  return cityData.places.filter((place) => {
    return (
      place.type.toLowerCase() === travelStyle.toLowerCase() &&

      place.suitableFor.includes(
        travelerType.toLowerCase()
      ) &&

      place.estimatedCost <= exactBudget / 2
    );
  });
}