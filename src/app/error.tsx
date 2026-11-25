"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";
import PageShell from "@/components/layout/PageShell";

/** Shown when a page crashes in the browser, with the usual navbar and footer. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell>
    <section className="bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] py-section-y">
      <div className="container text-center">
        <span className="section-label">SOMETHING WENT WRONG</span>
        <h1 className="heading-h1 mt-4">This page ran into a problem</h1>
        <p className="text-body-lg text-foreground mt-4 mx-auto max-w-xl">
          Sorry about that. Please try again. If it keeps happening, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="rounded-lg" onClick={() => reset()}>Try again</Button>
          <Button size="lg" variant="outline" asChild className="rounded-lg border-primary text-primary">
            <Link href="/">Go to the home page</Link>
          </Button>
        </div>
      </div>
    </section>
    </PageShell>
  );
}
