import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/layout/PageShell";
import ContactContent from "./content";

export const metadata: Metadata = {
  title: "Book a Demo — IFRS S1 & S2 Gap Assessment",
  description:
    "Book a personalised ESG Horizon demo and receive an IFRS S1 & S2 Gap Assessment to identify reporting gaps, understand your readiness and prioritise your next steps.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Suspense>
        <ContactContent />
      </Suspense>
    </PageShell>
  );
}
