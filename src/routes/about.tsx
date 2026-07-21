import { createFileRoute, Link } from "@tanstack/react-router";
import { SoftwareGrid } from "@/components/SoftwareGrid";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
            Enhance Your <span className="text-royal">Design Experience</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We specialize in providing comprehensive architectural services, from
            initial concept design to project completion, ensuring a seamless
            experience for our clients.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base italic text-muted-foreground">
            Start with the client — understand their vision and bring it to life.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-royal">
            Established in 2022
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">

              Transforming Projects with{" "}
              <span className="text-royal">Intelligent Technology</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We integrate advanced BIM technologies, AI powered automation, digital
              engineering workflows, and intelligent collaboration tools to deliver
              faster, smarter, and more efficient project outcomes.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Integrating BIM, AI, cloud collaboration, and automation to redefine the
              future of digital project delivery.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We are a Digital Engineering and BIM consultancy delivering intelligent,
              coordinated, and automation-driven solutions for architects, consultants,
              contractors, and developers. Our expertise helps transform complex
              projects into efficient, accurate, and construction-ready outcomes.
            </p>
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
            Delivering projects using industry-leading BIM, digital engineering, and
            construction technology platforms trusted by global AEC professionals.
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
            <p className="text-lg font-medium text-navy">Testimonials coming soon.</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              We partner with global teams to deliver exceptional digital delivery results. Testimonials from our clients will be published here soon.
            </p>
          </div>
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
                Engineering solutions for architects, consultants, contractors, developers,
                and EPC companies worldwide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-semibold text-navy">
                Which countries do you work in?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Infinity BIM supports projects across the USA, Canada, United Kingdom,
                Australia, United Arab Emirates, Saudi Arabia, Qatar, Singapore, India,
                and other international markets through remote digital collaboration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-semibold text-navy">
                How can I request a proposal?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Simply contact our team through the website, share your project drawings
                or requirements, and we'll provide a tailored technical and commercial
                proposal along with the project scope, timeline, and delivery plan.
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
