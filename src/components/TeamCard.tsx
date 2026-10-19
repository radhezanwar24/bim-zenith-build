import type { Member } from "@/lib/team";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type TeamCardProps = {
  member: Member;
  expanded: boolean;
  variant?: "compact" | "expanded";
  onToggle: () => void;
  onClose: () => void;
};

const premiumEase = [0.16, 1, 0.3, 1] as const;

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <rect width="24" height="24" rx="2.5" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M5.35 8.82h3.05v9.84H5.35V8.82Zm1.53-4.9a1.77 1.77 0 1 1-.02 3.54 1.77 1.77 0 0 1 .02-3.54Zm3.43 4.9h2.92v1.34h.04c.41-.77 1.4-1.58 2.88-1.58 3.08 0 3.65 2.03 3.65 4.66v5.42h-3.05v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54v4.88h-3V8.82Z"
      />
    </svg>
  );
}

function QualificationLines({ credentials }: { credentials: string }) {
  return (
    <div className="mt-2.5 flex flex-col gap-1">
      {credentials.split("|").map((item) => (
        <p
          key={item.trim()}
          className="text-[0.6rem] font-medium uppercase tracking-[0.13em] text-muted-foreground"
        >
          {item.trim()}
        </p>
      ))}
    </div>
  );
}

function ProfileSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-royal/65">
        {label}
      </p>
      <p className="text-[0.8rem] leading-relaxed text-foreground/70 sm:text-sm">
        {children}
      </p>
    </div>
  );
}

export function TeamCard({
  member,
  expanded,
  variant = "compact",
  onToggle,
  onClose,
}: TeamCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageReady, setImageReady] = useState(false);
  const isWide = variant === "expanded";
  const compactObjectPosition = member.compactObjectPosition ?? "center 12%";
  const expandedObjectPosition =
    member.expandedObjectPosition ?? compactObjectPosition;
  const imageScale = isWide
    ? (member.expandedScale ?? 1)
    : (member.compactScale ?? 1.08);

  useEffect(() => {
    setImageReady(false);
    const img = imageRef.current;
    if (img?.complete && img.naturalWidth > 0) setImageReady(true);
  }, [member.photo]);

  /* ── COMPACT CARD (unchanged) ─────────────────────────────── */
  if (!isWide) {
    return (
      <motion.article
        layout
        transition={{ duration: 0.45, ease: premiumEase }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)]"
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={`Expand ${member.name}'s profile`}
          className="relative block aspect-[4/5] w-full shrink-0 overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2"
        >
          <motion.div
            aria-hidden
            initial={false}
            animate={{ opacity: imageReady ? 0 : 1 }}
            transition={{ duration: 0.35, ease: premiumEase }}
            className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.96_0.005_240),oklch(0.985_0.003_240),oklch(0.94_0.03_240))]"
          />
          <img
            ref={imageRef}
            src={member.photo}
            alt={`Portrait of ${member.name}, ${member.role}`}
            loading="eager"
            decoding="async"
            onLoad={() => setImageReady(true)}
            className={`block h-full w-full object-cover transition-opacity duration-500 ${
              imageReady ? "opacity-100" : "opacity-0"
            }`}
            style={{
              objectPosition: compactObjectPosition,
              transform: `scale(${imageScale})`,
              transformOrigin: "center top",
            }}
          />
        </button>

        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${member.name}'s LinkedIn profile`}
                className="inline-block text-sm font-semibold leading-tight text-navy transition-colors hover:text-royal sm:text-lg"
              >
                {member.name}
              </a>
              <p className="mt-1 text-[0.72rem] font-medium leading-snug text-royal sm:text-sm">
                {member.role}
              </p>
            </div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${member.name}'s LinkedIn profile`}
              className="grid h-7 w-7 shrink-0 place-items-center text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85 sm:h-9 sm:w-9"
            >
              <LinkedInMark />
            </a>
          </div>
        </div>
      </motion.article>
    );
  }

  /* ── EXPANDED CARD ────────────────────────────────────────── */
  return (
    <motion.article
      layout
      transition={{ duration: 0.45, ease: premiumEase }}
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label={`Close ${member.name}'s profile`}
        className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/90 text-navy shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-accent"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>

      {/* Inner grid — image | content */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">

        {/* ── LEFT: Photo ── */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={`Collapse ${member.name}'s profile`}
          className="relative block min-h-[300px] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-inset md:min-h-[580px]"
        >
          {/* Skeleton shimmer */}
          <motion.div
            aria-hidden
            initial={false}
            animate={{ opacity: imageReady ? 0 : 1 }}
            transition={{ duration: 0.35, ease: premiumEase }}
            className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.96_0.005_240),oklch(0.985_0.003_240),oklch(0.94_0.03_240))]"
          />
          {/* Photo — fills the entire column */}
          <motion.img
            ref={imageRef}
            src={member.photo}
            alt={`Portrait of ${member.name}, ${member.role}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageReady(true)}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: expandedObjectPosition,
              transform: `scale(${imageScale})`,
              transformOrigin: "center top",
            }}
            initial={false}
            animate={{ opacity: imageReady ? 1 : 0 }}
            transition={{ duration: 0.45, ease: premiumEase }}
          />
          {/* Subtle right-edge fade for seamless blend into content */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-card/30 hidden md:block"
          />
        </button>

        {/* ── RIGHT: Content ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded-content"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.4, ease: premiumEase, delay: 0.06 }}
              className="flex max-h-[580px] flex-col overflow-y-auto px-6 py-7 sm:px-8 sm:py-8"
            >
              {/* Name + LinkedIn */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${member.name}'s LinkedIn profile`}
                    className="inline-block text-2xl font-semibold tracking-tight text-navy transition-colors hover:text-royal sm:text-3xl"
                  >
                    {member.name}
                  </a>
                  <p className="mt-1.5 text-sm font-medium text-royal sm:text-base">
                    {member.role}
                  </p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${member.name}'s LinkedIn profile`}
                  className="mt-0.5 shrink-0 text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85"
                >
                  <LinkedInMark />
                </a>
              </div>

              {/* Credentials */}
              <QualificationLines credentials={member.credentials} />

              {/* Divider */}
              <div className="my-5 h-px w-full bg-border/70" />

              {/* Profile sections */}
              <div className="space-y-5">
                <ProfileSection label="Director's Role">
                  {member.bio}
                </ProfileSection>

                <div className="h-px w-full bg-border/50" />

                <ProfileSection label="Professional Journey">
                  {member.journey}
                </ProfileSection>

                <div className="h-px w-full bg-border/50" />

                <ProfileSection label="Philosophy & Mindset">
                  {member.philosophy}
                </ProfileSection>

                <div className="h-px w-full bg-border/50" />

                <ProfileSection label="Vision">
                  {member.vision}
                </ProfileSection>
              </div>

              {/* Bottom breathing room */}
              <div className="mt-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
