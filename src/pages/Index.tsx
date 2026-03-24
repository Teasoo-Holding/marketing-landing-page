import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { ArrowRight, Mail, FileSpreadsheet, GitBranch, AlertTriangle, Star, Building2, Globe, GraduationCap, Scale } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-dark relative overflow-hidden">
        <div className="container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block text-xs font-medium tracking-wider border border-primary/40 rounded-full px-4 py-1.5 mb-6 text-primary">
                🌍 Nigeria's #1 IFRS-Ready ESG Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Cut ESG Reporting Time by{" "}
                <span className="accent-italic">Up to 60%</span>
              </h1>
              <p className="text-lg text-hero-dark-foreground/70 mb-8 max-w-lg">
                Automate disclosures, reduce compliance risk, and gain a single source of truth for ESG data — built for African regulatory realities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Request Your Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link to="/features">
                    Explore Features <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["IFRS S1 & S2 Ready", "GHG Protocol Aligned", "Audit-Ready", "Enterprise Security"].map((tag) => (
                  <span key={tag} className="text-xs border border-hero-dark-foreground/20 rounded-full px-3 py-1 text-hero-dark-foreground/60">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={dashboardMockup} alt="ESG Horizon Dashboard" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Stop Fighting Excel.{" "}
            <span className="accent-italic">Start Leading on ESG</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            For most organisations, ESG reporting is a manual, error-prone nightmare. Here's what that looks like:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Mail, title: "Endless email chains", desc: "Chasing data owners across subsidiaries with no central collection system." },
              { icon: FileSpreadsheet, title: "Fragile spreadsheets", desc: "Formulas that break and compromise the accuracy of your entire report." },
              { icon: GitBranch, title: "No version control", desc: "Impossible to track who changed what, creating audit and governance risks." },
              { icon: AlertTriangle, title: "High compliance risk", desc: "Without an audit trail or data security, every report is a liability." },
            ].map((item) => (
              <div key={item.title} className="bg-muted rounded-xl p-6 flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-border rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-semibold">This outdated approach wastes weeks of effort and exposes your company to errors.</p>
              <p className="text-primary text-sm">ESG Horizon replaces compromise with confidence.</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/features">See How <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>WHO WE ARE</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Africa's ESG Platform with{" "}
                <span className="accent-italic">Global Standards</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                An African-centred ESG platform with global connectivity, developed by ESG and data experts in partnership with governments, regulators, and academia.
              </p>
              <p className="text-muted-foreground mb-8">
                We bridge the gap between local and global ESG standards — empowering Africa's place in the global sustainability conversation.
              </p>
              <div className="border-l-4 border-primary pl-4 bg-primary/5 rounded-r-lg py-3">
                <p className="text-sm italic text-muted-foreground">
                  Our mission is to drive sustainable development across Africa by providing organisations, investors, and regulators with the insights and tools needed to foster responsible and transparent ESG practices.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Scale, title: "Built with Regulators", desc: "Developed in partnership with Nigerian and pan-African regulatory bodies to ensure full compliance alignment." },
                { icon: Globe, title: "African Context First", desc: "Local market conditions, currency, subsidiaries, and multi-jurisdiction reporting all handled natively." },
                { icon: GraduationCap, title: "Academic & Expert Backed", desc: "Developed with sustainability leaders from energy, finance, public service, and academia." },
                { icon: Building2, title: "Globally Interoperable", desc: "Reports are IFRS S1 & S2 aligned and GHG Protocol compliant — accepted by global investors and rating agencies." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="font-heading text-xl md:text-2xl italic mb-8">
            "ESG Horizon reduced our reporting cycle from <span className="font-bold">8 weeks to 2 weeks</span> and gave us complete confidence in our disclosures. The automated calculations eliminated hours of manual work."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">AO</div>
            <div className="text-left">
              <p className="font-semibold text-sm">Adaeze Okafor</p>
              <p className="text-xs text-muted-foreground">Head of Sustainability, Major Nigerian Energy Conglomerate</p>
            </div>
          </div>
          <span className="inline-block mt-4 text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
            75% reduction in reporting cycle time
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark py-20 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building a Confident<br />ESG Reporting Process
          </h2>
          <p className="text-hero-dark-foreground/70 mb-8 max-w-lg mx-auto">
            See how ESG Horizon fits your organisation in a personalised 30-minute walkthrough.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request Your Personalised Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary/40 text-primary hover:bg-primary/10">
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
