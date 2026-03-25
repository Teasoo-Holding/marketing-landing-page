import Link from "next/link";
import { Button } from "@/components/ui/button";
import bubbleRings from "@/assets/bubble-rings.svg";

const CTASection = () => (
  <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
    {/* Decorative bubble rings background */}
    <img
      src={bubbleRings.src}
      alt=""
      className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60 select-none animate-cta-drift"
    />

    <div className="container relative text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Start Building a Confident<br />ESG Reporting Process
      </h2>
      <p className="text-white/70 mb-8 max-w-lg mx-auto">
        See how ESG Horizon fits your organisation in a personalised 30-minute walkthrough.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 rounded-lg px-8 py-6 text-base font-semibold">
          <Link href="/contact">Request Your Personalised Demo</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-white text-white bg-primary hover:border-amber-400 hover:text-amber-400 hover:bg-primary rounded-lg px-8 py-6 text-base transition-colors">
          <Link href="/features">Explore Features</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
