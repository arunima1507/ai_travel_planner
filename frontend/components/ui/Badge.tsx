import * as React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return <span className={`inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 ${className}`}>{children}</span>;
}

export default Badge;
