import esgHorizonLogo from "@/assets/logo-full.png";
import esgHorizonDashboard from "@/assets/hero.svg";

/**
 * Digital products built or managed by Teasoo Consulting, shown on /teasoo-apps.
 * To add an app: add an entry here, with its logo and a product picture under public/apps/.
 * The page lays itself out.
 */
export interface TeasooApp {
  name: string;
  /** Short line under the name */
  tagline: string;
  description: string;
  url: string;
  /** Logo image path or imported asset URL */
  logo: string;
  /** "wide" logos are wordmarks; "icon" logos are square marks */
  logoStyle: "wide" | "icon";
  /** A picture of the product at work (dashboard, map, app screen) */
  image: string;
  imageAlt: string;
  /** Background tint behind the product picture */
  tint: string;
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
    image: esgHorizonDashboard.src,
    imageAlt: "ESG Horizon dashboard showing greenhouse gas emissions by scope and progress towards a 2030 reduction target",
    tint: "#e8f6f2",
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
    image: "/apps/set-preview.svg",
    imageAlt: "Teasoo SET dashboard showing engagements logged, open commitments, stakeholder sentiment and recent engagements by risk level",
    tint: "#eef2fd",
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
    image: "/apps/tms-preview.svg",
    imageAlt: "Teasoo TMS map of planting areas with recorded trees, a survival rate of 91% and the field app recording a tree offline",
    tint: "#e8f3ec",
    highlights: ["Works offline in the field", "Map-based tree registry", "Executive dashboard"],
  },
];
