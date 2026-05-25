import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariants = "primary" | "secondary" | "outline" | "ghost";

type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  className?: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium shadow-soft transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-0";

const variantStyles: Record<ButtonVariants, string> = {
  primary: "bg-accent text-white hover:-translate-y-0.5 hover:bg-accent-strong",
  secondary:
    "border border-border bg-surface-elevated text-foreground hover:-translate-y-0.5 hover:bg-surface",
  outline:
    "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10",
  ghost: "text-foreground shadow-none hover:bg-foreground/5",
};

const sizeStyles: Record<ButtonSizes, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  return <Link className={classes} {...props} />;
}
