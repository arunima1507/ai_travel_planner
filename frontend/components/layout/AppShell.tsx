import * as React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="hidden w-72 border-r border-slate-200 bg-white p-6 lg:block">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900">TripPlanner</h2>
          <p className="mt-1 text-sm text-slate-500">Plan smarter trips</p>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  );
}

export default AppShell;
