import swRevit from "@/assets/sw-revit.png";
import swAutocad from "@/assets/sw-autocad.png";
import swNavisworks from "@/assets/sw-navisworks.jpg";
import swBim360 from "@/assets/sw-bim360.jpg";
import swDocs from "@/assets/sw-docs.png";
import swCivil3d from "@/assets/sw-civil3d.png";
import swEnscape from "@/assets/sw-enscape.png";
import swTekla from "@/assets/sw-tekla.png";
import swStaadpro from "@/assets/sw-staadpro.jpg";
import swBluebeam from "@/assets/sw-bluebeam.jpg";
import swDynamo from "@/assets/sw-dynamo.png";
import { motion } from "framer-motion";

type Software = {
  name: string;
  logo?: string;
  slug?: string;
  color?: string;
  short?: string;
};

const items: Software[] = [
  { name: "AutoCAD", logo: swAutocad },
  { name: "Autodesk Revit", logo: swRevit },
  { name: "Autodesk Navisworks", logo: swNavisworks },
  { name: "Tekla Structures", logo: swTekla },
  { name: "BIM 360", logo: swBim360 },
  { name: "Autodesk Construction Cloud (ACC)", logo: swDocs },
  { name: "Civil 3D", logo: swCivil3d },
  { name: "Dynamo", logo: swDynamo },
  { name: "Enscape", logo: swEnscape },
  { name: "STAAD.Pro", logo: swStaadpro },
  { name: "Bluebeam", logo: swBluebeam },
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function SoftwareGrid() {
  return (
    <ul
      role="list"
      className="mt-10 sm:mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {items.map((s) => (
        <motion.li
          key={s.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={
            s.name === "Bluebeam"
              ? "col-span-2 mx-auto w-full max-w-[18rem] sm:col-span-1 sm:max-w-none lg:col-start-3"
              : undefined
          }
        >
          <div
            className="group relative flex h-full min-h-[110px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[var(--shadow-elevated)]"
            title={s.name}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] scale-x-0 transform bg-gradient-to-r from-royal via-sky to-royal transition-transform duration-500 group-hover:scale-x-100"
            />

            {s.logo ? (
              <img
                src={s.logo}
                alt={`${s.name} logo`}
                loading="lazy"
                className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            ) : s.slug ? (
              <img
                src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                alt={`${s.name} logo`}
                loading="lazy"
                width={36}
                height={36}
                className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg text-[13px] font-bold tracking-tight text-white shadow-sm transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: s.color ? `#${s.color}` : "#0696D7" }}
              >
                {initials(s.name)}
              </span>
            )}

            <span className="text-xs font-medium leading-tight text-navy sm:text-sm">
              {s.short ?? s.name}
            </span>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
