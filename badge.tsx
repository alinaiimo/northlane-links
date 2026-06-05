export function Diamond({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block rotate-45 bg-foreground/80 ${className}`}
      style={{ width: "6px", height: "6px" }}
      aria-hidden
    />
  );
}

export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 w-full max-w-md mx-auto">
      <div className="h-px flex-1 hairline" />
      {label ? (
        <span className="eyebrow text-foreground/70">{label}</span>
      ) : (
        <Diamond />
      )}
      <div className="h-px flex-1 hairline" />
    </div>
  );
}
