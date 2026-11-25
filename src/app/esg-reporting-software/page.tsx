import PageShell from "@/components/layout/PageShell";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
	title: "ESG Reporting Software for Businesses in Africa | ESG Horizon",
	description:
		"Manage sustainability disclosures, ESG data and reporting processes with ESG Horizon's ESG reporting software, built for organisations across Africa.",
	path: "/esg-reporting-software/",
});

const content: LandingContent = {
	path: "/esg-reporting-software/",
	breadcrumb: "ESG Reporting Software",
	label: "ESG REPORTING SOFTWARE",
	h1: "ESG Reporting Software for",
	h1Accent: "African Organisations",
	intro:
		"ESG Horizon brings your environmental, social and governance data, your reporting workflow and your disclosures into one platform, so your team spends its time improving ESG performance instead of chasing spreadsheets.",
	heroPoints: ["IFRS S1 & S2 aligned", "GHG Protocol Scope 1, 2 & 3", "GRI, TCFD & SASB mapping", "Audit trail on every entry"],
	cta: { label: "Request a Demo", href: "/contact/#book-demo" },
	sections: [
		{
			label: "WHAT IT IS",
			heading: "What is",
			headingAccent: "ESG reporting software?",
			paragraphs: [
				"ESG reporting software is a system for collecting, calculating, reviewing and publishing an organisation's environmental, social and governance information. It replaces the email chains and spreadsheets most reporting teams start with, and gives everyone who contributes data a single, controlled place to work.",
				"Organisations use it because ESG reporting has stopped being optional. Regulators are adopting the IFRS Sustainability Disclosure Standards, lenders and investors ask for ESG data in due diligence, and large customers want emissions figures from their suppliers. Each request needs numbers that are consistent, traceable and ready to be checked.",
			],
		},
		{
			label: "THE PROBLEM",
			heading: "The challenges of",
			headingAccent: "manual ESG reporting",
			paragraphs: [
				"Most first ESG reports are built by a small sustainability team pulling data from operations, HR, finance and facilities. It works once. It rarely works twice.",
			],
			items: [
				{ title: "Data lives everywhere", text: "Fuel logs, HR records, meter readings and policies sit in different departments, subsidiaries and formats, and someone has to chase every one of them." },
				{ title: "Spreadsheets break", text: "Copied formulas and manual emission-factor lookups introduce errors that are hard to spot and can undermine an entire report." },
				{ title: "No audit trail", text: "When an auditor or regulator asks where a number came from, there is no record of who entered it, when, or what evidence supports it." },
				{ title: "Frameworks multiply", text: "IFRS S1, IFRS S2, GRI and investor questionnaires ask for overlapping data in different shapes, so the same work is done several times." },
				{ title: "Reporting takes months", text: "Collection, consolidation and formatting consume the reporting season, leaving little time to analyse performance or act on it." },
				{ title: "Governance is unclear", text: "Without defined owners, review steps and sign-off, the board cannot be confident in what is being published in its name." },
			],
		},
		{
			label: "HOW ESG HORIZON HELPS",
			heading: "How ESG Horizon supports",
			headingAccent: "your ESG reporting",
			paragraphs: [
				"ESG Horizon covers the full reporting cycle, from setting up your organisation to publishing an audit-ready report. Data is entered once and mapped to every framework you report against.",
			],
			layout: "steps",
			items: [
				{ title: "Set up your organisation", text: "Add subsidiaries, departments and locations, choose your frameworks and define which ESG topics are material to you.", href: "/how-it-works/" },
				{ title: "Collect ESG data", text: "Assign guided data collection tasks to each department, with built-in help text and evidence uploads attached to every entry.", href: "/esg-data-management/" },
				{ title: "Calculate emissions", text: "Turn activity data into Scope 1, 2 and 3 emissions using GHG Protocol methods and current emission factors.", href: "/ghg-accounting-software/" },
				{ title: "Check IFRS readiness", text: "Run a gap assessment against IFRS S1 and IFRS S2 and track progress as your team closes each gap.", href: "/ifrs-s1-compliance/" },
				{ title: "Monitor performance", text: "Follow progress and results on live dashboards with scope breakdowns, trends and intensity metrics." },
				{ title: "Publish audit-ready reports", text: "Generate board-ready PDF reports, regulator packs and Excel exports, with every figure traceable to its source.", href: "/features/" },
			],
		},
		{
			label: "WHAT TO LOOK FOR",
			heading: "Features that matter in",
			headingAccent: "ESG reporting software",
			layout: "list",
			items: [
				{ title: "Framework coverage", text: "IFRS S1 and S2 at its core, with mapping to GRI, TCFD and SASB so one dataset serves every audience." },
				{ title: "Built-in GHG accounting", text: "Scope 1, 2 and 3 calculations with location-based and market-based Scope 2 and templates for the 15 Scope 3 categories." },
				{ title: "Role-based collaboration", text: "Each contributor sees only the tasks relevant to their role, with progress tracking and automated reminders." },
				{ title: "Version history and audit log", text: "Every change is timestamped and attributed, giving auditors and your board a complete trail." },
				{ title: "Multi-entity consolidation", text: "Group-level reporting with subsidiary breakdowns from a single account." },
				{ title: "Security", text: "AES-256 encryption at rest and in transit, granular permissions and enterprise-grade hosting." },
			],
		},
	],
	industries: [
		"Oil, gas and energy companies",
		"Banks, insurers and other financial institutions",
		"Manufacturing and consumer goods",
		"Telecommunications and technology",
		"Listed companies and other public interest entities",
		"Public sector agencies and development organisations",
	],
	faqs: [
		{
			q: "What does ESG reporting software do?",
			a: "It gives an organisation one place to collect environmental, social and governance data, calculate metrics such as greenhouse gas emissions, review and approve the numbers, and produce reports for regulators, investors and the board. Good ESG reporting software also keeps an audit trail so every published figure can be traced back to its source.",
		},
		{
			q: "Why do investors care about ESG reporting?",
			a: "ESG investing means weighing environmental, social and governance factors alongside financial returns when deciding where to put capital. Investors and lenders use ESG disclosures to judge how well a company manages risks such as climate exposure, regulation and governance. Clear, consistent ESG reporting makes it easier for them to assess you, and is increasingly a condition of financing.",
		},
		{
			q: "Is ESG Horizon suitable for companies preparing their first ESG report?",
			a: "Yes. ESG Horizon is designed for teams without deep ESG expertise. Guided forms and embedded help explain what each data point means, and the IFRS gap assessment shows you where to start. Our onboarding team supports you through setup and your first reporting cycle.",
		},
		{
			q: "Which reporting frameworks does ESG Horizon support?",
			a: "ESG Horizon supports IFRS S1 and IFRS S2, the GHG Protocol for Scope 1, 2 and 3 emissions, and mapping to GRI Standards, TCFD and SASB. Data entered once is mapped across all the frameworks you select.",
		},
		{
			q: "Can ESG Horizon handle groups with several subsidiaries?",
			a: "Yes. You can add subsidiaries, assign data owners at each entity and view consolidated group results alongside each subsidiary's figures from one account.",
		},
		{
			q: "How long does it take to get started?",
			a: "Most organisations set up their company structure in under 30 minutes. Data collection typically takes one to two weeks depending on the number of entities, and many teams generate their first report within two weeks.",
		},
	],
	closing: {
		heading: "See ESG Horizon with your own reporting requirements",
		text: "Book a personalised 30-minute walkthrough and we'll show you how ESG Horizon fits your organisation, frameworks and team.",
		button: "Request a Demo",
	},
};

export default function EsgReportingSoftwarePage() {
	return (
		<PageShell>
			<LandingPage content={content} />
		</PageShell>
	);
}
