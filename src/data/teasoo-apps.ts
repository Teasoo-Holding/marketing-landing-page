import esgHorizonLogo from "@/assets/logo-full.png";

/**
 * Digital products built or managed by Teasoo Consulting, shown on /teasoo-apps.
 * To add an app: add an entry here (and its logo under public/apps/). The page lays itself out.
 */
export interface TeasooApp {
  name: string;
  /** Short line under the name */
  tagline: string;
  description: string;
  url: string;
  /** Logo image path or imported asset URL */
  logo: string;
  /** "wide" logos (wordmarks) are shown on a light panel; "icon" logos are square marks */
  logoStyle: "wide" | "icon";
  highlights: string[];
  featured?: boolean;
}

export const TEASOO_APPS: TeasooApp[] = [
  {
    name: "ESG Horizon",
    tagline: "ESG reporting for Africa",
    description:
      "Collect ESG data, calculate emissions and produce IFRS S1 and S2 aligned, audit-ready sustainability reports, built for Nigerian and African regulatory realities.",
    url: "https://esghorizon.africa",
    logo: esgHorizonLogo.src,
    logoStyle: "wide",
    highlights: ["IFRS S1 & S2 aligned", "GHG Scope 1, 2 & 3", "Audit-ready reports"],
    featured: true,
  },
  {
    name: "Teasoo SET",
    tagline: "Stakeholder Engagement Tracker",
    description:
      "One source of truth for stakeholder relationships: log engagements in the field, track risk, sentiment and commitments, and give leadership a live view.",
    url: "https://set.teasooconsulting.com",
    logo: "/apps/set.svg",
    logoStyle: "icon",
    highlights: ["Field engagement capture", "Risk and sentiment tracking", "GDPR and NDPA aligned"],
  },
  {
    name: "Teasoo TMS",
    tagline: "Tree Management System",
    description:
      "An offline-first reforestation registry: field officers record every tree on an Android app, while administrators and executives follow progress on a web portal and dashboard.",
    url: "https://tms.teasooconsulting.com",
    logo: "/apps/tms.svg",
    logoStyle: "icon",
    highlights: ["Works offline in the field", "Map-based tree registry", "Executive dashboard"],
  },
];
