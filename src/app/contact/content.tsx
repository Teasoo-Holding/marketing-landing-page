"use client";

import SectionLabel from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Target, FileText, UserPlus, Globe, Scale } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const expectations = [
  { icon: Mail, title: "Response within 1 business day", desc: "An account lead will reach out to schedule your 30-minute demo at a time that works for you." },
  { icon: Target, title: "Personalised demo", desc: "Your demo is tailored to your industry, reporting framework, and company structure — not a generic product tour." },
  { icon: FileText, title: "Custom proposal", desc: "Within 24 hours of your demo, we\u2019ll send a proposal with modules and pricing built around your needs." },
  { icon: UserPlus, title: "Guided onboarding", desc: "If you proceed, a dedicated onboarding specialist gets your team live and reporting within 2 weeks." },
];

export default function ContactContent() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Demo requested!", description: "We\u2019ll be in touch within one business day." });
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden py-20 md:py-28">
        <img src={heroAbstract.src} alt="" className="absolute right-0 top-0 h-full opacity-30 object-cover" />
        <div className="container relative">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-lg">
            Ready to Transform Your{" "}
            <span className="accent-italic">ESG Journey?</span>
          </h1>
          <p className="text-hero-dark-foreground/70 mt-4 max-w-xl">
            Book a personalised walkthrough and discover exactly how ESG Horizon fits your organisation. No generic demos — a focused conversation about your specific challenges.
          </p>
        </div>
      </section>

      {/* Form + Expectations */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-4">What to Expect</h2>
              <p className="text-muted-foreground mb-8">
                We won&apos;t put you in a queue or give you a generic product tour. Here&apos;s exactly what happens when you submit this form:
              </p>
              <div className="space-y-6">
                {expectations.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-xl p-8">
              <h3 className="font-heading font-bold text-2xl mb-2">Book Your Demo</h3>
              <p className="text-sm text-muted-foreground mb-6">We&apos;ll be in touch within one business day.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name *</label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name *</label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Work Email *</label>
                  <Input type="email" placeholder="you@organisation.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Organization Name *</label>
                  <Input placeholder="Your Company" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Industry *</label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select Industry" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="public">Public Sector</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Organization Size</label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select Size" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-1000">201-1,000</SelectItem>
                        <SelectItem value="1000+">1,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">What&apos;s your biggest ESG reporting challenge? (optional)</label>
                  <Textarea placeholder="e.g. We have 12 subsidiaries and no central data collection..." rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Request My Personalised Demo \u2192"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your data is safe with us. We never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Africa */}
      <section className="hero-dark py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>OUR PRESENCE</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Built for Africa,<br />
                <span className="accent-italic">Connected to the World</span>
              </h2>
              <p className="text-hero-dark-foreground/70 mb-4">
                An African-centred ESG platform with global connectivity, developed by ESG and data experts in partnership with governments, regulators, and academia across the continent.
              </p>
              <p className="text-hero-dark-foreground/70 mb-4">
                Our mission is to drive sustainable development across Africa by providing organisations, investors, and regulators with the insights and tools needed to foster responsible and transparent ESG practices.
              </p>
              <p className="text-hero-dark-foreground/70">
                We bridge the gap between local and global ESG standards — empowering Africa&apos;s place in the global sustainability conversation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "IFRS", title: "S1 & S2 aligned from day one" },
                { icon: "GHG", title: "Protocol-certified emission factors" },
                { icon: Scale, title: "Built with regulatory input" },
                { icon: Globe, title: "Designed for African realities" },
              ].map((item, i) => (
                <div key={i} className="bg-primary/20 rounded-xl p-6 text-center">
                  {typeof item.icon === "string" ? (
                    <p className="text-2xl font-bold text-primary mb-2">{item.icon}</p>
                  ) : (
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  )}
                  <p className="text-xs text-hero-dark-foreground/70">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
