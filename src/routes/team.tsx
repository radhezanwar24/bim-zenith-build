import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

import { MotionReveal } from "@/components/MotionReveal";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Leadership Behind Infinity BIM" },
      {
        name: "description",
        content:
          "Driven by vision. United by excellence. Transforming the future of the AEC industry through BIM, technology, and innovation.",
      },
      { property: "og:title", content: "Meet the Leadership Behind Infinity BIM" },
      {
        property: "og:description",
        content:
          "Driven by vision. United by excellence. Transforming the future of the AEC industry through BIM, technology, and innovation.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  return (
    <section className="container-page py-20 md:py-28">
      <MotionReveal className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
          Meet the Leadership Behind <span className="text-royal">Infinity BIM</span>
        </h1>
        <p className="mt-6 text-xl font-medium text-navy sm:text-2xl">
          Driven by vision. United by excellence.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Transforming the future of the AEC industry through BIM, technology, and innovation.
        </p>
      </MotionReveal>

      <motion.div
        layout
        className="mt-32 grid items-start gap-6 sm:grid-cols-2 md:mt-40 lg:grid-cols-4"
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {team.map((member, index) => {
          const expanded = activeMember === member.name;

          return (
            <MotionReveal key={member.name} delay={index * 0.08}>
              <TeamCard
                member={member}
                expanded={expanded}
                onToggle={() => setActiveMember(expanded ? null : member.name)}
                onClose={() => setActiveMember(null)}
              />
            </MotionReveal>
          );
        })}
      </motion.div>
    </section>
  );
}
