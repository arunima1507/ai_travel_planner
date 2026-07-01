import * as React from "react";
import { Card } from "../ui";

export function TripCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-900">Trip card</h3>
      <p className="mt-2 text-sm text-slate-600">This will display trip summaries.</p>
    </Card>
  );
}

export default TripCard;
