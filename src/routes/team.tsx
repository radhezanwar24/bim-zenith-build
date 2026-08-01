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
      <section className="relative isolate overflow-hidden bg-transparent text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[90%] bg-[linear-gradient(135deg,#061329_0%,#0d2a52_54%,#174c81_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[90%] bg-[radial-gradient(52rem_28rem_at_50%_47%,rgba(111,195,255,0.2),transparent_72%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-[78%] h-40 bg-gradient-to-b from-transparent via-background/72 to-background"
          aria-hidden
        />
        <div className="container-page relative flex min-h-[58vh] items-center justify-center py-14 sm:min-h-[70vh] sm:py-20 md:min-h-[min(720px,calc(100vh-5rem))] md:py-24">
          <MotionReveal className="mx-auto max-w-4xl -translate-y-6 text-center md:-translate-y-16">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:text-xs">
              Meet Our Team
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:text-5xl md:text-6xl">
              Meet the Leadership Behind <span className="text-sky-200">Infinity BIM</span>
            </h1>
          </MotionReveal>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20 md:pb-28">
        <AnimatePresence mode="wait">
          {activeMember ? (
            <motion.div
              key={activeMember}
              className="-mx-4 sm:mx-0"
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
              className="grid grid-cols-1 items-stretch gap-4 min-[520px]:grid-cols-2 sm:gap-5 lg:grid-cols-4"
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
