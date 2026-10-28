import moleculeNetwork from "@/assets/ghg-molecule-network.svg";
import heroSvg from "@/assets/hero.svg";
import leafNature from "@/assets/leaf-nature.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const tags = [
	"IFRS S1 & S2 Ready",
	"GHG Protocol Aligned",
	"Audit-Ready",
	"Enterprise Security",
];

const keyBenefits = [
	"Assess your sustainability reporting readiness.",
	"Identify potential data and disclosure gaps.",
	"Understand priority areas for improvement.",
	"Explore how ESG Horizon can support your reporting process.",
];

const HeroSection = () => (
	<section
		aria-label="Hero"
		className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2]"
	>
		{/* Centered radial vignette — gives xlarge screens a focal point */}
		<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(255,255,255,0.5)_100%)]" />

		{/* Capped content box — owns layout + decorative anchors */}
		<div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-24 pb-16 lg:pt-28 lg:pb-20">
			{/* Decorative leaf — anchored to capped box, hangs off the left edge */}
			<img
				src={leafNature.src}
				alt=""
				className="pointer-events-none absolute -left-20 top-[40%] md:-left-32 md:top-[30%] lg:-left-64 lg:top-1/2 w-[300px] md:w-[450px] lg:w-[700px] opacity-[0.12] select-none animate-gentle-pulse"
			/>

			{/* Decorative molecule — anchored to capped box, hangs off the right edge */}
			<img
				src={moleculeNetwork.src}
				alt=""
				className="pointer-events-none absolute -right-24 top-[5%] md:-right-32 md:top-[8%] lg:-right-80 lg:-top-40 w-[300px] md:w-[450px] lg:w-[1100px] opacity-[0.10] select-none animate-slow-spin"
			/>

			<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
				{/* Left — content (6 cols) */}
				<div className="lg:col-span-6">
					<span className="inline-flex items-center gap-2 text-xs md:text-body-sm whitespace-nowrap font-extrabold border border-primary/30 rounded-full px-2.5 py-1 md:px-4 md:py-1.5 mb-6 text-black bg-white">
						<span className="h-2 w-2 rounded-full bg-primary" />
						Nigeria&apos;s #1 IFRS-Ready ESG Platform
					</span>

					<h1 className="heading-h1 mb-5 text-foreground">
						Book a Demo. Get Your{" "}
						<span className="accent-italic">IFRS S1 &amp; S2 Gap Assessment.</span>
					</h1>

					<p className="text-body-lg text-foreground mb-6 max-w-[520px]">
						Book a personalised demo and receive an IFRS S1 &amp; S2 Gap
						Assessment to help identify potential reporting gaps, understand
						your current readiness and prioritise your next steps.
					</p>

					<div className="flex gap-3 md:gap-4 mb-8">
						<Button size="lg" asChild className="rounded-lg px-4 md:px-8">
							<Link href="/contact/#book-demo">Book A Demo</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							asChild
							className="rounded-lg border-primary text-primary px-4 md:px-8"
						>
							<Link href="/features">
								Explore Features <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<p className="text-body text-foreground mb-6 max-w-[520px]">
						See how ESG Horizon can help your organisation organise ESG data,
						streamline reporting workflows, calculate emissions and prepare for
						globally aligned sustainability disclosures.
					</p>

					<ul className="space-y-2 mb-8">
						{keyBenefits.map((benefit) => (
							<li
								key={benefit}
								className="flex gap-2.5 items-start text-body text-foreground"
							>
								<Check
									className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary"
									aria-hidden="true"
								/>
								{benefit}
							</li>
						))}
					</ul>

					<div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3">
						{tags.map((tag) => (
							<span
								key={tag}
								className="inline-flex items-center justify-center md:justify-start gap-1.5 text-xs md:text-body-sm whitespace-nowrap border border-border rounded-full px-2 py-1.5 md:px-4 md:py-2 text-foreground font-bold bg-white"
							>
								<span className="h-1.5 w-1.5 rounded-full bg-primary" />
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* Right — dashboard mockup (6 cols) */}
				<div className="lg:col-span-6">
					<img
						src={heroSvg.src}
						alt="ESG Horizon Dashboard — GHG emissions, scope breakdown, and reduction targets"
						className="w-full h-auto animate-float lg:scale-110 lg:origin-left"
					/>
				</div>
			</div>
		</div>
	</section>
);

export default HeroSection;
