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
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:flex lg:items-stretch"
        onMouseLeave={() => setActiveMember(null)}
      >
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            layout
            className="min-w-0 lg:basis-0"
            animate={{
              flexGrow: activeMember === m.name ? 2.45 : 1,
              flexShrink: activeMember && activeMember !== m.name ? 1.2 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <MotionReveal delay={i * 0.08}>
              <TeamCard
                member={m}
                active={activeMember === m.name}
                dimmed={activeMember !== null && activeMember !== m.name}
                onActivate={() => setActiveMember(m.name)}
                onDeactivate={() => setActiveMember(null)}
              />
            </MotionReveal>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
