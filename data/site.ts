import type { SiteConfig } from "@/types";

export const siteConfig = {
  name: "Riley Park",
  title: "Riley Park - Product Designer",
  description:
    "Portfolio of Riley Park, a product designer focused on calm, human-centered experiences.",
  keywords: [
    "Product design",
    "User experience",
    "Design systems",
    "Prototyping",
    "Research",
  ],
  location: "Remote",
  email: "hello@studio.example",
  availability: "Available for select collaborations",
  heroHeadline: "Designing calm, clear product journeys.",
  heroSubhead:
    "I partner with teams to simplify complex products, build resilient design systems, and ship thoughtful experiences.",
  about:
    "I am a product designer who blends strategy, systems thinking, and craft to help teams move from concept to launch.",
  aboutExtended:
    "Over the past decade I have collaborated with founders and product teams to shape digital products from early MVPs to global platforms. My work centers on clarity, accessibility, and momentum.",
  contactBlurb:
    "Share your timeline, goals, and current challenges. I will follow up with a focused plan for next steps.",
  nav: [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
  stats: [
    { value: "8+", label: "Years building product experiences" },
    { value: "30+", label: "End-to-end launches shipped" },
    { value: "4", label: "Design systems in active use" },
  ],
  highlights: [
    {
      title: "Strategy to shipped product",
      description:
        "Partnering from discovery through delivery to keep teams aligned and confident.",
    },
    {
      title: "Calm, accessible interfaces",
      description:
        "Crafting experiences that feel intuitive, inclusive, and focused.",
    },
    {
      title: "System thinking",
      description:
        "Design systems that scale across products while keeping teams aligned.",
    },
  ],
  values: [
    {
      title: "Clarity over noise",
      description:
        "Every screen should help users understand what matters most.",
    },
    {
      title: "Momentum matters",
      description:
        "Small, consistent releases keep teams confident and customers engaged.",
    },
    {
      title: "Human-first craft",
      description: "I design for real people, not personas on a slide.",
    },
    {
      title: "Collaborative by default",
      description:
        "The best outcomes happen when design, product, and engineering work as one.",
    },
  ],
  services: [
    "Product strategy and roadmapping",
    "UX and UI design",
    "Design systems and component libraries",
    "Prototyping and user testing",
  ],
  contactChecklist: [
    "Project overview and goals",
    "Timeline and launch window",
    "Key stakeholders and teams involved",
    "Any existing research or insights",
  ],
} satisfies SiteConfig;
