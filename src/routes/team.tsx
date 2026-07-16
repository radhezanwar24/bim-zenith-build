import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Architects — Infinity BIM" },
      {
        name: "description",
        content:
          "Meet the dedicated architects and engineers driving Infinity BIM's vision in digital engineering, BIM, and automation.",
      },
      { property: "og:title", content: "Meet Our Architects — Infinity BIM" },
      {
        property: "og:description",
        content: "Dedicated architects driving our vision.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center fade-up">
        <SectionEyebrow>Meet our architects</SectionEyebrow>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Dedicated architects driving our vision
        </h1>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}
