import * as React from "react";
import { Input, Select } from "../ui";

export function StepCompanionsBudget() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">Who and how much?</h2>
      <Input placeholder="Travelers" />
      <Input placeholder="Budget" />
      <Select>
        <option value="">Travel style</option>
        <option value="solo">Solo</option>
        <option value="couple">Couple</option>
        <option value="family">Family</option>
      </Select>
    </div>
  );
}

export default StepCompanionsBudget;
