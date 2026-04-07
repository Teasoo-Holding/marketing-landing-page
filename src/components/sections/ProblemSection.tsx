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
		className="relative py-12 md:py-20 bg-[#1a1a1a] text-white overflow-hidden"
	>
		{/* Background plumes */}
		<img
			src={emissionPlumes.src}
			alt=""
			className="pointer-events-none absolute -right-16 md:right-0 top-0 h-full w-auto opacity-[0.12] select-none animate-rise"
		/>

		<div className="container relative">
			<span className="section-label section-label-dark">THE PROBLEM</span>
			<h2 className="heading-h2 mt-3 mb-4 text-white">
				Stop Fighting Excel.
				<br />
				<span className="accent-italic">Start Leading on ESG</span>
			</h2>
			<p className="text-body-lg text-white max-w-2xl mb-6 md:mb-10">
				For most organisations, ESG reporting is a manual, error-prone
				nightmare. Here&apos;s what that looks like:
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{problems.map((item) => (
					<div
						key={item.title}
						className="bg-white/5 border border-white/10 rounded-xl p-card-p-sm flex gap-3 md:gap-4 items-start"
					>
						<Image
							src={item.icon}
							alt=""
							width={44}
							height={44}
							className="shrink-0 rounded-lg w-9 h-9 md:w-11 md:h-11"
						/>
						<div>
							<h3 className="font-body font-semibold text-h3 mb-1 text-white">
								{item.title}
							</h3>
							<p className="text-body-sm text-white">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-6 md:mt-8 bg-primary/20 border border-primary/30 rounded-xl p-card-p-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
				<div>
					<p className="font-semibold text-white text-body">
						This outdated approach wastes weeks of effort and exposes your
						company to errors.
					</p>
					<p className="text-teal-400 font-bold text-body-sm mt-1">
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
