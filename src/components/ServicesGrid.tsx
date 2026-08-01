import {
  Box,
  PencilRuler,
  ScanLine,
  Wrench,
  Building2,
  FileText,
  GitMerge,
  Search,
  Cloud,
  Cog,
  Calculator,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Box,
    title: "Building Information Modeling",
    desc: "Intelligent 3D models across all disciplines.",
  },
  {
    icon: PencilRuler,
    title: "CAD Drafting",
    desc: "Precise, standards-compliant drawing production.",
  },
  { icon: ScanLine, title: "Scan to BIM", desc: "Reality capture converted into accurate BIM." },
  { icon: Wrench, title: "MEP BIM", desc: "Coordinated mechanical, electrical, plumbing models." },
  {
    icon: Building2,
    title: "Structural BIM",
    desc: "Detailed structural modeling and documentation.",
  },
  { icon: FileText, title: "Construction Documentation", desc: "Construction-ready drawing sets." },
  { icon: GitMerge, title: "BIM Coordination", desc: "Multi-discipline coordination workflows." },
  { icon: Search, title: "Clash Detection", desc: "Proactive interference resolution." },
  { icon: Cloud, title: "Point Cloud Modeling", desc: "Point cloud to intelligent BIM elements." },
  { icon: Layers, title: "Digital Twin", desc: "Live digital replicas of built assets." },
  { icon: Cog, title: "CAD Automation", desc: "Dynamo & scripted productivity workflows." },
  { icon: Calculator, title: "Quantity Takeoff", desc: "Model-driven BOQ and estimation." },
];

export function ServicesGrid() {
  return (
    <ul role="list" className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
      {services.map(({ icon: Icon, title, desc }, i) => (
        <motion.li
          key={title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-6 transition-colors duration-500 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-sky/20 to-royal/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="relative grid h-11 w-11 place-items-center rounded-xl sm:h-12 sm:w-12 bg-gradient-to-br from-royal to-navy text-primary-foreground shadow-sm">
            <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110 sm:h-6 sm:w-6" aria-hidden />
          </span>
          <h3 className="relative mt-4 text-base font-semibold sm:mt-5 sm:text-lg text-navy">{title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </motion.li>
      ))}
    </ul>
  );
}
