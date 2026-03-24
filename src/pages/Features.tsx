import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, FileCheck, Calculator, Users, Database, ClipboardList, BarChart3, FileDown, Shield } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import leafAccent from "@/assets/leaf-accent.png";

const features = [
  {
    icon: FileCheck, title: "IFRS Compliance Engine", badge: "MOST VALUED",
    desc: "Always-updated modules designed for IFRS S1 & S2. Conduct gap assessments, track progress, and generate globally aligned reports in days — not months.",
    bullets: ["Gap assessment against IFRS S1 & S2 frameworks", "Auto-updates when standards change", "Generates disclosure-ready outputs instantly"],
  },
  {
    icon: Calculator, title: "Automated GHG Calculations", badge: "MOST VALUED",
    desc: "Input activity data — fuel consumption, energy use, travel — and let ESG Horizon handle Scope 1, 2 & 3 conversions using latest GHG Protocol emission factors.",
    bullets: ["Scope 1, 2 & 3 emissions calculated automatically", "Latest IPCC & GHG Protocol factors built in", "Activity data import from multiple sources"],
  },
  {
    icon: Users, title: "Collaborate Seamlessly",
    desc: "Invite team members from operations, HR, and finance to input data directly. Track progress in real-time across all entities.",
    bullets: ["Role-based access for each department", "Real-time data collection progress tracking", "Automated reminders for data owners"],
  },
  {
    icon: Database, title: "Your System of Record",
    desc: "Enjoy a secure, version-controlled hub with full data history and granular access controls — your single source of truth for all ESG data.",
    bullets: ["Full version history on all data entries", "Granular read/write permissions per user", "Immutable audit log for every change"],
  },
  {
    icon: ClipboardList, title: "Guided, Compliant Reporting",
    desc: "Step-by-step guided forms ensure you capture the right level of detail for audit-ready, comprehensive disclosures — no ESG expertise required.",
    bullets: ["Contextual help embedded throughout", "Mandatory field validation and quality checks", "Framework-mapped to IFRS"],
  },
  {
    icon: BarChart3, title: "Visual Dashboards & Insights",
    desc: "See your ESG impact at a glance with intuitive dashboards, scope breakdowns, metric analysis, and peer benchmarking across your industry.",
    bullets: ["Executive-ready ESG performance dashboards", "Emission scope breakdown & trend charts", "Peer benchmarking against industry averages"],
  },
  {
    icon: FileDown, title: "Instant, Flexible Exports",
    desc: "Export polished, board-ready PDF reports with one click. Download raw Excel data for consultants or generate regulator submission packages.",
    bullets: ["Board-ready PDF reports with your branding", "Excel export for consultants & advisors", "Regulator-formatted submission packages"],
  },
  {
    icon: Shield, title: "Enterprise Security & Governance",
    desc: "Enterprise-grade hosting with encryption at rest and in transit, full audit on logs on every change for complete accountability.",
    bullets: ["AES-256 encryption at rest & in transit", "SOC 2-ready infrastructure", "Full timestamped audit trail on all activity"],
  },
];

const Features = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="hero-dark relative overflow-hidden py-20 md:py-28">
      <img src={leafAccent} alt="" className="absolute right-0 top-0 h-48 opacity-20 rotate-45" />
      <div className="container relative">
        <SectionLabel>PLATFORM FEATURES</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-lg">
          Everything You Need to{" "}
          <span className="accent-italic">Lead on ESG</span>
        </h1>
        <p className="text-hero-dark-foreground/70 mt-4 max-w-xl">
          Powerful features designed for modern sustainability reporting across Africa — from data collection to board-ready disclosure.
        </p>
      </div>
    </section>

    {/* Core Features */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <SectionLabel>CORE CAPABILITIES</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Built for <span className="accent-italic">Measurable ESG Performance</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Every feature is designed to reduce effort, increase accuracy, and ensure your disclosures stand up to scrutiny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title} className="border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              {f.badge && (
                <span className="text-[10px] font-bold tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-full mb-3 inline-block">
                  {f.badge}
                </span>
              )}
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
              <ul className="space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Compliance Engine */}
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>IFRS COMPLIANCE ENGINE</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              From Gap Assessment to{" "}
              <span className="accent-italic">Global Report</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              ESG Horizon's compliance engine continuously checks your disclosures against S1 and S2 requirements, flags gaps in real time, and guides your team to close them before submission.
            </p>
            <ul className="space-y-3">
              {[
                "IFRS S1 (General Sustainability Disclosures) fully mapped",
                "IFRS S2 (Climate-related disclosures) with scenario analysis support",
                "Standards auto-update when ISSB releases new guidance",
                "Cross-referenced with GRI, CDP, SASB for multi-framework reporting",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={dashboardMockup} alt="Compliance Dashboard" className="rounded-xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-dark py-20 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Building a Confident<br />ESG Reporting Process
        </h2>
        <p className="text-hero-dark-foreground/70 mb-8 max-w-lg mx-auto">
          See how ESG Horizon fits your organisation in a personalised 30-minute walkthrough.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Request Your Personalised Demo</Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Features;
