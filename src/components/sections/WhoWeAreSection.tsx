import Image from "next/image";
import SectionLabel from "./SectionLabel";
import buildingIcon from "@/assets/Building.svg";
import globeIcon from "@/assets/Globe.svg";
import microscopeIcon from "@/assets/Microscope.svg";
import linkIcon from "@/assets/Link.svg";
import globeWireframe from "@/assets/globe-wireframe.svg";

const highlights = [
  { icon: buildingIcon, title: "Built with Regulators", desc: "Developed in partnership with Nigerian and pan-African regulatory bodies to ensure full compliance alignment." },
  { icon: globeIcon, title: "African Context First", desc: "Local market conditions, currency, subsidiaries, and multi-jurisdiction reporting all handled natively." },
  { icon: microscopeIcon, title: "Academic & Expert Backed", desc: "Developed with sustainability leaders from energy, finance, public sector, and academia." },
  { icon: linkIcon, title: "Globally Interoperable", desc: "Reports are IFRS S1 & S2 aligned and GHG Protocol compliant — accepted by global investors and rating agencies." },
];

const WhoWeAreSection = () => (
  <section className="relative py-20 md:py-28 bg-muted/50 overflow-hidden">
    {/* Globe wireframe background — anchored to section bottom-right */}
    <div className="pointer-events-none absolute right-[7%] -bottom-[50px] w-[680px] select-none">
      <img
        src={globeWireframe.src}
        alt=""
        className="w-full opacity-[0.10] animate-slow-spin"
      />
    </div>

    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel>WHO WE ARE</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Africa&apos;s ESG Platform with{" "}
            <span className="accent-italic">Global Standards</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            An African-centred ESG platform with global connectivity, developed by ESG and data experts in partnership with governments, regulators, and academia.
          </p>
          <p className="text-muted-foreground mb-8">
            We bridge the gap between local and global ESG standards — empowering Africa&apos;s place in the global sustainability conversation.
          </p>
          <div className="border-l-4 border-primary pl-5 bg-primary/5 rounded-r-lg py-4">
            <p className="text-sm leading-relaxed text-primary/80">
              Our mission is to drive sustainable development across Africa by providing organisations, investors, and regulators with the insights and tools needed to foster responsible and transparent ESG practices.
            </p>
          </div>
        </div>
        <div className="relative space-y-5">
          {highlights.map((item) => (
            <div key={item.title} className="relative z-10 flex gap-4 bg-white rounded-xl border border-border/60 p-5 shadow-sm">
              <div className="shrink-0 flex items-center justify-center h-11 w-11 bg-primary/10 rounded-xl">
                <Image src={item.icon} alt="" width={24} height={24} className="w-auto h-auto" />
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
);

export default WhoWeAreSection;
