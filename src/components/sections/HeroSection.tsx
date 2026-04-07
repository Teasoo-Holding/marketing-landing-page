import moleculeNetwork from "@/assets/ghg-molecule-network.svg";
import heroSvg from "@/assets/hero.svg";
import leafNature from "@/assets/leaf-nature.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const tags = [
	"IFRS S1 & S2 Ready",
	"GHG Protocol Aligned",
	"Audit-Ready",
	"Enterprise Security",
];

const HeroSection = () => (
	<section
		aria-label="Hero"
		className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] min-h-screen md:-mb-[100px]"
	>
		{/* Dark grayish gradient at bottom-right */}
		<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-[#2a2a2a]/20 to-transparent pointer-events-none" />

		{/* Bottom-left decorative leaf */}
		<img
			src={leafNature.src}
			alt=""
			className="pointer-events-none absolute bottom-[55%] md:bottom-[40%] lg:-bottom-[60px] -left-[60px] md:-left-[80px] lg:-left-[120px] w-[350px] md:w-[400px] lg:w-[700px] opacity-[0.12] select-none animate-gentle-pulse"
		/>

		{/* Molecule network — top-right on mobile, right-center on desktop */}
		<div className="pointer-events-none absolute -right-20 top-[5%] md:-right-24 md:top-[10%] lg:-right-40 lg:top-[50%] lg:-translate-y-1/2 w-[300px] md:w-[450px] lg:w-[1100px] select-none">
			<img
				src={moleculeNetwork.src}
				alt=""
				className="w-full opacity-[0.10] animate-slow-spin"
			/>
		</div>

		<div className="container relative pt-12 pb-8 md:pt-8 md:pb-24 lg:pt-6">
			<div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 md:gap-10 items-center">
				{/* Left content */}
				<div>
					<span className="inline-flex items-center gap-2 text-xs md:text-body-sm whitespace-nowrap font-medium border border-primary/30 rounded-full px-2.5 py-1 md:px-4 md:py-1.5 mb-6 text-black font-extrabold bg-white">
						<span className="h-2 w-2 rounded-full bg-primary" />
						Nigeria&apos;s #1 IFRS-Ready ESG Platform
					</span>

					<h1 className="heading-display mb-6 text-foreground">
						Cut ESG
						<br />
						Reporting Time
						<br />
						by <span className="accent-italic">Up to 60%</span>
					</h1>

					<p className="text-body-lg text-foreground mb-8 max-w-[480px] lg:max-w-[clamp(480px,36vw,720px)]">
						Automate disclosures, reduce compliance risk, and gain a single
						source of truth for ESG data — built for African regulatory
						realities.
					</p>

					<div className="flex gap-2 md:gap-4 mb-8">
						<Button size="lg" asChild className="rounded-lg px-4 md:px-8">
							<Link href="/contact">Request Your Demo</Link>
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

				{/* Right — dashboard mockup */}
				<div
					className="relative overflow-hidden lg:overflow-visible"
					style={{
						maskImage:
							"linear-gradient(to bottom, black 50%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, black 50%, transparent 100%)",
					}}
				>
					<img
						src={heroSvg.src}
						alt="ESG Horizon Dashboard — GHG emissions, scope breakdown, and reduction targets"
						className="relative max-w-full animate-float mt-4 md:mt-8 lg:mt-16 w-full"
					/>
				</div>
			</div>
		</div>

		{/* Bottom gradient blending into dark Problem section */}
		<div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1a1a1a] pointer-events-none" />
	</section>
);

export default HeroSection;
