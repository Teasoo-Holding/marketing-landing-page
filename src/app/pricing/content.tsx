import Link from "next/link";
import SectionLabel from "@/components/sections/SectionLabel";
import { ArrowRight } from "lucide-react";
import iconLock from "@/assets/Lock.svg";
import iconSurvey from "@/assets/Survey.svg";
import iconBullseye from "@/assets/Bullseye.svg";
import iconComboChart from "@/assets/Combo_Chart.svg";
import iconReportFile from "@/assets/Report_File.svg";
import iconChat from "@/assets/Chat.svg";
import leafNature from "@/assets/leaf-nature.svg";
import iconBuilding from "@/assets/Building2.svg";
import iconHandshake from "@/assets/Handshake.svg";
import iconRuler from "@/assets/Triangular_Ruler.svg";
import ellipseGrey from "@/assets/Ellipse_grey.svg";
import ellipseTeal from "@/assets/Ellipse_teal.svg";
import atmosphereWaves from "@/assets/atmosphere-waves.svg";
import moleculeNetwork from "@/assets/ghg-molecule-network.svg";

const essentials = [
  { iconSrc: iconLock, title: "Enterprise Security", desc: "AES-256 encryption at rest and in transit, with enterprise-grade cloud infrastructure and data residency options." },
  { iconSrc: iconSurvey, title: "Full Audit Trail", desc: "Every change logged and timestamped with user attribution — complete transparency for regulators and auditors." },
  { iconSrc: iconBullseye, title: "Onboarding Support", desc: "Dedicated onboarding specialist who guides your team from setup to first report — included at no extra cost." },
  { iconSrc: iconComboChart, title: "Executive Dashboard", desc: "Real-time ESG performance dashboard for leadership — showing progress, scores, and key metrics at a glance." },
  { iconSrc: iconReportFile, title: "Report Exports", desc: "Board-ready PDF reports and Excel data exports included — generate professional disclosure documents instantly." },
  { iconSrc: iconChat, title: "24/7 Expert Support", desc: "Dedicated support team available around the clock — ESG experts who understand African regulatory requirements." },
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-[#e8f6f2]/60" />
        <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionLabel>PRICING</SectionLabel>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 max-w-lg text-foreground">
              Pricing Built Around{" "}
              <span className="accent-italic">Your Organisation</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              We don&apos;t believe in one-size-fits-all plans. Your organisation is unique — your pricing should reflect that.
            </p>
          </div>
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 lg:relative lg:right-auto lg:top-auto lg:translate-y-0 flex justify-end">
            <img
              src={leafNature.src}
              alt=""
              className="w-[220px] md:w-[300px] lg:w-[400px] opacity-[0.10] lg:opacity-[0.15] animate-gentle-pulse select-none pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Conversation-based pricing */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>OUR APPROACH</SectionLabel>
              <h2 className="text-2xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                Pricing by <span className="accent-italic">Conversation, Not Catalogue</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                ESG reporting complexity varies enormously — a multinational energy company has very different needs from a mid-size manufacturer or a public-sector agency. That&apos;s why we price by conversation, not catalogue.
              </p>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                After a personalised demo, we&apos;ll map out exactly which modules and capabilities your team needs — and build a plan that reflects your actual usage, not a bundle of features you&apos;ll never touch.
              </p>
              <div className="space-y-4">
                {[
                  { iconSrc: iconBuilding, bg: "bg-blue-50", title: "You only pay for what you use", desc: "Modules are selected based on your structure, subsidiaries, and reporting framework requirements." },
                  { iconSrc: iconHandshake, bg: "bg-emerald-50", title: "Scales with your organisation", desc: "Whether you\u2019re reporting for one entity or a group of 20 subsidiaries, your plan adjusts accordingly." },
                  { iconSrc: iconRuler, bg: "bg-amber-50", title: "No surprise costs", desc: "Full transparency on what\u2019s included. Your dedicated account lead walks you through every line." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start rounded-xl border border-border p-5">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                      <img src={item.iconSrc.src} alt="" className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-primary rounded-2xl p-6 md:p-10 text-primary-foreground overflow-hidden mt-8 md:mt-12">
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 pointer-events-none" />
              {/* Ellipse decorations */}
              <img src={ellipseGrey.src} alt="" className="pointer-events-none absolute -top-12 -right-12 w-60 opacity-60 select-none" />
              <img src={ellipseTeal.src} alt="" className="pointer-events-none absolute -bottom-6 -left-6 w-56 opacity-50 select-none" />

              <div className="relative">
                <h3 className="font-bold text-2xl md:text-3xl mb-4">Get a Personalised Plan</h3>
                <p className="text-primary-foreground/80 mb-8 text-base leading-relaxed">
                  Tell us about your organisation in a 30-minute demo. We&apos;ll show you exactly what ESG Horizon can do — then tailor a proposal just for you.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    "Custom module selection",
                    "Pricing based on organisation size & structure",
                    "No obligation, no pressure",
                    "Dedicated onboarding support",
                    "Implementation & training included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base">
                      <span className="h-6 w-6 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold rounded-lg px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base hover:bg-white/90 transition-colors"
                  >
                    Get a Custom Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-semibold rounded-lg px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base hover:border-white hover:bg-white/10 transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel>WHAT&apos;S ALWAYS INCLUDED</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Every Plan Comes With <span className="accent-italic">These Essentials</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Regardless of the modules you select, these core capabilities are included in every ESG Horizon plan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {essentials.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-muted/50 p-5 md:p-7">
                <div className="mb-5">
                  <img src={e.iconSrc.src} alt={e.title} className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-xl mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy Steps */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#1a1a1a] text-white">
        {/* Atmosphere waves background */}
        <img
          src={atmosphereWaves.src}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-[250%] md:w-[180%] lg:w-full opacity-30 select-none animate-drift"
        />
        {/* Molecule network top-right */}
        <img
          src={moleculeNetwork.src}
          alt=""
          className="pointer-events-none absolute -top-10 -right-16 w-[200px] md:-top-16 md:-right-24 md:w-[300px] lg:-top-20 lg:-right-32 lg:w-[400px] opacity-[0.10] md:opacity-[0.10] lg:opacity-[0.08] select-none animate-slow-spin"
        />

        <div className="container relative">
          <div className="text-center mb-16">
            <SectionLabel>HOW WE WORK TOGETHER</SectionLabel>
            <h2 className="text-2xl md:text-5xl font-bold mt-3">
              From Demo to <span className="accent-italic">Deployed in 4 Steps</span>
            </h2>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Horizontal connector line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-white/20" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {deploySteps.map((step) => (
                <div key={step.num} className="text-center relative">
                  <div className="h-16 w-16 rounded-full bg-primary mx-auto flex items-center justify-center text-primary-foreground font-bold text-2xl mb-5 relative z-10">
                    {step.num}
                  </div>
                  <p className="font-semibold text-lg mb-1">{step.title}</p>
                  <p className="text-sm text-hero-dark-foreground/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel>THE NUMBERS</SectionLabel>
            <h2 className="text-2xl md:text-5xl font-bold mt-3">
              Results Our Clients <span className="accent-italic">Actually See</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border border-border rounded-2xl p-6 md:p-10">
                <p className="text-4xl md:text-6xl font-bold text-primary mb-3 font-heading italic">{stat.value}</p>
                <p className="font-bold text-lg mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
