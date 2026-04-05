const CrionLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c6ff" />
          <stop offset="100%" stopColor="#5b5ef4" />
        </linearGradient>
      </defs>
      <path d="M18 4L32 30H4L18 4Z" fill="url(#logoGrad)" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-heading text-xl tracking-tight text-foreground">
        CRION<span className="text-primary">.</span>
      </span>
      <span className="font-body text-[10px] font-medium tracking-[0.25em] text-primary">
        DIGITAL
      </span>
    </div>
  </div>
);

export default CrionLogo;
