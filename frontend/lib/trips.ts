export type TripDraft = {
  id?: string;
  title: string;
  destination: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  travelers?: number;
};

export function createTripDraft(trip: TripDraft) {
  return trip;
}
