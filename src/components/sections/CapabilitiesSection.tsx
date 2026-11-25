import Link from "next/link";
import { ArrowRight, ClipboardCheck, Database, FileCheck2, Leaf, ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/sections/SectionLabel";

const capabilities = [
	{
		icon: FileCheck2,
		title: "IFRS S1 & S2 Reporting",
		text: "Prepare for sustainability-related financial disclosures with tools designed to support IFRS S1 and S2 reporting requirements.",
		href: "/ifrs-s1-compliance/",
	},
	{
		icon: Database,
		title: "ESG Data Management",
		text: "Bring your ESG information together in one place. Organise sustainability data, reduce manual data collection and improve reporting consistency.",
		href: "/esg-data-management/",
	},
	{
		icon: Leaf,
		title: "Greenhouse Gas Emissions Tracking",
		text: "Track and calculate your organisation's greenhouse gas emissions across Scope 1, Scope 2 and Scope 3, aligned with the GHG Protocol.",
		href: "/ghg-accounting-software/",
	},
	{
		icon: ShieldCheck,
		title: "ESG Governance & Compliance",
		text: "Strengthen your ESG reporting processes with better data oversight, documentation and visibility into your organisation's reporting readiness.",
		href: "/esg-reporting-nigeria/",
	},
	{
		icon: ClipboardCheck,
		title: "Audit-Ready Reporting",
		text: "Organise your reporting information and supporting documentation to improve transparency, traceability and audit readiness.",
		href: "/esg-reporting-software/",
	},
];

/** Home page: the five things you can do with ESG Horizon, each linking to its landing page. */
const CapabilitiesSection = () => (
	<section aria-labelledby="capabilities-heading" className="py-section-y bg-[#f4fbf9]">
		<div className="container">
			<div className="max-w-3xl">
				<SectionLabel>WHAT YOU CAN DO WITH ESG HORIZON</SectionLabel>
				<h2 id="capabilities-heading" className="heading-h2 mt-3 mb-5">
					Everything You Need to Manage{" "}
					<span className="accent-italic">ESG Reporting in One Platform</span>
				</h2>
				<p className="text-body-lg text-foreground">
					Manage your organisation&apos;s ESG data, streamline sustainability reporting, monitor emissions and prepare
					for evolving disclosure requirements with one integrated platform.
				</p>
			</div>

			<ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{capabilities.map(({ icon: Icon, title, text, href }, i) => (
					<li key={title} className="flex flex-col rounded-2xl border border-border bg-white p-card-p-sm shadow-sm transition-shadow hover:shadow-md">
						<div className="mb-5 flex items-center justify-between">
							<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<Icon className="h-5 w-5" aria-hidden="true" />
							</span>
							<span className="text-sm font-bold text-primary/60" aria-hidden="true">
								{String(i + 1).padStart(2, "0")}
							</span>
						</div>
						<h3 className="text-lg font-bold mb-2">{title}</h3>
						<p className="text-body-sm text-foreground">{text}</p>
						<Link href={href} className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
							Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
							<span className="sr-only">about {title}</span>
						</Link>
					</li>
				))}
				<li className="flex flex-col justify-center rounded-2xl bg-primary p-card-p-sm text-white">
					<p className="heading-h3 mb-3">Ready to simplify your ESG reporting?</p>
					<p className="text-body-sm text-white/90 mb-6">See ESG Horizon with your own reporting requirements in a 30-minute walkthrough.</p>
					<Link href="/contact/#book-demo" className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white/90">
						Request a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
					</Link>
				</li>
			</ul>
		</div>
	</section>
);

export default CapabilitiesSection;
