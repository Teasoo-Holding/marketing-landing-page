import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import ContactContent from "./content";

export const metadata = pageMeta({
  title: "Contact ESG Horizon | Book an ESG Software Demo",
  description:
    "Contact ESG Horizon to explore ESG reporting software, discuss your organisation's IFRS S1 and S2 requirements or book a personalised product demonstration.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <PageShell>
      <ContactContent />
    </PageShell>
  );
}
