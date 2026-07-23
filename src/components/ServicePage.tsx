import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Service } from "@/lib/services";
import { serviceHighlights } from "@/lib/services";

export function ServicePage({ service }: { service: Service }) {
  const HeroIcon = service.icon;

  return (
    <>
      <section className="relative -mt-20 overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(34rem 18rem at 14% 18%, oklch(0.78 0.10 240 / 0.28), transparent 62%), radial-gradient(30rem 18rem at 88% 76%, oklch(0.52 0.19 260 / 0.36), transparent 64%)",
          }}
          aria-hidden
        />
        <div className="container-page relative grid min-h-[66vh] gap-10 pt-32 pb-20 md:grid-cols-12 md:items-center md:pt-40 md:pb-28">
          <div className="fade-up md:col-span-8">
            <SectionEyebrow>
              <span className="text-sky">Infinity BIM Services</span>
            </SectionEyebrow>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
              {service.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/82 md:text-xl">
              {service.description}
            </p>
          </div>
          <div className="fade-up md:col-span-4">
            <div className="ml-auto max-w-sm rounded-3xl border border-white/15 bg-white/10 p-7 text-white shadow-[0_22px_60px_-34px_rgba(255,255,255,0.55)] backdrop-blur">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-royal shadow-sm">
                <HeroIcon className="h-8 w-8" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-semibold text-white">{service.name}</h2>
              <div className="mt-6 grid gap-3">
                {serviceHighlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-white/82">
                    <Icon className="h-4 w-4 text-sky" aria-hidden />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="reveal md:col-span-5">
            <SectionEyebrow>Introduction</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Coordinated BIM support from early design to handover.
            </h2>
          </div>
          <div className="reveal md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">{service.introduction}</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We align model development, documentation, coordination, and deliverables with the
              technical standards of each project so design and construction teams can work from
              reliable digital information.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center reveal">
            <SectionEyebrow>Service Scope</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Explore the Details
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Expand each section to review capabilities, project types, deliverables, and the
              technology stack used by Infinity BIM.
            </p>
          </div>

          <Accordion type="single" collapsible className="mx-auto mt-12 max-w-4xl space-y-4">
            {service.sections.map((section, index) => (
              <AccordionItem
                key={section.title}
                value={`section-${index}`}
                className="reveal overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)] transition-all duration-300 data-[state=open]:border-royal/30 data-[state=open]:shadow-[var(--shadow-elevated)] md:px-6"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy no-underline hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-royal [&>svg]:transition-transform [&>svg]:duration-300">
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-royal">
                      <Check className="h-5 w-5" aria-hidden />
                    </span>
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="reveal relative overflow-hidden rounded-3xl bg-navy px-7 py-12 text-center text-primary-foreground shadow-[var(--shadow-elevated)] md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-blueprint opacity-25"
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to strengthen your next project with intelligent BIM?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/78">
              Partner with Infinity BIM for coordinated, construction-ready digital delivery across
              complex AEC and infrastructure projects.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky"
              >
                Start a Conversation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center reveal">
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Discuss your BIM requirements.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Send us your scope, drawings, or coordination requirements and our team will respond
              with the next steps.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a
              href="mailto:info.infinitybim@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-royal">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block text-sm font-medium text-navy group-hover:text-royal">
                  info.infinitybim@gmail.com
                </span>
              </span>
            </a>
            <a
              href="tel:+919067059933"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-royal">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone
                </span>
                <span className="mt-1 block text-sm font-medium text-navy group-hover:text-royal">
                  +91 9067059933
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
