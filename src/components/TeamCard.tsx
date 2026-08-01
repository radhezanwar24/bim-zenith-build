import type { Member } from "@/lib/team";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import linkedinLogo from "@/assets/linkedin-logo.png";

type TeamCardProps = {
  member: Member;
  expanded: boolean;
  variant?: "compact" | "expanded";
  onToggle: () => void;
  onClose: () => void;
};

const premiumEase = [0.16, 1, 0.3, 1] as const;

function QualificationLines({ credentials }: { credentials: string }) {
  return (
    <div className="mt-3 space-y-1 text-[0.6rem] uppercase leading-relaxed tracking-[0.08em] sm:space-y-1.5 sm:text-[0.68rem] sm:tracking-[0.13em] text-muted-foreground">
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
        className={`relative block overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 ${
          isWide ? "h-56 sm:h-72 md:h-full md:min-h-[22rem]" : "aspect-[4/5] w-full shrink-0"
        }`}
      >
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: imageReady ? 0 : 1 }}
          transition={{ duration: 0.35, ease: premiumEase }}
          className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.96_0.005_240),oklch(0.985_0.003_240),oklch(0.94_0.03_240))] bg-[length:220%_100%]"
        />
        <motion.img
          ref={imageRef}
          src={member.photo}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageReady(true)}
          className={`block h-full w-full ${isWide ? "object-cover md:object-contain" : "object-cover"}`}
          style={
            isWide ? { objectPosition: "center 14%" } : { objectPosition: compactObjectPosition }
          }
          initial={false}
          animate={{ opacity: imageReady ? 1 : 0 }}
          transition={{ duration: 0.45, ease: premiumEase }}
        />
      </button>

      <div
        className={`flex flex-1 flex-col ${isWide ? "justify-center p-5 sm:p-7 md:p-8" : "p-4 sm:p-5"}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block font-semibold text-navy transition-colors hover:text-royal ${
                isWide ? "text-2xl tracking-tight sm:text-3xl" : "text-base sm:text-lg"
              }`}
              aria-label={`Open ${member.name}'s LinkedIn profile`}
            >
              {member.name}
            </a>
            <p
              className={`mt-2 font-medium leading-snug text-royal ${
                isWide ? "text-sm sm:text-base" : "text-[0.8rem] sm:text-sm"
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
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-accent"
          >
            <img src={linkedinLogo} alt="" className="h-5 w-5" aria-hidden />
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
