import { Star } from "lucide-react";

const TestimonialSection = () => (
	<section aria-label="Customer testimonial" className="py-14 md:py-28">
		<div className="container max-w-3xl text-center">
			<div className="flex justify-center gap-1 mb-6">
				{[...Array(5)].map((_, i) => (
					<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
				))}
			</div>
			<blockquote className="font-heading text-lg md:text-2xl italic mb-6 md:mb-8 text-foreground">
				&quot;ESG Horizon reduced our reporting cycle from{" "}
				<span className="font-bold text-primary">8 weeks to 2 weeks</span> and
				gave us complete confidence in our disclosures. The automated
				calculations eliminated hours of manual work.&quot;
			</blockquote>
			<div className="flex items-center justify-center gap-3">
				<div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
					AO
				</div>
				<div className="text-left">
					<p className="font-semibold text-sm">Adaeze Okafor</p>
					<p className="text-xs text-muted-foreground">
						Head of Sustainability, Major Nigerian Energy Conglomerate
					</p>
				</div>
			</div>
			<span className="inline-block mt-4 text-xs border border-primary/40 rounded-full px-3 py-1 text-primary">
				75% reduction in reporting cycle time
			</span>
		</div>
	</section>
);

export default TestimonialSection;
