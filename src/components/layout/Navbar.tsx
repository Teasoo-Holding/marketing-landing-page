"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

function useAuthStatus() {
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
      .catch(() => {});
  }, []);

  return { isAuthenticated, userName };
}

/** Desktop navbar — rendered before page content */
const Navbar = () => {
  const pathname = usePathname();
  const { isAuthenticated, userName } = useAuthStatus();

  return (
    <nav className="hidden lg:block sticky top-0 z-50 bg-white backdrop-blur border-b border-gray-100">
      <div className="mx-auto flex items-center justify-between h-20 px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo.src} alt="ESG Horizon" className="h-24 w-auto" />
        </Link>

        <div className="flex items-center gap-10">
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

        <div className="flex items-center gap-3">
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
      </div>
    </nav>
  );
};

/** Mobile hamburger + menu — rendered via portal on document.body to avoid all stacking issues */
export const MobileNav = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, userName } = useAuthStatus();

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Floating hamburger */}
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden fixed top-5 right-5 p-2 rounded-lg bg-transparent"
          style={{ zIndex: 9999 }}
        >
          <Menu className="h-7 w-7 text-[#0d8a80]" />
        </button>
      )}

      {/* Dropdown panel */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 lg:hidden" onClick={() => setMobileOpen(false)} style={{ zIndex: 9998 }} />

          <div className="fixed top-0 left-0 right-0 bg-white lg:hidden rounded-b-2xl shadow-lg" style={{ zIndex: 9999 }}>
            <div className="flex items-center justify-between h-16 px-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <img src={logo.src} alt="ESG Horizon" className="h-20 w-auto" />
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-6 pb-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-base font-medium ${
                    (link.path === "/" ? pathname === "/" : pathname.startsWith(link.path))
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="px-6 pb-6 space-y-2">
              {isAuthenticated ? (
                <Button asChild className="w-full rounded-lg py-5 text-sm">
                  <Link href={`${APP_URL}/dashboard`} onClick={() => setMobileOpen(false)}>
                    {userName ? `${userName}'s Dashboard` : "Dashboard"}
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild className="w-full rounded-lg py-5 text-sm">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>Request Demo</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full rounded-lg py-5 text-sm border-primary text-primary">
                    <Link href={`${APP_URL}/login`} onClick={() => setMobileOpen(false)}>Sign In</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>,
    document.body
  );
};

export default Navbar;
