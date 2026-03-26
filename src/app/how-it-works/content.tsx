"use client";

import SectionLabel from "@/components/sections/SectionLabel";
import Image from "next/image";
import windAirCurrent from "@/assets/wind-air-current.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Step 1 icons
import iconCompany from "@/assets/Company.svg";
import iconClipboard from "@/assets/Clipboard.svg";
import iconBullseye from "@/assets/Bullseye.svg";
import iconAlarmClock from "@/assets/Alarm_Clock.svg";
// Step 2 icons
import iconUser from "@/assets/Customer.svg";
import iconTask from "@/assets/Task.svg";
import iconTaskCompleted from "@/assets/Task_Completed.svg";
import iconFolder from "@/assets/Folder.svg";
// Step 3 icons
import iconComboChart from "@/assets/Combo_Chart.svg";
import iconReport from "@/assets/Report.svg";
import iconWindowSearch from "@/assets/Window_Search.svg";
import iconIncrease from "@/assets/Increase.svg";

const steps = [
	{
		num: 1,
		label: "STEP ONE",
		title: "Set Up Your Company",
		desc: "Add your subsidiaries, select the reporting frameworks that apply to you, and configure your organisational structure. Our onboarding wizard walks you through every decision \u2014 no prior ESG knowledge required.",
		items: [
			{
				icon: iconCompany,
				title: "Company structure",
				desc: "Add subsidiaries, departments and locations",
			},
			{
				icon: iconClipboard,
				title: "Framework selection",
				desc: "IFRS S1/S2, GRI, TCFD, SASB and more",
			},
			{
				icon: iconBullseye,
				title: "Materiality settings",
				desc: "Define what ESG topics matter most for you",
			},
			{
				icon: iconAlarmClock,
				title: "Under 30 minutes",
				desc: "Full company setup completed quickly",
			},
		],
	},
	{
		num: 2,
		label: "STEP TWO",
		title: "Invite & Collect Data",
		desc: "Assign roles to your team across departments. Each member receives guided, form-based data collection tasks tailored to their function \u2014 operations, HR, finance, and facilities each see only what\u2019s relevant to them.",
		items: [
			{
				icon: iconUser,
				title: "Role-based invites",
				desc: "HR, Ops, Finance see only their tasks",
			},
			{
				icon: iconTask,
				title: "Guided forms",
				desc: "Step-by-step with embedded guidance",
			},
			{
				icon: iconTaskCompleted,
				title: "Task Assignment",
				desc: "Assign task or assessment to team members",
			},
			{
				icon: iconFolder,
				title: "Document uploads",
				desc: "Supporting evidence attached to each entry",
			},
		],
	},
	{
		num: 3,
		label: "STEP THREE",
		title: "Report & Analyze",
		desc: "Monitor real-time dashboards showing your progress across all ESG dimensions. When you\u2019re ready, generate a complete, audit-ready disclosure report \u2014 formatted for regulators, investors, and board presentation \u2014 in one click.",
		items: [
			{
				icon: iconComboChart,
				title: "Live dashboards",
				desc: "Real-time ESG performance monitoring",
			},
			{
				icon: iconReport,
				title: "One-click reports",
				desc: "Board PDF, regulator pack, investor brief",
			},
			{
				icon: iconWindowSearch,
				title: "Audit trail review",
				desc: "Every data point traced to its source",
			},
			{
				icon: iconIncrease,
				title: "Year-on-year trends",
				desc: "Track your ESG progress over time",
			},
		],
	},
];

const faqs = [
  { q: "How long does it take to get fully set up?", a: "Most organisations complete company setup within 30 minutes. Full data collection \u2014 depending on the number of subsidiaries \u2014 typically takes 1\u20132 weeks. Your first complete ESG report can be generated in under 2 weeks from the day you sign up." },
  { q: "Do my team members need ESG expertise to use the platform?", a: "No. ESG Horizon is built for non-experts. The guided forms, embedded help text, and step-by-step workflows mean your operations, HR, and finance teams can contribute data confidently \u2014 even with no prior ESG knowledge. Your sustainability team manages oversight; everyone else just answers guided questions." },
  { q: "What reporting frameworks does ESG Horizon support?", a: "ESG Horizon natively supports IFRS S1 & S2, GHG Protocol (Scopes 1, 2 & 3), GRI Standards, TCFD, and SASB. Multi-framework reporting is supported \u2014 data entered once maps automatically across all selected frameworks." },
  { q: "Can we manage multiple subsidiaries from one account?", a: "Yes. ESG Horizon is built for group structures. You can configure unlimited subsidiaries, assign data owners at each entity level, and view consolidated group-level reporting alongside subsidiary breakdowns \u2014 all from a single dashboard." },
  { q: "What happens to our historical data if we migrate from spreadsheets?", a: "Our onboarding team assists with historical data migration. You can import past-year ESG data to establish baselines and enable year-on-year trend analysis immediately. All imported data is version-controlled and audit-logged from day one." },
];

export default function HowItWorksContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a1a] text-white py-20 md:py-28">
        <img
          src={windAirCurrent.src}
          alt=""
          className="pointer-events-none absolute right-0 top-0 h-full w-auto opacity-[0.12] select-none animate-slow-spin"
        />
        <div className="container relative">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-lg">
            From <span className="accent-italic">Setup to Insights</span> in Minutes, Not Months
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            ESG Horizon is designed so your team can be collecting real ESG data within hours of signing up — no consultants, no training marathons.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel>THE PROCESS</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2 font-body tracking-tight">
              Get Started in <span className="accent-italic">3 Simple Steps</span>
            </h2>
          </div>

          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-8">
                {/* Step number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                      {step.num}
                    </div>
                  </div>
                  {step.num < 3 && <div className="w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent mt-2" />}
                </div>

                {/* Step content card */}
                <div className="flex-1 bg-white border border-border rounded-2xl p-6 md:p-8">
                  <SectionLabel>{step.label}</SectionLabel>
                  <h3 className="font-body font-bold text-2xl md:text-3xl mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.items.map((item) => (
                      <div key={item.title} className="bg-muted/40 border border-border/60 rounded-xl p-5 flex gap-4 items-center">
                        <Image src={item.icon} alt="" width={24} height={24} className="shrink-0 w-auto h-auto" />
                        <div>
                          <p className="font-semibold text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
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
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <SectionLabel>COMMON QUESTIONS</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 font-body tracking-tight">
              Frequently Asked <span className="accent-italic">Questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-2xl px-8 py-1 bg-background shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
