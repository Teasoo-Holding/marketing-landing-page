import { CONTACT_EMAIL } from "@/lib/constants";

/** Slim footer for conversion pages — essential contact details only */
const FocusedFooter = () => (
  <footer className="bg-[#1a1a1a] text-white">
    <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-body-sm text-white/70">
      <span>&copy; {new Date().getFullYear()} ESG Horizon. All rights reserved.</span>
      <span>
        Questions?{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-white/90 underline underline-offset-4 hover:text-white"
        >
          {CONTACT_EMAIL}
        </a>
      </span>
    </div>
  </footer>
);

export default FocusedFooter;
