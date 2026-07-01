import * as React from "react";

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-slate-900">TripPlanner</div>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#destinations">Destinations</a>
          <a href="#how-it-works">How it works</a>
        </nav>
      </div>
    </header>
  );
}

export default PublicNavbar;
