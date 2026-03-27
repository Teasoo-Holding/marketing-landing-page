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
        </div>

        {/* Link columns — side-by-side, pushed right on lg+ */}
        <div className="flex justify-between lg:gap-24">
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.15em] uppercase text-white/60 mb-4">PRODUCT</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.15em] uppercase text-white/60 mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 md:mt-14 pt-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-white/60 gap-3 md:gap-0">
        <span>&copy; 2025 ESG Horizon. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
