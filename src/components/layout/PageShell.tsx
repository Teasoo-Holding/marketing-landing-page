import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content">{children}</main>
    <Footer />
    <FloatingCTA />
  </div>
);

export default PageShell;
