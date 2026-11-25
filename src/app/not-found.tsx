import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import SectionLabel from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/button";
import { SOLUTION_PAGES } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Page not found",
};

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/features/", label: "Features" },
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/blog", label: "Blog", external: true },
  { href: "/contact/", label: "Contact" },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fdfb] via-[#f0faf7] to-[#e8f6f2] py-section-y">
        <div className="container text-center">
          <SectionLabel>ERROR 404</SectionLabel>
          <p className="accent-italic mt-4 text-[5rem] md:text-[8rem] font-bold leading-none" aria-hidden="true">
            404
          </p>
          <h1 className="heading-h1 mt-4">We couldn&apos;t find that page</h1>
          <p className="text-body-lg text-foreground mt-4 mx-auto max-w-xl">
            It may have moved, or the address may be mistyped. Try one of the pages below, or head back to the home page.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="rounded-lg">
              <Link href="/">Go to the home page</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-lg border-primary text-primary">
              <Link href="/contact/">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-section-y-sm" aria-labelledby="nf-links">
        <div className="container grid gap-10 md:grid-cols-2 max-w-4xl">
          <div>
            <h2 id="nf-links" className="heading-h3 mb-4">Popular pages</h2>
            <ul className="space-y-2">
              {mainPages.map((p) => (
                <li key={p.href}>
                  {p.external ? (
                    <a href={p.href} className="text-primary font-medium hover:underline">{p.label}</a>
                  ) : (
                    <Link href={p.href} className="text-primary font-medium hover:underline">{p.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading-h3 mb-4">Solutions</h2>
            <ul className="space-y-2">
              {SOLUTION_PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-primary font-medium hover:underline">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
