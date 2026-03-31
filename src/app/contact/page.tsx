import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/layout/PageShell";
import ContactContent from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a personalised ESG Horizon demo. Get a tailored walkthrough, custom proposal within 24 hours, and guided onboarding — no generic product tours.",
  alternates: { canonical: "/contact" },
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
