import * as React from "react";
import { Button } from "../ui";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
        <h2 className="text-3xl font-semibold">Ready to plan your perfect trip?</h2>
        <p className="mt-3 max-w-2xl text-slate-300">Start from a blank slate or build from one of our destination ideas.</p>
        <div className="mt-8">
          <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
            Create itinerary
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
