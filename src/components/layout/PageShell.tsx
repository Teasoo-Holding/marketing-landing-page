import Navbar from "./Navbar";
import Footer from "./Footer";

const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default PageShell;
