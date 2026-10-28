"use client";

import iconBuilding from "@/assets/Building.svg";
import iconBullseye from "@/assets/Bullseye.svg";
import iconBusiness from "@/assets/Business.svg";
import iconCalendar from "@/assets/Calendar.svg";
import iconGHG from "@/assets/GHG.svg";
import iconGlobe from "@/assets/Globe.svg";
import iconIFRS from "@/assets/IFRS.svg";
import targetRings from "@/assets/target-rings.svg";
import iconUserManual from "@/assets/User_Manual.svg";
import SectionLabel from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const REQUEST_TYPES = ["demo", "quote", "support"];

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

const keyBenefits = [
	"Assess your sustainability reporting readiness.",
	"Identify potential data and disclosure gaps.",
	"Understand priority areas for improvement.",
	"Explore how ESG Horizon can support your reporting process.",
];

const FORM_COPY: Record<string, { heading: string; subheading: string }> = {
	demo: {
		heading: "Book Your Demo",
		subheading:
			"Includes your IFRS S1 & S2 Gap Assessment. We’ll be in touch within one business day.",
	},
	quote: {
		heading: "Request a Custom Quote",
		subheading: "We’ll be in touch within one business day.",
	},
	support: {
		heading: "Get Support",
		subheading: "We’ll get back to you shortly.",
	},
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ContactContent() {
	const { toast } = useToast();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [loading, setLoading] = useState(false);
	const [sectors, setSectors] = useState<{ id: string; name: string }[]>([]);

	const typeParam = searchParams.get("type");
	// Campaign traffic books demos; quote and support stay reachable via ?type=
	const requestType =
		typeParam && REQUEST_TYPES.includes(typeParam) ? typeParam : "demo";

	useEffect(() => {
		fetch(`${API_BASE}/industries/sectors`)
			.then((res) => (res.ok ? res.json() : []))
			.then((data) => {
				const list = Array.isArray(data) ? data : [];
				const normalized = list
					.map((s, i) => ({
						id: String(s?.id ?? s?.name ?? i),
						name: typeof s === "string" ? s : s?.name,
					}))
					.filter((s) => typeof s.name === "string" && s.name.length > 0);
				setSectors(normalized);
			})
			.catch(() => setSectors([]));
	}, []);

	const [industry, setIndustry] = useState("");
	const [orgSize, setOrgSize] = useState("");
	const [attempted, setAttempted] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [touched, setTouched] = useState<Record<string, boolean>>({});

	const handleBlur = (field: string) =>
		setTouched((prev) => ({ ...prev, [field]: true }));

	const showError = (field: string, value: string) =>
		touched[field] && !value.trim();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAttempted(true);
		if (!industry) return;
		setLoading(true);
		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const res = await fetch(`${API_BASE}/contact/demo`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					requestType,
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
				toast({
					title: "Something went wrong",
					description: data.message || "Please try again later.",
					variant: "destructive",
				});
				return;
			}

			// Demo bookings land on a dedicated page so conversions can be tracked
			if (requestType === "demo") {
				router.push("/contact/thank-you/");
				return;
			}

			const successMessages: Record<string, string> = {
				quote:
					"Quote requested! We\u2019ll send a custom proposal within one business day.",
				support:
					"Support request received! We\u2019ll get back to you shortly.",
			};
			toast({
				title: "Request submitted!",
				description: successMessages[requestType],
			});
			form.reset();
			setIndustry("");
			setOrgSize("");
			setAttempted(false);
			setTouched({});
			setSubmitted(true);
		} catch {
			toast({
				title: "Network error",
				description: "Please check your connection and try again.",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden bg-[#1a1a1a] text-white py-section-y">
				<img
					src={targetRings.src}
					alt=""
					className="pointer-events-none absolute right-[5%] -top-[3%] w-[500px] opacity-20 select-none animate-slow-spin"
				/>
				<div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div>
						<SectionLabel dark>BOOK A DEMO</SectionLabel>
						<h1 className="heading-h1 mt-3 max-w-xl">
							Book a Demo. Get Your{" "}
							<span className="accent-italic">IFRS S1 &amp; S2 Gap Assessment.</span>
						</h1>
						<p className="text-body-lg text-white mt-4 max-w-xl">
							Book a personalised demo and receive an IFRS S1 &amp; S2 Gap
							Assessment to help identify potential reporting gaps, understand
							your current readiness and prioritise your next steps.
						</p>
						<Button asChild size="lg" className="mt-6">
							<a href="#book-demo">Book A Demo</a>
						</Button>
					</div>
					<div className="bg-white/[0.06] border border-white/15 rounded-2xl p-card-p">
						<p className="text-body text-white">
							See how ESG Horizon can help your organisation organise ESG data,
							streamline reporting workflows, calculate emissions and prepare
							for globally aligned sustainability disclosures.
						</p>
						<ul className="mt-5 space-y-3">
							{keyBenefits.map((benefit) => (
								<li key={benefit} className="flex gap-3 items-start text-body text-white">
									<svg
										className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										aria-hidden="true"
									>
										<polyline points="20 6 9 17 4 12" />
									</svg>
									{benefit}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Form + Expectations */}
			<section className="py-section-y">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div>
							<h2 className="heading-h2 mb-4">
								What to Expect
							</h2>
							<p className="text-body text-foreground mb-8">
								We won&apos;t put you in a queue or give you a generic product
								tour. Here&apos;s exactly what happens when you submit this
								form:
							</p>
							<div className="space-y-8">
								{expectations.map((item) => (
									<div key={item.title} className="flex gap-4 items-start">
										<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center">
											<img src={item.iconSrc.src} alt="" className="h-8 w-8" />
										</div>
										<div>
											<h3 className="font-bold text-body mb-1">{item.title}</h3>
											<p className="text-body-sm text-foreground">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div
							id="book-demo"
							className="border border-border rounded-xl p-card-p scroll-mt-24"
						>
							{submitted ? (
								<div className="text-center py-12">
									<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
										<svg
											className="h-8 w-8 text-primary"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</div>
									<h3 className="heading-h3 mb-3">
										Thank You!
									</h3>
									<p className="text-body text-foreground mb-2">
										Your request has been submitted successfully.
									</p>
									<p className="text-body-sm text-foreground mb-8">
										We&apos;ll be in touch within one business day with a
										personalised response.
									</p>
									<Button
										variant="outline"
										onClick={() => setSubmitted(false)}
										className="border-primary text-primary"
									>
										Submit Another Request
									</Button>
								</div>
							) : (
								<>
									<h3 className="heading-h3 mb-2">
										{FORM_COPY[requestType].heading}
									</h3>
									<p className="text-body-sm text-muted-foreground mb-6">
										{FORM_COPY[requestType].subheading}
									</p>
									<form
										onSubmit={handleSubmit}
										className="space-y-4"
										noValidate
									>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											<div>
												<label
													htmlFor="firstName"
													className="text-sm font-medium mb-1 block"
												>
													First Name *
												</label>
												<Input
													id="firstName"
													name="firstName"
													placeholder="Enter your first name"
													required
													aria-describedby={
														showError("firstName", "")
															? "firstName-error"
															: undefined
													}
													onBlur={(e) => {
														handleBlur("firstName");
														if (!e.target.value.trim())
															e.target.setCustomValidity("Required");
														else e.target.setCustomValidity("");
													}}
													onChange={(e) => e.target.setCustomValidity("")}
												/>
												{touched.firstName && (
													<p
														id="firstName-error"
														className="text-xs text-red-500 mt-1 empty:hidden"
														role="alert"
													/>
												)}
											</div>
											<div>
												<label
													htmlFor="lastName"
													className="text-sm font-medium mb-1 block"
												>
													Last Name *
												</label>
												<Input
													id="lastName"
													name="lastName"
													placeholder="Enter your last name"
													required
													onBlur={() => handleBlur("lastName")}
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="email"
												className="text-sm font-medium mb-1 block"
											>
												Work Email *
											</label>
											<Input
												id="email"
												name="email"
												type="email"
												placeholder="you@organisation.com"
												required
												onBlur={() => handleBlur("email")}
											/>
										</div>
										<div>
											<label
												htmlFor="organization"
												className="text-sm font-medium mb-1 block"
											>
												Organization Name *
											</label>
											<Input
												id="organization"
												name="organization"
												placeholder="Your Company"
												required
												onBlur={() => handleBlur("organization")}
											/>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											<div>
												<label
													htmlFor="industry"
													className="text-sm font-medium mb-1 block"
												>
													Industry *
												</label>
												<Select value={industry} onValueChange={setIndustry}>
													<SelectTrigger
														id="industry"
														className={
															attempted && !industry ? "border-red-500" : ""
														}
														aria-describedby={
															attempted && !industry
																? "industry-error"
																: undefined
														}
													>
														<SelectValue placeholder="Select Industry" />
													</SelectTrigger>
													<SelectContent>
														{sectors.map((s) => (
															<SelectItem key={s.name} value={s.name}>
																{s.name}
															</SelectItem>
														))}
														<SelectItem value="other">Other</SelectItem>
													</SelectContent>
												</Select>
												{attempted && !industry && (
													<p
														id="industry-error"
														className="text-xs text-red-500 mt-1"
														role="alert"
													>
														Please select an industry
													</p>
												)}
											</div>
											<div>
												<label
													htmlFor="orgSize"
													className="text-sm font-medium mb-1 block"
												>
													Organization Size
												</label>
												<Select value={orgSize} onValueChange={setOrgSize}>
													<SelectTrigger id="orgSize">
														<SelectValue placeholder="Select Size" />
													</SelectTrigger>
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
											<label
												htmlFor="challenge"
												className="text-sm font-medium mb-1 block"
											>
												What&apos;s your biggest ESG reporting challenge?
												(optional)
											</label>
											<Textarea
												id="challenge"
												name="challenge"
												placeholder="e.g. We have 12 subsidiaries and no central data collection..."
												rows={4}
											/>
										</div>
										<Button
											type="submit"
											size="lg"
											className="w-full"
											disabled={loading}
										>
											{loading
												? "Submitting..."
												: requestType === "quote"
													? "Request My Custom Quote \u2192"
													: requestType === "support"
														? "Submit Support Request \u2192"
														: "Book A Demo"}
										</Button>
										<p className="text-xs text-muted-foreground text-center">
											Your data is safe with us. We never share your information
											with third parties.
										</p>
										<p className="text-xs text-muted-foreground text-center">
											Prefer email?{" "}
											<a
												href={`mailto:${CONTACT_EMAIL}`}
												className="text-primary underline underline-offset-2"
											>
												{CONTACT_EMAIL}
											</a>
										</p>
									</form>
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Built for Africa */}
			<section className="relative overflow-hidden bg-primary text-white py-section-y">
				<div className="container relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<span className="section-label text-white/70">
								OUR PRESENCE
							</span>
							<h2 className="heading-h2 mt-3 mb-6">
								Built for Africa,
								<br />
								<span className="font-heading italic text-white/90">
									Connected to the World
								</span>
							</h2>
							<p className="text-body text-white mb-4">
								An African-centred ESG platform with global connectivity,
								developed by ESG and data experts in partnership with
								governments, regulators, and academia across the continent.
							</p>
							<p className="text-body text-white mb-4">
								Our mission is to drive sustainable development across Africa by
								providing organisations, investors, and regulators with the
								insights and tools needed to foster responsible and transparent
								ESG practices.
							</p>
							<p className="text-body text-white">
								We bridge the gap between local and global ESG standards —
								empowering Africa&apos;s place in the global sustainability
								conversation.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4">
							{[
								{ iconSrc: iconIFRS, title: "S1 & S2 aligned from day one" },
								{
									iconSrc: iconGHG,
									title: "Protocol-certified emission factors",
								},
								{ iconSrc: iconBuilding, title: "Built with regulatory input" },
								{ iconSrc: iconGlobe, title: "Designed for African realities" },
							].map((item, i) => (
								<div
									key={i}
									className="bg-white/[0.08] border border-white/20 rounded-2xl p-card-p text-center flex flex-col items-center justify-center gap-3"
								>
									<img
										src={item.iconSrc.src}
										alt=""
										className="h-10 w-10 md:h-14 md:w-14"
									/>
									<p className="text-body-sm text-white">{item.title}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
