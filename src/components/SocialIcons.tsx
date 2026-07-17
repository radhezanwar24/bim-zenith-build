import { Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";

const socials = [
  {
    href: "https://www.linkedin.com/company/infinitybim/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/infinity.bim",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@mjbimexperts",
    label: "YouTube",
    Icon: Youtube,
  },
  {
    href: "https://www.whatsapp.com/channel/0029VbBxLBs35fLseKLrUf0e",
    label: "WhatsApp",
    Icon: MessageCircle,
  },
] as const;

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Infinity BIM on ${label}`}
            className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:bg-navy hover:text-primary-foreground hover:shadow-[0_8px_20px_-8px_var(--royal)]"
          >
            <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
