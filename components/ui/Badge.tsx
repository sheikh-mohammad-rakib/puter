import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "accent" | "success";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface-elevated text-muted",
  accent: "border-accent/20 bg-accent/10 text-accent",
  success: "border-success/20 bg-success/10 text-success",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
