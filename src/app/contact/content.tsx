"use client";

import SectionLabel from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import targetRings from "@/assets/target-rings.svg";
import iconIFRS from "@/assets/IFRS.svg";
import iconGHG from "@/assets/GHG.svg";
import iconBuilding from "@/assets/Building.svg";
import iconGlobe from "@/assets/Globe.svg";
import iconCalendar from "@/assets/Calendar.svg";
import iconBullseye from "@/assets/Bullseye.svg";
import iconBusiness from "@/assets/Business.svg";
import iconUserManual from "@/assets/User_Manual.svg";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const expectations = [
	{
		iconSrc: iconCalendar,
		title: "Response within 1 business day",
		desc: "An account lead will reach out to schedule your 30-minute demo at a time that works for you.",
	},
	{
		iconSrc: iconBullseye,
		title: "Personalised demo",
		desc: "Your demo is tailored to your industry, reporting framework, and company structure — not a generic product tour.",
	},
	{
		iconSrc: iconBusiness,
		title: "Custom proposal",
		desc: "Within 24 hours of your demo, we\u2019ll send a proposal with modules and pricing built around your needs.",
	},
	{
		iconSrc: iconUserManual,
		title: "Guided onboarding",
		desc: "If you proceed, a dedicated onboarding specialist gets your team live and reporting within 2 weeks.",
	},
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ContactContent() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sectors, setSectors] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/industries/sectors`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setSectors(data))
      .catch(() => setSectors([]));
  }, []);

  const [industry, setIndustry] = useState("");
  const [orgSize, setOrgSize] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${API_BASE}/contact/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          industry,
          orgSize: orgSize || undefined,
          challenge: formData.get("challenge") || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast({ title: "Something went wrong", description: data.message || "Please try again later.", variant: "destructive" });
        return;
      }

      toast({ title: "Demo requested!", description: "We\u2019ll be in touch within one business day." });
      form.reset();
      setIndustry("");
      setOrgSize("");
    } catch {
      toast({ title: "Network error", description: "Please check your connection and try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a1a] text-white py-20 md:py-28">
        <img
          src={targetRings.src}
          alt=""
          className="pointer-events-none absolute right-[5%] -top-[3%] w-[500px] opacity-20 select-none animate-slow-spin"
        />
        <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-lg leading-tight">
              Ready to Transform Your{" "}
              <span className="accent-italic">ESG Journey?</span>
            </h1>
            <p className="text-white/70 mt-4 max-w-xl text-lg leading-relaxed">
              Book a personalised walkthrough and discover exactly how ESG Horizon fits your organisation. No generic demos — a focused conversation about your specific challenges.
            </p>
          </div>
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
              <div className="space-y-8">
                {expectations.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center">
                      <img src={item.iconSrc.src} alt="" className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
                    <Input name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name *</label>
                    <Input name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Work Email *</label>
                  <Input name="email" type="email" placeholder="you@organisation.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Organization Name *</label>
                  <Input name="organization" placeholder="Your Company" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Industry *</label>
                    <Select value={industry} onValueChange={setIndustry} required>
                      <SelectTrigger><SelectValue placeholder="Select Industry" /></SelectTrigger>
                      <SelectContent>
                        {sectors.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Organization Size</label>
                    <Select value={orgSize} onValueChange={setOrgSize}>
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
                  <Textarea name="challenge" placeholder="e.g. We have 12 subsidiaries and no central data collection..." rows={4} />
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
      <section className="relative overflow-hidden bg-primary text-white py-20 md:py-24">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">OUR PRESENCE</span>
              <h2 className="font-body text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
                Built for Africa,<br />
                <span className="font-heading italic text-white/90">Connected to the World</span>
              </h2>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                An African-centred ESG platform with global connectivity, developed by ESG and data experts in partnership with governments, regulators, and academia across the continent.
              </p>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                Our mission is to drive sustainable development across Africa by providing organisations, investors, and regulators with the insights and tools needed to foster responsible and transparent ESG practices.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                We bridge the gap between local and global ESG standards — empowering Africa&apos;s place in the global sustainability conversation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { iconSrc: iconIFRS, title: "S1 & S2 aligned from day one" },
                { iconSrc: iconGHG, title: "Protocol-certified emission factors" },
                { iconSrc: iconBuilding, title: "Built with regulatory input" },
                { iconSrc: iconGlobe, title: "Designed for African realities" },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.08] border border-white/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
                  <img src={item.iconSrc.src} alt="" className="h-14 w-14" />
                  <p className="text-sm text-white/70">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
