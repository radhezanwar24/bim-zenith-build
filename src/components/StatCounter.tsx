import { useCountUp } from "@/hooks/use-count-up";

export function StatCounter({
  value,
  suffix = "+",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [n, ref] = useCountUp(value);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center sm:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-sky/50 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_var(--sky)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky/0 via-sky/0 to-royal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
      />
      <span
        ref={ref}
        className="block bg-gradient-to-br from-white via-sky to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
      >
        {n}
        {suffix}
      </span>
      <p className="mt-2 text-xs font-medium uppercase sm:mt-3 sm:text-sm tracking-wider text-primary-foreground/70">
        {label}
      </p>
    </div>
  );
}
