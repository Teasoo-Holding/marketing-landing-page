import PageShell from "@/components/layout/PageShell";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
	title: "ESG Reporting in Nigeria: Standards and Compliance | ESG Horizon",
	description:
		"Explore ESG reporting requirements in Nigeria, IFRS S1 and S2 adoption, sustainability disclosures and how businesses can prepare with ESG Horizon.",
	path: "/esg-reporting-nigeria/",
});

const FRC_ROADMAP =
	"https://frcnigeria.gov.ng/wp-content/uploads/2026/02/Roadmap-Report-for-the-Adoption-of-IFRS-Sustainability-Disclosure-Standards-in-Nigeria-Amended-2026-.pdf";
const SEC_CIRCULAR =
	"https://www.sec.gov.ng/for-investors/keep-track-of-circulars/implementation-of-the-ifrs-sustainability-disclosure-standards-in-nigeria/";

const content: LandingContent = {
	path: "/esg-reporting-nigeria/",
	breadcrumb: "ESG Reporting in Nigeria",
	label: "ESG REPORTING IN NIGERIA",
	h1: "ESG Reporting in Nigeria:",
	h1Accent: "A Guide for Businesses",
	intro:
		"Nigeria has adopted the IFRS Sustainability Disclosure Standards, and reporting under IFRS S1 and IFRS S2 becomes mandatory for public interest entities from 2028. This guide explains the roadmap, what regulators expect and how to prepare.",
	heroPoints: ["Mandatory for PIEs from 2028", "SMEs from 2030", "FRC readiness test", "Phased assurance"],
	cta: { label: "Request an IFRS Readiness Assessment", href: "/contact/#book-demo" },
	sections: [
		{
			label: "OVERVIEW",
			heading: "ESG reporting in Nigeria",
			headingAccent: "at a glance",
			paragraphs: [
				"Sustainability reporting in Nigeria has moved from voluntary guidance to a regulated requirement. The Financial Reporting Council of Nigeria (FRC) adopted the IFRS Sustainability Disclosure Standards issued by the ISSB and published a roadmap for phased adoption, most recently amended in February 2026.",
				"Other regulators reinforce the direction. The Securities and Exchange Commission (SEC) has directed public companies to prepare for IFRS S1 and S2 reporting, the Nigerian Exchange has published sustainability disclosure guidelines for listed companies, and the Central Bank's Nigerian Sustainable Banking Principles shape how banks assess environmental and social risk. The Climate Change Act 2021 sets the national framework for emissions reduction.",
				"For businesses, the result is clear: sustainability information is becoming part of corporate reporting, reviewed by regulators and, in time, independently assured.",
			],
		},
		{
			label: "THE ROADMAP",
			heading: "Nigeria's IFRS S1 and S2",
			headingAccent: "adoption roadmap",
			paragraphs: [
				"The FRC's amended roadmap adopts the standards in phases. Mandatory reporting applies to accounting periods beginning on or after the dates below.",
			],
			layout: "steps",
			items: [
				{ title: "Early adopters", text: "Entities that reported sustainability information for periods ending on or before 31 December 2023 and passed the FRC's readiness test." },
				{ title: "Voluntary adopters: 2024 to 2027", text: "Periods from 1 January 2024 to 31 December 2027. Entities build capacity and may report voluntarily, subject to the readiness test." },
				{ title: "All public interest entities: 2028", text: "Mandatory for accounting periods beginning on or after 1 January 2028, including public companies and listed entities." },
				{ title: "SMEs: 2030", text: "Mandatory for small and medium-sized entities from 1 January 2030, with early adoption encouraged." },
				{ title: "Public sector: 2028", text: "Governments and government organisations are expected to adopt the IPSASB's climate standard (SRS 1) from 1 January 2028." },
				{ title: "Assurance: phased in", text: "Assurance is required from the third year of reporting, starting with limited assurance and moving to reasonable assurance on all disclosures from the seventh year." },
			],
			note: "Dates are taken from the FRC's Roadmap Report (Amended 2026) and the SEC circular of 23 September 2026. Always confirm current requirements with the regulators.",
		},
		{
			label: "WHAT REGULATORS EXPECT",
			heading: "The FRC readiness test",
			headingAccent: "and the SEC implementation plan",
			paragraphs: [
				"Every entity must pass the FRC's readiness test assessment before publishing its first IFRS sustainability report. Documents are submitted in three stages around the start of the financial year.",
			],
			items: [
				{ title: "Stage 1: before the year starts", text: "Three months before the financial year: a board resolution adopting the standards, a gap analysis report and an implementation plan." },
				{ title: "Stage 2: first three months", text: "Disclosure policies, transition reliefs, a materiality assessment of sustainability and climate-related risks and opportunities, the governance structure and evidence of board-approved policies and training." },
				{ title: "Stage 3: first six months", text: "FRC registration of the entity and professionals, scenario analysis models, a risk management framework, metrics and targets, the current financial effects of sustainability risks and opportunities, and internal controls over sustainability reporting." },
			],
			note: "Separately, the SEC's circular of 23 September 2026 required public companies and significant public interest capital market operators to submit an implementation plan by 15 October 2026, covering governance and board oversight, a gap assessment, timelines, data systems, internal control and assurance, training, the expected first reporting year and key challenges.",
		},
		{
			label: "PREPARATION",
			heading: "Reporting considerations for",
			headingAccent: "Nigerian businesses",
			layout: "list",
			items: [
				{ title: "Board ownership", text: "The roadmap expects board resolutions, approved policies and board-approved metrics, so directors need to be involved from the start." },
				{ title: "Data from the field", text: "Operations in oil and gas, manufacturing and agriculture generate emissions and social data across many sites, often recorded manually." },
				{ title: "Energy and generators", text: "Heavy reliance on diesel and gas generators makes Scope 1 emissions significant and fuel records essential." },
				{ title: "Skills and registration", text: "Professionals engaged in sustainability reporting must be registered with the FRC, and training is part of the readiness evidence." },
				{ title: "Scenario analysis", text: "IFRS S2 requires a climate resilience assessment, a new discipline for most finance and risk teams." },
				{ title: "Assurance readiness", text: "With assurance phased in from the third year, every figure needs a documented source and control trail from the first report." },
			],
		},
		{
			label: "HOW ESG HORIZON HELPS",
			heading: "Prepare for the roadmap",
			headingAccent: "with ESG Horizon",
			layout: "steps",
			items: [
				{ title: "Gap assessment", text: "Assess your readiness against IFRS S1 and S2 and use the results in your gap analysis report and implementation plan.", href: "/ifrs-s1-compliance/" },
				{ title: "Materiality and risks", text: "Record your sustainability and climate-related risks and opportunities, their owners and how they are managed.", href: "/ifrs-s2-reporting/" },
				{ title: "Emissions inventory", text: "Calculate Scope 1, 2 and 3 emissions from generator, grid and value-chain data.", href: "/ghg-accounting-software/" },
				{ title: "Governance and controls", text: "Defined data owners, review steps, version history and an audit log support internal controls over sustainability reporting.", href: "/esg-data-management/" },
				{ title: "Group-wide collection", text: "Collect data from every subsidiary, site and department in one platform." },
				{ title: "Disclosure-ready reports", text: "Generate structured disclosures and board-ready reports with evidence behind every figure.", href: "/esg-reporting-software/" },
			],
		},
	],
	faqs: [
		{
			q: "Is ESG reporting mandatory in Nigeria?",
			a: "Yes, it is being phased in. Under the FRC's amended roadmap, IFRS S1 and IFRS S2 reporting is mandatory for all public interest entities for accounting periods beginning on or after 1 January 2028, and for SMEs from 1 January 2030. Reporting before then is voluntary, subject to the FRC's readiness test.",
		},
		{
			q: "Which companies count as public interest entities?",
			a: "The roadmap's scope covers public interest entities as defined under the FRC Act, which include listed companies and public limited companies. The SEC circular confirms that all public companies and significant public interest capital market operators, such as exchanges, central securities depositories and clearing houses, are in scope. Check the FRC Act and roadmap for your specific case.",
		},
		{
			q: "What is the FRC readiness test assessment?",
			a: "It is a compulsory review by the FRC of an entity's preparedness to adopt the IFRS sustainability standards, completed before the entity publishes its first sustainability report. Documents are submitted in three stages, from a board resolution, gap analysis and implementation plan before the financial year, to risk frameworks, metrics and internal controls within its first six months.",
		},
		{
			q: "When will sustainability disclosures need to be assured?",
			a: "The roadmap requires assurance from the third year of reporting. Limited assurance applies in the fourth and fifth years to all disclosures except Scope 3 emissions, transition plans and scenario analysis, which follow in the sixth year. Reasonable assurance on all disclosures is required from the seventh year.",
		},
		{
			q: "How can ESG Horizon help my organisation prepare?",
			a: "ESG Horizon helps you assess your IFRS S1 and S2 gaps, collect and govern ESG data across the group, calculate greenhouse gas emissions, keep the audit trail regulators and assurers will ask for, and produce disclosure-ready reports.",
		},
	],
	closing: {
		heading: "Get ready for Nigeria's 2028 reporting deadline",
		text: "Book a demo and receive an IFRS S1 and S2 readiness assessment tailored to your organisation.",
		button: "Request an IFRS Readiness Assessment",
	},
	sources: [
		{ label: "Financial Reporting Council of Nigeria — Roadmap Report for the Adoption of IFRS Sustainability Disclosure Standards in Nigeria (Amended 2026)", href: FRC_ROADMAP },
		{ label: "Securities and Exchange Commission Nigeria — Implementation of the IFRS Sustainability Disclosure Standards in Nigeria (23 September 2026)", href: SEC_CIRCULAR },
	],
};

export default function EsgReportingNigeriaPage() {
	return (
		<PageShell>
			<LandingPage content={content} />
		</PageShell>
	);
}
