import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariants = "primary" | "outline" | "ghost";

type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  className?: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantStyles: Record<ButtonVariants, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  outline: "border border-border bg-surface text-foreground hover:bg-foreground/5",
  ghost: "text-foreground hover:bg-foreground/5",
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
