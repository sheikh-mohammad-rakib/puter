export type NavItem = {
  title: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  location: string;
  email: string;
  availability: string;
  heroHeadline: string;
  heroSubhead: string;
  about: string;
  aboutExtended: string;
  contactBlurb: string;
  nav: NavItem[];
  stats: StatItem[];
  highlights: HighlightItem[];
  values: ValueItem[];
  services: string[];
  contactChecklist: string[];
};
