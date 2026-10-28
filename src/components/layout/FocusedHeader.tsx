import Link from "next/link";
import logo from "@/assets/logo-full.png";

/** Minimal header for conversion pages — logo only, no competing navigation */
const FocusedHeader = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div className="container flex items-center h-16 lg:h-20">
      <Link href="/" className="flex items-center">
        <img src={logo.src} alt="ESG Horizon" className="h-20 lg:h-24 w-auto" />
      </Link>
    </div>
  </header>
);

export default FocusedHeader;
