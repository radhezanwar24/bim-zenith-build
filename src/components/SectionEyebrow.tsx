export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-royal">
      <span className="h-px w-6 bg-royal/60" aria-hidden />
      {children}
    </span>
  );
}
