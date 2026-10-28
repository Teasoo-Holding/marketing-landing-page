import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import FocusedHeader from "./FocusedHeader";
import FocusedFooter from "./FocusedFooter";

const PageShell = ({
  children,
  focused = false,
}: {
  children: React.ReactNode;
  /** Strip site navigation for conversion pages */
  focused?: boolean;
}) => (
  <div className="min-h-screen">
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    {focused ? <FocusedHeader /> : <Navbar />}
    <main id="main-content">{children}</main>
    {focused ? <FocusedFooter /> : <Footer />}
    {!focused && <FloatingCTA />}
  </div>
);

export default PageShell;
