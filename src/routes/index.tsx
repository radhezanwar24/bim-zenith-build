import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers,
  ShieldCheck,
  Users,
  Cpu,
  Sparkles,
} from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { MotionReveal } from "@/components/MotionReveal";
import { StatCounter } from "@/components/StatCounter";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { ClientLogosRow } from "@/components/ClientLogosRow";
import heroMain from "@/assets/hero-main.jpg";
import companyPreview from "@/assets/company-preview.jpg";
import trackBg from "@/assets/track-record-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinity BIM — Building the Future Through Intelligent BIM" },
      {
        name: "description",
        content:
          "Delivering BIM, Digital Engineering, CAD Automation, Scan-to-BIM, and Construction Technology solutions across global markets with precision and innovation.",
      },
      { property: "og:title", content: "Infinity BIM — Intelligent BIM & Digital Engineering" },
      {
        property: "og:description",
        content:
          "Global BIM & Digital Engineering consultancy for architects, consultants, contractors, and developers.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative -mt-20 overflow-hidden bg-navy">
        {/* Photographic backdrop */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src={heroMain}
            alt=""
            width={1920}
            height={1200}
            className="h-full w-full object-cover object-right opacity-90"
          />
          {/* Navy gradient wash for readability on the left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.20 0.07 260 / 0.95) 0%, oklch(0.20 0.07 260 / 0.72) 45%, oklch(0.20 0.07 260 / 0.15) 75%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-blueprint opacity-30" />
        </div>

        <div className="container-page relative flex min-h-[92vh] items-center pt-32 pb-24 md:min-h-[95vh] md:pt-40 md:pb-32">
          <div className="max-w-3xl fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" /> Digital Engineering · BIM ·
              Automation
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building the Future Through{" "}
              <span className="bg-gradient-to-r from-sky via-white to-sky bg-clip-text text-transparent">
                Intelligent BIM
              </span>{" "}
              & Digital Engineering
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80 md:text-xl">
              Delivering BIM, Digital Engineering, CAD Automation, Scan-to-BIM, and Construction
              Technology solutions across global markets with precision and innovation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky hover:shadow-[0_16px_32px_-16px_rgba(255,255,255,0.6)]"
              >
                Explore Services
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />
      </section>

      {/* ========== COMPANY PREVIEW ========== */}
      <section className="container-page py-16 sm:py-14 sm:py-18 md:py-24">
        <div className="grid gap-8 md:gap-12 md:grid-cols-12 md:items-center">
          <div className="reveal reveal-left md:col-span-6">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
              <img
                src={companyPreview}
                alt="BIM team collaborating around a 3D model"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, oklch(0.20 0.07 260 / 0.25) 100%)",
                }}
                aria-hidden
              />
            </div>
          </div>

          <div className="reveal reveal-right md:col-span-6 md:pl-6">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Engineering Better <span className="text-royal">Digital Construction</span>
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-royal">
              Established in 2022
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Infinity BIM delivers intelligent Building Information Modeling (BIM), Digital
              Engineering, CAD, and Automation solutions for architects, engineers, contractors, and
              infrastructure professionals worldwide. We combine engineering expertise with
              technology to create efficient, coordinated, and future-ready project delivery.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal"
            >
              Learn More
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== KEY MILESTONES ========== */}
      <section className="relative overflow-hidden border-y border-border bg-surface py-16 sm:py-14 sm:py-18 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-35" aria-hidden />
        <div className="container-page grid gap-8 md:grid-cols-2">
          {/* Left dark card */}
          <MotionReveal
            direction="left"
            className="relative overflow-hidden rounded-3xl bg-navy p-10 text-primary-foreground shadow-[var(--shadow-elevated)] md:p-12"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(28rem 14rem at 20% 0%, oklch(0.78 0.10 240 / 0.35), transparent 60%), radial-gradient(28rem 14rem at 100% 100%, oklch(0.52 0.19 260 / 0.5), transparent 60%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-blueprint opacity-20"
              aria-hidden
            />
            <div className="relative">
              <SectionEyebrow>
                <span className="text-sky">Milestones</span>
              </SectionEyebrow>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Key Milestones
              </h3>
              <ul className="mt-8 space-y-4">
                {[
                  "Global Project Delivery",
                  "Multi-Sector Engineering Expertise",
                  "End-to-End BIM Solutions",
                  "International Quality Standards",
                  "Dedicated BIM Specialists",
                  "Automation-Driven Workflows",
                ].map((item, index) => (
                  <li key={item} className="relative flex items-start gap-4">
                    {index < 5 && (
                      <span
                        className="absolute left-[9px] top-7 h-[calc(100%+0.65rem)] w-px bg-gradient-to-b from-sky/45 to-white/10"
                        aria-hidden
                      />
                    )}
                    <span className="relative z-10 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-sky/50 bg-navy shadow-[0_0_0_5px_rgba(255,255,255,0.04)]">
                      <CheckCircle2 className="h-4 w-4 text-sky" aria-hidden />
                    </span>
                    <span className="text-base text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>

          {/* Right light card */}
          <MotionReveal
            direction="right"
            className="relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-card)] md:p-12"
          >
            <div
              className="bg-blueprint pointer-events-none absolute inset-0 opacity-40"
              aria-hidden
            />
            <div className="relative">
              <SectionEyebrow>Our Services</SectionEyebrow>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                Delivering Excellence Through Intelligent BIM
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Infinity BIM delivers intelligent Building Information Modeling (BIM) solutions that
                enhance collaboration, improve project certainty, and optimize delivery across the
                entire project lifecycle. We help clients make informed decisions, minimize risks,
                and achieve greater efficiency through data-driven digital workflows.
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-royal">
                Engineering Digital Excellence. Delivering Real-World Results.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: Layers, label: "End-to-end BIM" },
                  { icon: Globe2, label: "Global delivery" },
                  { icon: ShieldCheck, label: "ISO standards" },
                  { icon: Users, label: "Expert team" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl bg-accent/50 px-3 py-2.5"
                  >
                    <Icon className="h-4 w-4 text-royal" aria-hidden />
                    <span className="text-xs font-medium text-navy">{label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="group mt-10 inline-flex items-center gap-2 self-start rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal"
              >
                Discover More
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="container-page py-16 sm:py-14 sm:py-18 md:py-24">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            End-to-End <span className="text-royal">BIM & Digital Engineering</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            A complete suite of intelligent modeling, coordination, and automation services —
            delivered by seasoned BIM specialists.
          </p>
        </div>
        <ServicesGrid />
      </section>

      {/* ========== GLOBAL PROJECT EXPERIENCE ========== */}
      <section className="border-y border-border bg-surface py-16 sm:py-14 sm:py-18 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center reveal">
            <SectionEyebrow>Global Project Experience</SectionEyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Trusted by Global AEC Leaders
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Delivering BIM and Digital Engineering solutions using industry-leading construction
              technology trusted by global AEC professionals.
            </p>
          </div>
          <div className="reveal">
            <ClientLogosRow />
          </div>
        </div>
      </section>

      {/* ========== TRACK RECORD ========== */}
      <section className="relative overflow-hidden bg-navy py-24 text-primary-foreground md:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src={trackBg}
            alt=""
            loading="lazy"
            width={1920}
            height={912}
            className="h-full w-full object-cover opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.20 0.07 260 / 0.85), oklch(0.20 0.07 260 / 0.95))",
            }}
          />
        </div>
        {/* Blue highlight strip */}
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-sky to-transparent"
          aria-hidden
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center reveal">
            <SectionEyebrow>
              <span className="text-sky">Our Track Record</span>
            </SectionEyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Excellence, Measured in Numbers
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-primary-foreground/75">
              Delivering BIM and Digital Engineering excellence across multiple industries and
              international markets.
            </p>
          </div>
          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <StatCounter value={30} label="Projects Delivered" />
            <StatCounter value={5} label="Industry Sectors" />
            <StatCounter value={6} label="Countries Served" />
            <StatCounter value={25} label="BIM Professionals" />
            <StatCounter value={10} label="Years Combined Experience" />
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="container-page py-16 sm:py-14 sm:py-18 md:py-24">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionEyebrow>Industries Served</SectionEyebrow>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Sectors We <span className="text-royal">Power</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            From healthcare to hyperscale data centers — Infinity BIM delivers coordinated
            engineering across every major built environment.
          </p>
        </div>
        <IndustriesGrid />
      </section>

      {/* ========== WHY CHOOSE ========== */}
      <section className="border-t border-border bg-surface py-16 sm:py-14 sm:py-18 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center reveal">
            <SectionEyebrow>Why Infinity BIM</SectionEyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              A Partner Built for <span className="text-royal">Complex Delivery</span>
            </h2>
          </div>
          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Automation-Driven",
                desc: "Dynamo, scripting, and AI-assisted workflows that compress delivery timelines.",
              },
              {
                icon: Globe2,
                title: "Global Standards",
                desc: "ISO 19650-aligned delivery with international quality benchmarks.",
              },
              {
                icon: Sparkles,
                title: "Intelligent Coordination",
                desc: "Multi-discipline clash-free models that construct right the first time.",
              },
              {
                icon: ShieldCheck,
                title: "Reliable Delivery",
                desc: "Predictable timelines, transparent reporting, and rigorous QA/QC.",
              },
              {
                icon: Users,
                title: "Senior BIM Talent",
                desc: "Modelers, coordinators, and engineers with deep sector experience.",
              },
              {
                icon: Layers,
                title: "End-to-End Scope",
                desc: "From concept design through construction, handover, and digital twin.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal to-navy text-primary-foreground shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-primary-foreground shadow-[var(--shadow-elevated)] md:px-16 md:py-24 reveal reveal-scale">
          <div
            className="pointer-events-none absolute inset-0 bg-blueprint opacity-30"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(30rem 15rem at 20% 0%, oklch(0.78 0.10 240 / 0.35), transparent 60%), radial-gradient(30rem 15rem at 80% 100%, oklch(0.52 0.19 260 / 0.5), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Let's build what's next, together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
              Reach out to discuss your project, or learn more about our team and global engineering
              capabilities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky"
              >
                Contact Us
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
