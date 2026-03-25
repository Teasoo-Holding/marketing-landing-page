import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/sections/SectionLabel";
import { CheckCircle, Shield, History, UserPlus, BarChart3, FileDown, Headphones, ArrowRight } from "lucide-react";
import leafAccent from "@/assets/leaf-accent.png";

const essentials = [
  { icon: Shield, title: "Enterprise Security", desc: "AES-256 encryption at rest and in transit, with enterprise-grade cloud infrastructure and data residency options." },
  { icon: History, title: "Full Audit Trail", desc: "Every change logged and timestamped with user attribution — complete transparency for regulators and auditors." },
  { icon: UserPlus, title: "Onboarding Support", desc: "Dedicated onboarding specialist who guides your team from setup to first report — included at no extra cost." },
  { icon: BarChart3, title: "Executive Dashboard", desc: "Real-time ESG performance dashboard for leadership — showing progress, scores, and key metrics at a glance." },
  { icon: FileDown, title: "Report Exports", desc: "Board-ready PDF exports and Excel data exports included — generate professional disclosure documents instantly." },
  { icon: Headphones, title: "24/7 Expert Support", desc: "Dedicated support team available around the clock — ESG experts who understand African regulatory requirements." },
];

const deploySteps = [
  { num: 1, title: "Discovery Demo", desc: "30-min personalised walkthrough of the platform" },
  { num: 2, title: "Custom Proposal", desc: "Tailored plan and pricing within 24 hours" },
  { num: 3, title: "Onboarding", desc: "Setup, training, and data migration support" },
  { num: 4, title: "Live & Reporting", desc: "First report generated — typically in under 2 weeks" },
];

const stats = [
  { value: "90%", label: "Time Saved", desc: "Average reduction in manual reporting effort across our client base" },
  { value: "24/7", label: "Expert Support", desc: "Dedicated ESG support team available around the clock for every client" },
  { value: "100%", label: "Audit Ready", desc: "Every disclosure backed by a complete data trail and governance structure" },
];

export default function PricingContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden py-20 md:py-28">
        <img src={leafAccent.src} alt="" className="absolute right-10 top-10 h-40 opacity-20 rotate-12" />
        <div className="container relative">
          <SectionLabel>PRICING</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-lg">
            Pricing Built Around{" "}
            <span className="accent-italic">Your Organisation</span>
          </h1>
          <p className="text-hero-dark-foreground/70 mt-4 max-w-xl">
            We don&apos;t believe in one-size-fits-all plans. Your organisation is unique — your pricing should reflect that.
          </p>
        </div>
      </section>

      {/* Conversation-based pricing */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>OUR APPROACH</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Pricing by <span className="accent-italic">Conversation, Not Catalogue</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                ESG reporting complexity varies enormously — a multinational energy company has very different needs from a mid-size manufacturer or a public-sector agency. That&apos;s why we price by conversation, not catalogue.
              </p>
              <p className="text-muted-foreground mb-8">
                After a personalised demo, we&apos;ll map out exactly which modules and capabilities your team needs — and build a plan that reflects your actual usage, not a bundle of features you&apos;ll never touch.
              </p>
              <div className="space-y-4">
                {[
                  { title: "You only pay for what you use", desc: "Modules are selected based on your structure, subsidiaries, and reporting framework requirements." },
                  { title: "Scales with your organisation", desc: "Whether you\u2019re reporting for one entity or a group of 20 subsidiaries, your plan adjusts accordingly." },
                  { title: "No surprise costs", desc: "Full transparency on what\u2019s included. Your dedicated account lead walks you through every line." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="font-heading font-bold text-2xl mb-4">Get a Personalised Plan</h3>
              <p className="text-primary-foreground/80 mb-6 text-sm">
                Tell us about your organisation in a 30-minute demo. We&apos;ll show you exactly what ESG Horizon can do — then tailor a proposal just for you.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Custom module selection",
                  "Pricing based on organisation size & structure",
                  "No obligation, no pressure",
                  "Dedicated onboarding support",
                  "Implementation & training included",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Get a Custom Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:border-amber-400 hover:text-amber-400 transition-colors">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel>WHAT&apos;S ALWAYS INCLUDED</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Every Plan Comes With <span className="accent-italic">These Essentials</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Regardless of the modules you select, these core capabilities are included in every ESG Horizon plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentials.map((e) => (
              <div key={e.title} className="text-center md:text-left">
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                  <e.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy Steps */}
      <section className="hero-dark py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel>HOW WE WORK TOGETHER</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              From Demo to <span className="accent-italic">Deployed in 4 Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {deploySteps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary mx-auto flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                  {step.num}
                </div>
                <p className="font-semibold mb-1">{step.title}</p>
                <p className="text-xs text-hero-dark-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel>THE NUMBERS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Results Our Clients <span className="accent-italic">Actually See</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border border-border rounded-xl p-8">
                <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
