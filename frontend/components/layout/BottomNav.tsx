import * as React from "react";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/90 p-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-around text-sm font-medium text-slate-600">
        <span>Home</span>
        <span>Trips</span>
        <span>Profile</span>
      </div>
    </nav>
  );
}

export default BottomNav;
