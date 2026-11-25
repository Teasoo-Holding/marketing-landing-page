import PageShell from "@/components/layout/PageShell";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
	title: "IFRS S2 Reporting and Compliance Software | ESG Horizon",
	description:
		"Prepare for climate-related sustainability disclosures with ESG Horizon. Manage climate data, emissions and IFRS S2 reporting requirements.",
	path: "/ifrs-s2-reporting/",
});

const content: LandingContent = {
	path: "/ifrs-s2-reporting/",
	breadcrumb: "IFRS S2 Reporting",
	label: "IFRS S2 REPORTING",
	h1: "IFRS S2 Reporting and",
	h1Accent: "Climate Disclosure Management",
	intro:
		"IFRS S2 requires companies to explain how climate change affects their business and to report their greenhouse gas emissions. ESG Horizon brings your climate risks, emissions data and disclosures together so you can report with confidence.",
	heroPoints: ["Climate risks & opportunities", "Scope 1, 2 & 3 emissions", "Scenario analysis support", "Audit-ready evidence"],
	cta: { label: "Request a Demo", href: "/contact/#book-demo" },
	sections: [
		{
			label: "THE STANDARD",
			heading: "What is",
			headingAccent: "IFRS S2?",
			paragraphs: [
				"IFRS S2, Climate-related Disclosures, was issued by the International Sustainability Standards Board (ISSB) in June 2023. It sets out what a company must disclose about the climate-related risks and opportunities that could reasonably be expected to affect its cash flows, access to finance or cost of capital.",
				"IFRS S2 is applied together with IFRS S1 and follows the same four content areas: governance, strategy, risk management, and metrics and targets. It goes further on climate specifically, requiring a climate resilience assessment, information about transition plans and a full greenhouse gas emissions inventory.",
			],
		},
		{
			label: "RISKS AND OPPORTUNITIES",
			heading: "Climate-related risks",
			headingAccent: "and opportunities",
			paragraphs: [
				"IFRS S2 asks companies to identify the climate-related risks and opportunities relevant to them, explain their effects on the business model and value chain, and describe how resilient their strategy is under different climate scenarios.",
			],
			items: [
				{ title: "Physical risks", text: "Acute events such as floods, storms and heatwaves, and chronic shifts such as rising temperatures or changing rainfall that disrupt operations, assets and supply chains." },
				{ title: "Transition risks", text: "Policy and legal changes, new technology, shifting markets and reputational pressure as economies move towards lower emissions." },
				{ title: "Climate opportunities", text: "Resource efficiency, lower-emission products and services, new markets and access to green or sustainability-linked finance." },
				{ title: "Scenario analysis", text: "Assessing how resilient your strategy is across plausible climate futures, using an approach proportionate to your circumstances." },
				{ title: "Transition plans", text: "Disclosing any targets and plans to reduce emissions, how they will be resourced, and progress against them." },
				{ title: "Cross-industry metrics", text: "Information on emissions, assets exposed to climate risks, capital deployed to climate opportunities, internal carbon prices and climate-linked remuneration." },
			],
		},
		{
			label: "EMISSIONS REPORTING",
			heading: "Scope 1, 2 and 3",
			headingAccent: "greenhouse gas emissions",
			paragraphs: [
				"IFRS S2 requires companies to measure greenhouse gas emissions using the GHG Protocol Corporate Standard and to disclose gross emissions by scope. Scope 2 is reported on a location-based approach, and Scope 3 covers the 15 value-chain categories.",
			],
			layout: "list",
			items: [
				{ title: "Scope 1", text: "Direct emissions from sources you own or control, such as fuel burned in generators, boilers, vehicles and processes." },
				{ title: "Scope 2", text: "Indirect emissions from the electricity, heat or steam you buy and consume." },
				{ title: "Scope 3", text: "All other indirect emissions across your value chain, from purchased goods and business travel to the use of your products." },
				{ title: "Financed emissions", text: "Banks, asset managers and insurers also disclose information about the emissions linked to their lending, investment and underwriting." },
			],
			note: "In the first year of applying IFRS S2 companies may use a transition relief and not disclose Scope 3 emissions.",
		},
		{
			label: "HOW ESG HORIZON HELPS",
			heading: "How ESG Horizon supports",
			headingAccent: "IFRS S2 reporting",
			layout: "steps",
			items: [
				{ title: "Assess IFRS S2 readiness", text: "Run a gap assessment against IFRS S2 and track what remains before your first climate disclosure.", href: "/ifrs-s1-compliance/" },
				{ title: "Calculate your emissions", text: "Convert activity data into Scope 1, 2 and 3 emissions using GHG Protocol methods and current emission factors.", href: "/ghg-accounting-software/" },
				{ title: "Document climate risks", text: "Record your climate-related risks and opportunities, their owners and how they are managed, in one structured register." },
				{ title: "Support scenario analysis", text: "Capture the assumptions, scenarios and conclusions behind your climate resilience assessment." },
				{ title: "Track targets", text: "Monitor progress against emissions targets with dashboards, trends and intensity metrics." },
				{ title: "Report with evidence", text: "Generate disclosure-ready outputs where every figure is linked to its data, owner and supporting documents.", href: "/esg-reporting-software/" },
			],
		},
	],
	industries: [
		"Oil, gas and energy, where transition risk is most material",
		"Banks, insurers and asset managers reporting financed emissions",
		"Manufacturing and heavy industry",
		"Agriculture, food and consumer goods",
		"Telecommunications and infrastructure",
		"Mining and extractives",
	],
	faqs: [
		{
			q: "What does IFRS S2 require companies to disclose?",
			a: "IFRS S2 requires disclosures on the governance, strategy, risk management, and metrics and targets a company uses for climate-related risks and opportunities. This includes a climate resilience assessment using scenario analysis, information on transition plans and targets, and gross Scope 1, 2 and 3 greenhouse gas emissions.",
		},
		{
			q: "Do I need to report Scope 3 emissions under IFRS S2?",
			a: "Yes, Scope 3 emissions are required, but IFRS S2 allows a transition relief so companies need not disclose them in the first year they apply the standard. In Nigeria, the FRC roadmap phases in assurance on Scope 3 later than on other disclosures.",
		},
		{
			q: "What is climate-related scenario analysis?",
			a: "It is a way of testing how resilient your strategy and business model are under different plausible climate futures, for example a rapid low-carbon transition or more severe physical climate impacts. IFRS S2 lets companies choose an approach proportionate to their skills, capabilities and resources.",
		},
		{
			q: "How is IFRS S2 related to the TCFD recommendations?",
			a: "IFRS S2 builds on the TCFD recommendations and uses the same four core content areas. Companies that already report against TCFD have a head start, but IFRS S2 adds more specific requirements, including industry-based metrics and greenhouse gas emissions.",
		},
		{
			q: "Can ESG Horizon calculate the emissions IFRS S2 requires?",
			a: "Yes. ESG Horizon calculates Scope 1, 2 and 3 emissions from your activity data using GHG Protocol methods, supports both location-based and market-based Scope 2, and provides templates for all 15 Scope 3 categories.",
		},
	],
	closing: {
		heading: "Prepare your climate disclosures with confidence",
		text: "See how ESG Horizon helps you measure emissions, document climate risks and produce IFRS S2-aligned disclosures.",
		button: "Request a Demo",
	},
	sources: [
		{ label: "IFRS Foundation — IFRS S2 Climate-related Disclosures", href: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/" },
		{ label: "GHG Protocol — Corporate Accounting and Reporting Standard", href: "https://ghgprotocol.org/corporate-standard" },
	],
};

export default function IfrsS2ReportingPage() {
	return (
		<PageShell>
			<LandingPage content={content} />
		</PageShell>
	);
}
