import * as React from "react";
import { Input, Select } from "../ui";

export function StepDestinationDates() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">Where and when?</h2>
      <Input placeholder="Destination" />
      <Input type="date" />
      <Select>
        <option value="">Trip type</option>
        <option value="leisure">Leisure</option>
        <option value="adventure">Adventure</option>
      </Select>
    </div>
  );
}

export default StepDestinationDates;
