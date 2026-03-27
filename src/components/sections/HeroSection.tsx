import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroSvg from "@/assets/hero.svg";
import leafNature from "@/assets/leaf-nature.svg";
import moleculeNetwork from "@/assets/ghg-molecule-network.svg";

const tags = ["IFRS S1 & S2 Ready", "GHG Protocol Aligned", "Audit-Ready", "Enterprise Security"];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] min-h-screen -mb-[100px]">
    {/* Dark grayish gradient at bottom-right */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-[#2a2a2a]/20 to-transparent pointer-events-none" />

    {/* Bottom-left decorative leaf */}
    <img
      src={leafNature.src}
      alt=""
      className="pointer-events-none absolute bottom-0 -left-[120px] w-[700px] opacity-[0.12] select-none animate-gentle-pulse"
    />

    {/* Right-side molecule network */}
    <div className="pointer-events-none absolute -right-40 top-[50%] -translate-y-1/2 w-[1100px] select-none">
      <img
        src={moleculeNetwork.src}
        alt=""
        className="w-full opacity-[0.10] animate-slow-spin"
      />
    </div>

    <div className="relative pt-6 pb-16 md:pt-8 md:pb-24 px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 items-center">
        {/* Left content */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium border border-primary/30 rounded-full px-4 py-1.5 mb-6 text-primary bg-white">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Nigeria&apos;s #1 IFRS-Ready ESG Platform
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] mb-6 text-foreground tracking-tight font-body">
            Cut ESG<br />
            Reporting Time<br />
            by <span className="accent-italic">Up to 60%</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-[480px] leading-relaxed">
            Automate disclosures, reduce compliance risk, and gain a
            single source of truth for ESG data — built for African
            regulatory realities.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" asChild className="rounded-lg px-8 py-6 text-base">
              <Link href="/contact">Request Your Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-lg px-8 py-6 text-base border-primary text-primary hover:border-amber-400 hover:text-amber-400 transition-colors"
            >
              <Link href="/features">
                Explore Features <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 text-sm border border-border rounded-full px-4 py-2 text-muted-foreground bg-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — dashboard mockup */}
        <div className="hidden lg:flex justify-end relative" style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}>
          <img
            src={heroSvg.src}
            alt="ESG Horizon Dashboard — GHG emissions, scope breakdown, and reduction targets"
            className="relative max-w-none animate-float mt-16"
            style={{ width: "160%", maxWidth: "none" }}
          />
        </div>
      </div>
    </div>

    {/* Bottom gradient blending into dark Problem section */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1a1a1a] pointer-events-none" />
  </section>
);

export default HeroSection;
