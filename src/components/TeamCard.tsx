import type { Member } from "@/lib/team";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type TeamCardProps = {
  member: Member;
  variant?: "compact" | "expanded";
  layoutId?: string;
  onToggle: () => void;
  onClose: () => void;
};

const premiumEase = [0.16, 1, 0.3, 1] as const;

function QualificationLines({ credentials }: { credentials: string }) {
  return (
    <div className="mt-3 space-y-1.5 text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
      {credentials.split("|").map((item) => (
        <p key={item.trim()}>{item.trim()}</p>
      ))}
    </div>
  );
}

export function TeamCard({
  member,
  variant = "compact",
  layoutId,
  onToggle,
  onClose,
}: TeamCardProps) {
  const expanded = variant === "expanded";
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (image.complete && image.naturalWidth > 0) {
      setImageReady(true);
    }
  }, [member.photo]);

  return (
    <motion.article
      layout
      layoutId={layoutId}
      transition={{ duration: 1.05, ease: premiumEase }}
      className={`group relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] transition-colors duration-500 hover:border-royal/35 hover:shadow-[var(--shadow-elevated)] ${
        expanded
          ? "grid min-h-[32rem] grid-cols-1 md:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]"
          : "flex h-[34rem] flex-col"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${member.name}'s profile details`}
        className={`relative block overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 ${
          expanded ? "min-h-[24rem] md:h-full" : "h-72 cursor-pointer lg:h-80"
        }`}
      >
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: imageReady ? 0 : 1 }}
          transition={{ duration: 0.45, ease: premiumEase }}
          className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.96_0.005_240),oklch(0.985_0.003_240),oklch(0.94_0.03_240))] bg-[length:220%_100%]"
        />
        <motion.img
          ref={imageRef}
          layoutId={layoutId ? `${layoutId}-photo` : undefined}
          src={member.photo}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageReady(true)}
          className="h-full w-full object-contain"
          initial={false}
          animate={{ opacity: imageReady ? 1 : 0, scale: imageReady ? 1 : 0.985 }}
          transition={{ duration: 0.85, ease: premiumEase }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/35 via-navy/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
      </button>

      <div className={`flex flex-1 flex-col ${expanded ? "justify-center p-8 md:p-10" : "p-6"}`}>
        <motion.div
          className="flex items-start justify-between gap-3"
          initial={expanded ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: expanded ? 0.18 : 0, ease: premiumEase }}
        >
          <div className="min-w-0">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block font-semibold text-navy transition-colors hover:text-royal ${
                expanded ? "text-3xl tracking-tight md:text-4xl" : "text-lg"
              }`}
              aria-label={`Open ${member.name}'s LinkedIn profile`}
            >
              {member.name}
            </a>
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
        </motion.div>

        <motion.div
          initial={expanded ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: expanded ? 0.32 : 0, ease: premiumEase }}
        >
          <QualificationLines credentials={member.credentials} />
        </motion.div>

        {expanded && (
          <>
            <motion.div
              className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.09,
                    delayChildren: 0.48,
                  },
                },
              }}
            >
              {member.bio.split(". ").map((line, index, lines) => (
                <motion.span
                  key={`${member.name}-bio-${index}`}
                  className="block"
                  variants={{
                    hidden: { opacity: 0, y: 12, filter: "blur(3px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.58, ease: premiumEase },
                    },
                  }}
                >
                  {line}
                  {index < lines.length - 1 ? "." : ""}
                </motion.span>
              ))}
            </motion.div>
            <motion.button
              type="button"
              onClick={onClose}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.82, ease: premiumEase }}
              className="mt-8 self-start rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-accent"
            >
              Close profile
            </motion.button>
          </>
        )}
      </div>
    </motion.article>
  );
}
