import * as React from "react";
import { Card } from "../ui";

export function RecentTripsRow() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-900">Recent trips</h3>
      <p className="mt-2 text-sm text-slate-600">Your latest plans will appear here.</p>
    </Card>
  );
}

export default RecentTripsRow;
