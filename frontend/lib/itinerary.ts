export function generateItinerary(
  places: any[],
  days: number
) {

  const itinerary = [];

  let currentIndex = 0;

  for (let day = 1; day <= days; day++) {

    const dailyPlan = {
      day,
      morning: null as any,
      afternoon: null as any,
      evening: null as any,
    };

    let usedHighEnergy = false;

    while (
      currentIndex < places.length
    ) {

      const place = places[currentIndex];

      if (
        place.energyLevel === "high" &&
        usedHighEnergy
      ) {
        currentIndex++;
        continue;
      }

      if (
        place.energyLevel === "high"
      ) {
        usedHighEnergy = true;
      }

      if (
        place.bestTime === "morning" &&
        !dailyPlan.morning
      ) {
        dailyPlan.morning = place;
      }

      else if (
        place.bestTime === "afternoon" &&
        !dailyPlan.afternoon
      ) {
        dailyPlan.afternoon = place;
      }

      else if (
        place.bestTime === "evening" &&
        !dailyPlan.evening
      ) {
        dailyPlan.evening = place;
      }

      currentIndex++;

      if (
        dailyPlan.morning &&
        dailyPlan.afternoon &&
        dailyPlan.evening
      ) {
        break;
      }
    }

    itinerary.push(dailyPlan);
  }

  return itinerary;
}