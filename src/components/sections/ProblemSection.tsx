import chartIcon from "@/assets/chart.svg";
import emailIcon from "@/assets/email.svg";
import emissionPlumes from "@/assets/emission-plumes.svg";
import infoIcon from "@/assets/info.svg";
import recycleIcon from "@/assets/recycle.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const problems = [
	{
		icon: emailIcon,
		title: "Endless email chains",
		desc: "Chasing data owners across subsidiaries with no central collection system",
	},
	{
		icon: chartIcon,
		title: "Fragile spreadsheets",
		desc: "Formulas that break and compromise the accuracy of your entire report",
	},
	{
		icon: recycleIcon,
		title: "No version control",
		desc: "Impossible to track who changed what, creating audit and governance risks",
	},
	{
		icon: infoIcon,
		title: "High compliance risk",
		desc: "Without an audit trail or data security, every report is a liability",
	},
];

const ProblemSection = () => (
	<section
		aria-label="The problem ESG Horizon solves"
		className="relative py-20 md:py-28 bg-[#1a1a1a] text-white overflow-hidden"
	>
		{/* Background plumes */}
		<img
			src={emissionPlumes.src}
			alt=""
			className="pointer-events-none absolute -right-16 md:right-0 top-0 h-full w-auto opacity-[0.12] select-none animate-rise"
		/>

		<div className="container relative">
			<span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#20a79c]">
				THE PROBLEM
			</span>
			<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white font-body leading-[1.1]">
				Stop Fighting Excel.
				<br />
				<span className="accent-italic">Start Leading on ESG</span>
			</h2>
			<p className="text-base md:text-xl text-white/70 max-w-2xl mb-10 md:mb-14 leading-relaxed">
				For most organisations, ESG reporting is a manual, error-prone
				nightmare. Here&apos;s what that looks like:
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{problems.map((item) => (
					<div
						key={item.title}
						className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 flex gap-3 md:gap-4 items-start"
					>
						<Image
							src={item.icon}
							alt=""
							width={44}
							height={44}
							className="shrink-0 rounded-lg w-9 h-9 md:w-11 md:h-11"
						/>
						<div>
							<h3 className="font-body font-semibold text-lg mb-1 text-white">
								{item.title}
							</h3>
							<p className="text-sm text-white/70">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-8 md:mt-10 bg-primary/20 border border-primary/30 rounded-xl p-5 md:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
				<div>
					<p className="font-semibold text-white text-sm md:text-base">
						This outdated approach wastes weeks of effort and exposes your
						company to errors.
					</p>
					<p className="text-primary text-sm mt-1">
						ESG Horizon replaces compromise with confidence.
					</p>
				</div>
				<Button
					asChild
					className="bg-white text-foreground hover:bg-white/90 shrink-0"
				>
					<Link href="/features">
						See How <ArrowRight className="ml-1 h-4 w-4" />
					</Link>
				</Button>
			</div>
		</div>
	</section>
);

export default ProblemSection;
