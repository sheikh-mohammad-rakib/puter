import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "elevated" | "interactive";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: CardVariant;
};

const cardVariantStyles: Record<CardVariant, string> = {
  default: "bg-surface border-border",
  elevated: "bg-surface border-border shadow-soft",
  interactive:
    "bg-surface border-border shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lifted",
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-6",
        cardVariantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
