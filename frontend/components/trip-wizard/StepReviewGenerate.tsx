import * as React from "react";
import { Button } from "../ui";

export function StepReviewGenerate() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">Review and generate</h2>
      <p className="text-sm text-slate-600">Your itinerary will be generated once you confirm the details.</p>
      <Button>Generate itinerary</Button>
    </div>
  );
}

export default StepReviewGenerate;
