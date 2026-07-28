import {
  HeartPulse, Building, Home, Factory, TrainFront, Hotel,
  GraduationCap, Server, Landmark,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, label: "Healthcare", image: "/sectors/healthcare.jpg" },
  { icon: Building, label: "Commercial", image: "/sectors/commercial.jpg" },
  { icon: Home, label: "Residential", image: "/sectors/residential.jpg" },
  { icon: Factory, label: "Industrial", image: "/sectors/industrial.jpg" },
  { icon: TrainFront, label: "Infrastructure", image: "/sectors/infrastructure.jpg" },
  { icon: Hotel, label: "Hospitality", image: "/sectors/hospitality.jpg" },
  { icon: GraduationCap, label: "Institutional", image: "/sectors/institutional.jpg" },
  { icon: Server, label: "Data Centers", image: "/sectors/datacentre.jpg" },
  { icon: Landmark, label: "Government", image: "/sectors/government.jpg" },
];

export function IndustriesGrid() {
  return (
    <ul role="list" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map(({ icon: Icon, label, image }, i) => (
        <li
          key={label}
          className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
          style={{ transitionDelay: `${(i % 3) * 50}ms` }}
        >
          {/* Sector Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <img
              src={image}
              alt={label}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Card Details */}
          <div className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-royal transition-all duration-500 group-hover:bg-royal group-hover:text-primary-foreground sm:h-12 sm:w-12">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </span>
            <span className="min-w-0 break-words text-sm font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-royal sm:text-base">
              {label}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

