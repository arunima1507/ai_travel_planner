import * as React from "react";
import { Card } from "../ui";

export function TravelStatsCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-900">Travel stats</h3>
      <p className="mt-2 text-sm text-slate-600">Track your planning momentum.</p>
    </Card>
  );
}

export default TravelStatsCard;
