import Link from "next/link";
import logo from "@/assets/logo-full.png";

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white overflow-hidden">
    <div className="px-6 md:px-10 lg:px-16 xl:px-24 py-10 md:py-16">
      {/* Mobile + Tablet: stacked. Desktop (lg+): single row */}
      <div className="lg:flex lg:justify-between lg:items-start lg:gap-16">
        {/* Logo + description */}
        <div className="mb-8 lg:mb-0 lg:max-w-sm">
          <img src={logo.src} alt="ESG Horizon" className="h-16 md:h-24 w-auto mb-4" />
          <p className="text-sm text-white/80 leading-relaxed">
            The one-stop platform for ESG reporting in Nigeria and across Africa. Automated, compliant, and audit-ready.
          </p>
          {/* Social links — commented out until accounts are ready
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.linkedin.com/company/esghorizon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://x.com/esghorizon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter (opens in new tab)"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
          */}
        </div>

        {/* Link columns — side-by-side, pushed right on lg+ */}
        <div className="flex justify-between lg:gap-24">
          <div>
            <h2 className="font-body font-extrabold text-xs tracking-[0.15em] uppercase text-white/70 mb-4">PRODUCT</h2>
            <ul className="space-y-3 text-sm text-white/85">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-body font-extrabold text-xs tracking-[0.15em] uppercase text-white/70 mb-4">COMPANY</h2>
            <ul className="space-y-3 text-sm text-white/85">
              <li><Link href="/#who-we-are" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact?type=support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 md:mt-14 pt-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-white/70 gap-3 md:gap-0">
        <span>&copy; {new Date().getFullYear()} ESG Horizon. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
