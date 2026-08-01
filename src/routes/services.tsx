import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { serviceShowcase } from "@/lib/serviceShowcase";

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

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:auto-rows-fr">
          {serviceShowcase.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.75, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative grid h-full min-h-[28rem] overflow-hidden rounded-3xl border border-white/10 bg-navy text-white shadow-[var(--shadow-elevated)] transition-colors duration-500 hover:border-sky/35 md:grid-cols-[0.95fr_1.05fr]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(32rem_18rem_at_88%_12%,rgba(115,195,255,0.18),transparent_58%)] opacity-80"
                />
                <div className="relative min-h-64 overflow-hidden bg-surface md:min-h-full">
                  <img
                    src={service.graphic}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: service.focus }}
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-white/5 md:bg-gradient-to-r md:from-transparent md:to-navy/35"
                  />
                </div>
                <div className="relative flex flex-col justify-between p-7 md:p-8">
                  <div>
                    <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sky shadow-sm backdrop-blur transition-all duration-500 group-hover:bg-sky group-hover:text-navy">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="max-w-md text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/72 md:text-base">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky/90">
                    <span className="h-px w-10 bg-sky/40" />
                    Digital Delivery
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
