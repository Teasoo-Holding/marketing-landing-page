/** The SEO landing pages, used for the footer, "related" links and internal linking across the site. */
export const SOLUTION_PAGES = [
	{
		href: "/esg-reporting-software/",
		label: "ESG Reporting Software",
		summary: "One platform for ESG data, workflows and audit-ready sustainability reports.",
	},
	{
		href: "/ifrs-s1-compliance/",
		label: "IFRS S1 Compliance",
		summary: "Prepare sustainability-related financial disclosures under IFRS S1.",
	},
	{
		href: "/ifrs-s2-reporting/",
		label: "IFRS S2 Reporting",
		summary: "Manage climate-related disclosures, risks and emissions for IFRS S2.",
	},
	{
		href: "/ghg-accounting-software/",
		label: "GHG Accounting Software",
		summary: "Calculate Scope 1, 2 and 3 emissions in line with the GHG Protocol.",
	},
	{
		href: "/esg-data-management/",
		label: "ESG Data Management",
		summary: "Collect, validate and govern ESG data across departments and entities.",
	},
	{
		href: "/esg-reporting-nigeria/",
		label: "ESG Reporting in Nigeria",
		summary: "Nigeria's IFRS S1 and S2 roadmap, deadlines and how to prepare.",
	},
] as const;

export type SolutionHref = (typeof SOLUTION_PAGES)[number]["href"];
