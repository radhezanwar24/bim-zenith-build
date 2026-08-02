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
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-5 sm:w-5" aria-hidden>
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
    <div className="mt-3 space-y-1 text-[0.6rem] uppercase leading-relaxed tracking-[0.08em] text-muted-foreground sm:space-y-1.5 sm:text-[0.68rem] sm:tracking-[0.13em]">
      {credentials.split("|").map((item) => (
        <p key={item.trim()}>{item.trim()}</p>
      ))}
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
  const expandedObjectPosition = member.expandedObjectPosition ?? compactObjectPosition;
  const imageScale = isWide ? (member.expandedScale ?? 1) : (member.compactScale ?? 1.08);

  useEffect(() => {
    setImageReady(false);
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setImageReady(true);
    }
  }, [member.photo]);

  return (
    <motion.article
      layout
      transition={{ duration: 0.45, ease: premiumEase }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)] ${
        isWide
          ? "mx-auto grid w-full max-w-5xl grid-cols-1 md:grid-cols-[minmax(14rem,0.8fr)_minmax(0,1.2fr)]"
          : "flex h-full flex-col"
      }`}
    >
      {expanded && (
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${member.name}'s profile details`}
          className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/90 text-navy shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-accent"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${member.name}'s profile details`}
        className={`relative block overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 ${
          isWide
            ? "mx-auto aspect-[4/5] w-full max-w-[18rem] bg-transparent sm:max-w-[21rem] md:h-full md:max-w-none md:min-h-[22rem]"
            : "aspect-[4/5] w-full shrink-0 bg-muted"
        }`}
      >
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: imageReady ? 0 : 1 }}
          transition={{ duration: 0.35, ease: premiumEase }}
          className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.96_0.005_240),oklch(0.985_0.003_240),oklch(0.94_0.03_240))] bg-[length:220%_100%]"
        />
        {isWide ? (
          <motion.img
            ref={imageRef}
            src={member.photo}
            alt={`Portrait of ${member.name}, ${member.role}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageReady(true)}
            className="block h-full w-full object-cover"
            style={{
              objectPosition: expandedObjectPosition,
              transform: `scale(${imageScale})`,
            }}
            initial={false}
            animate={{ opacity: imageReady ? 1 : 0 }}
            transition={{ duration: 0.45, ease: premiumEase }}
          />
        ) : (
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
        )}
      </button>

      <div
        className={`flex flex-1 flex-col ${isWide ? "justify-center p-5 sm:p-7 md:p-8" : "p-3 sm:p-5"}`}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="min-w-0">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block font-semibold text-navy transition-colors hover:text-royal ${
                isWide ? "text-2xl tracking-tight sm:text-3xl" : "text-sm leading-tight sm:text-lg"
              }`}
              aria-label={`Open ${member.name}'s LinkedIn profile`}
            >
              {member.name}
            </a>
            <p
              className={`mt-2 font-medium leading-snug text-royal ${
                isWide ? "text-sm sm:text-base" : "text-[0.72rem] sm:text-sm"
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
            className="grid h-7 w-7 shrink-0 place-items-center text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85 sm:h-9 sm:w-9"
          >
            <LinkedInMark />
          </a>
        </div>

        <QualificationLines credentials={member.credentials} />

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              key="bio"
              initial={{ opacity: 0, height: 0, y: 8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 6 }}
              transition={{ duration: 0.42, ease: premiumEase }}
              className={`overflow-hidden leading-relaxed text-muted-foreground ${
                isWide ? "mt-5 text-sm sm:text-base" : "mt-4 text-sm"
              }`}
            >
              {member.bio}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
