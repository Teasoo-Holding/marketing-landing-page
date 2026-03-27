"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-full.png";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/auth/status`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
          setUserName(data.user.firstName || "");
        }
      })
      .catch(() => {
        // Not authenticated — keep defaults
      });
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur border-b border-gray-100">
      <div className="mx-auto flex items-center justify-between h-20 px-6 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo.src} alt="ESG Horizon" className="h-24 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[15px] font-medium transition-colors hover:text-primary ${
                (link.path === "/" ? pathname === "/" : pathname.startsWith(link.path))
                  ? "text-primary underline underline-offset-[6px] decoration-2"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <Button asChild className="rounded-lg px-6 py-5 text-[15px]">
              <Link href={`${APP_URL}/dashboard`}>
                {userName ? `${userName}'s Dashboard` : "Dashboard"}
              </Link>
            </Button>
          ) : (
            <>
              <Button variant="outline" asChild className="rounded-lg px-6 py-5 text-[15px] border-primary text-primary hover:bg-primary/5">
                <Link href={`${APP_URL}/login`}>Sign In</Link>
              </Button>
              <Button asChild className="rounded-lg px-6 py-5 text-[15px]">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium ${
                (link.path === "/" ? pathname === "/" : pathname.startsWith(link.path))
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated ? (
            <Button asChild className="w-full mt-2 rounded-lg">
              <Link href={`${APP_URL}/dashboard`} onClick={() => setMobileOpen(false)}>
                {userName ? `${userName}'s Dashboard` : "Dashboard"}
              </Link>
            </Button>
          ) : (
            <>
              <Button variant="outline" asChild className="w-full mt-2 rounded-lg border-primary text-primary">
                <Link href={`${APP_URL}/login`} onClick={() => setMobileOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild className="w-full mt-2 rounded-lg">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Request Demo</Link>
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
