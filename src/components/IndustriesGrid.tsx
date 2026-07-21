import {
  HeartPulse, Building, Home, Factory, TrainFront, Hotel,
  GraduationCap, Server, Landmark,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building, label: "Commercial" },
  { icon: Home, label: "Residential" },
  { icon: Factory, label: "Industrial" },
  { icon: TrainFront, label: "Infrastructure" },
  { icon: Hotel, label: "Hospitality" },
  { icon: GraduationCap, label: "Education" },
  { icon: Server, label: "Data Centers" },
  { icon: Landmark, label: "Government" },
];

export function IndustriesGrid() {
  return (
    <ul role="list" className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
      {industries.map(({ icon: Icon, label }, i) => (
        <li
          key={label}
          className="reveal group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)] sm:gap-4 sm:p-5"
          style={{ transitionDelay: `${(i % 3) * 50}ms` }}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-royal transition-all duration-500 group-hover:bg-royal group-hover:text-primary-foreground sm:h-12 sm:w-12">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          </span>
          <span className="min-w-0 break-words text-[13px] font-semibold leading-snug text-navy sm:text-base">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
