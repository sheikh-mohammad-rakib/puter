export const colorPalette = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  surface: "var(--surface)",
  surfaceElevated: "var(--surface-elevated)",
  accent: "var(--accent)",
  accentStrong: "var(--accent-strong)",
  muted: "var(--muted)",
  border: "var(--border)",
  ring: "var(--ring)",
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
} as const;

export const typographyScale = {
  displayXl: "text-display-xl font-semibold tracking-tight",
  displayLg: "text-display-lg font-semibold tracking-tight",
  title: "text-title font-semibold tracking-tight",
  bodyLg: "text-body-lg",
  body: "text-base leading-7",
  bodySm: "text-sm leading-6",
  label: "text-xs uppercase tracking-[0.3em]",
  mono: "font-mono text-sm",
} as const;

export const spacingSystem = {
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
} as const;

export const containerWidths = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  "2xl": "var(--container-2xl)",
} as const;
