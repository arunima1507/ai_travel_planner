export type TripStatus = "draft" | "planned" | "active" | "completed";

export interface Activity {
  id: string;
  title: string;
  time?: string;
  notes?: string;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  travelers?: number;
  status?: TripStatus;
  activities?: Activity[];
}
