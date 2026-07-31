import type { Member } from "@/lib/team";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type TeamCardProps = {
  member: Member;
  active: boolean;
  dimmed: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

export function TeamCard({ member, active, dimmed, onActivate, onDeactivate }: TeamCardProps) {
  return (
    <motion.article
      layout
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onMouseLeave={onDeactivate}
      animate={{
        opacity: dimmed ? 0.18 : 1,
        filter: dimmed ? "grayscale(0.65)" : "grayscale(0)",
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex h-[36rem] flex-col overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] transition-colors duration-500 lg:h-[34rem] ${
        active ? "border-royal/35" : "border-border"
      }`}
    >
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${member.name}'s LinkedIn profile`}
        className="relative block h-72 w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 lg:h-80"
      >
        <motion.img
          src={member.photo}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          className="h-full w-full object-cover"
          animate={{ scale: active ? 1.045 : 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
            <p className="mt-1 text-sm font-medium leading-snug text-royal">{member.role}</p>
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${member.name}'s LinkedIn profile`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-royal transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-accent"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <p className="mt-2 text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
          {member.credentials}
        </p>

        <AnimatePresence initial={false}>
          {active && (
            <motion.p
              key="bio"
              initial={{ opacity: 0, y: 14, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 8, height: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 overflow-hidden text-sm leading-relaxed text-muted-foreground"
            >
              {member.bio}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
