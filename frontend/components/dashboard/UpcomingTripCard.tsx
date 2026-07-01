import * as React from "react";
import { Card } from "../ui";

export function UpcomingTripCard() {
  return (
    <Card className="h-full">
      <h3 className="text-lg font-semibold text-slate-900">Upcoming trip</h3>
      <p className="mt-2 text-sm text-slate-600">Your next vacation is ready to be refined.</p>
    </Card>
  );
}

export default UpcomingTripCard;
