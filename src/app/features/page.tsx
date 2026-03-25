import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionLabel from "@/components/sections/SectionLabel";
import FeaturesContent from "./content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore ESG Horizon's powerful features — IFRS S1 & S2 compliance engine, automated GHG calculations, visual dashboards, and audit-ready report generation.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <FeaturesContent />
    </PageShell>
  );
}
