import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";

// Only the home page points its canonical at "/". It is not set in the root layout, because
// every page without its own (such as the 404 page) would then claim to be the home page.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ProblemSection />
      <WhoWeAreSection />
      <TestimonialSection />
      <CTASection />
    </PageShell>
  );
}
