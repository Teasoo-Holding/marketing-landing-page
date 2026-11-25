import SectionLabel from "@/components/sections/SectionLabel";

export type FaqItem = { q: string; a: string };

/**
 * Frequently asked questions. Uses native <details>, so every answer is in the page's HTML
 * (search engines read it) and it opens with the keyboard without any JavaScript. Also emits
 * FAQPage structured data for the same questions.
 */
export default function Faq({
	items,
	label = "COMMON QUESTIONS",
	title = "Frequently Asked",
	titleAccent = "Questions",
	muted = false,
}: {
	items: FaqItem[];
	label?: string;
	title?: string;
	titleAccent?: string;
	muted?: boolean;
}) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: { "@type": "Answer", text: item.a },
		})),
	};

	return (
		<section aria-labelledby="faq-heading" className={`py-section-y ${muted ? "bg-muted/40" : ""}`}>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<div className="container max-w-3xl">
				<div className="text-center mb-12 md:mb-14">
					<SectionLabel>{label}</SectionLabel>
					<h2 id="faq-heading" className="heading-h2 mt-4">
						{title} <span className="accent-italic">{titleAccent}</span>
					</h2>
				</div>
				<div className="space-y-4">
					{items.map((item) => (
						<details
							key={item.q}
							className="group border border-border rounded-2xl px-5 md:px-8 bg-background shadow-sm [&_summary::-webkit-details-marker]:hidden"
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-body rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
								<h3 className="text-body font-semibold">{item.q}</h3>
								<svg
									className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</summary>
							<p className="text-foreground text-body-sm pb-5">{item.a}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
