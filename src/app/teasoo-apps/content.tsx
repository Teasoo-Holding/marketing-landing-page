import { ArrowUpRight, Check } from "lucide-react";
import SectionLabel from "@/components/sections/SectionLabel";
import { TEASOO_APPS, type TeasooApp } from "@/data/teasoo-apps";

function AppCard({ app }: { app: TeasooApp }) {
	return (
		<article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
			{/* What the product does, with the logo on top */}
			<div className="relative px-5 pb-8 pt-5" style={{ backgroundColor: app.tint }}>
				<img src={app.image} alt={app.imageAlt} loading="lazy" className="w-full rounded-xl shadow-sm" />
				<div className="absolute -bottom-6 left-5 flex h-14 items-center rounded-xl border border-border bg-white px-3 shadow-sm">
					{app.logoStyle === "wide" ? (
						<img src={app.logo} alt={`${app.name} logo`} className="h-12 w-auto" />
					) : (
						<img src={app.logo} alt={`${app.name} logo`} className="h-9 w-9 rounded-lg" />
					)}
				</div>
				{app.featured && (
					<span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
						Featured
					</span>
				)}
			</div>
			<div className="flex flex-1 flex-col p-card-p pt-10">
				<h3 className="heading-h3">{app.name}</h3>
				<p className="text-body-sm font-semibold text-primary">{app.tagline}</p>
				<p className="text-body mt-4 text-foreground">{app.description}</p>
				<ul className="mt-5 space-y-2">
					{app.highlights.map((h) => (
						<li key={h} className="flex items-start gap-2 text-body-sm text-foreground">
							<Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
							{h}
						</li>
					))}
				</ul>
				<div className="mt-auto pt-6">
					<a
						href={app.url}
						target="_blank"
						rel="noopener"
						className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
					>
						Visit App <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
						<span className="sr-only">: {app.name} (opens in a new tab)</span>
					</a>
				</div>
			</div>
		</article>
	);
}

function FeaturedApp({ app }: { app: TeasooApp }) {
	return (
		<article className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
			{/* Product picture with the logo on top */}
			<div className="relative h-full px-6 pb-10 pt-6 sm:px-8 sm:pt-8" style={{ backgroundColor: app.tint }}>
				<img src={app.image} alt={app.imageAlt} className="w-full rounded-xl shadow-md" />
				<div className="absolute -bottom-7 left-6 flex h-16 items-center rounded-xl border border-border bg-white px-4 shadow-sm sm:left-8 lg:bottom-6">
					{app.logoStyle === "wide" ? (
						<img src={app.logo} alt={`${app.name} logo`} className="h-14 w-auto" />
					) : (
						<img src={app.logo} alt={`${app.name} logo`} className="h-10 w-10 rounded-lg" />
					)}
				</div>
			</div>
			<div className="px-6 pb-8 pt-4 sm:px-8 lg:py-10 lg:pl-0 lg:pr-10">
				<p className="section-label">Featured app</p>
				<h3 className="heading-h2 mt-2">{app.name}</h3>
				<p className="mt-1 font-semibold text-primary">{app.tagline}</p>
				<p className="text-body mt-4 max-w-xl text-foreground">{app.description}</p>
				<ul className="mt-5 space-y-2">
					{app.highlights.map((h) => (
						<li key={h} className="flex items-start gap-2 text-body-sm text-foreground">
							<Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
							{h}
						</li>
					))}
				</ul>
				<a
					href={app.url}
					target="_blank"
					rel="noopener"
					className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
				>
					Visit App <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
					<span className="sr-only">: {app.name} (opens in a new tab)</span>
				</a>
			</div>
		</article>
	);
}

export default function TeasooAppsContent() {
	const featured = TEASOO_APPS.find((a) => a.featured);
	// Every app, the featured one included, is listed below the featured block.
	const apps = [...TEASOO_APPS].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] py-section-y">
				<div className="container relative">
					<SectionLabel>TEASOO APPS</SectionLabel>
					<h1 className="heading-h1 mt-3 max-w-2xl text-foreground">
						Digital products from <span className="accent-italic">Teasoo Consulting</span>
					</h1>
					<p className="text-body-lg text-foreground mt-4 max-w-2xl">
						Software we build and run for sustainability, stakeholder and environmental work, used by teams across
						Nigeria and Africa.
					</p>
				</div>
			</section>

			{/* Apps */}
			<section className="py-section-y" aria-labelledby="apps-heading">
				<div className="container">
					{featured && <FeaturedApp app={featured} />}
					<h2 id="apps-heading" className={featured ? "heading-h3 mb-6 mt-16" : "sr-only"}>
						All apps
					</h2>
					<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{apps.map((app) => (
							<li key={app.name}>
								<AppCard app={app} />
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
