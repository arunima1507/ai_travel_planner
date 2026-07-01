import * as React from "react";
import { destinations } from "../../data/destinations";

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h2 className="text-3xl font-semibold text-slate-900">Featured destinations</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {destinations.slice(0, 3).map((destination) => (
          <div key={destination.city} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{destination.city}</h3>
            <p className="mt-2 text-sm text-slate-600">{destination.places.length} curated highlights</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;
