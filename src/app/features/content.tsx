import iconAbacus from "@/assets/Abacus.svg";
import bubbleRings from "@/assets/bubble-rings.svg";
import ghgCalcSvg from "@/assets/C.svg";
import iconComboChart from "@/assets/Combo_Chart.svg";
import compactAtomNetwork from "@/assets/compact-atom-network.svg";
import iconDatabase from "@/assets/Database.svg";
import iconDocument from "@/assets/Document.svg";
import dashboardMockup from "@/assets/k.svg";
import iconLock from "@/assets/Lock.svg";
import iconPresentation from "@/assets/Presentation.svg";
import iconSecurityConfig from "@/assets/Security_Config.svg";
import iconUserGroups from "@/assets/User_Groups.svg";
import SectionLabel from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
	{
		iconSrc: iconSecurityConfig,
		title: "IFRS Compliance Engine",
		badge: "MOST VALUED",
		desc: "Always-updated modules designed for IFRS S1 & S2. Conduct gap assessments, track progress, and generate globally aligned reports in days — not months.",
		bullets: [
			"Gap assessment against IFRS S1 & S2 frameworks",
			"Auto-updates when standards change",
			"Generates disclosure-ready outputs instantly",
		],
	},
	{
		iconSrc: iconAbacus,
		title: "Automated GHG Calculations",
		badge: "MOST VALUED",
		desc: "Input activity data — fuel consumption, energy use, travel — and let ESG Horizon handle Scope 1, 2 & 3 conversions using latest GHG Protocol emission factors.",
		bullets: [
			"Scope 1, 2 & 3 emissions calculated automatically",
			"Latest IPCC & GHG Protocol factors built in",
			"Activity data import from multiple sources",
		],
	},
	{
		iconSrc: iconUserGroups,
		title: "Collaborate Seamlessly",
		desc: "Invite team members from operations, HR, and finance to input data directly. Track progress in real-time across all entities.",
		bullets: [
			"Role-based access for each department",
			"Real-time data collection progress tracking",
			"Automated reminders for data owners",
		],
	},
	{
		iconSrc: iconDatabase,
		title: "Your System of Record",
		desc: "Enjoy a secure, version-controlled hub with full data history and granular access controls — your single source of truth for all ESG data.",
		bullets: [
			"Full version history on all data entries",
			"Granular read/write permissions per user",
			"Immutable audit log for every change",
		],
	},
	{
		iconSrc: iconDocument,
		title: "Guided, Compliant Reporting",
		desc: "Step-by-step guided forms ensure you capture the right level of detail for audit-ready, comprehensive disclosures — no ESG expertise required.",
		bullets: [
			"Contextual help embedded throughout",
			"Mandatory field validation and quality checks",
			"Framework-mapped to IFRS",
		],
	},
	{
		iconSrc: iconComboChart,
		title: "Visual Dashboards & Insights",
		desc: "See your ESG impact at a glance with intuitive dashboards, scope breakdowns, metric analysis, and peer benchmarking across your industry.",
		bullets: [
			"Executive-ready ESG performance dashboards",
			"Emission scope breakdown & trend charts",
			"Peer benchmarking against industry averages",
		],
	},
	{
		iconSrc: iconPresentation,
		title: "Instant, Flexible Exports",
		desc: "Export polished, board-ready PDF reports with one click. Download raw Excel data for consultants or generate regulator submission packages.",
		bullets: [
			"Board-ready PDF reports with your branding",
			"Excel export for consultants & advisors",
			"Regulator-formatted submission packages",
		],
	},
	{
		iconSrc: iconLock,
		title: "Enterprise Security & Governance",
		desc: "Enterprise-grade hosting with encryption at rest and in transit, full audit on logs on every change for complete accountability.",
		bullets: [
			"AES-256 encryption at rest & in transit",
			"SOC 2-aligned infrastructure",
			"Full timestamped audit trail on all activity",
		],
	},
];

export default function FeaturesContent() {
	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] py-20 md:py-28">
				{/* Gradient overlay fading right edge */}
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-[#e8f6f2]/60" />

				<div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div>
						<SectionLabel>PLATFORM FEATURES</SectionLabel>
						<h1 className="text-3xl md:text-5xl font-bold mt-3 max-w-lg text-foreground">
							Everything You Need to{" "}
							<span className="accent-italic">Lead on ESG</span>
						</h1>
						<p className="text-foreground mt-4 max-w-xl">
							Powerful features designed for modern sustainability reporting
							across Africa — from data collection to board-ready disclosure.
						</p>
					</div>
					<div className="absolute right-[-60px] top-1/2 -translate-y-1/2 lg:relative lg:right-auto lg:top-auto lg:translate-y-0 flex justify-center pointer-events-none">
						<img
							src={compactAtomNetwork.src}
							alt=""
							className="w-[250px] md:w-[350px] lg:w-[420px] opacity-[0.12] lg:opacity-[0.18] animate-slow-spin select-none pointer-events-none"
						/>
					</div>
				</div>
			</section>

			{/* Core Features */}
			<section className="py-20 md:py-28 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
				<div className="container">
					<div className="text-center mb-16">
						<SectionLabel>CORE CAPABILITIES</SectionLabel>
						<h2 className="text-3xl md:text-4xl font-bold mt-3">
							Built for{" "}
							<span className="accent-italic">Measurable ESG Performance</span>
						</h2>
						<p className="text-foreground mt-3 max-w-md mx-auto">
							Every feature is designed to reduce effort, increase accuracy, and
							ensure your disclosures stand up to scrutiny.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{features.map((f) => (
							<div
								key={f.title}
								className={`rounded-2xl p-5 md:p-8 hover:shadow-lg transition-shadow border border-border ${
									f.badge ? "border-t-[3px] border-t-primary" : ""
								}`}
							>
								{f.badge && (
									<span className="text-[10px] font-bold tracking-wider border border-primary/40 text-primary px-3 py-1 rounded-full mb-5 inline-block">
										{f.badge}
									</span>
								)}
								<div className="mb-4">
									<img
										src={f.iconSrc.src}
										alt={f.title}
										className="h-10 w-10"
									/>
								</div>
								<h3 className="font-bold text-xl md:text-2xl mb-3">
									{f.title}
								</h3>
								<p className="text-base text-foreground mb-8 leading-relaxed">
									{f.desc}
								</p>
								<ul className="space-y-4">
									{f.bullets.map((b) => (
										<li key={b} className="flex items-center gap-3 text-[15px]">
											<span className="h-5 w-5 rounded-full border-2 border-primary/30 shrink-0" />
											<span>{b}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Compliance Engine */}
			<section className="py-20 md:py-28 overflow-hidden md:overflow-visible">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<SectionLabel>IFRS COMPLIANCE ENGINE</SectionLabel>
							<h2 className="text-2xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
								From Gap Assessment to{" "}
								<span className="accent-italic">Global Report</span>
							</h2>
							<p className="text-foreground mb-8 text-lg leading-relaxed">
								The IFRS compliance engine continuously checks your disclosures
								against S1 and S2 requirements, flags gaps in real-time, and
								guides your team to close them before submission.
							</p>
							<ul className="space-y-4">
								{[
									"IFRS S1 (General Sustainability Disclosures) fully mapped",
									"IFRS S2 (Climate-related Disclosures) with scenario analysis support",
									"Standards auto-update when ISSB releases new guidance",
									"Cross-referenced with GRI, TCFD, SASB for multi-framework reporting",
								].map((item) => (
									<li key={item} className="flex items-start gap-3 text-base">
										<span className="h-6 w-6 mt-0.5 shrink-0 rounded-full bg-primary flex items-center justify-center">
											<svg
												className="h-3.5 w-3.5 text-white"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<polyline points="20 6 9 17 4 12" />
											</svg>
										</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<div
								className="animate-float relative -mx-6 lg:mx-0"
								style={{
									maskImage:
										"linear-gradient(to bottom, black 55%, transparent 100%)",
									WebkitMaskImage:
										"linear-gradient(to bottom, black 55%, transparent 100%)",
								}}
							>
								<img
									src={dashboardMockup.src}
									alt="ESG Assessment Report"
									className="max-w-none w-[140vw] -ml-[30vw] lg:w-full lg:ml-0 lg:scale-[1.4] origin-center"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Automated GHG Calculations */}
			<section className="py-20 md:py-28 bg-muted/30 overflow-hidden">
				<div className="container overflow-visible">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-visible">
						<div className="order-2 lg:order-1 overflow-visible">
							<div
								className="animate-float relative -mx-6 lg:mx-0"
								style={{
									maskImage:
										"linear-gradient(to bottom, black 55%, transparent 100%)",
									WebkitMaskImage:
										"linear-gradient(to bottom, black 55%, transparent 100%)",
								}}
							>
								<img
									src={ghgCalcSvg.src}
									alt="GHG Emissions Dashboard"
									className="max-w-none w-[140vw] -ml-[12vw] lg:w-full lg:ml-0 lg:scale-[1.6] origin-center"
								/>
							</div>
						</div>
						<div className="order-1 lg:order-2">
							<SectionLabel>AUTOMATED GHG CALCULATIONS</SectionLabel>
							<h2 className="text-2xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
								Input Data.{" "}
								<span className="accent-italic">Get Certified Figures.</span>
							</h2>
							<p className="text-foreground mb-8 text-lg leading-relaxed">
								No more Excel emission factor lookups. ESG Horizon maintains the
								latest IPCC AR6 and GHG Protocol conversion factors — updated
								automatically as standards evolve.
							</p>
							<ul className="space-y-4">
								{[
									"Fuel consumption → tCO₂e in one click",
									"Location-based & market-based Scope 2 methodologies",
									"Scope 3 category templates for 15 categories",
									"Intensity metrics auto-calculated (per revenue, per employee)",
								].map((item) => (
									<li key={item} className="flex items-start gap-3 text-base">
										<span className="h-6 w-6 mt-0.5 shrink-0 rounded-full bg-primary flex items-center justify-center">
											<svg
												className="h-3.5 w-3.5 text-white"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<polyline points="20 6 9 17 4 12" />
											</svg>
										</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative bg-primary py-20 md:py-24 overflow-hidden">
				<img
					src={bubbleRings.src}
					alt=""
					className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60 select-none animate-cta-drift"
				/>
				<div className="container relative text-center text-white">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Start Building a Confident
						<br />
						ESG Reporting Process
					</h2>
					<p className="text-white/70 mb-8 max-w-lg mx-auto">
						See how ESG Horizon fits your organisation in a personalised
						30-minute walkthrough.
					</p>
					<Button
						size="lg"
						asChild
						className="bg-white text-primary hover:bg-white/90 rounded-lg px-5 py-4 md:px-8 md:py-6 text-sm md:text-base font-semibold"
					>
						<Link href="/contact">Request Your Personalised Demo</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
