import Link from "next/link";
import { Button } from "@/components/ui/button";
import bubbleRings from "@/assets/bubble-rings.svg";

const CTASection = () => (
  <section aria-label="Call to action" className="relative bg-primary py-20 md:py-24 overflow-hidden">
    {/* Decorative bubble rings background */}
    <img
      src={bubbleRings.src}
      alt=""
      className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60 select-none animate-cta-drift"
    />

    <div className="container relative text-center text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Start Building a Confident<br />ESG Reporting Process
      </h2>
      <p className="text-white mb-8 max-w-lg mx-auto">
        See how ESG Horizon fits your organisation in a personalised 30-minute walkthrough.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 rounded-lg px-5 py-4 md:px-8 md:py-6 text-sm md:text-base font-semibold">
          <Link href="/contact">Request Your Personalised Demo</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-white text-white bg-transparent hover:bg-transparent rounded-lg px-5 py-4 md:px-8 md:py-6 text-sm md:text-base">
          <Link href="/features">Explore Features</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
