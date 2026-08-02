import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  Building2,
  GitMerge,
  DraftingCompass,
  ClipboardCheck,
  Calculator,
  Box,
  ScanLine,
  Clock,
  Coins,
  Cog,
} from "lucide-react";

const coreServices = [
  {
    name: "Architectural, Structural & MEP BIM Modeling",
    description: "LOD 100 - 500",
    icon: Building2,
  },
  {
    name: "Clash Detection & Multidisciplinary Coordination",
    description: "Identify clashes early, reduce rework",
    icon: GitMerge,
  },
  {
    name: "Construction Documentation & Shop Drawings",
    description: "Accurate, coordinated & construction-ready drawings",
    icon: DraftingCompass,
  },
  {
    name: "Permit Sets & GFC Documentation",
    description: "Code-compliant drawings for approvals and submissions",
    icon: ClipboardCheck,
  },
  {
    name: "Quantity Take-Offs (BOQ) & Cost Estimation",
    description: "Accurate quantities for better planning and budgeting",
    icon: Calculator,
  },
  {
    name: "Revit Family Creation & Parametric Content",
    description: "Smart, parametric & industry-standard components",
    icon: Box,
  },
  {
    name: "Scan to BIM",
    description: "Point Cloud to Intelligent BIM Models",
    icon: ScanLine,
  },
  {
    name: "4D BIM Scheduling",
    description: "Time-based simulation for better planning and sequencing",
    icon: Clock,
  },
  {
    name: "5D BIM Cost Integration",
    description: "Cost-aware models for better decision-making and control",
    icon: Coins,
  },
  {
    name: "BIM Coordination & Digital Project Management",
    description: "End-to-end coordination and BIM project management support",
    icon: Cog,
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "BIM Services - Infinity BIM" },
      {
        name: "description",
        content:
          "Explore Infinity BIM's architectural, structural, MEP, and data center BIM services for coordinated, construction-ready project delivery.",
      },
      { property: "og:title", content: "BIM Services - Infinity BIM" },
      {
        property: "og:description",
        content:
          "Premium BIM services for architectural, structural, MEP, and mission-critical data center projects.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(34rem 18rem at 18% 20%, oklch(0.78 0.10 240 / 0.28), transparent 62%), radial-gradient(30rem 18rem at 84% 80%, oklch(0.52 0.19 260 / 0.38), transparent 64%)",
          }}
          aria-hidden
        />
        <div className="container-page relative flex min-h-[52vh] items-center pt-28 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl fade-up">
            <SectionEyebrow>
              <span className="text-sky">Our Services</span>
            </SectionEyebrow>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
              Integrated BIM Services for Complex Project Delivery
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/82 md:text-xl">
              Browse Infinity BIM's core service disciplines and explore how our intelligent models,
              coordination workflows, and construction-ready documentation support global AEC teams.
            </p>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />
      </section>

      <section className="container-page py-14 sm:py-20 md:py-28">
        <MotionReveal className="mx-auto mb-16 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-royal/40 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-royal font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-royal" />
              Our Core Services
              <span className="h-1.5 w-1.5 rounded-full bg-royal" />
            </span>
            <div className="h-[2px] w-12 bg-royal/40 rounded-full" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Explore Our Specialized BIM Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            High-quality building information models, clash-free coordination, precise
            documentation, and data-driven scheduling and costing built for real-world construction
            outcomes.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.75, delay: (index % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`group relative flex min-h-[12.5rem] flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-card)] transition-colors duration-500 hover:border-royal/30 hover:shadow-[var(--shadow-elevated)] sm:min-h-0 sm:rounded-3xl sm:p-6 ${
                  coreServices.length % 2 === 1 && index === coreServices.length - 1
                    ? "col-span-2 mx-auto w-[calc((100%_-_0.75rem)/2)] sm:w-[calc((100%_-_1.5rem)/2)] lg:col-span-1 lg:w-auto"
                    : ""
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-sky/10 to-royal/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-royal shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-transparent group-hover:bg-royal group-hover:text-white sm:mb-5 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </div>
                <h3 className="mb-3 flex min-h-[3.6rem] items-center justify-center text-[0.68rem] font-bold uppercase leading-snug tracking-[0.06em] text-navy sm:min-h-[40px] sm:text-sm sm:tracking-wider">
                  {service.name}
                </h3>
                <p className="max-w-[200px] flex-1 text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
