import { Link } from "react-router-dom";
import logo from "@/assets/esg-horizon-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="ESG Horizon" className="h-14 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm text-background/70 max-w-xs">
            The one-stop platform for ESG reporting in Nigeria and across Africa. Automated, compliant, and audit-ready.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-4">PRODUCT</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/features" className="hover:text-background transition-colors">Features</Link></li>
            <li><Link to="/how-it-works" className="hover:text-background transition-colors">How It Works</Link></li>
            <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/" className="hover:text-background transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Support</Link></li>
            <li><Link to="/" className="hover:text-background transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-background/50">
        <span>© 2025 ESG Horizon. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-background transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-background transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
