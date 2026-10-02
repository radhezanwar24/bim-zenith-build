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
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-royal">
            Selected Project Experience
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Our Landmark Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Delivering precision modeling, clash resolution, and constructability excellence for prominent developments across the globe.
          </p>
        </MotionReveal>

        {/* TEAM-STYLE IN-PAGE EXPANSION OR 3-COLUMN GRID */}
        <AnimatePresence mode="wait">
          {selectedProject ? (
            /* EXPANDED PROJECT SHOWCASE CARD (NON-SCROLLABLE) */
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.42, ease: premiumEase }}
              className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8 md:p-10"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-navy shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:border-royal hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)] md:gap-10">
                {/* LEFT: IMAGE */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted shadow-sm md:h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: selectedProject.objectPosition ?? "center" }}
                  />
                </div>

                {/* RIGHT: DETAILS */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* CATEGORY & LOCATION */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-md bg-royal/10 px-3 py-1 text-royal font-semibold">
                        <Building2 className="h-3.5 w-3.5" />
                        {selectedProject.category}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-foreground/80 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-royal" />
                        {selectedProject.location}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                      {selectedProject.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {selectedProject.description}
                    </p>

                    {/* BIM SCOPE CHECKLIST */}
                    <div className="mt-6 rounded-xl border border-border/80 bg-muted/40 p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                        <Layers className="h-4 w-4 text-royal" />
                        Key BIM Scope
                      </div>
                      <ul className="mt-3 grid grid-cols-1 gap-2 text-xs font-medium text-foreground/85 sm:grid-cols-2 sm:text-sm">
                        {selectedProject.services.map((service) => (
                          <li key={service} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-royal" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-muted"
                    >
                      Back to All Projects
                    </button>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-royal"
                    >
                      Inquire About Similar Projects
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* 3-COLUMN PROJECT GRID WITH UNIFORM HEIGHT */
            <motion.div
              key="project-grid"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.42, ease: premiumEase }}
              className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project, idx) => (
                <MotionReveal key={project.id} delay={idx * 0.08} className="h-full">
                  <motion.article
                    onClick={() => setSelectedProject(project)}
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)]"
                  >
                    {/* IMAGE CONTAINER */}
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">
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
                    <div className="flex flex-1 flex-col justify-between p-6">
                      {/* CATEGORY & LOCATION */}
                      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-md bg-royal/10 px-2.5 py-1 text-royal font-semibold">
                          <Building2 className="h-3.5 w-3.5" />
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-foreground/80 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-royal" />
                          {project.location}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl font-bold tracking-tight text-navy transition-colors group-hover:text-royal">
                        {project.title}
                      </h3>
                    </div>
                  </motion.article>
                </MotionReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <MotionReveal className="mt-20 overflow-hidden rounded-3xl border border-royal/20 bg-navy p-8 text-white shadow-xl sm:p-12 md:mt-24 md:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Start Your Project
            </span>
            <h3 className="mt-5 mb-3 text-2xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl">
              Ready to Accelerate Your Project with Infinity BIM?
            </h3>
            <p className="mt-2 text-base leading-relaxed text-white/90 sm:text-lg">
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
    </>
  );
}
