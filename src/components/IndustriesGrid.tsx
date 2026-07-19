import {
  HeartPulse, Building, Home, Factory, TrainFront, Hotel,
  GraduationCap, Plane, TramFront, Server, Landmark, Fuel,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building, label: "Commercial" },
  { icon: Home, label: "Residential" },
  { icon: Factory, label: "Industrial" },
  { icon: TrainFront, label: "Infrastructure" },
  { icon: Hotel, label: "Hospitality" },
  { icon: GraduationCap, label: "Education" },
  { icon: Plane, label: "Airports" },
  { icon: TramFront, label: "Railways" },
  { icon: Server, label: "Data Centers" },
  { icon: Landmark, label: "Government" },
  { icon: Fuel, label: "Oil & Gas" },
];

export function IndustriesGrid() {
  return (
    <ul role="list" className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {industries.map(({ icon: Icon, label }, i) => (
        <li
          key={label}
          className="reveal group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
          style={{ transitionDelay: `${(i % 4) * 50}ms` }}
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-royal transition-all duration-500 group-hover:bg-royal group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <span className="text-sm font-semibold text-navy sm:text-base">{label}</span>
        </li>
      ))}
    </ul>
  );
}
