"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Floating mobile CTA — appears after scrolling past the hero section */
const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Don't show on the contact page (user is already there)
  const isContactPage = pathname.startsWith("/contact");

  useEffect(() => {
    if (isContactPage) return;
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  if (isContactPage || !visible) return null;

  return (
    <Link
      href="/contact"
      className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-white text-sm font-semibold rounded-full px-5 py-3 shadow-lg hover:bg-primary/90 transition-all"
    >
      Book a Demo
    </Link>
  );
};

export default FloatingCTA;
