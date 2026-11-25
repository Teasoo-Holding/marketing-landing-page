import PageShell from "@/components/layout/PageShell";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
	title: "ESG Data Management Software for Businesses | ESG Horizon",
	description:
		"Centralise ESG information, manage sustainability data and improve reporting processes with ESG Horizon's ESG data management platform.",
	path: "/esg-data-management/",
});

const content: LandingContent = {
	path: "/esg-data-management/",
	breadcrumb: "ESG Data Management",
	label: "ESG DATA MANAGEMENT",
	h1: "Simplify ESG Data",
	h1Accent: "Collection and Management",
	intro:
		"ESG Horizon gives your organisation a single, secure system of record for sustainability data: collected from every department, checked before it is used, and traceable from the published report back to its source.",
	heroPoints: ["Single source of truth", "Role-based data collection", "Version history & audit log", "AES-256 encryption"],
	cta: { label: "Request a Demo", href: "/contact/#book-demo" },
	sections: [
		{
			label: "WHY IT MATTERS",
			heading: "What ESG data management means,",
			headingAccent: "and why accuracy matters",
			paragraphs: [
				"ESG data management is how an organisation collects, stores, checks, governs and uses its environmental, social and governance information. It covers everything from energy invoices and fuel logs to workforce statistics, health and safety records, policies and board minutes.",
				"Accurate data is the foundation of every ESG decision and disclosure. Regulators, investors and lenders increasingly rely on ESG figures to judge risk, and disclosures under the IFRS Sustainability Disclosure Standards will be subject to assurance. A report is only as credible as the data and the process behind it.",
			],
		},
		{
			label: "THE PROBLEM",
			heading: "The cost of",
			headingAccent: "fragmented ESG information",
			items: [
				{ title: "Data in silos", text: "Operations, HR, finance, procurement and facilities each hold part of the picture, in their own systems and formats." },
				{ title: "Endless chasing", text: "Sustainability teams spend weeks emailing data owners across departments and subsidiaries for numbers and evidence." },
				{ title: "Inconsistent definitions", text: "Different sites measure and record the same metric differently, so totals cannot be trusted or compared." },
				{ title: "Lost evidence", text: "Supporting documents sit in inboxes and shared drives, disconnected from the numbers they support." },
				{ title: "No version control", text: "It is impossible to see who changed a figure, when, or why, which creates governance and audit risk." },
				{ title: "Security gaps", text: "Sensitive workforce and operational data shared in spreadsheets is hard to control and protect." },
			],
		},
		{
			label: "GOVERNANCE",
			heading: "Data validation, audit trails",
			headingAccent: "and ESG governance",
			paragraphs: [
				"Good ESG governance depends on knowing that the right people supplied the right data, that it was checked, and that any change is on record. ESG Horizon builds these controls into everyday data collection.",
			],
			layout: "list",
			items: [
				{ title: "Validation at entry", text: "Mandatory fields and quality checks catch missing or out-of-range values before they reach your report." },
				{ title: "Evidence attached", text: "Supporting documents are uploaded with each entry, so every figure carries its proof." },
				{ title: "Full version history", text: "Every data entry keeps its history, so you can see how a figure changed over time." },
				{ title: "Immutable audit log", text: "Each change is timestamped and attributed to a user, ready for internal audit and external assurance." },
				{ title: "Granular permissions", text: "Read and write access is set per user and role, so people see only the data they need." },
				{ title: "Enterprise security", text: "AES-256 encryption at rest and in transit on enterprise-grade infrastructure." },
			],
		},
		{
			label: "HOW ESG HORIZON HELPS",
			heading: "One platform for",
			headingAccent: "all your ESG data",
			layout: "steps",
			items: [
				{ title: "Map your organisation", text: "Set up subsidiaries, departments and locations once, and assign a data owner to each.", href: "/how-it-works/" },
				{ title: "Assign guided tasks", text: "Each contributor receives form-based tasks tailored to their role, with embedded guidance and automated reminders." },
				{ title: "Track progress live", text: "See which entities and departments have submitted, which are outstanding and where data needs review." },
				{ title: "Bring in history", text: "Import past years' data to set baselines and compare performance year on year." },
				{ title: "Calculate and analyse", text: "Use the same data for emissions calculations, dashboards and benchmarking.", href: "/ghg-accounting-software/" },
				{ title: "Report once, use everywhere", text: "Data entered once maps to IFRS S1 and S2, GRI, TCFD and SASB.", href: "/esg-reporting-software/" },
			],
		},
	],
	industries: [
		"Groups with many subsidiaries and sites",
		"Oil, gas and energy operators",
		"Financial institutions responding to investor and regulator requests",
		"Manufacturers with multi-site operations",
		"Listed companies preparing for IFRS S1 and S2",
		"Organisations answering supplier and customer ESG questionnaires",
	],
	faqs: [
		{
			q: "What is ESG data management software?",
			a: "It is software that gives an organisation one controlled place to collect, validate, store and report its environmental, social and governance data. Compared with spreadsheets, it adds defined data owners, validation checks, evidence, version history and an audit trail.",
		},
		{
			q: "What kinds of ESG data can we manage in ESG Horizon?",
			a: "Environmental data such as energy, fuel, water and waste; social data such as workforce, diversity, training and health and safety; and governance information such as policies, board oversight and risk management, along with the supporting documents for each.",
		},
		{
			q: "How does ESG Horizon keep our data accurate?",
			a: "Guided forms tell contributors exactly what to enter, mandatory fields and quality checks catch errors at entry, evidence is attached to each data point, and every change is recorded in an audit log with the user and time.",
		},
		{
			q: "Can we import historical ESG data from spreadsheets?",
			a: "Yes. Our onboarding team helps you migrate past-year data so you can set baselines and see year-on-year trends straight away. Imported data is version-controlled and audit-logged from day one.",
		},
		{
			q: "Who can see our data?",
			a: "Only the people you grant access to. Permissions are set per user and role, data is encrypted at rest and in transit with AES-256, and every action is logged.",
		},
	],
	closing: {
		heading: "Turn scattered ESG data into a single source of truth",
		text: "See how ESG Horizon organises your organisation's ESG data in a personalised 30-minute walkthrough.",
		button: "Request a Demo",
	},
};

export default function EsgDataManagementPage() {
	return (
		<PageShell>
			<LandingPage content={content} />
		</PageShell>
	);
}
