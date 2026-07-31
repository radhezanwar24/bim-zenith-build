import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
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
    <>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute left-[10%] top-[22%] h-40 w-40 rounded-[2rem] border border-royal/15 bg-sky/10 rotate-12 animate-float-slow"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[14%] top-[28%] h-56 w-56 rounded-full border border-sky/20 bg-royal/10 blur-sm animate-float-slow"
          style={{ animationDelay: "-3s" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />
        <div className="container-page relative flex min-h-[calc(100vh-5rem)] items-center justify-center py-20 md:py-28">
          <MotionReveal className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-royal/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur">
              Meet Our Team
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
              Meet the Leadership Behind <span className="text-royal">Infinity BIM</span>
            </h1>
          </MotionReveal>
        </div>
      </section>

      <section className="container-page pb-24 md:pb-32">
        <AnimatePresence mode="wait">
          {activeMember ? (
            <motion.div
              key={activeMember}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <TeamCard
                member={team.find((member) => member.name === activeMember) ?? team[0]}
                expanded
                variant="expanded"
                onToggle={() => setActiveMember(null)}
                onClose={() => setActiveMember(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="team-grid"
              layout
              className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              {team.map((member, index) => (
                <MotionReveal key={member.name} delay={index * 0.08}>
                  <TeamCard
                    member={member}
                    expanded={false}
                    onToggle={() => setActiveMember(member.name)}
                    onClose={() => setActiveMember(null)}
                  />
                </MotionReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
