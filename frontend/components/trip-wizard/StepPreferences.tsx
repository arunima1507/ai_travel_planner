import * as React from "react";
import { Input } from "../ui";

export function StepPreferences() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">Your preferences</h2>
      <Input placeholder="Interests" />
      <Input placeholder="Food, nightlife, museums..." />
    </div>
  );
}

export default StepPreferences;
