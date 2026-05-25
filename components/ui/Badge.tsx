import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "accent" | "success";
type BadgeStyle = "pill" | "list";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
  badgeStyle?: BadgeStyle;
};

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface-elevated text-muted",
  accent: "border-accent/20 bg-accent/10 text-accent",
  success: "border-success/20 bg-success/10 text-success",
};

const styleStyles: Record<BadgeStyle, string> = {
  pill: "rounded-full px-3 py-1 text-xs tracking-wide",
  list: "w-full justify-start rounded-xl px-3 py-2 text-sm tracking-normal",
};

export function Badge({
  className,
  variant = "neutral",
  badgeStyle = "pill",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border font-medium",
        variantStyles[variant],
        styleStyles[badgeStyle],
        className
      )}
      {...props}
    />
  );
}
