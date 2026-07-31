import type { Member } from "@/lib/team";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type TeamCardProps = {
  member: Member;
  variant?: "compact" | "expanded";
  onActivate: () => void;
  onDeactivate: () => void;
};

function QualificationLines({ credentials }: { credentials: string }) {
  return (
    <div className="mt-3 space-y-1.5 text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
      {credentials.split("|").map((item) => (
        <p key={item.trim()}>{item.trim()}</p>
      ))}
    </div>
  );
}

export function TeamCard({ member, variant = "compact", onActivate, onDeactivate }: TeamCardProps) {
  const expanded = variant === "expanded";

  return (
    <motion.article
      layout
      onMouseEnter={onActivate}
      onPointerEnter={onActivate}
      onFocus={onActivate}
      onMouseLeave={expanded ? onDeactivate : undefined}
      onPointerLeave={expanded ? onDeactivate : undefined}
      onBlur={expanded ? onDeactivate : undefined}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] transition-colors duration-500 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)] ${
        expanded
          ? "grid min-h-[32rem] grid-cols-1 md:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]"
          : "flex h-[34rem] flex-col"
      }`}
    >
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${member.name}'s LinkedIn profile`}
        className={`relative block overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 ${
          expanded ? "min-h-[24rem] md:h-full" : "h-72 lg:h-80"
        }`}
      >
        <motion.img
          src={member.photo}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          className="h-full w-full object-contain"
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/35 via-navy/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </a>

      <div className={`flex flex-1 flex-col ${expanded ? "justify-center p-8 md:p-10" : "p-6"}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`font-semibold text-navy ${
                expanded ? "text-3xl tracking-tight md:text-4xl" : "text-lg"
              }`}
            >
              {member.name}
            </h3>
            <p
              className={`mt-2 font-medium leading-snug text-royal ${
                expanded ? "text-base md:text-lg" : "text-sm"
              }`}
            >
              {member.role}
            </p>
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

        <QualificationLines credentials={member.credentials} />

        {expanded && (
          <motion.p
            key="bio"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {member.bio}
          </motion.p>
        )}
      </div>
    </motion.article>
  );
}
