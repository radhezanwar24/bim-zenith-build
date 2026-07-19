import {
  Box, PencilRuler, ScanLine, Wrench, Building2, FileText,
  GitMerge, Search, Cloud, Cog, Calculator, Layers,
} from "lucide-react";

const services = [
  { icon: Box, title: "Building Information Modeling", desc: "Intelligent 3D models across all disciplines." },
  { icon: PencilRuler, title: "CAD Drafting", desc: "Precise, standards-compliant drawing production." },
  { icon: ScanLine, title: "Scan to BIM", desc: "Reality capture converted into accurate BIM." },
  { icon: Wrench, title: "MEP BIM", desc: "Coordinated mechanical, electrical, plumbing models." },
  { icon: Building2, title: "Structural BIM", desc: "Detailed structural modeling and documentation." },
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
    <ul role="list" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ icon: Icon, title, desc }, i) => (
        <li
          key={title}
          className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
          style={{ transitionDelay: `${(i % 3) * 60}ms` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-sky/20 to-royal/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal to-navy text-primary-foreground shadow-sm">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="relative mt-5 text-lg font-semibold text-navy">{title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </li>
      ))}
    </ul>
  );
}
