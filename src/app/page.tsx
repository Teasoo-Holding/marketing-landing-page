import PageShell from "@/components/layout/PageShell";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import Faq from "@/components/seo/Faq";
import { pageMeta } from "@/lib/seo";

// Only the home page points its canonical at "/". It is not set in the root layout, because
// every page without its own (such as the 404 page) would then claim to be the home page.
export const metadata = pageMeta({
  title: "IFRS-Ready ESG Reporting Platform for Nigeria & Africa | ESG Horizon",
  description:
    "ESG Horizon helps organisations in Nigeria and across Africa simplify ESG reporting, manage sustainability data, automate IFRS S1 and S2 disclosures, and track greenhouse gas emissions in one platform.",
  path: "/",
});

const faqs = [
  {
    q: "What is ESG reporting?",
    a: "ESG reporting is how an organisation discloses its environmental, social and governance performance: for example its greenhouse gas emissions, workforce and safety record, and how its board oversees sustainability risks. Regulators, investors, lenders and customers use these disclosures to understand how well a business manages ESG sustainability risks and opportunities.",
  },
  {
    q: "What are IFRS S1 and IFRS S2?",
    a: "They are the global sustainability disclosure standards issued by the International Sustainability Standards Board (ISSB) in June 2023. IFRS S1 sets the general requirements for disclosing sustainability-related risks and opportunities, and IFRS S2 sets the specific requirements for climate-related disclosures, including Scope 1, 2 and 3 greenhouse gas emissions.",
  },
  {
    q: "How does ESG reporting work in Nigeria?",
    a: "Nigeria has adopted IFRS S1 and S2. Under the Financial Reporting Council of Nigeria's amended roadmap, reporting is voluntary until the end of 2027 and becomes mandatory for public interest entities for accounting periods beginning on or after 1 January 2028, and for SMEs from 1 January 2030. Entities must pass the FRC's readiness test before their first report, and the SEC has asked public companies for implementation plans.",
  },
  {
    q: "How can organisations measure their greenhouse gas emissions?",
    a: "Most organisations follow the GHG Protocol. They collect activity data such as fuel use, electricity consumption, travel and purchases, multiply it by the appropriate emission factors, and group the results into Scope 1 (direct), Scope 2 (purchased energy) and Scope 3 (value chain) emissions. ESG Horizon automates these calculations using current IPCC and GHG Protocol factors.",
  },
  {
    q: "How does ESG Horizon help organisations prepare ESG reports?",
    a: "ESG Horizon is ESG software built for Africa. It assesses your IFRS S1 and S2 readiness, assigns guided data collection tasks across departments and subsidiaries, calculates emissions, keeps a full audit trail and generates board-ready and regulator-ready reports, so your team can report with confidence in weeks rather than months.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ProblemSection />
      <CapabilitiesSection />
      <WhoWeAreSection />
      <TestimonialSection />
      <Faq items={faqs} muted />
      <CTASection />
    </PageShell>
  );
}
