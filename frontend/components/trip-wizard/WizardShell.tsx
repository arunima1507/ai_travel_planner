import * as React from "react";

export function WizardShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">{children}</div>;
}

export default WizardShell;
