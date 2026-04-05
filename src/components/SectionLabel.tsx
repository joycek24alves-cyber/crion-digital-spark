const SectionLabel = ({ text }: { text: string }) => (
  <span
    className="inline-block font-body text-[11px] font-bold tracking-[0.35em] uppercase mb-6"
    style={{ color: "#7B2EFF", textShadow: "0 0 15px hsl(263 100% 59% / 0.5), 0 0 40px hsl(263 100% 59% / 0.15)" }}
  >
    {text}
  </span>
);

export default SectionLabel;
