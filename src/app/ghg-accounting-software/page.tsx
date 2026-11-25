import PageShell from "@/components/layout/PageShell";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
	title: "GHG Accounting Software for Businesses | ESG Horizon",
	description:
		"Calculate, manage and monitor greenhouse gas emissions with ESG Horizon. Simplify Scope 1, 2 and 3 emissions tracking and GHG reporting.",
	path: "/ghg-accounting-software/",
});

const content: LandingContent = {
	path: "/ghg-accounting-software/",
	breadcrumb: "GHG Accounting Software",
	label: "GHG ACCOUNTING SOFTWARE",
	h1: "Simplify Greenhouse Gas Accounting and",
	h1Accent: "Emissions Reporting",
	intro:
		"ESG Horizon is GHG accounting and carbon accounting software that turns your fuel, energy, travel and supply chain data into a complete Scope 1, 2 and 3 emissions inventory, without emission-factor lookups or fragile spreadsheets.",
	heroPoints: ["GHG Protocol aligned", "Scope 1, 2 & 3", "Location & market-based Scope 2", "15 Scope 3 categories"],
	cta: { label: "Request a Demo", href: "/contact/#book-demo" },
	sections: [
		{
			label: "THE BASICS",
			heading: "What is",
			headingAccent: "GHG accounting?",
			paragraphs: [
				"Greenhouse gas (GHG) accounting, often called carbon accounting, is the process of measuring the greenhouse gases an organisation is responsible for and expressing them in a common unit: tonnes of carbon dioxide equivalent (tCO₂e). It is the foundation of every climate target, emissions reduction plan and climate disclosure.",
				"Most organisations follow the GHG Protocol Corporate Accounting and Reporting Standard, the most widely used framework for corporate emissions. It sets out how to define your organisational boundary, which activities to include and how to group emissions into three scopes. IFRS S2 requires companies to measure their emissions using it.",
			],
		},
		{
			label: "THE THREE SCOPES",
			heading: "Scope 1, 2 and 3",
			headingAccent: "emissions explained",
			items: [
				{ title: "Scope 1: direct emissions", text: "Emissions from sources you own or control, such as diesel generators, company vehicles, gas boilers, flaring and industrial processes." },
				{ title: "Scope 2: purchased energy", text: "Indirect emissions from the electricity, steam, heating or cooling you buy. These can be reported on a location-based or market-based approach." },
				{ title: "Scope 3: value chain", text: "All other indirect emissions, from purchased goods and services and transport to business travel, employee commuting, waste and the use of sold products, across 15 categories." },
			],
			note: "For many organisations Scope 3 is the largest share of the footprint, and the hardest to measure because the data sits with suppliers and customers.",
		},
		{
			label: "THE PROBLEM",
			heading: "The challenges of",
			headingAccent: "manual emissions calculations",
			layout: "list",
			items: [
				{ title: "Finding the right emission factors", text: "Each activity needs the correct, current factor for its fuel, region and year, and looking these up by hand is slow and error-prone." },
				{ title: "Inconsistent activity data", text: "Litres, kilowatt-hours, kilometres and naira spend arrive in different units and formats from different sites." },
				{ title: "Scope 3 complexity", text: "Fifteen categories, each with its own methods, make value-chain emissions hard to estimate consistently." },
				{ title: "No audit trail", text: "Spreadsheet calculations rarely record the factor used, the data source or who made a change, which makes assurance difficult." },
				{ title: "Year-on-year comparisons", text: "Changes to methods, factors or boundaries make it hard to compare progress against a baseline or target." },
				{ title: "Group consolidation", text: "Adding up emissions across subsidiaries and sites without double counting takes time and care." },
			],
		},
		{
			label: "HOW ESG HORIZON HELPS",
			heading: "How the platform supports",
			headingAccent: "GHG accounting",
			layout: "steps",
			items: [
				{ title: "Capture activity data", text: "Site and department owners enter fuel, electricity, travel and other activity data through guided forms, or import it in bulk.", href: "/esg-data-management/" },
				{ title: "Calculate automatically", text: "Emissions are calculated in tCO₂e using GHG Protocol methods and IPCC and GHG Protocol emission factors that are kept up to date." },
				{ title: "Cover every scope", text: "Scope 1, location-based and market-based Scope 2, and templates for all 15 Scope 3 categories." },
				{ title: "Track intensity and trends", text: "Intensity metrics such as emissions per revenue or per employee, and year-on-year trends against your baseline." },
				{ title: "Consolidate the group", text: "See emissions by subsidiary, site and scope, and the consolidated total for the group." },
				{ title: "Report for IFRS S2", text: "Use your emissions inventory directly in IFRS S2 climate disclosures and board reports.", href: "/ifrs-s2-reporting/" },
			],
		},
	],
	industries: [
		"Oil, gas and power generation",
		"Manufacturing, cement and heavy industry",
		"Logistics, transport and aviation",
		"Banks and insurers measuring financed emissions",
		"Telecoms and data centres",
		"Agriculture and food processing",
	],
	faqs: [
		{
			q: "What is the difference between GHG accounting and carbon accounting?",
			a: "They mean the same thing in practice. Carbon accounting is the common name, while GHG accounting reflects that the inventory covers all greenhouse gases, including methane and nitrous oxide, converted into tonnes of carbon dioxide equivalent.",
		},
		{
			q: "What is the GHG Protocol?",
			a: "The GHG Protocol is the most widely used set of standards for measuring and managing greenhouse gas emissions. Its Corporate Standard defines how organisations set boundaries, classify emissions into Scope 1, 2 and 3, and report them. IFRS S2 requires companies to measure emissions in line with it.",
		},
		{
			q: "Which emission factors does ESG Horizon use?",
			a: "ESG Horizon applies IPCC and GHG Protocol emission factors, which are maintained in the platform and updated as standards evolve, so your team does not need to look factors up manually.",
		},
		{
			q: "Can ESG Horizon calculate Scope 3 emissions?",
			a: "Yes. ESG Horizon provides templates for all 15 Scope 3 categories so you can estimate value-chain emissions consistently, starting with the categories that are most significant for your business.",
		},
		{
			q: "How often should we measure our emissions?",
			a: "Emissions are reported annually for disclosure purposes, but many organisations collect data monthly or quarterly so they can track progress against targets and spot problems early. ESG Horizon supports both.",
		},
	],
	closing: {
		heading: "Get an accurate view of your organisation's emissions",
		text: "See how ESG Horizon calculates Scope 1, 2 and 3 emissions from your own activity data in a personalised demo.",
		button: "Request a Demo",
	},
	sources: [{ label: "GHG Protocol — Corporate Accounting and Reporting Standard", href: "https://ghgprotocol.org/corporate-standard" }],
};

export default function GhgAccountingSoftwarePage() {
	return (
		<PageShell>
			<LandingPage content={content} />
		</PageShell>
	);
}
