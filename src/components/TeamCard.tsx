import type { Member } from "@/lib/team";

export function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
      <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-royal">{member.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
