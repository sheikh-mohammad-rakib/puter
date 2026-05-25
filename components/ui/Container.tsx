import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl" | "2xl";
};

const sizeStyles: Record<NonNullable<ContainerProps["size"]>, string> = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
};

export function Container({ children, className, size = "xl" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8", sizeStyles[size], className)}>
      {children}
    </div>
  );
}
