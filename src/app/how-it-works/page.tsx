import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import HowItWorksContent from "./content";

export const metadata = pageMeta({
  title: "How ESG Reporting Software Works | ESG Horizon",
  description:
    "Discover how ESG Horizon helps organisations collect ESG data, calculate emissions, manage sustainability disclosures and generate reports.",
  path: "/how-it-works/",
});

export default function HowItWorksPage() {
  return (
    <PageShell>
      <HowItWorksContent />
    </PageShell>
  );
}
