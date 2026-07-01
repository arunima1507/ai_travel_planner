import * as React from "react";

const steps = [
  "Tell us where and when you want to go",
  "Choose your pace, budget, and interests",
  "Receive a tailored itinerary and share it instantly",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h2 className="text-3xl font-semibold text-slate-900">How it works</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-sm font-semibold text-cyan-600">0{index + 1}</div>
            <p className="text-slate-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
