import { createFileRoute, Link } from "@tanstack/react-router";
import { MotionReveal } from "@/components/MotionReveal";
import { SoftwareGrid } from "@/components/SoftwareGrid";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Target, Users, Clock, Globe, Handshake } from "lucide-react";
import aiBimHero from "@/assets/ai-bim-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Infinity BIM" },
      {
        name: "description",
        content:
          "Infinity BIM is a Digital Engineering and BIM consultancy transforming complex projects into efficient, accurate, and construction-ready outcomes.",
      },
      { property: "og:title", content: "About Us — Infinity BIM" },
      {
        property: "og:description",
        content:
          "Digital Engineering and BIM consultancy delivering intelligent, coordinated, and automation-driven solutions.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* INNOVATION IN PROGRESS — HERO */}
      <section className="relative -mt-20 overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src={aiBimHero}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.20 0.07 260 / 0.85) 0%, oklch(0.20 0.07 260 / 0.65) 55%, oklch(0.20 0.07 260 / 0.85) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-blueprint opacity-25" />
        </div>
        <div className="container-page relative flex min-h-[70vh] items-center pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" /> Innovation in Progress
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Wall Automation{" "}
              <span className="bg-gradient-to-r from-sky via-white to-sky bg-clip-text text-transparent">
                Successfully Completed
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Now integrating AI-powered BIM technologies for smarter digital engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pt-20 pb-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <h2 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Delivering Excellence Through <span className="text-royal">Intelligent BIM</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Infinity BIM delivers intelligent Building Information Modeling (BIM) solutions that
            enhance collaboration, improve project certainty, and optimize delivery across the
            entire project lifecycle. We help clients make informed decisions, minimize risks, and
            achieve greater efficiency through data-driven digital workflows.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base italic text-muted-foreground">
            Engineering Digital Excellence. Delivering Real-World Results.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-royal">
            Established in 2022
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page py-20">
          <MotionReveal className="mx-auto mb-16 max-w-4xl text-left">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Transforming Projects with{" "}
                <span className="text-royal">Intelligent Technology</span>
              </h2>
            </div>
            <div className="mt-7 max-w-3xl space-y-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We integrate advanced BIM technologies, AI powered automation, digital engineering
                workflows, and intelligent collaboration tools to deliver faster, smarter, and more
                efficient project outcomes.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Integrating BIM, AI, cloud collaboration, and automation to redefine the future of
                digital project delivery.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We are a Digital Engineering and BIM consultancy delivering intelligent,
                coordinated, and automation-driven solutions for architects, consultants,
                contractors, and developers. Our expertise helps transform complex projects into
                efficient, accurate, and construction-ready outcomes.
              </p>
            </div>
          </MotionReveal>

          {/* Core Values / Capability Grid */}
          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[var(--shadow-elevated)] border border-white/10">
            {/* Blueprint Grid Overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-blueprint opacity-10"
              aria-hidden
            />

            {/* Glowing Accent Radial Gradient */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, oklch(0.78 0.10 240 / 0.15), transparent 60%)",
              }}
              aria-hidden
            />

            <div className="relative grid grid-cols-1 divide-y divide-white/20 text-center md:grid-cols-5 md:divide-x md:divide-y-0">
              {/* ACCURATE */}
              <div className="group flex flex-col items-center p-6 md:py-4 lg:py-6 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky transition-all duration-300 group-hover:bg-sky/20 group-hover:scale-110 shadow-inner">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-display">
                  Accurate
                </h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-[180px]">
                  High-quality models with precise data and documentation
                </p>
              </div>

              {/* COORDINATED */}
              <div className="group flex flex-col items-center p-6 md:py-4 lg:py-6 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky transition-all duration-300 group-hover:bg-sky/20 group-hover:scale-110 shadow-inner">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-display">
                  Coordinated
                </h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-[180px]">
                  Clash-free, coordinated models for smooth project execution
                </p>
              </div>

              {/* EFFICIENT */}
              <div className="group flex flex-col items-center p-6 md:py-4 lg:py-6 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky transition-all duration-300 group-hover:bg-sky/20 group-hover:scale-110 shadow-inner">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-display">
                  Efficient
                </h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-[180px]">
                  Streamlined workflows that save time, cost & resources
                </p>
              </div>

              {/* GLOBAL EXPERIENCE */}
              <div className="group flex flex-col items-center p-6 md:py-4 lg:py-6 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky transition-all duration-300 group-hover:bg-sky/20 group-hover:scale-110 shadow-inner">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-display">
                  Global Experience
                </h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-[180px]">
                  Successfully delivered projects in Asia, North America, Europe & Middle East
                </p>
              </div>

              {/* COLLABORATIVE */}
              <div className="group flex flex-col items-center p-6 md:py-4 lg:py-6 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky transition-all duration-300 group-hover:bg-sky/20 group-hover:scale-110 shadow-inner">
                  <Handshake className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-display">
                  Collaborative
                </h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-[180px]">
                  Strong communication and dedicated project support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL PROJECT EXPERIENCE */}
      <section className="container-page py-20 md:py-28 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Global Project Experience
          </h2>
          <div className="hidden">{/* removed eyebrow */}</div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Delivering projects using industry-leading BIM, digital engineering, and construction
            technology platforms trusted by global AEC professionals.
          </p>
        </div>

        <div className="reveal">
          <SoftwareGrid />
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="border-b border-border bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Client Testimonials
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What our clients are saying about us.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-dashed border-border bg-background px-8 py-16 text-center shadow-[var(--shadow-card)]">
            <p className="text-lg font-medium text-navy">Client feedback is being collected.</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              We partner with global teams to deliver exceptional digital delivery results. Verified
              client stories will be published after review and approval.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY VISION */}
      <section className="relative overflow-hidden bg-navy py-20 text-primary-foreground md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(30rem 15rem at 15% 0%, oklch(0.78 0.10 240 / 0.30), transparent 60%), radial-gradient(30rem 15rem at 85% 100%, oklch(0.52 0.19 260 / 0.45), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container-page relative mx-auto max-w-4xl text-center reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-sky">
            Our Vision
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-sky via-white to-sky bg-clip-text text-transparent">
              Digital Engineering
            </span>
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            <p>
              Infinity BIM was established with the vision to transform project delivery through
              BIM, intelligent BIM, digital engineering, and innovation.
            </p>
            <p>
              We believe strong partnerships, technical excellence, and continuous improvement are
              the foundation of every successful project.
            </p>
            <p>
              As we grow globally, our commitment remains the same — delivering quality,
              reliability, and value to every client.
            </p>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-sky">
            Established in 2022
          </p>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}

      <section className="bg-background py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold text-navy">
                What services does your company offer?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Infinity BIM provides comprehensive BIM, Digital Engineering, and Structural
                Engineering solutions for architects, consultants, contractors, developers, and EPC
                companies worldwide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-semibold text-navy">
                Which countries do you work in?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Infinity BIM supports projects across the USA, Canada, United Kingdom, Australia,
                United Arab Emirates, Saudi Arabia, Qatar, Singapore, India, and other international
                markets through remote digital collaboration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-semibold text-navy">
                How can I request a proposal?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Simply contact our team through the website, share your project drawings or
                requirements, and we'll provide a tailored technical and commercial proposal along
                with the project scope, timeline, and delivery plan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-royal"
            >
              Reach out to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
