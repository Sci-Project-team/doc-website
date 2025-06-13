import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variants: Record<string, string> = {
    default:
      "bg-primary-100 text-primary-800 border-transparent dark:bg-primary-900 dark:text-primary-300",
    secondary:
      "bg-secondary-100 text-secondary-800 border-transparent dark:bg-secondary-900 dark:text-secondary-300",
    destructive:
      "bg-red-100 text-red-800 border-transparent dark:bg-red-900 dark:text-red-300",
    outline:
      "border-primary-200 text-primary-800 dark:border-primary-800 dark:text-primary-200 bg-transparent",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}
