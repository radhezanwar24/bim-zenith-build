import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Leadership Behind Infinity BIM" },
      {
        name: "description",
        content:
          "Four leaders. One vision. Transforming the future of the AEC industry through BIM, technology, and innovation.",
      },
      { property: "og:title", content: "Meet the Leadership Behind Infinity BIM" },
      {
        property: "og:description",
        content:
          "Four leaders. One vision. Transforming the future of the AEC industry through BIM, technology, and innovation.",
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
      <div className="mx-auto max-w-3xl text-center reveal">
        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
          Meet the Leadership Behind{" "}
          <span className="text-royal">Infinity BIM</span>
        </h1>
        <p className="mt-6 text-xl font-medium text-navy sm:text-2xl">
          Four leaders. One vision.
        </p>
        <p className="mt-2 text-base font-medium text-royal sm:text-lg">
          Driven by vision. United by excellence.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Transforming the future of the AEC industry through BIM, technology, and
          innovation.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <div
            key={m.name}
            className="reveal"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <TeamCard member={m} />
          </div>
        ))}
      </div>
    </section>
  );
}
