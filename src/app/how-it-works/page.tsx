import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import HowItWorksContent from "./content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Set up your company, invite your team, and generate audit-ready ESG reports in 3 simple steps. No prior ESG knowledge required.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <HowItWorksContent />
    </PageShell>
  );
}
