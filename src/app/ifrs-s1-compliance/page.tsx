import PageShell from "@/components/layout/PageShell";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
	title: "IFRS S1 Compliance and Reporting Software | ESG Horizon",
	description:
		"Understand IFRS S1 sustainability disclosure requirements and discover how ESG Horizon helps organisations manage sustainability-related financial disclosures.",
	path: "/ifrs-s1-compliance/",
});

const content: LandingContent = {
	path: "/ifrs-s1-compliance/",
	breadcrumb: "IFRS S1 Compliance",
	label: "IFRS S1 COMPLIANCE",
	h1: "Simplifying IFRS S1 Compliance and",
	h1Accent: "Sustainability Disclosures",
	intro:
		"IFRS S1 asks companies to explain how sustainability-related risks and opportunities could affect their cash flows, access to finance and cost of capital. ESG Horizon helps you work out what to disclose, gather the evidence and prepare disclosures your auditors and investors can rely on.",
	heroPoints: ["IFRS S1 gap assessment", "Four-pillar disclosure structure", "Evidence on every data point", "Readiness tracking"],
	cta: { label: "Request an IFRS Readiness Assessment", href: "/contact/#book-demo" },
	sections: [
		{
			label: "THE STANDARD",
			heading: "What is",
			headingAccent: "IFRS S1?",
			paragraphs: [
				"IFRS S1, General Requirements for Disclosure of Sustainability-related Financial Information, was issued by the International Sustainability Standards Board (ISSB) in June 2023. It sets the baseline for how a company reports on sustainability as part of its general purpose financial reporting.",
				"The standard requires a company to disclose information about all sustainability-related risks and opportunities that could reasonably be expected to affect its prospects over the short, medium or long term. The disclosures are aimed at the same audience as the financial statements, namely investors, lenders and other creditors, and are reported for the same period.",
				"IFRS S1 works together with IFRS S2, which sets the specific requirements for climate-related disclosures. Where no IFRS Sustainability Disclosure Standard covers a topic, IFRS S1 directs companies to the industry-based SASB Standards and other recognised sources to identify what to report.",
			],
		},
		{
			label: "KEY REQUIREMENTS",
			heading: "The four pillars of",
			headingAccent: "IFRS S1 disclosures",
			paragraphs: [
				"IFRS S1 organises disclosures around four core content areas, building on the structure first set out by the TCFD.",
			],
			items: [
				{ title: "Governance", text: "The governance processes, controls and procedures used to monitor and manage sustainability-related risks and opportunities, including the role of the board and management." },
				{ title: "Strategy", text: "How sustainability-related risks and opportunities affect the business model, value chain, strategy, decision-making, and current and expected financial position." },
				{ title: "Risk management", text: "The processes used to identify, assess, prioritise and monitor sustainability-related risks and opportunities, and how they fit into overall risk management." },
				{ title: "Metrics and targets", text: "Performance against the metrics the company uses, including those required by IFRS Standards, and progress towards any targets it has set or is required to meet." },
			],
			note: "Materiality applies throughout: information is material if omitting, misstating or obscuring it could reasonably be expected to influence the decisions primary users of financial reports make.",
		},
		{
			label: "PREPARATION",
			heading: "Common IFRS S1",
			headingAccent: "preparation challenges",
			layout: "list",
			items: [
				{ title: "Identifying what is material", text: "Deciding which sustainability topics could affect your prospects requires a structured assessment that most companies have not done before." },
				{ title: "Connecting to the financials", text: "IFRS S1 expects sustainability information to link to the financial statements, so finance and sustainability teams must work from the same data." },
				{ title: "Data across the value chain", text: "Risks and opportunities often sit with suppliers, customers and subsidiaries, not only in your own operations." },
				{ title: "Board-level governance", text: "Boards need defined oversight responsibilities, reporting lines and evidence that the processes actually operate." },
				{ title: "Reporting on the same timeline", text: "Sustainability disclosures are expected alongside the annual report, which compresses collection and review into the financial reporting calendar." },
				{ title: "Assurance readiness", text: "Disclosures will be subject to assurance, so every figure needs a documented source, owner and review trail." },
			],
		},
		{
			label: "HOW ESG HORIZON HELPS",
			heading: "From gap assessment to",
			headingAccent: "disclosure-ready reporting",
			layout: "steps",
			items: [
				{ title: "Assess your gaps", text: "Measure your current position against each IFRS S1 requirement and get a prioritised list of what to address first." },
				{ title: "Assign ownership", text: "Give each requirement and data point an owner across finance, risk, operations and HR, with progress you can track in real time.", href: "/esg-data-management/" },
				{ title: "Collect evidence", text: "Guided forms capture the right level of detail, with supporting documents attached to every entry." },
				{ title: "Cover climate with IFRS S2", text: "Climate-related disclosures, emissions and scenario analysis support sit in the same platform.", href: "/ifrs-s2-reporting/" },
				{ title: "Keep a full audit trail", text: "Version history and an immutable log record who changed what and when, ready for your assurance provider." },
				{ title: "Generate your disclosures", text: "Produce structured, framework-mapped outputs and board-ready reports when you are ready to publish.", href: "/esg-reporting-software/" },
			],
		},
	],
	faqs: [
		{
			q: "What is IFRS S1?",
			a: "IFRS S1 is the ISSB's general standard for sustainability-related financial disclosures. It requires companies to report the sustainability-related risks and opportunities that could reasonably be expected to affect their cash flows, access to finance or cost of capital, using four content areas: governance, strategy, risk management, and metrics and targets.",
		},
		{
			q: "What is the difference between IFRS S1 and IFRS S2?",
			a: "IFRS S1 sets the general requirements for all sustainability-related disclosures. IFRS S2 applies those requirements specifically to climate, including climate-related risks and opportunities, scenario analysis and Scope 1, 2 and 3 greenhouse gas emissions. Companies applying IFRS S1 also apply IFRS S2.",
		},
		{
			q: "When does IFRS S1 apply in Nigeria?",
			a: "Under the Financial Reporting Council of Nigeria's amended roadmap, reporting is voluntary for accounting periods from 1 January 2024 to 31 December 2027. It becomes mandatory for all public interest entities for accounting periods beginning on or after 1 January 2028, and for SMEs from 1 January 2030. Entities must pass the FRC's readiness test assessment before publishing their first report.",
		},
		{
			q: "Is there any relief in the first year of reporting?",
			a: "Yes. IFRS S1 includes transition reliefs. In the first year a company may report on climate-related risks and opportunities only, does not need to provide comparative information, and may publish its sustainability disclosures after its financial statements. Check the reliefs your local regulator permits.",
		},
		{
			q: "What is an IFRS readiness assessment?",
			a: "It is a structured review of where your organisation stands against IFRS S1 and IFRS S2: your governance, processes, data and disclosures. ESG Horizon's assessment highlights the gaps and helps you prioritise the work needed before your first report.",
		},
	],
	closing: {
		heading: "Find out how ready you are for IFRS S1",
		text: "Book a demo and receive an IFRS S1 and S2 readiness assessment showing your gaps and the next steps to close them.",
		button: "Request an IFRS Readiness Assessment",
	},
	sources: [
		{ label: "IFRS Foundation — IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information", href: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s1-general-requirements/" },
		{ label: "Financial Reporting Council of Nigeria — Roadmap for the Adoption of IFRS Sustainability Disclosure Standards (Amended 2026)", href: "https://frcnigeria.gov.ng/wp-content/uploads/2026/02/Roadmap-Report-for-the-Adoption-of-IFRS-Sustainability-Disclosure-Standards-in-Nigeria-Amended-2026-.pdf" },
	],
};

export default function IfrsS1CompliancePage() {
	return (
		<PageShell>
			<LandingPage content={content} />
		</PageShell>
	);
}
