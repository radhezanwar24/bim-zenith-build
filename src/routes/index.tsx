import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Cpu, Cloud, Workflow } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import heroBim from "@/assets/hero-bim.jpg";
import techBg from "@/assets/tech-bg.jpg";


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
        {/* Photographic backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden>
          <img
            src={heroBim}
            alt=""
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, oklch(1 0 0 / 0.72) 0%, oklch(1 0 0 / 0.88) 55%, oklch(1 0 0 / 1) 100%), radial-gradient(60rem 30rem at 10% -10%, oklch(0.78 0.10 240 / 0.35), transparent 60%), radial-gradient(50rem 25rem at 90% 10%, oklch(0.52 0.19 260 / 0.18), transparent 60%)",
          }}
        />
        <div className="container-page pt-24 pb-28 md:pt-32 md:pb-36">
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
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal hover:shadow-[0_12px_28px_-12px_var(--royal)]"
              >
                Reach out to us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-6 py-3 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* TECHNOLOGY / INTELLIGENT TECH */}
      <section className="relative overflow-hidden border-y border-border bg-navy text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <img
            src={techBg}
            alt=""
            loading="lazy"
            width={1920}
            height={1000}
            className="h-full w-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.28 0.09 260 / 0.85), oklch(0.28 0.09 260 / 0.95))",
            }}
          />
        </div>
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5 reveal">
            <SectionEyebrow>Technology</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Transforming Projects with{" "}
              <span className="text-sky">Intelligent Technology</span>
            </h2>
          </div>
          <div className="md:col-span-7 reveal">
            <p className="text-lg leading-relaxed text-primary-foreground/85">
              We integrate advanced BIM technologies, AI powered automation, digital
              engineering workflows, and intelligent collaboration tools to deliver
              faster, smarter, and more efficient project outcomes.
            </p>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
              Integrating BIM, AI, cloud collaboration, and automation to redefine the
              future of digital project delivery.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Sparkles, label: "Advanced BIM" },
                { icon: Cpu, label: "AI-powered Automation" },
                { icon: Cloud, label: "Cloud Collaboration" },
                { icon: Workflow, label: "Digital Engineering" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="reveal flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/60 hover:bg-white/10"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky/20 text-sky">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-primary-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CONSULTANCY DESCRIPTION */}
      <section className="container-page py-20 md:py-28 bg-background border-t border-border">
        <div className="mx-auto max-w-4xl text-center reveal">
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
      <section className="container-page pb-24 reveal">
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
