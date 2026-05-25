import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type InputSize = "sm" | "md" | "lg";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  inputSize?: InputSize;
};

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  inputSize?: InputSize;
};

const baseStyles =
  "w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted focus:border-accent/50 focus:ring-2 focus:ring-ring/40";

const sizeStyles: Record<InputSize, string> = {
  sm: "h-10",
  md: "h-11",
  lg: "h-12 text-base",
};

export function Input({ className, inputSize = "md", ...props }: InputProps) {
  return <input className={cn(baseStyles, sizeStyles[inputSize], className)} {...props} />;
}

export function Textarea({
  className,
  inputSize = "md",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(baseStyles, sizeStyles[inputSize], "min-h-32 py-3", className)}
      {...props}
    />
  );
}
