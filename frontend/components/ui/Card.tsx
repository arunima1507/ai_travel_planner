import * as React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
};

export function Card({ children, className = "", padding = "md" }: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${paddingClasses[padding]} ${className}`}>{children}</div>;
}

export default Card;
