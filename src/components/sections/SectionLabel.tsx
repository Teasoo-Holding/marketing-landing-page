const SectionLabel = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <span className={dark ? "section-label section-label-dark" : "section-label"}>{children}</span>
);
export default SectionLabel;
