import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/team";

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

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Meet our architects</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Dedicated architects driving our vision
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-royal"
          >
            Reach out to us
          </Link>
        </div>
      </section>
    </>
  );
}
