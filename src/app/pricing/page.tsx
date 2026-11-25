import PageShell from "@/components/layout/PageShell";
import Faq from "@/components/seo/Faq";
import { pageMeta } from "@/lib/seo";
import PricingContent from "./content";

export const metadata = pageMeta({
  title: "ESG Reporting Software Pricing | ESG Horizon",
  description:
    "Explore ESG Horizon's ESG reporting software and find a plan suited to your organisation's reporting requirements, data needs and business operations.",
  path: "/pricing/",
});

const faqs = [
  {
    q: "How much does ESG reporting software cost?",
    a: "It depends on the size and complexity of your organisation: the number of entities and users, the frameworks you report against and the modules you need. Rather than fixed tiers, ESG Horizon prepares a personalised proposal after a short demo, so you only pay for what your reporting requires.",
  },
  {
    q: "How is ESG Horizon pricing determined?",
    a: "Pricing is based on your organisation's size and structure, including subsidiaries and sites, the reporting frameworks you need such as IFRS S1 and S2 or GRI, and the modules you select. Proposals are quoted in USD, with local currency invoicing available on request.",
  },
  {
    q: "Can I customise the modules included in my plan?",
    a: "Yes. Your plan is built from the modules you need, for example IFRS compliance, GHG accounting, data collection and dashboards, and it can grow as your reporting requirements expand.",
  },
  {
    q: "Does ESG Horizon support multiple subsidiaries?",
    a: "Yes. ESG Horizon is built for group structures. You can add subsidiaries, assign data owners at each entity and see consolidated group reporting alongside subsidiary breakdowns from a single account.",
  },
  {
    q: "Is onboarding and training included in the pricing?",
    a: "Yes. Every plan includes a dedicated onboarding specialist, setup support, team training and help migrating your historical data, at no extra cost.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PricingContent faq={<Faq items={faqs} muted />} />
    </PageShell>
  );
}
