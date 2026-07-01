import * as React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-cyan-500 ${className}`} {...props}>
      {children}
    </select>
  );
}

export default Select;
