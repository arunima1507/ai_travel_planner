import * as React from "react";
import { Button } from "../ui";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <p className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">AI-powered travel planning</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Build your next adventure in minutes.</h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600">Create personalized itineraries, discover destinations, and keep your whole trip organized.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>Start planning</Button>
          <Button variant="secondary">Explore destinations</Button>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8" />
    </section>
  );
}

export default Hero;
