import Link from "next/link";
import logo from "@/assets/logo-full.png";

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white">
    {/* Top accent bar */}
    <div className="h-1 bg-primary" />

    <div className="px-6 md:px-10 lg:px-16 xl:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-32">
        <div>
          <img src={logo.src} alt="ESG Horizon" className="h-20 w-auto mb-5" />
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            The one-stop platform for ESG reporting in Nigeria and across Africa. Automated, compliant, and audit-ready.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold text-xs tracking-[0.15em] uppercase text-white/40 mb-5">PRODUCT</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-xs tracking-[0.15em] uppercase text-white/40 mb-5">COMPANY</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
        <span>&copy; 2025 ESG Horizon. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
