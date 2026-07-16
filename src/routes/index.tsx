import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Cpu, Cloud, Workflow } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinity BIM — Endless Possibilities in BIM" },
      {
        name: "description",
        content:
          "Digital Engineering and BIM consultancy delivering intelligent, coordinated, and automation-driven solutions for architects, consultants, contractors, and developers.",
      },
      { property: "og:title", content: "Infinity BIM — Endless Possibilities in BIM" },
      {
        property: "og:description",
        content:
          "Enhance your design experience. Transforming projects with intelligent technology.",
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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
          style={{
            background:
              "radial-gradient(60rem 30rem at 10% -10%, oklch(0.78 0.10 240 / 0.35), transparent 60%), radial-gradient(50rem 25rem at 90% 10%, oklch(0.52 0.19 260 / 0.18), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl text-center fade-up">
            <SectionEyebrow>About us</SectionEyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
              Enhance Your <span className="text-royal">Design Experience</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We specialize in providing comprehensive architectural services, from
              initial concept design to project completion, ensuring a seamless
              experience for our clients.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base italic text-muted-foreground">
              Start with the client — understand their vision and bring it to life.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-royal hover:shadow-md"
              >
                Reach out to us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY / INTELLIGENT TECH */}
      <section className="border-y border-border bg-surface">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <SectionEyebrow>Technology</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Transforming Projects with{" "}
              <span className="text-royal">Intelligent Technology</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We integrate advanced BIM technologies, AI powered automation, digital
              engineering workflows, and intelligent collaboration tools to deliver
              faster, smarter, and more efficient project outcomes.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Integrating BIM, AI, cloud collaboration, and automation to redefine the
              future of digital project delivery.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Sparkles, label: "Advanced BIM" },
                { icon: Cpu, label: "AI-powered Automation" },
                { icon: Cloud, label: "Cloud Collaboration" },
                { icon: Workflow, label: "Digital Engineering" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-royal/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-royal">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-navy">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTANCY DESCRIPTION */}
      <section className="container-page py-20 md:py-28 bg-background border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Consultancy</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Intelligent BIM & Digital Engineering
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We are a Digital Engineering and BIM consultancy delivering intelligent,
            coordinated, and automation-driven solutions for architects, consultants,
            contractors, and developers. Our expertise helps transform complex projects
            into efficient, accurate, and construction-ready outcomes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(30rem 15rem at 20% 0%, oklch(0.78 0.10 240 / 0.6), transparent 60%), radial-gradient(30rem 15rem at 80% 100%, oklch(0.52 0.19 260 / 0.7), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Let's build what's next, together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
              Reach out to discuss your project, or learn more about our team and
              capabilities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-navy transition-transform hover:scale-[1.02]"
              >
                Reach out to us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-white/10"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
