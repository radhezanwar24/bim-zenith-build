import { motion } from "framer-motion";
import { homepageServices } from "@/lib/serviceShowcase";

export function ServicesGrid() {
  return (
    <ul role="list" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {homepageServices.map(({ icon: Icon, title, desc, graphic, focus }, i) => (
        <motion.li
          key={title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-colors duration-500 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-sky/20 to-royal/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            <img
              src={graphic}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: focus }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
          </div>
          <div className="relative p-6">
            <span className="-mt-12 grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-gradient-to-br from-royal to-navy text-primary-foreground shadow-sm">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
