import Link from "next/link";
import { ArrowRight } from "lucide-react";
import bubbleRings from "@/assets/bubble-rings.svg";
import compactAtomNetwork from "@/assets/compact-atom-network.svg";
import SectionLabel from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/button";
import Faq, { type FaqItem } from "@/components/seo/Faq";
import { SOLUTION_PAGES, type SolutionHref } from "@/data/solutions";

export type LandingItem = { title: string; text: string; href?: string };

export type LandingSection = {
	label: string;
	heading: string;
	headingAccent?: string;
	paragraphs?: string[];
	/** Cards under the text. "steps" numbers them, "list" is a compact checklist. */
	items?: LandingItem[];
	layout?: "cards" | "steps" | "list";
	note?: string;
};

export type LandingContent = {
	path: SolutionHref;
	breadcrumb: string;
	label: string;
	h1: string;
	h1Accent?: string;
	intro: string;
	heroPoints: string[];
	cta: { label: string; href: string };
	sections: LandingSection[];
	industries?: string[];
	faqs: FaqItem[];
	closing: { heading: string; text: string; button: string };
	sources?: { label: string; href: string }[];
};

const SITE = "https://esghorizon.africa";

function Check({ light = false }: { light?: boolean }) {
	return (
		<span className={`h-6 w-6 mt-0.5 shrink-0 rounded-full flex items-center justify-center ${light ? "bg-white/20" : "bg-primary"}`}>
			<svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<polyline points="20 6 9 17 4 12" />
			</svg>
		</span>
	);
}

function Section({ section, muted }: { section: LandingSection; muted: boolean }) {
	const layout = section.layout ?? "cards";
	return (
		<section className={`py-section-y ${muted ? "bg-muted/40" : ""}`}>
			<div className="container">
				<div className="max-w-3xl">
					<SectionLabel>{section.label}</SectionLabel>
					<h2 className="heading-h2 mt-3 mb-6">
						{section.heading}
						{section.headingAccent && (
							<>
								{" "}
								<span className="accent-italic">{section.headingAccent}</span>
							</>
						)}
					</h2>
					{section.paragraphs?.map((p) => (
						<p key={p.slice(0, 40)} className="text-body-lg text-foreground mb-5">
							{p}
						</p>
					))}
				</div>

				{section.items && layout === "list" && (
					<ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-5xl">
						{section.items.map((item) => (
							<li key={item.title} className="flex gap-3 items-start">
								<Check />
								<span className="text-body">
									<strong className="font-semibold">{item.title}.</strong> {item.text}
								</span>
							</li>
						))}
					</ul>
				)}

				{section.items && layout !== "list" && (
					<ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{section.items.map((item, i) => (
							<li key={item.title} className="flex flex-col rounded-2xl border border-border bg-white p-card-p-sm shadow-sm">
								{layout === "steps" && (
									<span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
										{String(i + 1).padStart(2, "0")}
									</span>
								)}
								<h3 className="text-lg font-bold mb-2">{item.title}</h3>
								<p className="text-body-sm text-foreground">{item.text}</p>
								{item.href && (
									<Link href={item.href} className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
										Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
										<span className="sr-only">about {item.title}</span>
									</Link>
								)}
							</li>
						))}
					</ul>
				)}

				{section.note && <p className="mt-6 max-w-3xl text-body-sm text-muted-foreground">{section.note}</p>}
			</div>
		</section>
	);
}

/** Shared layout for the SEO landing pages: hero, content sections, industries, FAQs, related pages and a demo CTA. */
export default function LandingPage({ content }: { content: LandingContent }) {
	const related = SOLUTION_PAGES.filter((p) => p.href !== content.path);
	const breadcrumbs = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
			{ "@type": "ListItem", position: 2, name: content.breadcrumb, item: `${SITE}${content.path}` },
		],
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] py-section-y">
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-[#e8f6f2]/60" />
				<img
					src={compactAtomNetwork.src}
					alt=""
					className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[300px] md:w-[420px] lg:w-[520px] opacity-[0.10] animate-slow-spin select-none"
				/>
				<div className="container relative">
					<nav aria-label="Breadcrumb" className="mb-6 text-body-sm text-muted-foreground">
						<ol className="flex flex-wrap items-center gap-2">
							<li><Link href="/" className="hover:text-primary hover:underline">Home</Link></li>
							<li aria-hidden="true">/</li>
							<li aria-current="page" className="text-foreground font-medium">{content.breadcrumb}</li>
						</ol>
					</nav>
					<SectionLabel>{content.label}</SectionLabel>
					<h1 className="heading-h1 mt-3 max-w-3xl text-foreground">
						{content.h1}
						{content.h1Accent && (
							<>
								{" "}
								<span className="accent-italic">{content.h1Accent}</span>
							</>
						)}
					</h1>
					<p className="text-body-lg text-foreground mt-5 max-w-2xl">{content.intro}</p>
					<ul className="mt-6 flex flex-wrap gap-2 md:gap-3">
						{content.heroPoints.map((point) => (
							<li key={point} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-body-sm font-bold text-foreground">
								<span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
								{point}
							</li>
						))}
					</ul>
					<Button size="lg" asChild className="mt-8 rounded-lg px-6 md:px-8">
						<Link href={content.cta.href}>{content.cta.label}</Link>
					</Button>
				</div>
			</section>

			{content.sections.map((section, i) => (
				<Section key={section.heading} section={section} muted={i % 2 === 1} />
			))}

			{content.industries && (
				<section className="py-section-y bg-[#1a1a1a] text-white">
					<div className="container">
						<SectionLabel dark>WHO IT&apos;S FOR</SectionLabel>
						<h2 className="heading-h2 mt-3 mb-8 max-w-2xl">
							Built for organisations <span className="accent-italic">across Africa</span>
						</h2>
						<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{content.industries.map((industry) => (
								<li key={industry} className="flex gap-3 items-start rounded-xl border border-white/15 bg-white/[0.04] p-4 text-body">
									<Check light />
									{industry}
								</li>
							))}
						</ul>
					</div>
				</section>
			)}

			<Faq items={content.faqs} />

			{content.sources && (
				<section className="pb-12">
					<div className="container max-w-3xl">
						<h2 className="text-body font-semibold mb-3">Sources</h2>
						<ul className="space-y-2 text-body-sm text-muted-foreground">
							{content.sources.map((s) => (
								<li key={s.href}>
									<a href={s.href} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-primary">
										{s.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</section>
			)}

			{/* Related pages */}
			<section className="py-section-y-sm bg-muted/40" aria-labelledby="related-heading">
				<div className="container">
					<h2 id="related-heading" className="heading-h3 mb-6">Explore more of ESG Horizon</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{related.map((page) => (
							<li key={page.href}>
								<Link href={page.href} className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 hover:border-primary hover:shadow-sm transition">
									<span className="font-semibold text-foreground group-hover:text-primary">{page.label}</span>
									<span className="mt-1 text-body-sm text-muted-foreground">{page.summary}</span>
								</Link>
							</li>
						))}
						<li>
							<Link href="/features/" className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 hover:border-primary hover:shadow-sm transition">
								<span className="font-semibold text-foreground group-hover:text-primary">All platform features</span>
								<span className="mt-1 text-body-sm text-muted-foreground">Every ESG Horizon capability in one place.</span>
							</Link>
						</li>
					</ul>
				</div>
			</section>

			{/* Closing CTA */}
			<section className="relative bg-primary py-section-y overflow-hidden">
				<img src={bubbleRings.src} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60 select-none animate-cta-drift" />
				<div className="container relative text-center text-white">
					<h2 className="heading-h2 mb-4 max-w-2xl mx-auto">{content.closing.heading}</h2>
					<p className="text-body-lg text-white mb-8 max-w-xl mx-auto">{content.closing.text}</p>
					<Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 rounded-lg font-semibold">
						<Link href="/contact/#book-demo">{content.closing.button}</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
