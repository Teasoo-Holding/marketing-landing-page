import { ArrowUpRight, Check } from "lucide-react";
import SectionLabel from "@/components/sections/SectionLabel";
import { TEASOO_APPS, type TeasooApp } from "@/data/teasoo-apps";

function AppLogo({ app, large = false }: { app: TeasooApp; large?: boolean }) {
	if (app.logoStyle === "wide") {
		return <img src={app.logo} alt={`${app.name} logo`} className={`${large ? "h-36 md:h-48" : "h-16"} w-auto`} />;
	}
	return <img src={app.logo} alt={`${app.name} logo`} className={`${large ? "h-20 w-20" : "h-14 w-14"} rounded-2xl`} />;
}

function Highlights({ items }: { items: string[] }) {
	return (
		<ul className="mt-5 space-y-2">
			{items.map((h) => (
				<li key={h} className="flex items-start gap-2 text-body-sm text-foreground">
					<Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
					{h}
				</li>
			))}
		</ul>
	);
}

function VisitLink({ app }: { app: TeasooApp }) {
	return (
		<a
			href={app.url}
			target="_blank"
			rel="noopener"
			className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
		>
			Visit App <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
			<span className="sr-only">: {app.name} (opens in a new tab)</span>
		</a>
	);
}

export default function TeasooAppsContent() {
	const featured = TEASOO_APPS.find((a) => a.featured);
	const others = TEASOO_APPS.filter((a) => a !== featured);

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
					<h2 id="apps-heading" className="sr-only">Our apps</h2>

					{featured && (
						<article className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border bg-white p-card-p shadow-sm lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
							<div className="flex items-center justify-center rounded-xl bg-[#f7fdfb] p-8">
								<AppLogo app={featured} large />
							</div>
							<div>
								<p className="section-label">Featured</p>
								<h3 className="heading-h2 mt-2">{featured.name}</h3>
								<p className="mt-1 font-semibold text-primary">{featured.tagline}</p>
								<p className="text-body mt-4 max-w-xl text-foreground">{featured.description}</p>
								<Highlights items={featured.highlights} />
								<VisitLink app={featured} />
							</div>
						</article>
					)}

					{others.length > 0 && (
						<ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{others.map((app) => (
								<li key={app.name}>
									<article className="flex h-full flex-col rounded-2xl border border-border bg-white p-card-p shadow-sm">
										<div className="flex items-center gap-4">
											<AppLogo app={app} />
											<div>
												<h3 className="heading-h3">{app.name}</h3>
												<p className="text-body-sm font-semibold text-primary">{app.tagline}</p>
											</div>
										</div>
										<p className="text-body mt-4 text-foreground">{app.description}</p>
										<Highlights items={app.highlights} />
										<div className="mt-auto">
											<VisitLink app={app} />
										</div>
									</article>
								</li>
							))}
						</ul>
					)}
				</div>
			</section>
		</>
	);
}
