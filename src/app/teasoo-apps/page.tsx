import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import TeasooAppsContent from "./content";

export const metadata: Metadata = {
  title: "Teasoo Apps",
  description:
    "Digital products built by Teasoo Consulting: ESG Horizon for ESG reporting, Teasoo SET for stakeholder engagement and Teasoo TMS for tree management.",
  alternates: { canonical: "/teasoo-apps/" },
};

export default function TeasooAppsPage() {
  return (
    <PageShell>
      <TeasooAppsContent />
    </PageShell>
  );
}
