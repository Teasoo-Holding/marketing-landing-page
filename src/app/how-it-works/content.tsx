"use client";

import SectionLabel from "@/components/sections/SectionLabel";
import leafAccent from "@/assets/leaf-accent.png";
import { Building2, FileCheck, Settings, Clock, UserPlus, FileText, CheckSquare, FolderOpen, BarChart3, FileDown, History, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  {
    num: 1, label: "STEP ONE", title: "Set Up Your Company",
    desc: "Add your subsidiaries, select the reporting frameworks that apply to you, and configure your organisational structure. Our onboarding wizard walks you through every decision — no prior ESG knowledge required.",
    items: [
      { icon: Building2, title: "Company structure", desc: "Add subsidiaries, departments and locations" },
      { icon: FileCheck, title: "Framework selection", desc: "IFRS S1/S2, GRI, TCFD, SASB and more" },
      { icon: Settings, title: "Materiality settings", desc: "Define what ESG topics matter most for you" },
      { icon: Clock, title: "Under 30 minutes", desc: "Full company set up completed quickly" },
    ],
  },
  {
    num: 2, label: "STEP TWO", title: "Invite & Collect Data",
    desc: "Assign roles to your team across departments. Each member receives guided, form-based data collection tasks tailored to their function — operations, HR, finance, and facilities each see only what\u2019s relevant to them.",
    items: [
      { icon: UserPlus, title: "Role-based invites", desc: "HR, Ops, Finance see only their tasks" },
      { icon: FileText, title: "Guided forms", desc: "Step-by-step with embedded guidance" },
      { icon: CheckSquare, title: "Task Assignment", desc: "Assign task or assessment to team members" },
      { icon: FolderOpen, title: "Document uploads", desc: "Supporting evidence attached to each entry" },
    ],
  },
  {
    num: 3, label: "STEP THREE", title: "Report & Analyze",
    desc: "Monitor real-time dashboards showing your progress across all ESG dimensions. When you\u2019re ready, generate a complete, audit-ready disclosure report — formatted for regulators, investors, and board presentation — in one click.",
    items: [
      { icon: BarChart3, title: "Live dashboards", desc: "Real-time ESG performance monitoring" },
      { icon: FileDown, title: "One-click reports", desc: "Board PDF, regulator pack, investor brief" },
      { icon: History, title: "Audit trail review", desc: "Every data point traced to its source" },
      { icon: TrendingUp, title: "Year-on-year trends", desc: "Track your ESG progress over time" },
    ],
  },
];

const faqs = [
  { q: "How long does it take to get fully set up?", a: "Most organisations complete setup in under 30 minutes. Our onboarding wizard guides you through company structure, framework selection, and materiality settings step by step." },
  { q: "Do my team members need ESG expertise to use the platform?", a: "No. ESG Horizon includes embedded guidance in every form, contextual help, and automated validation. Your team members just need to input data they already manage." },
  { q: "What reporting frameworks does ESG Horizon support?", a: "We support IFRS S1 & S2, GRI, TCFD, SASB, and more. The platform is designed to handle multi-framework reporting natively." },
  { q: "Can we manage multiple subsidiaries from one account?", a: "Yes. ESG Horizon supports multi-entity structures with consolidated and subsidiary-level reporting." },
  { q: "What happens to our historical data if we migrate from spreadsheets?", a: "We help you import historical data during onboarding. Your dedicated specialist ensures a smooth migration with data integrity checks." },
];

export default function HowItWorksContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden py-20 md:py-28">
        <img src={leafAccent.src} alt="" className="absolute right-10 top-0 h-48 opacity-20 rotate-45" />
        <div className="container relative">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-lg">
            From <span className="accent-italic">Setup to Insights</span> in Minutes, Not Months
          </h1>
          <p className="text-hero-dark-foreground/70 mt-4 max-w-xl">
            ESG Horizon is designed so your team can be collecting real ESG data within hours of signing up — no consultants, no training marathons.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel>THE PROCESS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Get Started in <span className="accent-italic">3 Simple Steps</span>
            </h2>
          </div>

          <div className="space-y-20">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {step.num}
                  </div>
                  {step.num < 3 && <div className="w-px flex-1 bg-border mt-4" />}
                </div>
                <div className="flex-1 pb-4">
                  <SectionLabel>{step.label}</SectionLabel>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mt-1 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.items.map((item) => (
                      <div key={item.title} className="border border-border rounded-lg p-4 flex gap-3 items-start">
                        <div className="p-1.5 bg-primary/10 rounded-md">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <SectionLabel>COMMON QUESTIONS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Frequently Asked <span className="accent-italic">Questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-background">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
