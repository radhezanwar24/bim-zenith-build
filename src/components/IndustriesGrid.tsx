import {
  HeartPulse,
  Building,
  Home,
  Factory,
  TrainFront,
  Hotel,
  GraduationCap,
  Server,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: HeartPulse,
    label: "Healthcare",
    image: "/sectors/healthcare-upload.png",
    position: "50% 50%",
  },
  {
    icon: Building,
    label: "Commercial",
    image: "/sectors/commercial-upload.png",
    position: "50% 50%",
  },
  { icon: Home, label: "Residential", image: "/sectors/residential.jpg", position: "50% 62%" },
  { icon: Factory, label: "Industrial", image: "/sectors/industrial.jpg", position: "50% 50%" },
  {
    icon: TrainFront,
    label: "Infrastructure",
    image: "/sectors/infrastructure.jpg",
    position: "50% 50%",
  },
  { icon: Hotel, label: "Hospitality", image: "/sectors/hospitality.jpg", position: "50% 50%" },
  {
    icon: GraduationCap,
    label: "Institutional",
    image: "/sectors/institutional.jpg",
    position: "48% 22%",
  },
  { icon: Server, label: "Data Centers", image: "/sectors/datacentre.jpg", position: "50% 50%" },
  { icon: Landmark, label: "Government", image: "/sectors/government.jpg", position: "50% 50%" },
];

export function IndustriesGrid() {
  return (
    <ul
      role="list"
      className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-3"
    >
      {industries.map(({ icon: Icon, label, image, position }, i) => (
        <motion.li
          key={label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-500 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
        >
          {/* Sector Image */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
            <img
              src={image}
              alt={label}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: position }}
              loading="lazy"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Card Details */}
          <div className="flex items-center gap-2.5 p-3 sm:gap-4 sm:p-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-royal transition-all duration-500 group-hover:bg-royal group-hover:text-primary-foreground sm:h-12 sm:w-12">
              <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" aria-hidden />
            </span>
            <span className="min-w-0 text-[0.82rem] font-semibold leading-snug tracking-tight text-navy transition-colors duration-300 group-hover:text-royal sm:text-base sm:tracking-normal">
              {label}
            </span>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
