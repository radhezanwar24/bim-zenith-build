import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  Layers,
  ChevronRight,
} from "lucide-react";

import { MotionReveal } from "@/components/MotionReveal";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Landmark Projects — Infinity BIM" },
      {
        name: "description",
        content:
          "Explore Infinity BIM's landmark projects across residential, healthcare, and commercial developments in India, the Middle East, and globally.",
      },
      { property: "og:title", content: "Our Landmark Projects — Infinity BIM" },
      {
        property: "og:description",
        content:
          "Explore Infinity BIM's landmark projects across residential, healthcare, and commercial developments delivered through advanced BIM workflows.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const premiumEase = [0.16, 1, 0.3, 1] as const;

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-transparent text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(135deg,#061329_0%,#0d2a52_50%,#174c81_100%)] [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0.8)_75%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(52rem_30rem_at_50%_42%,rgba(111,195,255,0.22),transparent_75%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-background/60 to-background sm:h-64"
          aria-hidden
        />
        <div className="container-page relative flex min-h-[54vh] items-center justify-center py-14 sm:min-h-[64vh] sm:py-20 md:min-h-[min(640px,calc(100vh-6rem))] md:py-24">
          <MotionReveal className="mx-auto max-w-4xl -translate-y-4 text-center md:-translate-y-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky shadow-sm backdrop-blur sm:mb-6 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden />
              OUR PROJECTS
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:text-5xl sm:leading-[1.12] md:text-6xl">
              Building Better <br className="hidden sm:inline" />
              <span className="text-sky-200">Through BIM</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Explore our work across architecture, engineering, construction, and digital BIM solutions.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* PROJECTS SHOWCASE SECTION */}
      <section className="container-page pb-20 sm:pb-24 md:pb-32">
        <MotionReveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-[2px] w-10 rounded-full bg-royal/40" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-royal">
              Selected Project Experience
            </span>
            <div className="h-[2px] w-10 rounded-full bg-royal/40" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Our Landmark Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Delivering precision modeling, clash resolution, and constructability excellence for prominent developments across the globe.
          </p>
        </MotionReveal>

        {/* 3-COLUMN PROJECT GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: premiumEase }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)]"
            >
              {/* IMAGE CONTAINER */}
              <div
                className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-muted"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: project.objectPosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  View details <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="flex flex-1 flex-col p-6">
                {/* CATEGORY & LOCATION */}
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-md bg-royal/10 px-2.5 py-1 text-royal">
                    <Building2 className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-foreground/80">
                    <MapPin className="h-3.5 w-3.5 text-royal" />
                    {project.location}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="cursor-pointer text-xl font-bold tracking-tight text-navy transition-colors hover:text-royal"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* SERVICE HIGHLIGHTS */}
                <div className="mt-5 border-t border-border/70 pt-4">
                  <span className="mb-2.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-royal">
                    Key BIM Scope
                  </span>
                  <ul className="space-y-1.5 text-xs text-foreground/85">
                    {project.services.map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-royal" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION BUTTON */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-navy transition-all duration-300 hover:border-royal hover:bg-royal hover:text-white"
                  >
                    Explore Project Scope
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <MotionReveal className="mt-20 overflow-hidden rounded-3xl border border-royal/20 bg-gradient-to-br from-navy via-navy to-[#113a68] p-8 text-white shadow-xl sm:p-12 md:mt-24 md:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Start Your Project
            </span>
            <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Ready to Accelerate Your Project with Infinity BIM?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Partner with our team of BIM professionals for clash-free models, constructability reviews, and intelligent digital engineering workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-royal/40"
              >
                Reach Out to Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* PROJECT DETAILS MODAL / DIALOG */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6 md:p-8">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
              aria-hidden
            />

            {/* MODAL CONTENT */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: premiumEase }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8 md:p-10"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-muted"
                aria-label="Close project modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                    <Building2 className="h-3.5 w-3.5" />
                    {selectedProject.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-xs font-medium text-foreground/80">
                    <MapPin className="h-3.5 w-3.5 text-royal" />
                    {selectedProject.location}
                  </span>
                </div>

                <h3
                  id="modal-project-title"
                  className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>

                <div className="mt-6 rounded-xl border border-border/80 bg-muted/40 p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-navy">
                    <Layers className="h-4 w-4 text-royal" />
                    BIM Delivery Scope & Capabilities
                  </div>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-foreground/80">
                    {selectedProject.services.map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-royal" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-royal"
                  >
                    Inquire About Similar Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
