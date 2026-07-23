import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { services } from "@/lib/services";

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
        <div className="container-page relative flex min-h-[58vh] items-center pt-32 pb-20 md:pt-40 md:pb-28">
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

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionEyebrow>Core BIM Disciplines</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Explore Our Specialized Services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Four focused service lines, one coordinated delivery mindset: accurate models, reliable
            documentation, and digital workflows built for real construction outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.key}
                className="reveal group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-sky/25 to-royal/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal to-navy text-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="relative mt-6 text-xl font-semibold leading-tight text-navy">
                  {service.name}
                </h3>
                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.cardDescription}
                </p>
                <Link
                  to={service.path}
                  className="group/link relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-royal"
                >
                  Learn More
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
