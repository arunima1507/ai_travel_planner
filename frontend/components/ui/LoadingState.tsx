import * as React from "react";

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-sm text-slate-600">
      <div className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
      {label}
    </div>
  );
}

export default LoadingState;
