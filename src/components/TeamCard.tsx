import type { Member } from "@/lib/team";

export function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-royal/30 hover:shadow-[var(--shadow-elevated)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-royal">{member.role}</p>
        <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
          {member.credentials}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
