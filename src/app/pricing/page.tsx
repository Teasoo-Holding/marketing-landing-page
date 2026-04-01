import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PricingContent from "./content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Custom ESG Horizon pricing built around your organisation. Book a personalised demo and get a tailored proposal within 24 hours.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <PageShell>
      <PricingContent />
    </PageShell>
  );
}
