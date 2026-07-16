import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
      <section className="container-page pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <SectionEyebrow>About us</SectionEyebrow>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
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
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionEyebrow>Technology</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
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
          <SectionEyebrow>Tools & Capabilities</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Global Project Experience
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Delivering projects using industry-leading BIM, digital engineering, and
            construction technology platforms trusted by global AEC professionals.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            "Autodesk Revit",
            "Autodesk Navisworks",
            "Autodesk AutoCAD",
            "Autodesk Construction Cloud (ACC)",
            "BIM 360",
            "Autodesk Docs",
            "Autodesk Civil 3D",
            "Autodesk InfraWorks",
            "Autodesk Recap",
            "Dynamo",
            "Rhino",
            "SketchUp",
            "Enscape",
            "Twinmotion",
            "Lumion",
            "Solibri",
            "Revizto",
            "Bluebeam",
            "Bentley MicroStation",
            "Tekla Structures",
            "Synchro",
            "Primavera P6",
            "Microsoft Project",
          ].map((platform) => (
            <div
              key={platform}
              className="flex items-center justify-center rounded-xl border border-border bg-card p-4 text-center text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-royal/40 hover:shadow-[var(--shadow-card)]"
            >
              {platform}
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="border-b border-border bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Success Stories</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
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
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
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
