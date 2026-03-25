import PageShell from "@/components/layout/PageShell";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";

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
