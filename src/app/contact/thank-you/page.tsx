import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Demo Booked",
  description: "Thank you for booking your ESG Horizon demo.",
  alternates: { canonical: "/contact/thank-you/" },
  robots: { index: false, follow: false },
};

const nextSteps = [
  "An account lead will contact you within one business day to confirm your demo time.",
  "We’ll coordinate your IFRS S1 & S2 Gap Assessment around your organisation’s needs.",
  "Your demo will be tailored to your industry, reporting framework and company structure.",
];

export default function ThankYouPage() {
  return (
    <PageShell focused>
      <section className="py-section-y">
        <div className="container max-w-2xl text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="h-8 w-8 text-primary"
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
          </div>
          <h1 className="heading-h2 mb-4">Thank You! Your Demo Is Booked.</h1>
          <p className="text-body-lg text-foreground mb-10">
            We&apos;ve received your request and sent a confirmation to your
            email.
          </p>

          <div className="border border-border rounded-xl p-card-p text-left mb-10">
            <h2 className="heading-h3 mb-4">What happens next</h2>
            <ol className="space-y-3 list-decimal pl-5 text-body text-foreground">
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <Button asChild variant="outline" className="border-primary text-primary">
            <Link href="/">Back to Home</Link>
          </Button>
          <p className="text-body-sm text-muted-foreground mt-6">
            Questions in the meantime? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
