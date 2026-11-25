import PageShell from "@/components/layout/PageShell";
import Faq from "@/components/seo/Faq";
import { pageMeta } from "@/lib/seo";
import FeaturesContent from "./content";

export const metadata = pageMeta({
  title: "ESG Software Features | ESG Data, IFRS & GHG Reporting",
  description:
    "Explore ESG Horizon's features for IFRS S1 and S2 reporting, GHG emissions calculations, ESG data management, reporting automation and audit trails.",
  path: "/features/",
});

const faqs = [
  {
    q: "What features should ESG reporting software have?",
    a: "Look for support for the frameworks you report against (IFRS S1 and S2, GRI, TCFD, SASB), built-in GHG accounting for Scope 1, 2 and 3, role-based data collection across departments, validation and evidence on every data point, version history and an audit trail, multi-entity consolidation, dashboards, flexible exports and strong security. ESG Horizon includes all of these in one platform.",
  },
  {
    q: "How does ESG Horizon support IFRS S1 and S2 compliance?",
    a: "The IFRS compliance engine runs a gap assessment against IFRS S1 and S2, flags missing disclosures, tracks progress as your team closes each gap, and generates framework-mapped, disclosure-ready outputs. Climate disclosures, emissions and scenario analysis support sit in the same platform.",
  },
  {
    q: "Can ESG Horizon calculate Scope 1, 2 and 3 emissions?",
    a: "Yes. Enter activity data such as fuel, electricity and travel, and ESG Horizon calculates Scope 1, 2 and 3 emissions using GHG Protocol methods and current IPCC and GHG Protocol emission factors. It supports location-based and market-based Scope 2 and provides templates for all 15 Scope 3 categories.",
  },
  {
    q: "Can multiple departments collaborate on ESG reporting?",
    a: "Yes. You invite people from operations, HR, finance and other teams, and each receives guided data collection tasks for their role only. Progress is tracked in real time across all entities, and automated reminders go to data owners.",
  },
  {
    q: "Does ESG Horizon support audit-ready ESG reports?",
    a: "Yes. Every data entry has a version history, supporting evidence and an immutable, timestamped audit log, so each figure in your report can be traced to its source and owner. Reports export as board-ready PDFs, Excel data and regulator submission packages.",
  },
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <FeaturesContent faq={<Faq items={faqs} muted />} />
    </PageShell>
  );
}
